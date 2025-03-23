// import Image from 'next/image'
// import React, { useEffect, useState } from 'react'
// import { IoIosArrowRoundBack } from 'react-icons/io'
// import Calendar from 'react-calendar';
// import dayjs from 'dayjs';
// // import useActiveDays from './useActiveDays';
// import 'react-calendar/dist/Calendar.css';
// import { getAvailableBookings } from '@/api/authentication/auth';

// const BookSession = ({closeModal, mentorId}) => {
//     // const activeDays = useActiveDays();
//     const [activeDays, setActiveDays] = useState(['Monday', 'Tuesday', 'Saturday']);
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [selectedTimeIndex, setSelectedTimeIndex] = useState(null);
//   const [availableTimes, setAvailableTimes] = useState([]);
//   const [bookingData, setBookingData] = useState({});
//   const [loading, setLoading] = useState(false)
//   const [showButton, setShowButton] = useState(false)

//   useEffect(() => {
//     getAvailableBookings(mentorId)
//     .then(res => {
//       console.log(res);
//     })
//     .catch(err => {
//       console.log(err);
//     })
//   }, [])
//   const handleDayClick = (date) => {
//     const dayName = dayjs(date).format('dddd'); // Get day name e.g. 'Wednesday'
//     if (activeDays.includes(dayName)) {
//       setSelectedDate(date);
//       fetchAvailableTimes(date);  // Fetch available times when a valid date is selected
//     } else {
//         setAvailableTimes([])
//         setShowButton(false)
//     }
//   };

//   const fetchAvailableTimes = (date) => {
//     // Mocked time slots
//     const times = [
//       '5:30 AM', '5:45 AM', '6:00 AM', '6:15 AM',
//       '6:30 AM', '6:45 AM', '7:00 PM', '7:30 PM'
//     ];
//     setAvailableTimes(times);
//   };

//   function convertToBrowserTimeZone(dateString) {
//     // Create a new Date object from the provided date string
//     const date = new Date(dateString);

//     // Convert the date to the browser's local time zone
//     const localDateString = date.toLocaleString('en-US', {
//       timeZoneName: 'short' // Optional: Include the time zone abbreviation in the output
//     });

//     return localDateString;
//   }

//   // Example usage
//   const originalDate = 'Mon Aug 26 2024 00:00:00 GMT+0100 (West Africa Standard Time)';
//   const convertedDate = convertToBrowserTimeZone(originalDate);

//   console.log(convertedDate); // Outputs the date and time in the browser's local time zone

// const tileClassName = ({ date, view }) => {
//     console.log('date,', date);
//     console.log('view', view);

//     if (view === 'month') {
//       const dayName = dayjs(date).format('dddd'); // Get the day name
//       const dayOfWeek = dayjs(date).day(); // Get the day of the week (0: Sunday, 6: Saturday)

//      if (activeDays.includes(dayName)) {
//         return 'bg-[#1453FF] text-[#101828] rounded-[8px] w-[45px] h-[45px] border-[1px]'; // Active days styling
//       } else if (dayOfWeek === 0 || dayOfWeek === 6) { // Check if it's Saturday or Sunday
//         return 'text-[#101828]'; // Faded styling for weekends if not active
//       } else {
//         return 'text-[#7D7D7D]'; // Faded styling for non-active days
//       }
//     }
//     return '';
//   };

//   const handleTimeSelected = (time, index) => {
//     setSelectedTimeIndex(index)
//     setShowButton(true)
//     setBookingData(prev => {return {...prev, time: time}})
//     console.log('time', time);
//     console.log('index', index);

//   }
//   console.log(selectedDate);
//   console.log('bookingdata', bookingData);

