"use client";

import BookSession from "@/components/book-session";
import BookingModal from "@/components/booking-modal";
import Navbar from "@/components/navbar/nav";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Favorite from "@mui/icons-material/Favorite";
import { getMentorsBySlug, PreferredMentor } from "@/api/authentication/auth";
import { useParams, useRouter } from "next/navigation";
const label = { inputProps: { "aria-label": "Checkbox demo" } };
import { usePathname, useSearchParams } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Load } from "@/components/loading";
import Cookies from "js-cookie";
import MentorSession from "@/components/mentorSession";
import { formatPrice } from "@/Utils/price-formater";
import Error from "@/components/error";

const MentorDetails = () => {
  const [view, setView] = useState(3);
  const [checked, setChecked] = useState(false);
  const [showMentorSession, setShowMentorSession] = useState(false);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [mentorData, setMentorData] = useState({});
  const [loading, setLoading] = useState(true);
  const { username } = useParams();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [reviews, setReviews] = useState([]);
  const [slug, setSlug] = useState("");
  const [mentorId, setMentorId] = useState();
  const [token, setToken] = useState();
  const router = useRouter();
  const [error, setError] = useState("");
  const [currency, setCurrency] = useState("");

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  useEffect(() => {
    const data = Cookies.get("user_details");
    if (data) {
      try {
        const parsedData = JSON.parse(data);
        setToken(parsedData?.token);
      } catch (error) {
        console.error("Failed to parse token:", error);
      }
    }
  }, []);
  useEffect(() => {
    Cookies.set("mentorSlug", username, { expires: 7 });
  }, [username]);

  const handleChange = (e) => {
    const newChecked = e.target.checked;
    setChecked(newChecked);

    setMentorData((prevData) => ({
      ...prevData,
      mentor: {
        ...prevData.mentor,
        hasLiked: newChecked,
      },
    }));

    // console.log("Calling PreferredMentor with:", { mentorId, token });
    if (token) {
      PreferredMentor(mentorId, token)
        .then(() => {
          // console.log("Mentor preference updated successfully.");
        })
        .catch((error) => {
          // console.error("Error updating mentor preference:", error);
        });
    } else {
      // window.location.href = "https://dashboard.hackthejobs.com/auth/signup";
      const redirectTo = encodeURIComponent(
        window.location.pathname + window.location.search
      );
      window.location.href = `${baseUrl}/auth/signup?redirectTo=${redirectTo}`;
      // window.location.href = `${baseUrl}/auth/signup`;
    }
  };
  const getMentorsDetails = () => {
    // console.log({ token });
    getMentorsBySlug(username, token || "")
      .then((res) => {
        // console.log(res);
        setMentorData(res.data.data.data);
        setMentorId(res.data.data.data.mentor._id);

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
        setError(err.response?.data?.message);
        // toast.error(err.response?.data?.message);
        setLoading(false);
        // const isProduction = process.env.NEXT_PUBLIC_DOMAIN_DEV
        // window.location.href = isProduction === "development" ? "https://hackthejobs-website-main.onrender.com/mentors" : "https://www.hackthejobs.com/mentors"
      });
  };

  useEffect(() => {
    setLoading(true);
    try {
      const mentorSlug = Cookies.get("mentorSlug");
      setSlug(mentorSlug);
      // console.log("Mentor Slug from Cookies:", slug);
    } catch (err) {
      //err
    }
    getMentorsDetails();
  }, [token || mentorId]);

  const shareMentorProfile = () => {
    const shareUrl = `${pathname}${
      searchParams.toString() ? "?" + searchParams.toString() : ""
    }`;

    if (navigator.share) {
      navigator
        .share({
          title: "Check out this mentor profile!",
          url: shareUrl,
        })
        .then(() => {
          // console.log("Profile shared successfully!")
        })
        .catch((error) => {
          // console.error("Error sharing profile:", error)
        });
    } else {
      navigator.clipboard
        .writeText(shareUrl)
        .then(() => alert("Profile URL copied to clipboard!"))
        .catch((error) => console.error("Error copying URL:", error));
    }
  };
  //rounte to book session page if the token is true
  const bookSession = () => {
    if (token) {
      setShowMentorSession(true);
    } else {
      // window.location.href = "https://dashboard.hackthejobs.com/auth/signup";
      const redirectTo = encodeURIComponent(
        window.location.pathname + window.location.search
      );
      window.location.href = `${baseUrl}/auth/signup?redirectTo=${redirectTo}`;
      // window.location.href = `${baseUrl}/auth/signup`;
    }
  };
  const isProduction = process.env.NEXT_PUBLIC_DOMAIN_DEV;
  const handleNextPage = () => {
    const id = mentorId;
    if (id) {
      // window.location.href = `${baseUrl}/mentors/${slug}/details?id=${id}`;
      window.location.href =
        isProduction === "development"
          ? `https://test.hackthejobs.com/mentors/${slug}/details?id=${id}`
          : `https://www.hackthejobs.com/mentors/${slug}/details?id=${id}`;
      // window.location.href = `http://localhost:3000/mentors/${slug}/details?id=${id}`;
    }
  };

  const capitalizeFirstLetter = (text) => {
    if (!text) return "";
    return text.charAt(0).toUpperCase() + text.slice(1);
  };
  function truncateString(str) {
    if (!str) {
      return;
    } else if (str?.length > 40) {
      return str?.slice(0, 40) + "...";
    }
    return str;
  }

  return (
    <>
      <div>
        <ToastContainer />
        <Navbar />
        {error ? (
          <Error text={error} />
        ) : (
          <>
            {loading ? (
              <Load />
            ) : (
              <div className="bg-[#F2F2F7] py-[50px] md:py-8 font-onest ">
                <div className=" w-[1084px] xl:w-[95%] min-h-[212px]  m-auto">
                  <div className="min-h-[212px]  mx-auto bg-[#ffffff] py-6 px-20 lg:px-10 md:px-4 mb-[10px]  rounded-[8px] ">
                    <div className="flex md:flex-col justify-between items-center gap-3 ">
                      <div className="flex sm:flex-col  gap-3 items-center justify-center">
                        <Image
                          src={mentorData?.mentor?.image}
                          alt="avatar"
                          width={164}
                          height={164}
                          className="w-[164px] h-[164px] object-cover rounded-[50%]"
                        />
                        <div className="flex flex-col md:justify-center md:text-center md:items-center gap-2">
                          <h2 className="font-medium text-[18px] text-[#101828] leading-[25.62px]">
                            {mentorData?.mentor?.firstName}{" "}
                            {mentorData?.mentor?.lastName}
                          </h2>
                          <p className="font-medium text-[14px] text-[#1453FF] leading-[130%]">
                            {mentorData?.mentor?.role},{" "}
                            {mentorData?.mentor?.company}
                          </p>

                          <div className="flex items-center gap-1 mb-[16px]">
                            <img
                              src={mentorData?.flag.flag}
                              alt={mentorData?.mentor?.country + " flag"}
                              className="w-[12px] h-[12px]"
                            />
                            <span className="text-[16px] text-[#667085] font-normal truncate">
                              {mentorData?.mentor?.country}
                            </span>
                          </div>
                          <button
                            className="hidden md:block w-[183px]  h-[44.43px] leading-[150%] text-[12.57px] text-[#ffff]  bg-primary rounded-[6.29px] "
                            onClick={handleNextPage}
                          >
                            Book Mentor
                          </button>
                          <div className="flex flex-row justify-start md:justify-center gap-2 align-center mt-0 sm:mt-6">
                            <button className="text-[10px] text-[#4F4F4F] leading-[130%] bg-[#F2F2F7] rounded-[2px] w-[146.5px] h-[35.6px] flex items-center xxxxm:w-[117px] xxxxm:text-[8px]">
                              <div className="cursor-pointer">
                                <Checkbox
                                  {...label}
                                  icon={<FavoriteBorder />}
                                  checkedIcon={
                                    <Favorite
                                      sx={{
                                        color: mentorData?.mentor?.hasLiked
                                          ? "green"
                                          : "transparent",
                                      }}
                                    />
                                  }
                                  onChange={handleChange}
                                  id="fav"
                                  checked={
                                    mentorData?.mentor?.hasLiked || false
                                  }
                                />
                              </div>
                              Preferred Mentor
                            </button>
                            <button
                              className="text-[10px] text-[#4F4F4F] leading-[130%] bg-[#F2F2F7] rounded-[2px] w-[90px] h-[35.6px] flex justify-center items-center gap-1 sxm:[80px] xxxxm:text-[8px]"
                              onClick={shareMentorProfile}
                            >
                              <Image
                                src="/share.svg"
                                alt="linkedin"
                                width={20}
                                height={20}
                              />
                              Share Link
                            </button>
                            <a
                              className="text-[10px] text-[#4F4F4F] leading-[130%] bg-[#F2F2F7] rounded-[2px] w-[106.33px] h-[35.6px] flex justify-center items-center gap-1 sxm:w-[80px] xxxxm:text-[8px]"
                              href={mentorData?.mentor?.linkedinLink}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <LinkedInIcon style={{ fontSize: 17 }} />
                              View LinkedIn
                            </a>
                          </div>
                        </div>
                      </div>
                      <button
                        className={`md:hidden w-[183px]  h-[44.43px] leading-[150%] text-[12.57px] text-[#ffff] bg-primary  rounded-[6.29px] `}
                        // onClick={bookSession}
                        onClick={handleNextPage}
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
                            Total Mentees
                          </h5>
                          <h3 className="text-[16px] text-[#101828] font-medium leading-[150%]">
                            {mentorData?.mentor?.totalMentees || 0}
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
                            {mentorData?.mentor?.totalSessionBooked || 0}
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
                            Total Profile Views
                          </h5>
                          <h3 className="text-[16px] text-[#101828] font-medium leading-[150%]">
                            {mentorData?.mentor?.totalPageViews}
                          </h3>
                        </div>
                      </div>
                      <div className=" border border-[#fff] border-r-[#EAEAEA] border-b-[#EAEAEA]  p-8 ">
                        <h4 className="text-[12px] leading-[140%] font-medium mb-2">
                          Skills / Expertise
                        </h4>
                        <div className="flex justify-start flex-wrap gap-3 mb-2">
                          {mentorData?.mentor?.skills?.map((element, i) => (
                            <div
                              key={i}
                              className="h-6 w-fit bg-[#F2F4F7]  text-[#344054] rounded-2xl flex justify-center items-center text-[10px] leading-[18px] p-3"
                            >
                              <span>{element}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="flex flex-col gap-2  bg-[#ffff] border border-[#EAEAEA]  p-8 md:px-4">
                        <div className="flex justify-between gap-2 items-center  mb-3   ">
                          <h4 className="text-[12px] leading-[120%] font-medium ">
                            Available packages
                          </h4>
                          <p
                            className=" w-[77px] h-6 text-primary text-[14px] font-medium leading-[120%] underline flex justify-center items-center text-center cursor-pointer"
                            // onClick={() => setView(mentorData?.reviews?.length)}
                            onClick={handleNextPage}
                          >
                            View All
                          </p>
                        </div>
                        <div className=" border border-[#ffff]    ">
                          <div className="flex flex-col items-center gap-2">
                            {mentorData?.digitalProducts
                              ?.slice(0, 1)
                              .map((book) => (
                                <div className="py-4 px-3 w-full bg-[#ffff] border border-[#EAEAEA] rounded-lg  ">
                                  <div className="flex justify-between items-center mb-[10px]">
                                    <h4 className="text-[10px] leading-[140%] font-medium text-[#667085] ">
                                      Digital Product
                                    </h4>
                                    <div
                                      className={`w-[61px] h-[22px] rounded-full flex items-center justify-center ${
                                        book?.type === "Paid"
                                          ? " bg-[#DEA8061A]"
                                          : " bg-[#3333331A]"
                                      }`}
                                    >
                                      {book?.type === "Paid" && (
                                        <Image
                                          src="/paid.svg"
                                          alt="mentor"
                                          width={12}
                                          height={12}
                                          className="w-[12px] h-[12px] rounded-full"
                                        />
                                      )}
                                      <span
                                        className={` text-[12px] font-medium leading-[18px] font-inter ${
                                          book?.type === "Paid"
                                            ? "text-[#F3B704]"
                                            : "text-[#333333]"
                                        } `}
                                      >
                                        {book?.type}
                                      </span>
                                    </div>
                                  </div>
                                  {/* <div className="flex gap-[16px] justify-between  mb-[10px] "></div> */}
                                  <div className="flex justify items-start gap-5">
                                    <div
                                      className={`h-[56px] w-[72px] rounded-lg  bg-cover bg-center `}
                                      style={{
                                        backgroundImage: `url('${book?.thumbnail}')`,
                                        // backgroundColor: "#FF353599",
                                        // backgroundBlendMode: "multiply",
                                      }}
                                    />
                                    <div className="text-[#344054] rounded-lg  text-[10px] leading-[18px] flex flex-col gap-[10px]">
                                      <h5 className="text-[12px] leading-[140%] font-medium text-[#4F4F4F] ">
                                        {book?.title}
                                      </h5>
                                      <span className="text-[#4F4F4F] text-[10px] leading-[140%]   ">
                                        {book?.category}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              ))}
                          </div>
                        </div>
                        <div className=" border border-[#ffff]    ">
                          <div className="flex flex-col items-center gap-2">
                            {mentorData?.bookings?.slice(0, 2).map((book) => (
                              <div className="py-4 px-3 w-full bg-[#ffff] border border-[#EAEAEA] rounded-lg  ">
                                <div className="flex justify-between items-center mb-[10px]">
                                  <h4 className="text-[10px] leading-[140%] font-medium text-[#667085] ">
                                    1-on-1 session
                                  </h4>
                                  {book?.bookingType === "Paid" && (
                                    <div className=" flex items-center gap-1 justify-center">
                                      <span className="text-[#333333] text-[12px] font-semibold leading-[140%] font-inter ">
                                        {book.currency === "NGN" ? "₦" : "$"}
                                        {formatPrice(book?.amount)}
                                      </span>
                                    </div>
                                  )}
                                </div>
                                {/* <div className="flex gap-[16px] justify-between  mb-[10px] "></div> */}
                                <div className="flex justify items-start gap-5">
                                  <div className="text-[#344054] rounded-lg  text-[10px] leading-[18px] flex flex-col gap-[10px]">
                                    <h5 className="text-[12px] leading-[140%] font-medium text-[#4F4F4F] ">
                                      {book?.title}
                                    </h5>
                                    <span className="text-[#4F4F4F] text-[10px] leading-[140%]   ">
                                      {book?.sessionDuration} Mins
                                    </span>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className=" border border-[#ffff]    ">
                          <div className="flex flex-col items-center gap-2">
                            {mentorData?.bookings?.slice(0, 1).map((book) => (
                              <div className="py-4 px-3 w-full bg-[#ffff] border border-[#EAEAEA] rounded-lg  ">
                                <div className="flex justify-between items-center mb-[10px]">
                                  <h4 className="text-[10px] leading-[140%] font-medium text-[#667085] ">
                                    Mentorship Package
                                  </h4>
                                  {book?.bookingType === "Paid" && (
                                    <div className=" flex items-center gap-1 justify-center">
                                      <span className="text-[#333333] text-[12px] font-semibold leading-[140%] font-inter ">
                                        {book.currency === "NGN" ? "₦" : "$"}
                                        {formatPrice(book?.amount)}
                                      </span>
                                    </div>
                                  )}
                                </div>
                                {/* <div className="flex gap-[16px] justify-between  mb-[10px] "></div> */}
                                <div className="flex justify items-start gap-5">
                                  <div className="text-[#344054] rounded-lg  text-[10px] leading-[18px] flex flex-col gap-[10px]">
                                    <h5 className="text-[12px] leading-[140%] font-medium text-[#4F4F4F] ">
                                      {book?.title}
                                    </h5>
                                    <div className="flex items-center gap-2">
                                      <span className="text-[#4F4F4F] text-[10px] leading-[140%]   ">
                                        {book?.sessionDuration} Mins{" "}
                                      </span>
                                      <span className=" w-2 h-2 bg-[#D9D9D9] rounded-full"></span>
                                      <span className="text-[12px] leading-[140%] text-[#4F4F4F] ">
                                        Once a week
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className=" border border-[#F2F2F7] border-r-[#EAEAEA] border-b-[#EAEAEA]  p-8 md:px-4 ">
                        <h4 className="text-[12px] leading-[140%] font-medium mb-2">
                          Available Slots
                        </h4>
                        <div className="flex justify-start flex-wrap gap-6 md:gap-2">
                          {mentorData?.availability?.availableDays.map(
                            (element, i) => (
                              <div
                                key={i}
                                className="h-10 max:w-[112px]  text-[#344054] border border-[#EAEAEA] flex justify-center items-center text-[10px] leading-[18px] px-6"
                              >
                                <span>
                                  {capitalizeFirstLetter(element.day)}
                                </span>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                      <div className="block md:hidden h-[5%] border  border-[#fff] border-r-[#EAEAEA]   p-8 md:px-4 "></div>
                    </div>
                    <div className="w-[55%] md:w-full ">
                      <div className=" border border-[#F2F2F7] border-b-[#EAEAEA]  py-6 md:py-4 ">
                        <div className="flex justify-between items-center border border-[#fff] border-b-[#EAEAEA] mx-12 md:mx-4 py-[8.5px]  ">
                          <h4 className="text-[12px] leading-[140%] font-medium">
                            About
                          </h4>
                          <div className="flex items-center gap-2 ">
                            <div className="flex items-center ">
                              {Array.from({ length: 5 }).map((_, i) =>
                                i < mentorData.averageRating ? (
                                  <Image
                                    key={i}
                                    src="/rate.svg"
                                    alt="star"
                                    width={16}
                                    height={16}
                                    className=""
                                  />
                                ) : (
                                  <Image
                                    key={i}
                                    src="/rate2.svg"
                                    alt="star"
                                    width={16}
                                    height={16}
                                    className=""
                                  />
                                )
                              )}
                            </div>
                            <div className="flex items-center gap-2">
                              <h4 className="text-[10px] leading-[140%] font-inter font-medium text-[#333333] ">
                                {mentorData.averageRating || 0}
                              </h4>
                              <p className=" text-[10px] leading-[140%] font-inter font-normal text-[#888888] ">
                                {mentorData?.reviews?.length || "No"} reviews
                              </p>
                            </div>
                          </div>
                        </div>
                        {/* <div>
                      <p className="text-[#4F4F4F] leading-[140%] text-[14px] mx-12 md:mx-4 py-4">
                        {mentorData?.mentor?.about}
                      </p>
                    </div> */}
                        <div>
                          <div
                            className="text-[#4F4F4F] leading-[150%] text-[14px] mx-12 md:mx-4 py-4 [&>*]:my-[10px]"
                            dangerouslySetInnerHTML={{
                              __html: mentorData?.mentor?.about,
                            }}
                          />
                        </div>
                      </div>
                      <div className=" border border-[#fff] border-b-[#EAEAEA] border-l-[#EAEAEA] py-6">
                        <div className="mx-12 md:mx-4">
                          <div className="flex gap-2 items-center  mb-6   ">
                            <h4 className="text-[12px] leading-[120%] font-medium ">
                              Experience
                            </h4>
                            <div className="border border-primary w-[77px] h-6 text-primary text-[14px] font-medium leading-[120%] flex justify-center items-center text-center">
                              {mentorData?.mentor?.yearsOfExperience +
                                " " +
                                "years" || ""}
                            </div>
                          </div>
                          <div className="flex flex-col gap-4">
                            {mentorData?.mentor?.experience?.length === 0 ? (
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
                                {mentorData?.mentor?.experience?.map(
                                  (exp, index) => (
                                    <>
                                      <div
                                        key={index}
                                        className="min-h-[78px] border border-[#EAEAEA] p-3 flex items-center gap-4"
                                      >
                                        <Image
                                          src="/exp.svg"
                                          alt="avatar"
                                          width={40}
                                          height={40}
                                          className=""
                                        />
                                        <div className="flex flex-col gap-2">
                                          <h4 className="text-[12px] leading-[120%] font-medium ">
                                            {exp.jobTitle}
                                          </h4>
                                          <div className="flex items-center gap-2">
                                            <p className="text-[12px] text-[#474747] leading-[120%] font-[350px] ">
                                              {exp.company}
                                            </p>
                                            <ul
                                              bookingType="disc"
                                              className=" text-[#8B8B8B] text-[12px]  leading-[140%] font-[350px]"
                                            >
                                              <li> {exp.location}</li>
                                            </ul>
                                          </div>
                                          <p className="text-[12px] text-[#888888] leading-[140%] font-[350px] ">
                                            {new Date(exp.startDate).toLocaleDateString("en-US", {
                                                year: "numeric",
                                                month: "short",
                                              })}{" "}
                                              -{" "}
                                              {exp.endDate
                                                ? new Date(exp.endDate).toLocaleDateString("en-US", {
                                                    year: "numeric",
                                                    month: "short",
                                                  })
                                                : "Present"}
                                          </p>
                                        </div>
                                      </div>
                                    </>
                                  )
                                )}
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className=" border border-[#fff] border-l-[#EAEAEA] border-b-[#EAEAEA] px-12 md:px-4  py-6">
                        <div className="flex justify-between gap-2 items-center  mb-6   ">
                          <h4 className="text-[12px] leading-[120%] font-medium ">
                            Reviews
                          </h4>
                          <p
                            className=" w-[77px] h-6 text-primary text-[14px] font-medium leading-[120%] underline flex justify-center items-center text-center cursor-pointer"
                            onClick={() => setView(mentorData?.reviews?.length)}
                          >
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
                                No Reviews Added
                              </p>
                            </div>
                          </div>
                        ) : (
                          <>
                            {mentorData?.reviews
                              ?.slice(0, view)
                              .map((element, i) => (
                                <div
                                  key={i}
                                  className="min-h-[132px] border border-[#EAEAEA] p-3 flex  gap-4 bg-[#F7F7F7] rounded-lg flex-col mb-2 "
                                >
                                  <div className="   py-4 ">
                                    <div className="flex justify-between items-center ">
                                      <div className="flex gap-2 items-center">
                                        <Image
                                          src={element.user.profilePic}
                                          alt="avatar"
                                          width={32}
                                          height={32}
                                          className="h-[32px] w-[32px] object-cover rounded-[50%]"
                                        />
                                        <h4 className="text-[12px] leading-[140%] font-medium ">
                                          {element.user.firstName}{" "}
                                          {element.user.laststName}
                                        </h4>
                                      </div>
                                      <div className="flex  items-center gap-2 ">
                                        <div className="flex items-center ">
                                          {Array.from({ length: 5 }).map(
                                            (_, i) =>
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
                                          <h4 className="text-[10px] leading-[140%] font-inter font-medium text-[#333333] ">
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

                {/* <BookSession/> */}
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default MentorDetails;
