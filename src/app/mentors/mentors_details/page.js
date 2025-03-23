// "use client";
// import Image from "next/image";
// import React, { useEffect, useState } from "react";
// import { CiLinkedin } from "react-icons/ci";
// import { BsTwitterX } from "react-icons/bs";
// import { IoArrowBackOutline } from "react-icons/io5";
// import Checkbox from "@mui/material/Checkbox";
// import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
// import Favorite from "@mui/icons-material/Favorite";
// import {
//   bookMentorSession,
//   preferredMentors,
//   removePreferredMentors,
// } from "@/api/authentication/auth";
// import { useGlobalContext } from "@/app/Context/store";
// import { useRouter } from "next/navigation";
// import BookSession from "@/components/book-session";
// import BookingModal from "@/components/booking-modal";

// const label = { inputProps: { "aria-label": "Checkbox demo" } };

// const MentorDetails = ({ data, setMentorActive, setMentorsTab, userId }) => {
//   const router = useRouter();
//   const [mentorDetails, setMentorDetails] = useState("about");
//   const [checked, setChecked] = useState(false);
//   const [showBookSession, setShowBookSession] = useState(false);
//   const [showBookingModal, setShowBookingModal] = useState(false);
//   const [modalData, setModalData] = useState({});
//   const [loading, setLoading] = useState(false);

//   const { prefMentList } = useGlobalContext();
//   // console.log(prefMentList);
//   console.log(data);

