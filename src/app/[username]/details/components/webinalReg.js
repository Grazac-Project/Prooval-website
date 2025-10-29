import {
  fincraPayment,
  fincraWebinarCheckoutData,
  getSingleWebinar,
  webinarReg,
} from "@/api/authentication/auth";
import { Load } from "@/components/loading";
import useFincraPayment from "@/lib/fincraCheckout";
import { getCurrencySymbol } from "@/Utils/currency-formatter";
import { formatPrice } from "@/Utils/price-formater";
import { MailOutline } from "@mui/icons-material";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { FaCalendarDays } from "react-icons/fa6";
import { IoIosArrowRoundBack } from "react-icons/io";
import { toast, ToastContainer } from "react-toastify";

function useCountdown(targetDate) {
  const target = useMemo(() => new Date(targetDate).getTime(), [targetDate]);
  const [timeLeft, setTimeLeft] = useState(() =>
    Math.max(0, target - Date.now())
  );

  useEffect(() => {
    const id = setInterval(() => {
      setTimeLeft(Math.max(0, target - Date.now()));
    }, 1000);
    return () => clearInterval(id);
  }, [target]);

  const totalSeconds = Math.floor(timeLeft / 1000);
  const days = Math.floor(totalSeconds / (24 * 3600));
  const hours = Math.floor((totalSeconds % (24 * 3600)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return { days, hours, minutes, seconds, finished: totalSeconds === 0 };
}

const WebinarModal = ({
  webinarId,
  token,

  onClick,
}) => {
  const [webData, setWebData] = useState({});
  const [singleWebData, setSingleWebData] = useState({});
  const [loading, setLoading] = useState(false);
  const [submit, setSubmit] = useState(false);
  const { startPayment } = useFincraPayment();
  const [success, setSuccess] = useState(false);
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [error, setError] = useState(false);

  let userId;
  let userFirstName;
  let userLastName;
  let userEmail;

  try {
    let details = Cookies.get("user_details");
    // console.log(details);
    userId = JSON.parse(details).id;
    userFirstName = JSON.parse(details).name;
    userLastName = JSON.parse(details).lastName;
    userEmail = JSON.parse(details).email;
  } catch (err) {
    //err
  }
  useEffect(() => {
    setLoading(true);
    getSingleWebinar(webinarId, token)
      .then((res) => {
        setWebData(res.data?.data?.webinar);
        // console.log(res.data?.data?.webinar);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        // console.log(err.response?.data?.message);
      });
  }, [webinarId, token]);

  useEffect(() => {
    const prevHtmlOverflow = document.documentElement.style.overflow;
    const prevBodyOverflow = document.body.style.overflow;

    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    return () => {
      document.documentElement.style.overflow = prevHtmlOverflow;
      document.body.style.overflow = prevBodyOverflow;
    };
  }, []);

  const startsAt = webData?.startTime;

  const { days, hours, minutes, seconds, finished } = useCountdown(startsAt);
  const handleRegister = async (e) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);

    const payload = {
      firstName: fd.get("firstName"),
      lastName: fd.get("lastName"),
      email: fd.get("email"),
    };

    try {
      setSubmit(true);
      const res = await webinarReg(webinarId, payload, token);

      if (res) {
        // console.log("Registration success:", res.data?.data?.webinar);
        setSuccess(true);
        toast.success("Registration successful!");
        e.target.reset(); // clear form
      }
    } catch (err) {
      // console.error("Registration error:", err.response?.data?.message);
      toast.error(
        err.response?.data?.message || "Something went wrong. Please try again."
      );
    } finally {
      setSubmit(false);
    }
  };
  const handlePayment = async (e) => {
    e.preventDefault();
    try {
      const data = {
        webinarId: webData._id,
        firstName: formValues.firstName,
        lastName: formValues.lastName,
        email: formValues.email,
        currency: webData.currency,
      };
      setSubmit(true);
      let reference;
      try {
        const res = await fincraWebinarCheckoutData(data, token);
        reference = res.data?.data?.payment?.reference;
      } catch (err) {
        console.log(err);

        toast.error(
          err.response?.data?.message || "An error occurred. Please try again."
        );
        setSubmit(false);
        return;
      }
      const fullname = `${formValues.firstName} ${formValues.lastName}`;
      const result = await startPayment({
        price: webData.amount,
        currency: webData.currency,
        ref: reference,
        nameProp: fullname,
        emailProp: formValues.email,
        onSuccess: (data) => {
          setSuccess(true);
          const url = new URL(window.location.href);
          url.searchParams.set("ref", reference);
          window.history.replaceState({}, "", url.toString());
        },
        onClose: () => {
          toast.error("Transaction was not completed, window closed.");
        },
      });
    } catch (err) {
      // console.error(err);
      setSubmit(false);
    }
  };
  const handleForeignPayment = async (e) => {
    e.preventDefault();
    const data = {
      webinarId: webData._id,
      firstName: formValues?.firstName,
      lastName: formValues?.lastName,
      email: formValues?.email,
      currency: webData?.currency,
    };
    fincraWebinarCheckoutData(data, token)
      .then((res) => {
        setSubmit(false);
        // setShowBookingModal(true);
        const url = res.data.data.redirectUrl;
        window.location.href = url;
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response?.data?.message || "Something went wrong");
        setSubmit(false);
      });
  };
  const handleclick = (e) => {
    e.preventDefault();
    setSubmit(true);

    if (
      webData?.type &&
      webData?.type.toLowerCase() === "paid" &&
      webData?.currency &&
      webData?.currency.toUpperCase() === "NGN"
    ) {
      handlePayment(e);
    } else if (
      webData?.type &&
      webData?.type.toLowerCase() === "paid" &&
      webData?.currency &&
      webData?.currency.toUpperCase() !== "NGN"
    ) {
      handleForeignPayment(e);
    } else {
      handleRegister(e);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <div
        className="bg-[#344054] opacity-70 w-[100%] h-full fixed z-50 top-0 left-[0] cursor-pointer"
        onClick={onClick}
      ></div>
      <ToastContainer />

      {success ? (
        <div className="bg-[#fff] w-[447px] h-[291px]  md:max-w-full p-8  flex flex-col items-center text-center rounded-[8px]  fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 overflow-y-auto">
          <Image src="/sucess.svg" width={57} height={57} alt="success" />
          <h3 className="font-medium  text-[24px] text-[#121927] leading-[11.71px] py-[16px]">
            Registered Successfully
          </h3>
          <p className="font-regular text-[16px] text-[#555555] leading-[24px] mb-[20px]">
            You have successfully registered for{" "}
            <span className="font-semibold">{webData?.title}</span> design
            webinar
          </p>
          <button
            className="min-w-[76px] h-[44px] rounded-[8px] border-[1px] px-[20px] py-[12px] font-medium bg-[#1453FF] text-[14px] text-[#fff] leading-[19.6px] tracking-[2%] mx-auto"
            onClick={onClick}
          >
            Done
          </button>
        </div>
      ) : (
        <div className="max-w-[52rem] h-fit max-h-[90%] mx-auto mt-10 px-14 py-20 sm:px-6 space-y-8 bg-[white] rounded-2xl fixed inset-0 z-50 overflow-y-auto ">
          <div className=" flex items-center text-sm leading-[150%] font-medium text-[#292D32] ">
            <button
              className="border-[1px] border-[#EAEAEA] rounded-[8px] p-[10px] cursor-pointer"
              onClick={onClick}
            >
              <IoIosArrowRoundBack className="text-[16px] text-[#292D32]" />
            </button>
            <span className="text-2xl font-semibold ml-4">Back</span>
          </div>

          {/* Digital Products and webinar */}
          {loading ? (
            <Load />
          ) : (
            <div className="flex sm:flex-wrap gap-[35px] md:gap-4 ">
              <div className="mt-8 lg:mt-0 w-[308px] lg:w-[45%] md:w-full">
                <div className="overflow-hidden rounded-2xl shadow-sm">
                  <img
                    src={webData?.thumbnail}
                    alt="Event poster"
                    className="h-[480px] w-full object-cover"
                  />
                </div>
              </div>

              {/* Right content */}
              <div className="flex flex-col gap-6 w-[55%] md:w-full">
                <div className="pt-10 lg:pt-2 ">
                  <h3 className="mb-2 font-semibold leading-[120%] text-[28px]  text-[#000000]">
                    {webData?.title}
                  </h3>
                  <p className="mt-3 text-[#787878] text-[14px]">
                    {webData?.description}
                  </p>
                </div>

                {/* Amount */}
                <div>
                  <span className="inline-flex items-center gap-2 rounded-lg border border-[#EAEAEA] bg-[#FAFAFA] px-3 py-2 ">
                    <span className=" bg-white px-2 py-1 text-xs font-medium text-[#333333]">
                      Amount:
                    </span>
                    <span className="text-[#333333] text-base">
                      {webData?.type !== "free"
                        ? `${getCurrencySymbol(webData?.currency)}${formatPrice(
                            webData?.amount
                          )}`
                        : webData?.type}
                    </span>
                  </span>
                </div>

                {/* Date & Time + Countdown */}
                <div className="flex md:flex-wrap gap-6">
                  {/* Date & Time */}
                  <div className=" ">
                    <div className="text-xs font-medium text-[#333333]">
                      Date & Time
                    </div>
                    <div className="mt-3 flex items-center gap-4 p-2 rounded-lg bg-[#FAFAFA]">
                      {/* Badge */}

                      <div className=" rounded-[6px] px-[6px] py-1 w-[38px] h-[43px] shadow-md">
                        <div className=" bg-blue-100  text-center text-[10px] font-bold  text-primary">
                          {webData?.date
                            ? new Date(webData?.date).toLocaleDateString(
                                "en-US",
                                {
                                  month: "short",
                                }
                              )
                            : ""}
                        </div>
                        <div className=" pt-1 text-center text-[14px] font-semibold leading-none text-[#000000]">
                          {webData?.date
                            ? new Date(webData?.date).toLocaleDateString(
                                "en-US",
                                {
                                  day: "2-digit",
                                }
                              )
                            : ""}
                        </div>
                      </div>
                      <div className="flex flex-col text-[#292D32] gap-1  text-[14px] leading-[100%] -tracking-[0.5] pr-3">
                        <p className="font-normal">
                          {webData?.date
                            ? new Date(webData?.startTime).toLocaleDateString(
                                "en-US",
                                {
                                  weekday: "long",
                                }
                              )
                            : ""}
                        </p>
                        <p className="font-normal">
                          {" "}
                          {webData?.date
                            ? new Date(webData?.startTime).toLocaleTimeString(
                                "en-US",
                                {
                                  hour: "2-digit",
                                  minute: "2-digit",
                                  hour12: true,
                                }
                              )
                            : ""}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Starts In */}
                  <div className="">
                    <div className="text-xs font-medium text-[#333333]">
                      Starts In
                    </div>
                    {finished ? (
                      <div className="mt-3 text-green-700 font-semibold">
                        Registration is closed!
                      </div>
                    ) : (
                      <div className="mt-3 flex items-center gap-[9px]">
                        <TimeBox value={days} label="DAYS" />
                        <span>:</span>
                        <TimeBox value={hours} label="HRS" />
                        <span>:</span>
                        {/* <TimeBox value={minutes} label="MINS" /> */}
                        <TimeBox value={seconds} label="SECS" />
                      </div>
                    )}
                  </div>
                </div>

                {/* Register form */}
                <form
                  onSubmit={handleclick}
                  className="mt-2 rounded-lg border border-[#EAEAEA] p-6 bg-[#FAFAFA] shadow-sm w-full relative"
                >
                  {finished && (
                    <div className="bg-[#ffff] cursor-not-allowed bg-gradient-to-br from-white/30 to-white/50 backdrop-blur-sm opacity-[0.7] w-[100%] h-full absolute z-50 top-0 left-[0]"></div>
                  )}
                  <div className="grid sm:grid-cols-1 grid-cols-2 gap-4">
                    <LabeledInput
                      name="firstName"
                      placeholder="Enter full name"
                      value={formValues.firstName}
                      onChange={handleInputChange}
                    />
                    <LabeledInput
                      name="lastName"
                      placeholder="Enter last name"
                      value={formValues.lastName}
                      onChange={handleInputChange}
                    />
                    <LabeledInput
                      name="email"
                      type="email"
                      placeholder="Enter email address"
                      value={formValues.email}
                      onChange={handleInputChange}
                    />
                  </div>
                  <button
                    disabled={
                      loading ||
                      !formValues.firstName ||
                      !formValues.lastName ||
                      !formValues.email ||
                      submit
                    }
                    type="submit"
                    className="mt-4 md-w-full w-auto rounded-lg bg-primary px-4 py-1.5 text-[white] font-500 text-sm leading-5 cursor-pointer shadow hover:bg-[#0d36cc] focus:outline-none"
                  >
                    {submit ? "Registering..." : "Register"}
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default WebinarModal;

function TimeBox({ value, label }) {
  const padded = String(value).padStart(2, "0");
  return (
    <div className="flex flex-col items-center justify-center rounded-lg bg-[#DCE5FF] p-[6px] py-3 w-[53px] shadow-sm">
      <div className="text-[16px]  font-semibold tabular-nums text-[#292D32] leading-[19.51px]">
        {padded}
      </div>
      <div className="mt-1 text-[8px] font-semibold leading-[100%] tracking-[2.44px] text-[#333333]">
        {label}
      </div>
    </div>
  );
}

function LabeledInput({
  name,
  type = "text",
  placeholder,
  icon,
  value,
  onChange,
}) {
  return (
    <label className="group relative flex items-center gap-2 rounded-lg  border border-[#EAEAEA]  bg-[white]  text-[#828282] ">
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full h-full  border-0 bg-transparent p-4 text-sm placeholder:text-slate-400 "
        required
        value={value}
        onChange={onChange}
      />
    </label>
  );
}
