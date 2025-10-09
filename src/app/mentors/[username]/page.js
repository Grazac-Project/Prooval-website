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
import { getCurrencySymbol } from "@/Utils/currency-formatter";
import { IoIosArrowRoundForward } from "react-icons/io";
import { getBookings } from "@/api/authentication/auth";
// De-dupe key (adjust if you have real IDs)
const keyOf = (c) => `${c.type}::${c.title}`;

function pickLimited(groups, quotas, total) {
  if (groups.length !== quotas.length) {
    throw new Error("groups and quotas must have the same length");
  }

  const pointers = groups.map(() => 0);
  const takenPerGroup = groups.map(() => 0);
  const result = [];
  const seen = new Set();

  const nextFrom = (i) => {
    const arr = groups[i];
    let p = pointers[i];
    while (p < arr.length) {
      const candidate = arr[p++];
      const k = keyOf(candidate);
      if (!seen.has(k)) {
        pointers[i] = p;
        seen.add(k);
        return candidate;
      }
    }
    return undefined;
  };

  // Pass 1: satisfy quotas (e.g., 2–2–1)
  for (let i = 0; i < groups.length; i++) {
    while (takenPerGroup[i] < quotas[i]) {
      const item = nextFrom(i);
      if (!item) break; // this group ran out
      result.push(item);
      takenPerGroup[i]++;
      if (result.length === total) return result;
    }
  }

  // Pass 2: redistribute leftovers round-robin
  let progressed = true;
  while (result.length < total && progressed) {
    progressed = false;
    for (let i = 0; i < groups.length && result.length < total; i++) {
      const item = nextFrom(i);
      if (item) {
        result.push(item);
        progressed = true;
      }
    }
  }

  return result.slice(0, total);
}

