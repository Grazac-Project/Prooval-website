"use client";
import Navbar from "@/components/navbar/nav";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import Payment from "./components/payment";
import { getBookings } from "@/api/authentication/auth";
import { useParams, useSearchParams } from "next/navigation";
import DetailsLoading from "@/components/skeletonLoader";
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
  const [mode, setmode] = useState("Paid");
  const [type, setType] = useState("NGN");
  const [showModal, setShowModal] = useState(false);
  const [mentorData, setMentorData] = useState([]);
  const [loading, setLoading] = useState(true);
 
  const searchParams = useSearchParams();
  const mentorId = searchParams.get("id");
  const getMentorsDetails = () => {
    setLoading(true);
    getBookings(mentorId)
      .then((res) => {
        // console.log(res);
        setMentorData(res.data.data.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.response?.data?.message);
        setLoading(false);
      });
  };
   const handlePaymentModal = () => {
    const id = mentorId;
    if (id) {
      // window.location.href = `${baseUrl}/mentors/${slug}/details?id=${id}`;
      // window.location.href = `http://localhost:3000/mentors/${slug}/details?id=${id}`;
      setShowModal(!showModal);
    }
  };

  useEffect(() => {
    setLoading(true);

    if (mentorId) {
      getMentorsDetails();
    }
  }, []);
  return (
    <div className="bg-[#F2F2F7] pb-10 h-fit ">
      {showModal && <Payment onClick={handlePaymentModal} />}
      <Navbar />
      {!loading ? (
        <div className="max-w-6xl mx-auto mt-10 p-6 space-y-8 bg-[white] rounded-2xl">
          <div className=" flex items-center text-sm leading-[150%] font-medium text-[#292D32] ">
            <button
              className="border-[1px] border-[#EAEAEA] rounded-[8px] p-[10px] cursor-pointer"
              // onClick={closeModal}
            >
              <IoIosArrowRoundBack className="text-[16px] text-[#292D32]" />
            </button>
            <span className="text-2xl font-semibold ml-4">Back</span>
          </div>

          <h2 className="text-[28px] font-semibold">Available packages</h2>

          {/* Digital Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4 ">Digital products</h3>
            <div
              className="grid md:grid-cols-1 grid-cols-3 gap-6"
              onClick={handlePaymentModal}
            >
              {[1, 2].map((id) => (
                <div
                  key={id}
                  className="border p-4 border-[#EDEDED] rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer "
                >
                  <div
                    className={`h-36 rounded-lg mb-2 bg-cover bg-center `}
                    style={{
                      backgroundImage: `url('/about-hero.png')`,
                      backgroundColor: id === 1 ? "#FF353599" : "#00875399",
                      backgroundBlendMode: "multiply",
                    }}
                  />
                  <div className="py-4">
                    <div className="flex justify-between items-center">
                      <span className="text-xs bg-[#DEA8061A] text-[#DEA806] px-3 py-1 rounded-[32px] font-medium">
                        eBook
                      </span>
                      <div className=" text-sm font-semibold font-inter ">
                        ₦25,000
                      </div>
                    </div>
                    <div className="text-sm font-medium mt-4">
                      How to land a remote job in 2025
                    </div>
                    <a
                      href="#"
                      className="text-sm text-primary mt-2 font-medium inline-flex items-center"
                    >
                      Get product{" "}
                      <IoIosArrowRoundForward className="text-[16px] text-primary" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 1-on-1 Sessions */}
          <div>
            <h3 className="text-lg font-semibold leading-[140%] mb-4">1-on-1 Sessions</h3>
            <div className="grid md:grid-cols-1 grid-cols-3 gap-6">
              {mentorData?.bookings.map((details, i) => (
                <div key={i}>
                  <div className="border border-[#EDEDED] rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer h-[205px] py-7 px-4 space-y-2">
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
                            {type === "NGN" ? "₦" : "$"}
                            {details?.amount}
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="font-bold font-inter text-[#333333] text-sm truncate">
                      {details?.title }
                    </div>
                    <p className="text-xs text-[#878787] leading=[140%] line-clamp-3">
                      {details?.description }
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="text-xs">
                        {details?.duration} Mins
                      </div>
                      <a
                        href="#"
                        className="text-sm text-primary font-medium flex items-center"
                      >
                        Book Session{" "}
                        <IoIosArrowRoundForward className="text-[16px] text-primary" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Group Package */}
          <div>
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
                      <a
                        href="#"
                        className="text-sm text-primary font-medium flex items-center"
                      >
                        Book Session{" "}
                        <IoIosArrowRoundForward className="text-[16px] text-primary" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <DetailsLoading />
      )}
    </div>
  );
};

export default MentorshipPackages;