//   return (
//     <div>
//         <div className='font-whyte'>
//             <div
//               className="bg-[#344054B2] opacity-[0.7] w-[100%] h-full fixed top-0 left-[0]"
//               onClick={closeModal}
//             ></div>
//             <div className="h-full bg-[#fff] w-full max-w-[629px] md:max-w-full p-8 sm:p-3 pb-[277px] sm:pb-[41px] overflow-y-auto flex flex-col fixed top-0 right-0 z-50">
//               <div className="pb-[40px] flex gap-[16px] items-center">
//                 <div
//                   className="border-[1px] border-[#EAEAEA] rounded-[8px] p-[10px] cursor-pointer"
//                   onClick={closeModal}
//                 >
//                   <IoIosArrowRoundBack className="text-[16px] text-[#292D32]" />
//                 </div>
//                 <h1 className="font-medium text-[18px] leading-[27px] tracking-[3%] text-[#121927]">
//                   Book Session
//                 </h1>
//               </div>
//               <div>
//                 <Image
//                   src={'/Avatar.svg'}
//                   width={152}
//                   height={152}
//                   alt="profile photo"
//                   className="object-cover rounded-[50%] w-[152px] sm:w-[112px] h-[152px] sm:h-[112px]"
//                 />
//                 <h2 className="font-medium text-[24px] text-[#101828] leading-[25.62px] text-[#101828] pt-[24px] pb-[8px]">
//                   Book a session with me
//                 </h2>
//                 <p className="font-regular text-[16px] leading-[20.8px] text-[#7D7D7D] pb-[24px]">
//                   The booking description goes here in full with lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.
//                 </p>
//                 <div className='flex justify-between items-center'>
//                     <div className='w-[30%] xxm:w-fit'>
//                         <h3 className='font-medium text-[16px] text-[#4F4F4F] leading-[19.2px] mb-[8px]'>Location</h3>
//                         <p className='font-regular text-[16px] text-[#7D7D7D] leading-[19.2px]'>Google Meet</p>
//                     </div>
//                     <div className='w-[30%] xxm:w-fit'>
//                         <h3 className='font-medium text-[16px] text-[#4F4F4F] leading-[19.2px] mb-[8px]'>Duration</h3>
//                         <p className='font-regular text-[16px] text-[#7D7D7D] leading-[19.2px]'>15 min</p>
//                     </div>
//                     <div className='w-[30%] xxm:w-fit'>
//                         <h3 className='font-medium text-[16px] text-[#4F4F4F] leading-[19.2px] mb-[8px]'>Timezone</h3>
//                         <p className='font-regular text-[16px] text-[#7D7D7D] leading-[19.2px]'>Africa - Lagos</p>
//                     </div>
//                 </div>
//                 <div className="flex flex-col  w-[100%] mt-[24px]">
//                     <Calendar
//                         onClickDay={handleDayClick}
//                         tileClassName={tileClassName}
//                         value={selectedDate}
//                         className="w-full max-w-xs mx-auto"
//                     />
//                     {selectedDate && (
//                         <div className="mt-6 grid grid-cols-4 gap-4">
//                         {availableTimes.map((time, index) => (
//                             <div
//                             key={index}
//                             style={{background: selectedTimeIndex === index ?'#1453FF':'', color: selectedTimeIndex === index ?'#fff': ''}}
//                             onClick={() => handleTimeSelected(time, index)}
//                             className="bg-[#fff] text-[16px] xm:text-[12px] text-[#7D7D7D] hover:text-[#fff] text-center leading-[16px] py-[18.5px] px-6 sm:px-[14px] xm:px-[8px] sxm:px-[5px] border-[1px] border-[#D0D5DD] rounded-[8px] cursor-pointer hover:bg-[#1453FF]"
//                             >
//                             {time}
//                             </div>
//                         ))}
//                         </div>
//                     )}
//                 </div>
//                 {showButton && <button className='font-medium w-[100%] flex justify-center items-center text-[14px] leading-[19.6px] tracking-[2%] text-[#fff] bg-[#1453FF] border-[1px] border-[#1453FF] py-[12px] px-[20px] rounded-[8px] sm:flex mb-[16px] mt-[24px]' >{loading? <Image src='/loader.gif' width={16} height={16} alt='loader' /> :''} Book Session</button>}
//               </div>
//             </div>
//           </div>
//     </div>
//   )
// }

// export default BookSession

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
  getAvailableBookings,
} from "@/api/authentication/auth";
import Cookies from "js-cookie";