//   useEffect(() => {
//     if (prefMentList) {
//       const isPreferred = prefMentList.some((ele) => ele._id === data._id);
//       setChecked(isPreferred);
//     }
//   }, [prefMentList, data?._id]);
//   const handleChange = (e) => {
//     const newChecked = e.target.checked;
//     // console.log(newChecked);
//     setChecked(newChecked);
//     if (newChecked) {
//       preferredMentors(userId, data?._id)
//         .then()
//         .catch((error) => {
//           // console.log(error)
//         });
//     } else {
//       removePreferredMentors(userId, data?._id)
//         .then()
//         .catch((error) => {
//           // console.log(error)
//         });
//     }
//   };
//   const openBookSessionModal = () => {
//     setLoading(true);
//     setShowBookSession(true);
//     setLoading(false);
//   };
//   const handleBookSession = () => {
//     setLoading(true);
//     // console.log(userId);
//     bookMentorSession(userId)
//       .then((res) => {
//         // console.log(res)
//         setLoading(false);
//         // console.log(data?.calendarLink);
//         if (data?.calendarLink) {
//           // console.log(data.calendarLink);
//           window.open(data.calendarLink, "_blank");
//         } else {
//           console.error("Calendar link not found in data");
//         }
//       })
//       .catch((err) => {
//         // console.log(err)
//       });
//   };
//   // console.log(data);
//   // console.log(data.experience);
//   return (
//     // <section className='font-whyte w-[1160px] pt-[16px] px-[24px] sm:px-[16px]'>
//     <section className="font-whyte w-[100%] pt-[16px] sm:pt-[0px] px-[0px] sm:px-[0px]">
//       <div className="flex items-center gap-[16px]">
//         <div
//           className=" w-[36px] border-[1px] border-[#EAEAEA] rounded-[8px] bg-[#FFFFFF] p-[10px] hidden sm:block"
//           onClick={() => setMentorActive("main")}
//         >
//           <IoArrowBackOutline className="text-[16px] text-[#292D32] border-[#292D32] " />
//         </div>
//         <p
//           className="font-medium text-[18px] text-[#121927] leading-[27px] tracking-[3%]"
//           style={{ paddingBottom: data?.hasCreatedBooking ? "0px" : "0px" }}
//         >
//           Mentor
//         </p>
//       </div>
//       <div className="flex justify-between items-center mb-[16px] sm:hidden">
//         <div className="flex gap-[12px]">
//           <p
//             className="font-regular text-[14px] leading-[16.8px] text-[#667085] cursor-pointer"
//             onClick={() => {
//               setMentorActive("main");
//               setMentorsTab("all-mentors");
//             }}
//           >
//             Mentors
//           </p>
//           <p className="font-regular text-[14px] leading-[16.8px] text-[#667085]">
//             /
//           </p>
//           <p className="font-regular text-[14px] leading-[16.8px] text-[#1453FF]">
//             Mentor's Details
//           </p>
//         </div>
//         {data?.hasCreatedBooking && data?.calendarConnected && (
//           <button
//             className="font-medium w-[150px] flex justify-center items-center text-[14px] leading-[19.6px] tracking-[2%] text-[#fff] bg-[#1453FF] border-[1px] border-[#1453FF] py-[12px] px-[20px] rounded-[8px]"
//             onClick={openBookSessionModal}
//           >
//             {loading ? (
//               <Image src="/loader.gif" width={16} height={16} alt="loader" />
//             ) : (
//               "Book Session"
//             )}{" "}
//           </button>
//         )}
//       </div>
//       <div className="mb-[64px] flex gap-[16px]">
//         <div className="border-[1px] border-[#EAEAEA] sm:border-none rounded-[8px] w-[30%] lgx:w-[35%] sm:w-[100%]">
//           <div className="px-[16px] sm:px-[0] py-[32px] sm:py-0 sm:pt-[8px] border-b-[1px] border-[#EAEAEA] sm:border-none ">
//             <Image
//               src={data?.image}
//               width={127}
//               height={127}
//               alt=""
//               className="w-[127px] h-[127px] object-contain rounded-[50%] mx-auto border-[1.13px] border-[#EAEAEA]"
//             />
//             <h2 className="font-medium text-[18px] leading-[25.62px] text-[#101828] text-center mt-[24px] mb-[8px]">
//               {data?.firstName} {data?.lastName}
//             </h2>
//             <h3 className="font-regular text-[14px] leading-[18.2px] text-[#1453FF] mb-[33px] sm:mb-[16px] text-center">
//               {data?.role}
//             </h3>
//             {data?.hasCreatedBooking && data?.calendarConnected && (
//               <button
//                 className="font-medium w-[150px] flex justify-center items-center text-[14px] leading-[19.6px] tracking-[2%] text-[#fff] bg-[#1453FF] border-[1px] border-[#1453FF] py-[12px] px-[20px] rounded-[8px] hidden sm:flex mx-auto mb-[16px]"
//                 onClick={openBookSessionModal}
//               >
//                 {loading ? (
//                   <Image
//                     src="/loader.gif"
//                     width={16}
//                     height={16}
//                     alt="loader"
//                   />
//                 ) : (
//                   ""
//                 )}{" "}
//                 Book Session
//               </button>
//             )}
//             <div className="sm:w-[100%] sm:px-[8px] flex justify-between items-center sm:border-[1px] sm:border-[#EAEAEA] sm:rounded-tl-[8px] sm:rounded-tr-[8px] sm:py-[16px]">
//               <p className="font-medium text-[14px] text-[#121927] leading-[18.2px]">
//                 Add as Preferred Mentor
//               </p>
//               <div className="cursor-pointer">
//                 <Checkbox
//                   {...label}
//                   icon={<FavoriteBorder />}
//                   checkedIcon={<Favorite sx={{ color: "green" }} />}
//                   onChange={handleChange}
//                   id="fav"
//                   checked={checked}
//                 />
//               </div>
//             </div>
//           </div>
//           <div className="font-whyte pt-[44px] sm:pt-[16px] border-[1px] border-[#EAEAEA] w-[100%] hidden sm:block">
//             <div className="pl-[18px] border-b-[1px] border-b-[#D9D9D9] flex">
//               <p
//                 style={{
//                   color: mentorDetails === "about" ? "#1453FF" : "",
//                   borderBottom:
//                     mentorDetails === "about" ? "1px solid #1453FF" : "",
//                 }}
//                 className="font-medium text-[14px] text-[#9A9A9A] leading-[16.8px] p-[8px]"
//                 onClick={() => setMentorDetails("about")}
//               >
//                 About
//               </p>
//             </div>
//             {mentorDetails === "about" && (
//               <div className="min-h-[400px] font-regular text-[14px] text-[#4F4F4F] leading-[19.6px] p-[24px] sm:px-[8px] sm:py-[16px]">
//                 {data?.about.map((element, i) => (
//                   <p key={i} className="w-[100%] mb-[16px]">
//                     {element}
//                   </p>
//                 ))}
//               </div>
//             )}
//             {mentorDetails === "experience" && (
//               <div className="font-regular min-h-[400px] text-[14px] text-[#4F4F4F] leading-[19.6px] p-[24px] sm:px-[8px] sm:py-[16px]">
//                 {data?.experience.map((element, i) => {
//                   return (
//                     <div key={i}>
//                       <div className="font-medium text-[16px] text-[#121927] leading-[19.2px] flex justify-between  mb-[8px]">
//                         <h4>{element.company}</h4>
//                         <p className="font-regular text-[#4F4F4F]">
//                           {element.role}
//                         </p>
//                       </div>
//                       <p className="font-regular text-[14px] text-[#4F4F4F] leading-[16.8px] mb-[16px] ">
//                         {element.startDate} - {element.endDate}
//                       </p>
//                       <ul className="list-disc px-[20px]">
//                         {element.achievements.map((achievement, i) => (
//                           <li
//                             key={i}
//                             className="font-regular text-[14px] text-[#4F4F4F] leading-[19.6px] mb-[12px]"
//                           >
//                             {achievement}
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   );
//                 })}
//               </div>
//             )}
//           </div>
//           {data?.skills.length === 0 ? (
//             ""
//           ) : (
//             <div
//               className={`px-[16px] py-[32px] border-b-[1px] sm:border-[1px] border-[#EAEAEA] sm:${
//                 mentorDetails === "experience" ? "hidden" : ""
//               }`}
//             >
//               <div className="flex gap-[2px] mb-[12px]">
//                 <p className="font-medium text-[14px] leading-[19.6px] text-[#121927]">
//                   Skills
//                 </p>
//                 <p className="font-medium text-[14px] leading-[19.6px] text-[#121927]">
//                   /
//                 </p>
//                 <p className="font-medium text-[14px] leading-[19.6px] text-[#121927]">
//                   Expertise
//                 </p>
//               </div>
//               <div className=" flex flex-wrap gap-[12px]">
//                 {data?.skills.map((element, i) => (
//                   <p
//                     key={i}
//                     className="w-[fit-content] font-regular rounded-[16px] px-[8px] py-[6px] bg-[#F2F4F7] text-[12px] text-[#344054] text-center leading-[18px]"
//                   >
//                     {element}
//                   </p>
//                 ))}
//               </div>
//             </div>
//           )}
//           {data?.linkedinLink || data?.twitterLink ? (
//             <div
//               className={`px-[16px] pt-[32px] pb-[178px] sm:pb-[13px] sm:border-[1px] border-[#EAEAEA] sm:${
//                 mentorDetails === "experience" ? "hidden" : ""
//               }`}
//             >
//               <h3 className="font-medium text-[14px] text-[#121927] leading-[19.6px] tracking-[2%] mb-[16px]">
//                 Connect
//               </h3>
//               {data?.linkedinLink && (
//                 <a href={data?.linkedinLink} target="_blank">
//                   <div className="flex items-center gap-[12.5px] mb-[12px]">
//                     <CiLinkedin className="text-[24px] text-[#2867B2]" />
//                     Linkedin
//                   </div>
//                 </a>
//               )}
//               {data?.twitterLink && (
//                 <a href={data?.twitterLink} target="_blank">
//                   <div className="flex items-center gap-[12.5px]">
//                     <BsTwitterX className="text-[24px] text-[#121927]" />
//                     Twitter
//                   </div>
//                 </a>
//               )}
//             </div>
//           ) : (
//             ""
//           )}
//         </div>
//         <div className="font-whyte pt-[44px] border-[1px] border-[#EAEAEA] rounded-[8px] w-[69%] lgx:w-[64%] sm:hidden">
//           <div className="pl-[18px] border-b-[1px] border-b-[#D9D9D9] flex">
//             <p
//               style={{
//                 color: mentorDetails === "about" ? "#1453FF" : "",
//                 borderBottom:
//                   mentorDetails === "about" ? "1px solid #1453FF" : "",
//               }}
//               className="font-medium text-[14px] text-[#9A9A9A] leading-[16.8px] p-[8px] cursor-pointer"
//               onClick={() => setMentorDetails("about")}
//             >
//               About
//             </p>
//             {/* <p style={{color: mentorDetails === 'experience' ? '#1453FF': '', borderBottom: mentorDetails === 'experience' ?'1px solid #1453FF': ''}} className='font-regular text-[14px] text-[#9A9A9A] leading-[16.8px] p-[8px] cursor-pointer' onClick={() => setMentorDetails('experience')}>Work Experience</p> */}
//           </div>
//           {mentorDetails === "about" && (
//             <div className="font-regular text-[14px] text-[#4F4F4F] leading-[19.6px] p-[24px]">
//               {data?.about?.map((element, i) => (
//                 <p key={i} className="w-[100%] mb-[16px]">
//                   {element}
//                 </p>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>
//       {showBookSession && (
//         <BookSession
//           closeModal={() => setShowBookSession(false)}
//           mentorId={data?._id}
//           mentorImage={data?.image}
//           setShowBookingModal={setShowBookingModal}
//         />
//       )}
//       {showBookingModal && (
//         <BookingModal
//           closeModal={() => setShowBookingModal(false)}
//           firstName={data?.firstName}
//           lastName={data?.lastName}
//         />
//       )}
//     </section>
//   );
// };

