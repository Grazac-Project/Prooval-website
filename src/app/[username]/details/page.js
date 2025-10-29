"use client";
import Navbar from "@/components/navbar/nav";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import Payment from "./components/payment";
import { getBookings, getSingleWebinar } from "@/api/authentication/auth";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import DetailsLoading from "@/components/skeletonLoader";
import { formatPrice } from "@/Utils/price-formater";
import BookingModal from "@/components/booking-modal";
import Cookies from "js-cookie";
import BookSession from "@/components/book-session";
import EventCard from "@/components/webinerCard";
import WebinarModal from "./components/webinalReg";
import { getCurrencySymbol } from "@/Utils/currency-formatter";
const groupColors = [
  "#F48025",
  "#008753",
  "#FF3535",
  "#DEA806",
  "#1E90FF",
  "#32CD32",
  "#FF69B4",
  "#8A2BE2",
  "#FFD700",
  "#DC143C",
  "#00CED1",
  "#FF7F50",
  "#6A5ACD",
  "#20B2AA",
  "#FF6347",
  "#40E0D0",
  "#A0522D",
  "#7FFF00",
  "#FF4500",
  "#2E8B57",
];
const MentorshipPackages = () => {
  const [showModal, setShowModal] = useState(false);
  const [mentorData, setMentorData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [bookingData, setBookingData] = useState([]);
  const [bookingId, setBookingId] = useState();
  const [bookType, setBookType] = useState("");
  const [mentorPrice, setMentorPrice] = useState("");
  const [currency, setCurrency] = useState("");
  const [productId, setProductId] = useState();
  const [productType, setProductType] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productCurrency, setProductCurrency] = useState("");
  const [productThumbnail, setProductThumbnail] = useState("");
  const [productTitle, setProductTitle] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [category, setCategory] = useState("");
  const [mentorImage, setMentorImage] = useState("");
  const [successModal, setSuccessModal] = useState(false);
  const [showWebModal, setShowWebModal] = useState(false);
  const [webData, setWebData] = useState([]);
  const [webinarId, setWebinarId] = useState();
  const [singleWebData, setSingleWebData] = useState({});
  const [error, setError] = useState("");
  const [sessionType, setSessionType] = useState("");

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const [token, setToken] = useState(""); // use state for token

  useEffect(() => {
    Cookies.remove("redirectTo", {
      path: "/",
      domain: ".hackthejobs.com",
    });
    const data = Cookies.get("user_details");
    try {
      if (data) {
        const parsedData = JSON.parse(data);
        setToken(parsedData.token); // set token in state
        console.log({ token: parsedData.token });
      }
    } catch (error) {
      console.log(error);
    }
  }, []);
  const searchParams = useSearchParams();
  const mentorId = searchParams.get("id");
  const router = useRouter();
  const getMentorsDetails = () => {
    setLoading(true);
    getBookings(mentorId)
      .then((res) => {
        console.log(res.data?.data?.data);
        setMentorData(res.data?.data?.data);
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
      getMentorsDetails();
    }
  }, []);
  const bookSession = (id, type, amount, bookingCurrency, sessionType) => {
    console.log(baseUrl);
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

      window.location.href = `${baseUrl}/auth/login?redirectTo=${redirectTo}`;
      // window.location.href = `http://localhost:3001/auth/login?redirectTo=${redirectTo}`;
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
    // if (token) {
      setProductId(id);
      setProductType(type);
      setProductPrice(amount);
      setProductCurrency(currency);
      setProductThumbnail(thumbnail);
      setProductTitle(title);
      setProductDescription(description);
      setCategory(category);
      console.log({ id });
    //   setShowModal(!showModal);
    // } else {
    //   const redirectTo = encodeURIComponent(
    //     window.location.pathname + window.location.search
    //   );
    //   console.log({ redirectTo });
    //   Cookies.set("redirectTo", redirectTo, {
    //     secure: true,
    //     sameSite: "Lax",
    //     domain: ".hackthejobs.com",
    //     path: "/",
    //     expires: 1,
    //   });

    //   window.location.href = `${baseUrl}/auth/login?redirectTo=${redirectTo}`;
    //   // window.location.href = `http://localhost:3001/auth/login?redirectTo=${redirectTo}`;
    // }
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

  console.log(baseUrl);

  return (
    <div className="bg-[#F2F2F7]  pb-10 min-h-screen">
      {showModal && (
        <Payment
          onClick={() => setShowModal(false)}
          productId={productId}
          productType={productType}
          productPrice={productPrice}
          productCurrency={productCurrency}
          productThumbnail={productThumbnail}
          productTitle={productTitle}
          productDescription={productDescription}
          category={category}
        />
      )}
      {showWebModal && (
        <WebinarModal
          onClick={() => setShowWebModal(false)}
          webinarId={webinarId}
          token={token}
        />
      )}
      {successModal && (
        <BookingModal
          mentorId={bookingId}
          mentor={`${
            mentorData?.mentor?.firstName + " " + mentorData?.mentor?.lastName
          }`}
          closeModal={() => setSuccessModal(false)}
        />
      )}

      {showBookingModal && (
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
      )}

      <Navbar />
      {!loading ? (
        <div className="max-w-6xl mx-auto mt-10 p-6 space-y-8 bg-[white] rounded-2xl">
          <div className=" flex items-center text-sm leading-[150%] font-medium text-[#292D32] ">
            <button
              className="border-[1px] border-[#EAEAEA] rounded-[8px] p-[10px] cursor-pointer"
              onClick={() => router.back()}
            >
              <IoIosArrowRoundBack className="text-[16px] text-[#292D32]" />
            </button>
            <span className="text-2xl font-semibold ml-4">Back</span>
          </div>

          <h2 className="text-[28px] font-semibold">Available packages</h2>

          {/* Digital Products */}
          {mentorData?.digitalProducts?.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-4 ">Digital products</h3>
              <div className="grid md:grid-cols-1 grid-cols-3 gap-6">
                {mentorData?.digitalProducts.map((book, id) => (
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
          {mentorData?.bookings?.sessions.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold leading-[140%] mb-4">
                1-on-1 Sessions
              </h3>
              <div className="grid md:grid-cols-1 grid-cols-3 gap-6">
                {mentorData?.bookings?.sessions.map((details, i) => (
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
          {mentorData?.bookings?.mentorshipPackages.length > 0 && (
            <div className="">
              <h3 className="text-lg font-semibold mb-4">Group Package</h3>
              <div className="grid md:grid-cols-1 grid-cols-2 gap-6">
                {mentorData?.bookings?.mentorshipPackages.map((pkg, idx) => (
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
                        borderTopColor: groupColors[idx % groupColors.length],
                      }}
                    >
                      <div className="flex justify-between items-center">
                        <span
                          className="text-xs px-2 py-1 rounded-[32px] font-medium"
                          style={{
                            backgroundColor: `${
                              groupColors[idx % groupColors.length]
                            }1A`,
                            color: groupColors[idx % groupColors.length],
                          }}
                        >
                          {pkg.packageDuration}{" "}
                          {pkg.packageDuration > 1 ? "Weeks" : "Week"}
                        </span>
                        {pkg.bookingType.toLowerCase() === "paid" ? (
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
                      <div className="font-semibold text-sm">{pkg.title}</div>
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
                ))}
              </div>
            </div>
          )}
          {/* //webiner */}
          {mentorData?.webinars?.length > 0 && (
            <div className="">
              <h3 className="text-lg font-semibold mb-4">Webinar</h3>
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
      ) : (
        <DetailsLoading />
      )}
    </div>
  );
};

export default MentorshipPackages;