const BookSession = ({
  closeModal,
  mentorId,
  mentorImage,
  setShowBookingModal,
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

  let userId;
  try {
    let details = Cookies.get("user_details");
    // console.log(details);
    userId = JSON.parse(details).id;
  } catch (err) {
    //err
  }

  useEffect(() => {
    console.log(mentorId);

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
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleDayClick = (date) => {
    const formattedDate = dayjs(date).format("YYYY-MM-DD");
    if (activeDates.includes(formattedDate)) {
      console.log(date);
      setSelectedDate(date);
      fetchAvailableTimes(date); // Fetch available times when a valid date is selected
    } else {
      setAvailableTimes([]);
      setShowButton(false);
    }
  };

  const fetchAvailableTimes = (date) => {
    console.log(date);

    const newDate = new Date(date);
    const year = newDate.getFullYear();
    const month = String(newDate.getMonth() + 1).padStart(2, "0");
    const day = String(newDate.getDate()).padStart(2, "0");
    const formattedDate = `${year}-${month}-${day}`;

    // const formattedDate = date.toISOString().split('T')[0];
    console.log(formattedDate);
    console.log(availableSessions);

    // const times = availableSessions.filter(session => session.date === formattedDate)
    const filterArr = availableSessions
      .filter((item) => {
        return item.date === formattedDate;
      })
      .map((value) => {
        console.log(value);

        return value;
      });
    const times = availableSessions
      .filter((item) => {
        return item.date === formattedDate;
      })
      .map((value) => {
        console.log(value);

        return value.startTime;
      });

    // console.log(result);
    // console.log(times);

    // Mocked time slots
    // const times = [
    //   '5:30 AM', '5:45 AM', '6:00 AM', '6:15 AM',
    //   '6:30 AM', '6:45 AM', '7:00 PM', '7:30 PM'
    // ];
    setFilteredData(filterArr);
    setAvailableTimes(times);
  };

  const tileClassName = ({ date, view }) => {
    if (view === "month") {
      const formattedDate = dayjs(date).format("YYYY-MM-DD");
      if (activeDates.includes(formattedDate)) {
        return "bg-[#1453FF] text-[#101828] rounded-[8px] w-[45px] h-[45px] border-[1px]"; // Active dates styling
      } else {
        return "text-[#7D7D7D]"; // Faded styling for non-active dates
      }
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
    setLoading(true);
    const data = {
      bookingId: bookingValues?.bookingId,
      slotId: bookingValues?.slotId,
      userId: userId,
    };
    console.log(data);
    BookingsSubmitAction(data)
      .then((res) => {
        console.log(res);
        setLoading(false);
        closeModal();
        setShowBookingModal(true);
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data.error);
        setLoading(false);
      });
  };

  return (
    <div>
      <ToastContainer />
      <div className="font-whyte">
        <div
          className="bg-[#344054B2] opacity-[0.7] w-[100%] h-full fixed top-0 left-[0]"
          onClick={closeModal}
        ></div>
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
          <div>
            <Image
              src={mentorImage || "/dummyPic.svg" }
              width={152}
              height={152}
              alt="profile photo"
              className="object-cover rounded-[50%] w-[152px] sm:w-[112px] h-[152px] sm:h-[112px]"
            />
            <h2 className="font-medium text-[24px] text-[#101828] leading-[25.62px] text-[#101828] pt-[24px] pb-[8px]">
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
              />
              {selectedDate && (
                <div className="mt-6 grid grid-cols-4 gap-4">
                  {availableTimes.map((time, index) => (
                    <div
                      key={index}
                      style={{
                        background:
                          selectedTimeIndex === index ? "#1453FF" : "",
                        color: selectedTimeIndex === index ? "#fff" : "",
                      }}
                      onClick={() => handleTimeSelected(time, index)}
                      className="bg-[#fff] text-[16px] xm:text-[12px] text-[#7D7D7D] hover:text-[#fff] text-center leading-[16px] py-[18.5px] px-6 sm:px-[14px] xm:px-[8px] sxm:px-[5px] border-[1px] border-[#D0D5DD] rounded-[8px] cursor-pointer hover:bg-[#1453FF]"
                    >
                      {time }
                    </div>
                  ))}
                </div>
              )}
            </div>
            {showButton && (
              <button
                onClick={handleBookingSubmit}
                className="font-medium w-[100%] flex justify-center items-center text-[14px] leading-[19.6px] tracking-[2%] text-[#fff] bg-[#1453FF] border-[1px] border-[#1453FF] py-[12px] px-[20px] rounded-[8px] sm:flex mb-[16px] mt-[24px]"
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
                Book Session
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookSession;