// export default MentorDetails;
"use client"

import BookSession from "@/components/book-session";
import BookingModal from "@/components/booking-modal"
import Navbar from "@/components/navbar/nav";
import Image from "next/image";
import React from "react";

const MentorDetails = () => {
  return (
    <>
      <Navbar />
      <div className="bg-[#F2F2F7] py-[50px] md:py-8 font-whyte ">
        <div className=" w-[1084px] xl:w-[95%] min-h-[212px]  m-auto">
          <div className="min-h-[212px]  mx-auto bg-[#ffffff] py-6 px-20 lg:px-10 md:px-4 mb-[10px]  rounded-[8px] ">
            <div className="flex md:flex-col justify-between items-center gap-3 ">
              <div className="flex sm:flex-col  gap-3 items-center justify-center">
                <Image
                  src="/dummyPic.svg"
                  alt="avatar"
                  width={164}
                  height={164}
                  className="w-[164px] h-[164px] rounded-[50%]"
                />
                <div className="flex flex-col md:justify-center md:text-center md:items-center gap-2">
                  <h2 className="font-medium text-[18px] text-[#101828] leading-[25.62px] ">
                    Olivia Rhye
                  </h2>
                  <p className="font-medium text-[14px] text-[#1453FF] leading-[130%]">
                    Founder & CEO, Grazac
                  </p>
                  <button className="hidden md:block w-[183px]  h-[44.43px] leading-[150%] text-[12.57px] text-[#ffff]  bg-primary rounded-[6.29px] ">
                    Book Mentor
                  </button>
                  <div className="flex justify-start md:justify-center gap-2 align-center">
                    <button className=" text-[10px] text-[#4F4F4F] leading-[130%] bg-[#F2F2F7] rounded-[2px] w-[146.5px] sxm:max-w-[50%] h-[35.6px] flex justify-center items-center gap-1">
                      <Image
                        src="/love.svg"
                        alt="linkedin"
                        width={20}
                        height={17.22}
                      />
                      Preferred Mentor
                    </button>
                    <button className=" text-[10px] text-[#4F4F4F] leading-[130%] bg-[#F2F2F7] rounded-[2px] w-[146.5px] sxm:max-w-[50%] h-[35.6px] flex justify-center items-center gap-1">
                      <Image
                        src="/share.svg"
                        alt="linkedin"
                        width={24}
                        height={24}
                      />
                      Share Link
                    </button>
                  </div>
                </div>
              </div>
              <button className="md:hidden w-[183px]  h-[44.43px] leading-[150%] text-[12.57px] text-[#ffff]  bg-primary rounded-[6.29px] ">
                Book Mentor
              </button>
            </div>
          </div>
          <div className="flex md:flex-col  bg-[#ffff] rounded-2xl">
            <div className="w-[45%] md:w-full  ">
              <div className="min-h-[186px] border border-[#F2F2F7] border-r-[#EAEAEA] border-b-[#EAEAEA] flex px-4 items-center justify-center gap-2 py-8 ">
                <div className="flex flex-col justify-center gap-1 items-center border border-[#EAEAEA] w-[122.33px] lg:max-w-[122.33px] h-[122px] rounded-lg px-4 text-center">
                  <Image
                    src="/mentee.svg"
                    alt="avatar"
                    width={27}
                    height={27}
                    className="w-[27px] h-[27px] rounded-[50%]"
                  />
                  <h5 className="text-[12px] text-[#4F4F4F] leading-[130%]">
                    Total Mentees
                  </h5>
                  <h3 className="text-[16px] text-[#101828] font-medium leading-[150%]">
                    100
                  </h3>
                </div>
                <div className="flex flex-col justify-center gap-1 items-center border border-[#EAEAEA] w-[122.33px] lg:max-w-[122.33px]  h-[122px] rounded-lg px-4 text-center ">
                  <Image
                    src="/session.svg"
                    alt="avatar"
                    width={27}
                    height={27}
                    className="w-[27px] h-[27px] rounded-[50%]"
                  />
                  <h5 className="text-[12px] text-[#4F4F4F] leading-[130%]">
                    Total Sessions Booked
                  </h5>
                  <h3 className="text-[16px] text-[#101828] font-medium leading-[150%]">
                    100
                  </h3>
                </div>{" "}
                <div className="flex flex-col justify-center gap-1 items-center border border-[#EAEAEA] w-[122.33px] lg:max-w-[122.33px] h-[122px] rounded-lg px-4 text-center ">
                  <Image
                    src="/views.svg"
                    alt="avatar"
                    width={27}
                    height={27}
                    className="w-[27px] h-[27px] rounded-[50%]"
                  />
                  <h5 className="text-[12px] text-[#4F4F4F] leading-[130%]">
                    Total Mentees
                  </h5>
                  <h3 className="text-[16px] text-[#101828] font-medium leading-[150%]">
                    100
                  </h3>
                </div>
              </div>
              <div className=" border border-[#fff] border-r-[#EAEAEA] border-b-[#EAEAEA]  p-8 ">
                <h4 className="text-[12px] leading-[140%] font-medium mb-2">
                  Skills / Expertise
                </h4>
                <div className="flex justify-start flex-wrap gap-3 mb-2">
                  <div className="h-6 min-w-[83px] bg-[#F2F4F7]  text-[#344054] rounded-2xl flex justify-center items-center text-[10px] leading-[18px]">
                    <span>User Research</span>
                  </div>
                  <div className="h-6 min-w-[83px] bg-[#F2F4F7]  text-[#344054] rounded-2xl flex justify-center items-center text-[10px] leading-[18px]">
                    <span>User Research</span>
                  </div>
                  <div className="h-6 min-w-[83px] bg-[#F2F4F7]  text-[#344054] rounded-2xl flex justify-center items-center text-[10px] leading-[18px]">
                    <span>User Research</span>
                  </div>
                  <div className="h-6 min-w-[83px] bg-[#F2F4F7]  text-[#344054] rounded-2xl flex justify-center items-center text-[10px] leading-[18px]">
                    <span>User Research</span>
                  </div>
                  <div className="h-6 min-w-[83px] bg-[#F2F4F7]  text-[#344054] rounded-2xl flex justify-center items-center text-[10px] leading-[18px]">
                    <span>User Research</span>
                  </div>
                  <div className="h-6 min-w-[83px] bg-[#F2F4F7]  text-[#344054] rounded-2xl flex justify-center items-center text-[10px] leading-[18px]">
                    <span>User Research</span>
                  </div>
                </div>
              </div>
              <div className=" border border-[#ffff]  border-b-[#EAEAEA]  p-8 md:px-4 ">
                <h4 className="text-[12px] leading-[140%] font-medium text-[#333333] mb-2">
                  Mentorship Session
                </h4>
                <div className="flex justify-start flex-wrap gap-3">
                  <div className="h-[45px] px-3 w-full bg-[#ffff] border border-[#EAEAEA]  text-[#344054] rounded-lg flex justify-between items-center text-[10px] leading-[18px]">
                    <h5 className="text-[12px] leading-[140%] font-medium text-[#4F4F4F]">
                      Let’s talk about negotiations
                    </h5>
                    <span className="text-[#4F4F4F] text-[12px] leading-[140%] font-medium  ">
                      30 Mins
                    </span>
                  </div>
                </div>
              </div>
              <div className=" border border-[#F2F2F7] border-r-[#EAEAEA] border-b-[#EAEAEA]  p-8 md:px-4 ">
                <h4 className="text-[12px] leading-[140%] font-medium mb-2">
                  Available Slots
                </h4>
                <div className="flex justify-start flex-wrap gap-6 md:gap-2">
                  <div className="h-10 max:w-[112px]  text-[#344054] border border-[#EAEAEA] flex justify-center items-center text-[10px] leading-[18px] px-6">
                    <span>Tuesdays</span>
                  </div>
                  <div className="h-10 max:w-[112px]  text-[#344054] border border-[#EAEAEA] flex justify-center items-center text-[10px] leading-[18px] px-6">
                    <span>Mondays</span>
                  </div>
                  <div className="h-10 max:w-[112px]  text-[#344054] border border-[#EAEAEA] flex justify-center items-center text-[10px] leading-[18px] px-6">
                    <span>Friday</span>
                  </div>
                </div>
              </div>
              <div className="block md:hidden h-[10%] border  border-[#fff] border-r-[#EAEAEA]   p-8 md:px-4 ">

              </div>
              
            </div>
            <div className="w-[55%] md:w-full ">
              <div className=" border border-[#F2F2F7] border-b-[#EAEAEA]  py-6 md:py-4 ">
                <div className="flex justify-between items-center border border-[#fff] border-b-[#EAEAEA] mx-12 md:mx-4 py-[8.5px]  ">
                  <h4 className="text-[12px] leading-[140%] font-medium mb-2">
                    About
                  </h4>
                  <div className="flex items-center gap-2 ">
                    <div className="flex items-center ">
                      <Image
                        src="/rate.svg"
                        alt="avatar"
                        width={27}
                        height={27}
                        className=""
                      />
                      <Image
                        src="/rate.svg"
                        alt="avatar"
                        width={27}
                        height={27}
                        className=""
                      />
                      <Image
                        src="/rate.svg"
                        alt="avatar"
                        width={27}
                        height={27}
                        className=""
                      />
                      <Image
                        src="/rate.svg"
                        alt="avatar"
                        width={27}
                        height={27}
                        className=""
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-[14px] leading-[140%] font-medium text-[#333333] ">
                        5.0
                      </h4>
                      <p className=" text-[10px] leading-[140%] font-medium text-[#888888] ">
                        25 reviews
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-[#4F4F4F] leading-[140%] text-[14px] mx-12 md:mx-4 py-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare.Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Suspendisse varius enim in eros
                    elementum tristique. Duis cursus, mi quis viverra
                    ornare.Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Suspendisse varius enim in eros elementum tristique.
                    Duis cursus, mi quis viverra ornare.Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit.{" "}
                  </p>
                </div>
              </div>
              <div className=" border border-[#fff] border-b-[#EAEAEA] py-6">
                <div className="mx-12 md:mx-4">
                  <div className="flex gap-2 items-center  mb-6   ">
                    <h4 className="text-[12px] leading-[120%] font-medium ">
                      Experience
                    </h4>
                    <div className="border border-primary w-[77px] h-6 text-primary text-[14px] font-medium leading-[120%] flex justify-center items-center text-center">
                      7 years
                    </div>
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="min-h-[78px] border border-[#EAEAEA] p-3 flex items-center gap-4">
                      <Image
                        src="/exp.svg"
                        alt="avatar"
                        width={40}
                        height={40}
                        className=""
                      />
                      <div className="flex flex-col gap-2">
                        <h4 className="text-[12px] leading-[120%] font-medium ">
                          Chief Executive Officer
                        </h4>
                        <div className="flex items-center gap-2">
                          <p className="text-[12px] text-[#474747] leading-[120%] font-[350px] ">
                            Grazac Limited
                          </p>
                          <ul
                            type="disc"
                            className=" text-[#8B8B8B] text-[12px]  leading-[140%] font-[350px]"
                          >
                            <li>Lagos, Nigeria</li>
                          </ul>
                        </div>
                        <p className="text-[12px] text-[#888888] leading-[140%] font-[350px] ">
                          Grazac Limited
                        </p>
                      </div>
                    </div>
                    <div className="min-h-[78px] border border-[#EAEAEA] p-3 flex items-center gap-4">
                      <Image
                        src="/exp.svg"
                        alt="avatar"
                        width={40}
                        height={40}
                        className=""
                      />
                      <div className="flex flex-col gap-2">
                        <h4 className="text-[12px] leading-[120%] font-medium ">
                          Chief Executive Officer
                        </h4>
                        <div className="flex items-center gap-2">
                          <p className="text-[12px] text-[#474747] leading-[120%] font-[350px] ">
                            Grazac Limited
                          </p>
                          <ul
                            type="disc"
                            className=" text-[#8B8B8B] text-[12px]  leading-[140%] font-[350px]"
                          >
                            <li>Lagos, Nigeria</li>
                          </ul>
                        </div>
                        <p className="text-[12px] text-[#888888] leading-[140%] font-[350px] ">
                          Grazac Limited
                        </p>
                      </div>
                    </div>
                    <div className="min-h-[78px] border border-[#EAEAEA] p-3 flex items-center gap-4">
                      <Image
                        src="/exp.svg"
                        alt="avatar"
                        width={40}
                        height={40}
                        className=""
                      />
                      <div className="flex flex-col gap-2">
                        <h4 className="text-[12px] leading-[120%] font-medium ">
                          Chief Executive Officer
                        </h4>
                        <div className="flex items-center gap-2">
                          <p className="text-[12px] text-[#474747] leading-[120%] font-[350px] ">
                            Grazac Limited
                          </p>
                          <ul
                            type="disc"
                            className=" text-[#8B8B8B] text-[12px]  leading-[140%] font-[350px]"
                          >
                            <li>Lagos, Nigeria</li>
                          </ul>
                        </div>
                        <p className="text-[12px] text-[#888888] leading-[140%] font-[350px] ">
                          Grazac Limited
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" border border-[#fff] border-l-[#EAEAEA] border-b-[#EAEAEA] px-12 md:px-4  py-6">
                <div className="flex justify-between gap-2 items-center  mb-6   ">
                  <h4 className="text-[12px] leading-[120%] font-medium ">
                    Reviews
                  </h4>
                  <p className=" w-[77px] h-6 text-primary text-[14px] font-medium leading-[120%] underline flex justify-center items-center text-center">
                    View All
                  </p>
                </div>
                <div className="min-h-[132px] border border-[#EAEAEA] p-3 flex items-center gap-4 bg-[#F2F2F7] rounded-lg flex-col ">
                  <div className="   py-4 ">
                    <div className="flex justify-between items-center     ">
                      <div className="flex gap-2 items-center">
                        <Image
                          src="/dummyPic.svg"
                          alt="avatar"
                          width={32}
                          height={32}
                          className="rounded-[50%]"
                        />
                        <h4 className="text-[12px] leading-[140%] font-medium ">
                          Joy Omowaye
                        </h4>
                      </div>
                      <div className="flex items-center gap-2 ">
                        <div className="flex items-center ">
                          <Image
                            src="/rate.svg"
                            alt="avatar"
                            width={14}
                            height={14}
                            className=""
                          />
                          <Image
                            src="/rate.svg"
                            alt="avatar"
                            width={14}
                            height={14}
                            className=""
                          />
                          <Image
                            src="/rate.svg"
                            alt="avatar"
                            width={14}
                            height={14}
                            className=""
                          />
                          <Image
                            src="/rate.svg"
                            alt="avatar"
                            width={14}
                            height={14}
                            className=""
                          />
                        </div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-[10px] leading-[140%] font-medium text-[#333333] ">
                            5.0
                          </h4>
                        </div>
                      </div>
                    </div>
                    <div>
                      <p className="text-[#4F4F4F] leading-[140%] text-[14px] pt-4">
                        Olivia Rhye is really a professional! i was able to fix
                        my code just after 5 minutes of booking him. Thank you
                        very much for this awesome access to top professionals.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <BookingModal/> */}
        {/* <BookSession/> */}
      </div>
    </>
  );
};

export default MentorDetails;
