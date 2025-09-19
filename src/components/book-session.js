"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import Calendar from "react-calendar";
import dayjs from "dayjs";
import "react-calendar/dist/Calendar.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  BookingsSubmitAction,
  fincraBookingCheckoutData,
  fincraPayment,
  getAvailableBookings,
} from "@/api/authentication/auth";
import Cookies from "js-cookie";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import useFincraPayment from "@/lib/fincraCheckout";
import { Load } from "./loading";

const BookSession = ({
  closeModal,
  mentorId,
  image,
  type,
  bookingCurrency,
  price,
  successModal,
  mentor,
}) => {
  const [activeDates, setActiveDates] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTimeIndex, setSelectedTimeIndex] = useState(null);
  const [availableTimes, setAvailableTimes] = useState([]);
  const [availableSessions, setAvailableSessions] = useState([]);
  const [bookingData, setBookingData] = useState({});
  const [filteredData, setFilteredData] = useState([]);
  const [bookingValues, setBookingValues] = useState({});
  const [loading, setLoading] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [values, setValues] = useState({ suggestion: "" });
  const [buttonText, setButtonText] = useState("Book Session");
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [token, setToken] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [loader, setLoader] = useState(false);
  const [ref, setRef] = useState("");
  const { startPayment } = useFincraPayment();
  console.log(mentor);
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
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
    try {
      let details = Cookies.get("user_details");
      setToken(JSON.parse(details).token);
    } catch (err) {
      //err
    }
  }, []);

  useEffect(() => {
    setLoader(true);
    // console.log({ type });
    // console.log({price });
    if (type && type.toLowerCase() === "paid") {
      setButtonText("Proceed to payment");
    }

    getAvailableBookings(mentorId)
      .then((res) => {
        console.log(res);
        setAvailableSessions(res.data.data.allAvailableSessions);
        setBookingData(res.data.data);
        const dateData = res.data.data.allAvailableSessions.map(
          (session) => session.date
        );
        // const dateData = res.data.data.allAvailableSessions.map((session => session.date ))
        const uniqueDateData = [...new Set(dateData)];
        console.log(uniqueDateData);

        setActiveDates(uniqueDateData);
        setLoader(false);
      })
      .catch((err) => {
        toast.error(err.response?.data?.error || "An error occurred");
        console.log(err);
        closeModal();
      });
  }, [type]);
  console.log(bookingData);
  const handleDayClick = (date) => {
    const formattedDate = dayjs(date).format("YYYY-MM-DD");
    console.log("Clicked Date:", formattedDate);
    console.log("Active Dates:", activeDates);

    if (activeDates.includes(formattedDate)) {
      console.log("Valid Date Selected:", date);
      setSelectedDate(date);
      fetchAvailableTimes(date);
    } else {
      console.log("Invalid Date Selected");
      setAvailableTimes([]);
      setShowButton(false);
    }
  };
  const fetchAvailableTimes = (date) => {
    console.log("Selected Date:", date);

    const newDate = new Date(date);
    const year = newDate.getFullYear();
    const month = String(newDate.getMonth() + 1).padStart(2, "0");
    const day = String(newDate.getDate()).padStart(2, "0");
    const formattedDate = `${year}-${month}-${day}`;

    console.log("Formatted Date:", formattedDate);
    console.log("Available Sessions:", availableSessions);

    const filterArr = availableSessions.filter((item) => {
      console.log("Session Date:", item.date);
      return item.date === formattedDate;
    });

    const times = filterArr.map((value) => value.startTime);

    console.log("Filtered Times:", times);

    setFilteredData(filterArr);
    setAvailableTimes(times);
  };

  const tileClassName = ({ date, view }) => {
    if (view === "month") {
      const formattedDate = dayjs(date).format("YYYY-MM-DD");

      const isActive = activeDates.includes(formattedDate);
      const isSelected =
        selectedDate && dayjs(date).isSame(selectedDate, "date"); 

      if (isSelected) return "selected-date";
      if (isActive) return "highlighted-date";
    }

    return "";
  };

  const handleTimeSelected = (time, index) => {
    setSelectedTimeIndex(index);
    setShowButton(true);
    const data = filteredData[index];
    setBookingValues(data);

    // setBookingData(prev => ({ ...prev, time }));
  };
  const handleBookingSubmit = () => {
    const data = {
      bookingId: bookingValues?.bookingId,
      slotId: bookingValues?.slotId,
      userId: userId,
      suggestion: values.suggestion,
    };
    console.log(data);
    BookingsSubmitAction(data)
      .then((res) => {
        console.log(res);
        setLoading(false);
        setShowBookingModal(true);
        closeModal();
        successModal();
      })
      .catch((err) => {
        toast.error(err.response?.data?.error);
        setLoading(false);
      });
  };

  const handlePayment = async () => {
    try {
      const data = {
        bookingId: bookingValues?.bookingId,
        slotId: bookingValues?.slotId,
        suggestion: values.suggestion,
        currency: bookingCurrency,
      };
      console.log(data);
      let reference;
      fincraBookingCheckoutData(data, token)
        .then((res) => {
          console.log(res);
          reference = res.data?.data?.data?.reference;
          setLoading(false);
        })
        .catch((err) => {
          toast.error(err.response?.data?.error);
          setLoading(false);
        });
      // if (!reference) throw new Error("Missing payment reference from server");

      const result = await startPayment({
        price,
        currency: bookingCurrency,
        ref: reference,
        onSuccess: (data) => {
          setIsSuccess(true);
          const url = new URL(window.location.href);
          url.searchParams.set("ref", reference);
          window.history.replaceState({}, "", url.toString());
        },
        onClose: () => {
          toast.error("Transaction was not completed, window closed.");
        },
      });
      console.log("Resolved:", result);
    } catch (err) {
      console.error(err);
    }
  };
  const handleForeignPayment = () => {
    const data = {
      bookingId: bookingValues?.bookingId,
      slotId: bookingValues?.slotId,
      userId: userId,
      suggestion: values.suggestion,
      amount: price,
      currency: bookingCurrency
    };
    console.log(data);
    fincraPayment(data, token)
      .then((res) => {
        console.log(res);
        setLoading(false);
        // setShowBookingModal(true);
        const url = res.data.data.checkoutUrl
        window.location.href = url;
      })
      .catch((err) => {
        toast.error(err.response?.data?.error );
        setLoading(false);
      });
  };
  const handleclick = () => {
    setLoading(true);

    if (type && type.toLowerCase() === "paid" && bookingCurrency === "NGN") {
      handlePayment();
    } else if (type && type.toLowerCase() === "paid" && bookingCurrency !== "NGN") {
      handleForeignPayment();
    } else {
      handleBookingSubmit();
    }
  };
  return (
    <div>
      <ToastContainer />

      <div className="font-whyte ">
        <div
          className="bg-[#344054] opacity-[0.7] w-[100%] h-[100vh] fixed z-50 top-0 left-[0]"
          onClick={closeModal}
        ></div>

        {isSuccess ? (
          <div className="bg-[#fff] w-[447px] h-[291px]  md:max-w-full p-8 sm:p-6 pb-[277px] sm:pb-[41px] flex flex-col items-center text-center rounded-[8px] fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
            <Image src="/sucess.svg" width={57} height={57} alt="success" />
            <h3 className="font-medium  text-[24px] text-[#121927] leading-[11.71px] py-[16px]">
              Session Booked
            </h3>
            <p className="font-regular text-[16px] text-[#555555] leading-[24px] mb-[20px]">
              Your booking with {mentor?.mentor?.firstName}{" "}
              {mentor?.mentor?.lastName} was successful. A confirmation email
              has been sent to your inbox.
            </p>
            <button
              className="w-[76px] h-[44px] rounded-[8px] border-[1px] px-[20px] py-[12px] font-medium bg-[#1453FF] text-[14px] text-[#fff] leading-[19.6px] tracking-[2%] mx-auto"
              onClick={closeModal}
            >
              Done
            </button>
          </div>
        ) : (
          <div className="h-full bg-[#fff] w-full max-w-[629px] md:max-w-full p-8 sm:p-3 pb-[277px] sm:pb-[41px] overflow-y-auto flex flex-col fixed top-0 right-0 z-50">
            <div className="pb-[40px] flex gap-[16px] items-center">
              <div
                className="border-[1px] border-[#EAEAEA] rounded-[8px] p-[10px] cursor-pointer"
                onClick={closeModal}
              >
                <IoIosArrowRoundBack className="text-[16px] text-[#292D32]" />
              </div>
              <h1 className="font-medium text-[18px] leading-[27px] tracking-[3%] text-[#121927]">
                Book Session
              </h1>
            </div>
            {loader ? (
              <Load />
            ) : (
              <div>
                <Image
                  src={image || "/dummyPic.svg"}
                  width={152}
                  height={152}
                  alt="profile photo"
                  className="object-cover rounded-[50%] w-[152px] sm:w-[112px] h-[152px] sm:h-[112px]"
                />
                <h2 className="font-medium text-[24px] text-[#101828] leading-[25.62px]  pt-[24px] pb-[8px]">
                  {bookingData.title || "Let’s talk about negotiations"}
                </h2>
                <p className="font-regular text-[16px] leading-[20.8px] text-[#7D7D7D] pb-[24px]">
                  {bookingData.description ||
                    "The booking description goes here in full with lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."}
                </p>
                <div className="flex justify-between items-center">
                  <div className="w-[30%] xxm:w-fit">
                    <h3 className="font-medium text-[16px] text-[#4F4F4F] leading-[19.2px] mb-[8px]">
                      Location
                    </h3>
                    <p className="font-regular text-[16px] text-[#7D7D7D] leading-[19.2px]">
                      Google Meet
                    </p>
                  </div>
                  <div className="w-[30%] xxm:w-fit">
                    <h3 className="font-medium text-[16px] text-[#4F4F4F] leading-[19.2px] mb-[8px]">
                      Duration
                    </h3>
                    <p className="font-regular text-[16px] text-[#7D7D7D] leading-[19.2px]">
                      {bookingData.sessionDuration} mins
                    </p>
                  </div>
                  <div className="w-[30%] xxm:w-fit">
                    <h3 className="font-medium text-[16px] text-[#4F4F4F] leading-[19.2px] mb-[8px]">
                      Timezone
                    </h3>
                    <p className="font-regular text-[16px] text-[#7D7D7D] leading-[19.2px]">
                      {bookingData.timezone}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col  w-[100%] mt-[24px]">
                  <Calendar
                    onClickDay={handleDayClick}
                    tileClassName={tileClassName}
                    value={selectedDate}
                    className="!w-full max-w-xs mx-auto"
                    prevLabel={<MdKeyboardArrowLeft className="nav-icon" />}
                    nextLabel={<MdKeyboardArrowRight className="nav-icon" />}
                  />
                  {selectedDate && (
                    <>
                      <div className="mt-6 grid grid-cols-4 gap-4">
                        {availableTimes.map((time, index) => {
                          console.log("Rendering Time:", time);
                          return (
                            <div
                              key={index}
                              style={{
                                background:
                                  selectedTimeIndex === index ? "#1453FF" : "",
                                color:
                                  selectedTimeIndex === index ? "#fff" : "",
                              }}
                              onClick={() => handleTimeSelected(time, index)}
                              className="bg-[#fff] text-[16px] xm:text-[12px] text-[#7D7D7D] hover:text-[#fff] text-center leading-[16px] py-[18.5px] px-6 sm:px-[14px] xm:px-[8px] sxm:px-[5px] border-[1px] border-[#D0D5DD] rounded-[8px] cursor-pointer hover:bg-[#1453FF]"
                            >
                              {time}
                            </div>
                          );
                        })}
                      </div>
                      <div className="w-[100%] mt-[40px]">
                        <h4 className="text-[14px] leading-[17px] font-[400] text-[#4F4F4F] mb-[8px] sm:mt-[12px]">
                          Do you have anything you'd like to share ahead of our
                          session ?{" "}
                          <span className="text-[#7D7D7D]">(Optional)</span>
                        </h4>
                        <textarea
                          type="text"
                          placeholder="Type here"
                          name="suggestion"
                          value={values.suggestion}
                          onChange={handleChange}
                          className="min-h-[70px] w-[100%] rounded-lg border text-[14px] leading-[17px] font-[400] font-inter border-[#EAEAEA] p-[16px] disabled:cursor-not-allowed"
                        />
                      </div>
                    </>
                  )}
                </div>
                {showButton && (
                  <button
                    // onClick={handleBookingSubmit}
                    onClick={handleclick}
                    className="font-medium w-[100%] flex justify-center items-center gap-1 text-[14px] leading-[19.6px] tracking-[2%] text-[#fff] bg-[#1453FF] border-[1px] border-[#1453FF] py-[12px] px-[20px] rounded-[8px] sm:flex mb-[16px] mt-[24px]"
                  >
                    {loading ? (
                      <Image
                        src="/loader.gif"
                        width={16}
                        height={16}
                        alt="loader"
                      />
                    ) : (
                      ""
                    )}
                    {buttonText}
                  </button>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default BookSession;
