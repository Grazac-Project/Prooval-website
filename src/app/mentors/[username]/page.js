"use client";

import BookSession from "@/components/book-session";
import BookingModal from "@/components/booking-modal";
import Navbar from "@/components/navbar/nav";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import { getMentorsBySlug } from "@/api/authentication/auth";
import { useParams } from "next/navigation";
const label = { inputProps: { "aria-label": "Checkbox demo" } };
import { usePathname, useSearchParams } from "next/navigation";

const MentorDetails = () => {
  const [mentorDetails, setMentorDetails] = useState("about");
  const [checked, setChecked] = useState(false);
  const [showBookSession, setShowBookSession] = useState(false);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [mentorData, setMentorData] = useState({});
  const [loading, setLoading] = useState(false);
  const { username } = useParams();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleChange = (e) => {
    const newChecked = e.target.checked;
    // console.log(newChecked);
    setChecked(newChecked);
    if (newChecked) {
      preferredMentors(userId, data?._id)
        .then()
        .catch((error) => {
          // console.log(error)
        });
    } else {
      removePreferredMentors(userId, data?._id)
        .then()
        .catch((error) => {
          // console.log(error)
        });
    }
  };
  const getMentorsDetails = () => {
    setLoading(true);
    // console.log(userId);
    getMentorsBySlug(username)
      .then((res) => {
        setMentorData(res.data.data.data);
        console.log(mentorData);
        setLoading(false);
        // console.log(data?.calendarLink);
        if (data?.calendarLink) {
          // console.log(data.calendarLink);
          window.open(data.calendarLink, "_blank");
        } else {
          console.error("Calendar link not found in data");
        }
      })
      .catch((err) => {
        // console.log(err)
      });
  };

  useEffect(() => {
    getMentorsDetails();
  }, []);
  const shareMentorProfile = () => {
    const shareUrl = `${pathname}${searchParams.toString() ? "?" + searchParams.toString() : ""}`;
  
    if (navigator.share) {
      navigator
        .share({
          title: "Check out this mentor profile!",
          url: shareUrl,
        })
        .then(() => console.log("Profile shared successfully!"))
        .catch((error) => console.error("Error sharing profile:", error));
    } else {
      navigator.clipboard
        .writeText(shareUrl)
        .then(() => alert("Profile URL copied to clipboard!"))
        .catch((error) => console.error("Error copying URL:", error));
    }
  };
  return (
    <>
      <Navbar />
      <div className="bg-[#F2F2F7] py-[50px] md:py-8 font-whyte ">
        <div className=" w-[1084px] xl:w-[95%] min-h-[212px]  m-auto">
          <div className="min-h-[212px]  mx-auto bg-[#ffffff] py-6 px-20 lg:px-10 md:px-4 mb-[10px]  rounded-[8px] ">
            <div className="flex md:flex-col justify-between items-center gap-3 ">
              <div className="flex sm:flex-col  gap-3 items-center justify-center">
                <Image
                  src={mentorData.image}
                  alt="avatar"
                  width={164}
                  height={164}
                  className="w-[164px] h-[164px] rounded-[50%]"
                />
                <div className="flex flex-col md:justify-center md:text-center md:items-center gap-2">
                  <h2 className="font-medium text-[18px] text-[#101828] leading-[25.62px] ">
                    {mentorData.firstName} {mentorData.lastName}
                  </h2>
                  <p className="font-medium text-[14px] text-[#1453FF] leading-[130%]">
                    {mentorData.role}, {mentorData.company}
                  </p>
                  <button
                    className="hidden md:block w-[183px]  h-[44.43px] leading-[150%] text-[12.57px] text-[#ffff]  bg-primary rounded-[6.29px] "
                    onClick={getMentorsDetails}
                  >
                    Book Mentor
                  </button>
                  <div className="flex justify-start md:justify-center gap-2 align-center">
                    <button className=" text-[10px] text-[#4F4F4F] leading-[130%] bg-[#F2F2F7] rounded-[2px] w-[146.5px] sxm:max-w-[50%] h-[35.6px] flex justify-center items-center gap-1">
                      <div className="cursor-pointer">
                        {" "}
                        <Checkbox
                          {...label}
                          icon={<FavoriteBorder />}
                          checkedIcon={<Favorite sx={{ color: "green" }} />}
                          onChange={handleChange}
                          id="fav"
                          checked={checked}
                        />
                      </div>
                      Preferred Mentor
                    </button>
                    <button className=" text-[10px] text-[#4F4F4F] leading-[130%] bg-[#F2F2F7] rounded-[2px] w-[146.5px] sxm:max-w-[50%] h-[35.6px] flex justify-center items-center gap-1" onClick={shareMentorProfile}>
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
              <button
                className="md:hidden w-[183px]  h-[44.43px] leading-[150%] text-[12.57px] text-[#ffff]  bg-primary rounded-[6.29px] "
                onClick={getMentorsDetails}
              >
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
                    TotalMentees
                  </h5>
                  <h3 className="text-[16px] text-[#101828] font-medium leading-[150%]">
                    {mentorData.totalMentees}
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
                    {mentorData.totalMentees}
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
                    Total Page Views
                  </h5>
                  <h3 className="text-[16px] text-[#101828] font-medium leading-[150%]">
                    {mentorData.totalPageViews}
                  </h3>
                </div>
              </div>
              <div className=" border border-[#fff] border-r-[#EAEAEA] border-b-[#EAEAEA]  p-8 ">
                <h4 className="text-[12px] leading-[140%] font-medium mb-2">
                  Skills / Expertise
                </h4>
                <div className="flex justify-start flex-wrap gap-3 mb-2">
                  {mentorData?.skills?.map((element, i) => (
                    <div
                      key={i}
                      className="h-6 min-w-[83px] bg-[#F2F4F7]  text-[#344054] rounded-2xl flex justify-center items-center text-[10px] leading-[18px]"
                    >
                      <span>{element}</span>
                    </div>
                  ))}
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
                  {mentorData?.availability?.map((element, i) => (
                    <div
                      key={i}
                      className="h-10 max:w-[112px]  text-[#344054] border border-[#EAEAEA] flex justify-center items-center text-[10px] leading-[18px] px-6"
                    >
                      <span>{element}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="block md:hidden h-[5%] border  border-[#fff] border-r-[#EAEAEA]   p-8 md:px-4 "></div>
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
                      {Array.from({ length: 4 }).map((_, i) =>
                        i < mentorData.rating ? (
                          <Image
                            key={i}
                            src="/rate.svg"
                            alt="star"
                            width={27}
                            height={27}
                            className=""
                          />
                        ) : (
                          <Image
                            key={i}
                            src="/rate2.svg"
                            alt="star"
                            width={27}
                            height={27}
                            className=""
                          />
                        )
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-[14px] leading-[140%] font-medium text-[#333333] ">
                        5.0
                      </h4>
                      <p className=" text-[10px] leading-[140%] font-medium text-[#888888] ">
                        {mentorData?.reviews?.length || "No"} reviews
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-[#4F4F4F] leading-[140%] text-[14px] mx-12 md:mx-4 py-4">
                    {mentorData?.about}
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
                      {mentorData.yearsOfExperience + " " + "years" || ""}
                    </div>
                  </div>
                  <div className="flex flex-col gap-4">
                    {mentorData?.experience?.length === 0 ? (
                      <div className="min-h-[78px] border border-[#EAEAEA] p-6   flex flex-col justify-center items-center gap-4">
                        <Image
                          src="/exp.svg"
                          alt="avatar"
                          width={40}
                          height={40}
                          className=""
                        />
                        <div className="flex flex-col justify-center">
                          <p className="text-[12px] text-[#888888] leading-[140%] font-[350px] ">
                            No Experience Added
                          </p>
                        </div>
                      </div>
                    ) : (
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
                    )}
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

                {mentorData?.reviews?.length === 0 ? (
                  <div className="min-h-[78px] border border-[#EAEAEA] p-6   flex flex-col justify-center items-center gap-4">
                    <Image
                      src="/exp.svg"
                      alt="avatar"
                      width={40}
                      height={40}
                      className=""
                    />
                    <div className="flex flex-col justify-center">
                      <p className="text-[12px] text-[#888888] leading-[140%] font-[350px] ">
                        No Experience Added
                      </p>
                    </div>
                  </div>
                ) : (
                  <>
                    {mentorData?.reviews?.map((element, i) => (
                      <div
                        key={i}
                        className="min-h-[132px] border border-[#EAEAEA] p-3 flex items-center gap-4 bg-[#F2F2F7] rounded-lg flex-col "
                      >
                        <div className="   py-4 ">
                          <div className="flex justify-between items-center     ">
                            <div className="flex gap-2 items-center">
                              <Image
                                src={element.image}
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
                                {Array.from({ length: 5 }).map((_, i) =>
                                  i < element.rating ? (
                                    <Image
                                      key={i}
                                      src="/rate.svg"
                                      alt="star"
                                      width={14}
                                      height={14}
                                      className=""
                                    />
                                  ) : (
                                    <Image
                                      key={i}
                                      src="/rate2.svg"
                                      alt="star"
                                      width={14}
                                      height={14}
                                      className=""
                                    />
                                  )
                                )}
                              </div>
                              <div className="flex items-center gap-2">
                                <h4 className="text-[10px] leading-[140%] font-medium text-[#333333] ">
                                  {element.rating + "." + "0" || 0}
                                </h4>
                              </div>
                            </div>
                          </div>
                          <div>
                            <p className="text-[#4F4F4F] leading-[140%] text-[14px] pt-4">
                              {element.comment}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </>
                )}
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
