import { getSingleWebinar, webinarReg } from "@/api/authentication/auth";
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
  const [success, setSuccess] = useState(false);
  useEffect(() => {
    setLoading(true);
    getSingleWebinar(webinarId, token)
      .then((res) => {
        setWebData(res.data?.data?.webinar);
        console.log(res.data?.data?.webinar);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err.response?.data?.message);
      });
  }, [webinarId, token]);
  const startsAt = webData?.startTime;

  const { days, hours, minutes, seconds, finished } = useCountdown(startsAt);
  const handleRegister = async (e) => {
    e.preventDefault();

    const fd = new FormData(e.currentTarget);
    const payload = {
      fullName: fd.get("fullname"),
      email: fd.get("email"),
    };

    try {
      setLoading(true);

      const res = await webinarReg(webinarId, payload, token);

      if (res.status === 200) {
        setSuccess(true);
      }

      console.log("Registration success:", res.data?.data?.webinar);

      toast.success("Registration successful!");
      e.target.reset(); // clear form
    } catch (err) {
      console.error("Registration error:", err.response?.data?.message);
      toast.error(
        err.response?.data?.message || "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div
        className="bg-[#344054] opacity-[0.7] w-[100%] h-full fixed z-50 top-0 left-[0]"
        onClick={onClick}
      ></div>
      <ToastContainer />
      
      {success ? (
      <div className="bg-[#fff] w-[447px] h-[291px]  md:max-w-full p-8 sm:p-6 pb-[277px] sm:pb-[41px] flex flex-col items-center text-center rounded-[8px]">
        <Image src="/sucess.svg" width={57} height={57} alt="success" />
        <h3 className="font-medium  text-[24px] text-[#121927] leading-[11.71px] py-[16px]">
          Registered Successfully
        </h3>
        <p className="font-regular text-[16px] text-[#555555] leading-[24px] mb-[20px]">
          You have successfully registered for <span className="bold">{webData?.title}</span> design webinar
        </p>
        <button
          className="min-w-[76px] h-[44px] rounded-[8px] border-[1px] px-[20px] py-[12px] font-medium bg-[#1453FF] text-[14px] text-[#fff] leading-[19.6px] tracking-[2%] mx-auto"
          onClick={onClick}
        >
          See Bookings
        </button>
      </div>
      ): (
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

        {/* Digital Products */}
        <div className="flex sm:flex-wrap gap-[35px] md:gap-0 ">
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
                    ? `${webData?.currency === "NGN" ? "₦" : "$"}${formatPrice(
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
                        ? new Date(webData?.date).toLocaleDateString("en-US", {
                            month: "short",
                          })
                        : ""}
                    </div>
                    <div className=" pt-1 text-center text-[14px] font-semibold leading-none text-[#000000]">
                      {webData?.date
                        ? new Date(webData?.date).toLocaleDateString("en-US", {
                            day: "2-digit",
                          })
                        : ""}
                    </div>
                  </div>
                  <div className="flex flex-col text-[#292D32] gap-1  text-[14px] leading-[100%] -tracking-[0.5] pr-3">
                    <p className="font-normal">
                      {webData?.date
                        ? new Date(webData?.startTime).toLocaleDateString("en-US", {
                            weekday: "long",
                          })
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
                    We're live now!
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
              onSubmit={handleRegister}
              className="mt-2 rounded-lg border border-[#EAEAEA] p-6 bg-[#FAFAFA] shadow-sm w-full"
            >
              <div className="grid sm:grid-cols-1 grid-cols-2 gap-4">
                <LabeledInput name="fullname" placeholder="Enter fullname" />
                <LabeledInput
                  name="email"
                  type="email"
                  placeholder="Enter address"
                />
              </div>
              <button
                disabled={loading}
                type="submit"
                className="mt-4 md-w-full w-auto rounded-lg bg-primary px-4 py-1.5 text-[white] font-500 text-sm leading-5  shadow hover:bg-[#0d36cc] focus:outline-none"
              >
                Register
              </button>
            </form>
          </div>
        </div>
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

function LabeledInput({ name, type = "text", placeholder, icon }) {
  return (
    <label className="group relative flex items-center gap-2 rounded-lg  border border-[#EAEAEA]  bg-[white]  text-[#828282] ">
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full h-full  border-0 bg-transparent p-4 text-sm placeholder:text-slate-400 "
        required
      />
    </label>
  );
}