const MentorDetails = () => {
  const [view, setView] = useState(3);
  const [checked, setChecked] = useState(false);
  const [showMentorSession, setShowMentorSession] = useState(false);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [mentorData, setMentorData] = useState({});
  const [mentData, setMentData] = useState([]);
  const [webData, setWebData] = useState([]);
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
  const [bookingId, setBookingId] = useState("");
  const [mentorPrice, setMentorPrice] = useState("");
  const [sessionType, setSessionType] = useState("");
  const [successModal, setSuccessModal] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showWebModal, setShowWebModal] = useState(false);
  // const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const isProduction = process.env.NEXT_PUBLIC_DOMAIN_DEV;
  const baseUrl =
    isProduction === "development"
      ? "https://test-dashboard.hackthejobs.com"
      : "https://dashboard.hackthejobs.com";

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

  const getMentorsDets = () => {
    setLoading(true);
    getBookings(mentorId)
      .then((res) => {
        console.log(res.data?.data?.data);
        setMentData(res.data?.data?.data);
        setWebData(res.data?.data?.data?.webinars);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.response?.data?.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    setLoading(true);

    if (mentorId) {
      getMentorsDets();
    }
  }, [mentorId]);

  console.log(mentData);

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

  const scrollToBooking = () => {
    const section = document.getElementById("book-session");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

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
  const digitalProducts =
    mentorData?.digitalProducts?.map((book) => ({
      type: "Digital Product",
      title: book?.title,
      category: book?.category,
      bookingType: book?.type,
      thumbnail: book?.thumbnail,
      amount: book?.amount,
      currency: book?.currency,
    })) || [];

  const oneOnOne =
    mentorData?.bookings?.map((book) => ({
      type: "1-on-1 session",
      title: book?.title,
      category: `${book?.sessionDuration} Mins`,
      bookingType: book?.bookingType,
      amount: book?.amount,
      currency: book?.currency,
    })) || [];

  const mentorshipPackages =
    mentorData?.packages?.map((book) => ({
      type: "Mentorship Package",
      title: book?.title,
      category: `${book?.sessionDuration} Mins · Once a week`,
      bookingType: book?.bookingType,
      amount: book?.amount,
      currency: book?.currency,
    })) || [];

  // Exactly 5 items by 2–2–1, with smart fallback
  const limitedItems = pickLimited(
    [digitalProducts, oneOnOne, mentorshipPackages],
    [2, 2, 1],
    5
  );

  const bookSession = (id, type, amount, bookingCurrency, sessionType) => {
    if (token) {
      setBookingId(id);
      setBookType(type);
      setMentorPrice(amount);
      setCurrency(bookingCurrency);
      setLoading(false);
      setSessionType(sessionType);
      console.log({ id });
      setShowBookingModal(true);
    } else {
      const redirectTo = encodeURIComponent(
        window.location.pathname + window.location.search
      );
      console.log({ redirectTo });
      Cookies.set("redirectTo", redirectTo, {
        secure: true,
        sameSite: "Lax",
        domain: ".hackthejobs.com",
        path: "/",
        expires: 1,
      });
      console.log("Base URL:", baseUrl);
      console.log(
        "Redirect URL:",
        `${baseUrl}/auth/login?redirectTo=${redirectTo}`
      );
      window.location.href = `${baseUrl}/auth/login?redirectTo=${redirectTo}`;
      // window.location.href = `http://localhost:3000/auth/login?redirectTo=${redirectTo}`;
    }
  };

  const BuyDigitalProduct = (
    id,
    type,
    amount,
    currency,
    title,
    description,
    thumbnail,
    category
  ) => {
    if (token) {
      setProductId(id);
      setProductType(type);
      setProductPrice(amount);
      setProductCurrency(currency);
      setProductThumbnail(thumbnail);
      setProductTitle(title);
      setProductDescription(description);
      setCategory(category);
      console.log({ id });
      setShowModal(!showModal);
    } else {
      const redirectTo = encodeURIComponent(
        window.location.pathname + window.location.search
      );
      console.log({ redirectTo });
      Cookies.set("redirectTo", redirectTo, {
        secure: true,
        sameSite: "Lax",
        domain: ".hackthejobs.com",
        path: "/",
        expires: 1,
      });

      window.location.href = `${baseUrl}/auth/login?redirectTo=${redirectTo}`;
      // window.location.href = `http://localhost:3001/auth/login?redirectTo=${redirectTo}`;
    }
  };
  const AttendWebinar = (id) => {
    setWebinarId(id);
    setShowWebModal(!showWebModal);
  };

  const duration = (time) => {
    const map = {
      1: "Once",
      2: "Twice",
      3: "Thrice",
      4: "Four times",
      5: "Five times",
      6: "Six times",
      7: "Seven times",
    };
    return map[time] ?? `${time} times`;
  };
  {
    showWebModal && (
      <WebinarModal
        onClick={() => setShowWebModal(false)}
        webinarId={webinarId}
        token={token}
      />
    );
  }
  {
    successModal && (
      <BookingModal
        mentorId={bookingId}
        mentor={`${
          mentorData?.mentor?.firstName + " " + mentorData?.mentor?.lastName
        }`}
        closeModal={() => setSuccessModal(false)}
      />
    );
  }

  {
    showBookingModal && (
      <BookSession
        closeModal={() => setShowBookingModal(false)}
        mentorId={bookingId}
        image={mentorData?.mentor?.image}
        type={bookType}
        price={mentorPrice}
        // mentor={mentor}
        successModal={() => setSuccessModal(true)}
        bookingCurrency={currency}
        sessionType={sessionType}
      />
    );
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
                              src={mentorData?.flag?.flag}
                              alt={mentorData?.mentor?.country + " flag"}
                              className="w-[12px] h-[12px]"
                            />
                            <span className="text-[16px] text-[#667085] font-normal truncate">
                              {mentorData?.mentor?.country}
                            </span>
                          </div>
                          <a href="#book-session">
                            <button className="hidden md:block w-[183px]  h-[44.43px] leading-[150%] text-[12.57px] text-[#ffff]  bg-primary rounded-[6.29px] ">
                              Book Mentor
                            </button>
                          </a>

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

                      <a href="#book-session">
                        <button
                          className={`md:hidden w-[183px]  h-[44.43px] leading-[150%] text-[12.57px] text-[#ffff] bg-primary  rounded-[6.29px] `}
                          // onClick={bookSession}
                          // onClick={handleNextPage}
                        >
                          Book Mentor
                        </button>
                      </a>
                    </div>
                  </div>
                  {/* First eNDING */}
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

                      <div className=" border border-[#F2F2F7] border-r-[#EAEAEA] border-b-[#EAEAEA]  p-8 md:px-4 ">
                        <h4 className="text-[12px] leading-[140%] font-medium mb-2">
                          Available Booking Slots
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

                      {/* Section for Available Bookings */}

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
                      {mentorData?.mentor?.yearsOfExperience && (
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
                                              {new Date(
                                                exp.startDate
                                              ).toLocaleDateString("en-US", {
                                                year: "numeric",
                                                month: "short",
                                              })}{" "}
                                              -{" "}
                                              {exp.endDate
                                                ? new Date(
                                                    exp.endDate
                                                  ).toLocaleDateString(
                                                    "en-US",
                                                    {
                                                      year: "numeric",
                                                      month: "short",
                                                    }
                                                  )
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
                      )}
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

                <div className=" mx-auto mt-3" id="book-session">
                  <section className="flex flex-col  gap-2 bg-[#ffff] border border-[#EAEAEA] p-8  bg-[#ffffff] py-6 px-20 lg:px-10 md:px-4 mb-[10px]  rounded-[8px] w-[1084px] xl:w-[95%] min-h-[212px]  m-auto">
                    <div className="max-w-6xl mx-auto mt-10 p-6 space-y-8 bg-[white] rounded-2xl">
                      <h2 className="text-[28px] font-semibold">
                        Available packages
                      </h2>

                      {/* Digital Products */}
                      {mentData?.digitalProducts?.length > 0 && (
                        <div>
                          <h3 className="text-lg font-semibold mb-4 ">
                            Digital products
                          </h3>
                          <div className="grid md:grid-cols-1 grid-cols-3 gap-6">
                            {mentData?.digitalProducts.map((book, id) => (
                              <div
                                key={id}
                                className="border p-4 border-[#EDEDED] rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer "
                                onClick={() =>
                                  BuyDigitalProduct(
                                    book?._id,
                                    book?.type,
                                    book?.amount,
                                    book?.currency,
                                    book?.title,
                                    book?.description,
                                    book?.thumbnail,
                                    book?.category
                                  )
                                }
                              >
                                <div
                                  className={`h-36 rounded-lg mb-2 bg-cover bg-center `}
                                  style={{
                                    backgroundImage: `url(${book?.thumbnail})`,
                                    // backgroundColor: id === 1 ? "#FF353599" : "#00875399",
                                    backgroundBlendMode: "multiply",
                                  }}
                                />
                                <div className="py-4">
                                  <div className="flex justify-between items-center">
                                    <span className="text-xs bg-[#DEA8061A] text-[#DEA806] px-3 py-1 rounded-[32px] font-medium">
                                      {book?.category}
                                    </span>
                                    {book?.type === "paid" ? (
                                      <div className=" text-sm font-semibold font-inter ">
                                        {getCurrencySymbol(book.currency)}
                                        {formatPrice(book?.amount)}
                                      </div>
                                    ) : (
                                      <span className="text-xs bg-[#3333331A] text-[#333333] px-3 py-1 rounded-[32px] font-medium">
                                        Free
                                      </span>
                                    )}
                                  </div>
                                  <div className="text-sm font-medium mt-4 truncate">
                                    {book?.title}
                                  </div>
                                  <div className="text-sm text-primary mt-2 font-medium inline-flex items-center">
                                    Get product{" "}
                                    <IoIosArrowRoundForward className="text-[16px] text-primary" />
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      {/* 1-on-1 Sessions */}
                      {mentData?.bookings?.sessions.length > 0 && (
                        <div>
                          <h3 className="text-lg font-semibold leading-[140%] mb-4">
                            1-on-1 Sessions
                          </h3>
                          <div className="grid md:grid-cols-1 grid-cols-3 gap-6">
                            {mentData?.bookings?.sessions.map((details, i) => (
                              <div key={i}>
                                <div
                                  className="border border-[#EDEDED] rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer h-[205px] py-7 px-4 space-y-2"
                                  onClick={() =>
                                    bookSession(
                                      details?._id,
                                      details?.bookingType,
                                      details?.amount,
                                      details?.currency
                                    )
                                  }
                                >
                                  <div className="flex gap-[16px] justify-between items-center mb-[10px] ">
                                    <div
                                      className={` h-[22px] px-3 rounded-full flex items-center justify-center ${
                                        details.bookingType === "Paid"
                                          ? " bg-[#DEA8061A]"
                                          : " bg-[#3333331A]"
                                      }`}
                                    >
                                      {details.bookingType === "Paid" && (
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
                                          details?.bookingType === "Paid"
                                            ? "text-[#F3B704]"
                                            : "text-[#333333]"
                                        } `}
                                      >
                                        {details.bookingType}
                                      </span>
                                    </div>
                                    {details.bookingType === "Paid" && (
                                      <div className=" flex items-center gap-1 justify-center">
                                        <span className="text-[#333333] text-[14px] font-bold leading-[140%] font-inter ">
                                          {getCurrencySymbol(details?.currency)}
                                          {formatPrice(details?.amount)}
                                        </span>
                                      </div>
                                    )}
                                  </div>

                                  <div className="font-bold font-inter text-[#333333] text-sm truncate">
                                    {details?.title}
                                  </div>
                                  <p className="text-xs text-[#878787] leading=[140%] line-clamp-3">
                                    {details?.description}
                                  </p>
                                  <div className="flex justify-between items-center">
                                    <div className="text-xs">
                                      {details?.sessionDuration} Mins
                                    </div>
                                    <p className="text-sm text-primary font-medium flex items-center">
                                      Book Session{" "}
                                      <IoIosArrowRoundForward className="text-[16px] text-primary" />
                                    </p>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Group Package */}
                      {mentData?.bookings?.mentorshipPackages.length > 0 && (
                        <div className="">
                          <h3 className="text-lg font-semibold mb-4">
                            Group Package
                          </h3>
                          <div className="grid md:grid-cols-1 grid-cols-2 gap-6">
                            {mentData?.bookings?.mentorshipPackages.map(
                              (pkg, idx) => (
                                <div
                                  key={idx}
                                  onClick={() =>
                                    bookSession(
                                      pkg?._id,
                                      pkg?.bookingType,
                                      pkg?.amount,
                                      pkg?.currency,
                                      "mentorship_package"
                                    )
                                  }
                                >
                                  <div
                                    className="border border-[#EDEDED] h-[174px] border-t-4 shadow-sm hover:shadow-md rounded-md transition-shadow duration-200 cursor-pointer py-7 px-4 space-y-2"
                                    style={{
                                      borderTopColor:
                                        groupColors[idx % groupColors.length],
                                    }}
                                  >
                                    <div className="flex justify-between items-center">
                                      <span
                                        className="text-xs px-2 py-1 rounded-[32px] font-medium"
                                        style={{
                                          backgroundColor: `${
                                            groupColors[
                                              idx % groupColors.length
                                            ]
                                          }1A`,
                                          color:
                                            groupColors[
                                              idx % groupColors.length
                                            ],
                                        }}
                                      >
                                        {pkg.packageDuration}{" "}
                                        {pkg.packageDuration > 1
                                          ? "Weeks"
                                          : "Week"}
                                      </span>
                                      {pkg.bookingType.toLowerCase() ===
                                      "paid" ? (
                                        <div className="text-right text-sm font-semibold">
                                          {getCurrencySymbol(pkg?.currency)}
                                          {formatPrice(pkg?.amount)}
                                        </div>
                                      ) : (
                                        <div className="text-right text-sm font-semibold">
                                          Free
                                        </div>
                                      )}
                                    </div>
                                    <div className="font-semibold text-sm">
                                      {pkg.title}
                                    </div>
                                    <p className="text-xs text-gray-600 line-clamp-2">
                                      {pkg.description}
                                    </p>
                                    <div className="flex justify-between items-center">
                                      <div className="flex items-center gap-2">
                                        <span className="text-[#4F4F4F] text-[10px] leading-[140%]   ">
                                          {pkg.sessionDuration} Mins{" "}
                                        </span>
                                        <span className=" w-2 h-2 bg-[#D9D9D9] rounded-full"></span>
                                        <span className="text-[12px] leading-[140%] text-[#4F4F4F] ">
                                          {duration(pkg.sessionsPerWeek)} a week
                                        </span>
                                      </div>
                                      <p className="text-sm text-primary font-medium flex items-center">
                                        Book Session{" "}
                                        <IoIosArrowRoundForward className="text-[16px] text-primary" />
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              )
                            )}
                          </div>
                        </div>
                      )}
                      {/* //webiner */}
                      {mentData?.webinars?.length > 0 && (
                        <div className="">
                          <h3 className="text-lg font-semibold mb-4">
                            Webinar
                          </h3>
                          <div className="grid md:grid-cols-1 grid-cols-3 gap-6">
                            {mentorData?.webinars?.map((webiner, id) => (
                              <EventCard
                                title={webiner?.title}
                                month={webiner?.date}
                                day={webiner?.date}
                                venue="Google Meet"
                                price={webiner?.type}
                                joinedLabel={webiner.guestAttendees.length}
                                image={webiner.thumbnail}
                                currency={webiner.currency}
                                amount={webiner.amount}
                                key={id}
                                action={() => AttendWebinar(webiner._id)}
                              />
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </section>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default MentorDetails;
