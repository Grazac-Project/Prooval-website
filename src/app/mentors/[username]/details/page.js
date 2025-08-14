"use client";
import Navbar from "@/components/navbar/nav";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import Payment from "./components/payment";
import { getBookings } from "@/api/authentication/auth";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import DetailsLoading from "@/components/skeletonLoader";
import { formatPrice } from "@/Utils/price-formater";
import BookingModal from "@/components/booking-modal";
import Cookies from "js-cookie";
import BookSession from "@/components/book-session";
import EventCard from "@/components/webinerCard";
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

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  // const [token, setToken] = useState();
  const [token, setToken] = useState(""); // use state for token

  useEffect(() => {
    Cookies.remove("redirectTo");
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
        // console.log(res);
        setMentorData(res.data?.data?.data);
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
  const bookSession = (id, type, amount, bookingCurrency) => {
    if (token) {
      setBookingId(id);
      setBookType(type);
      setMentorPrice(amount);
      setCurrency(bookingCurrency);
      setLoading(false);
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

      window.location.href = `${baseUrl}/auth/signup?redirectTo=${redirectTo}`;
      // window.location.href = `http://localhost:3001/auth/signup?redirectTo=${redirectTo}`;
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

      window.location.href = `${baseUrl}/auth/signup?redirectTo=${redirectTo}`;
      // window.location.href = `http://localhost:3001/auth/signup?redirectTo=${redirectTo}`;
    }
  };

  return (
    <div className="bg-[#F2F2F7]  pb-10 h-[100%] ">
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
          {mentorData?.packages.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-4 ">Digital products</h3>
              <div className="grid md:grid-cols-1 grid-cols-3 gap-6">
                {mentorData?.packages.map((book, id) => (
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
                        {book?.type === "paid" && (
                          <div className=" text-sm font-semibold font-inter ">
                            {book.currency === "NGN" ? "₦" : "$"}
                            {formatPrice(book?.amount)}
                          </div>
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
          {mentorData?.bookings.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold leading-[140%] mb-4">
                1-on-1 Sessions
              </h3>
              <div className="grid md:grid-cols-1 grid-cols-3 gap-6">
                {mentorData?.bookings.map((details, i) => (
                  <div key={i}>
                    <div
                      className="border border-[#EDEDED] rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer h-[205px] py-7 px-4 space-y-2"
                      onClick={() =>
                        bookSession(
                          details?._id,
                          details?.amount,
                          details?.bookingType,
                          details?.currency
                        )
                      }
                    >
                      <div className="flex gap-[16px] justify-between items-center mb-[10px] ">
                        <div
                          className={`w-[61px] h-[22px] rounded-full flex items-center justify-center ${
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
                              {details?.currency === "NGN" ? "₦" : "$"}
                              {details?.amount}
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
                        <div className="text-xs">{details?.sessionDuration} Mins</div>
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
          <div className="hidden">
            <h3 className="text-lg font-semibold mb-4">Group Package</h3>
            <div className="grid md:grid-cols-1 grid-cols-2 gap-6">
              {[
                { duration: "3 Months", price: "₦250,000" },
                { duration: "1 Month", price: "₦250,000" },
              ].map((pkg, idx) => (
                <div key={idx}>
                  <div
                    className="border border-[#EDEDED] border-t-4 shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer py-7 px-4 space-y-2"
                    style={{
                      borderTopColor: groupColors[idx % groupColors.length],
                    }}
                  >
                    <span
                      className="text-xs px-2 py-1 rounded-[32px] font-medium"
                      style={{
                        backgroundColor: `${
                          groupColors[idx % groupColors.length]
                        }1A`,
                        color: groupColors[idx % groupColors.length],
                      }}
                    >
                      {pkg.duration}
                    </span>
                    <div className="text-right text-sm font-semibold">
                      {pkg.price}
                    </div>
                    <div className="font-semibold text-sm">
                      Let’s talk about negotiations
                    </div>
                    <p className="text-xs text-gray-600">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros...
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <span className="text-[#4F4F4F] text-[10px] leading-[140%]   ">
                          45 Mins{" "}
                        </span>
                        <span className=" w-2 h-2 bg-[#D9D9D9] rounded-full"></span>
                        <span className="text-[12px] leading-[140%] text-[#4F4F4F] ">
                          Once a week
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

          {/* //webiner */}
          <div className="grid md:grid-cols-1 gap-7 grid-cols-2">
            <EventCard
              title="7 UI design principles to improve product design"
              month="SEPT"
              day="10"
              venue="Google Meet"
              price="Free"
              joinedLabel="149K Joined already"
              image="/"
              href="#"
            />
            
          </div>
        </div>
      ) : (
        <DetailsLoading />
      )}
    </div>
  );
};

export default MentorshipPackages;
