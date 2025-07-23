"use client";
import Navbar from "@/components/navbar/nav";
import Image from "next/image";
import React, { useState } from "react";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

const MentorshipPackages = () => {
  const [mode, setmode] = useState("Paid");
  const [type, setType] = useState("NGN");
  return (
    <div className="bg-[#F2F2F7] pb-10 h-fit ">
      <Navbar />
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
          <div className="grid md:grid-cols-1 grid-cols-3 gap-6">
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
          <h3 className="text-lg font-semibold mb-4">1-on-1 Sessions</h3>
          <div className="grid md:grid-cols-1 grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i}>
                <div className="border border-[#EDEDED] rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer py-7 px-4 space-y-2">
                  <div className="flex gap-[16px] justify-between items-center mb-[10px] ">
                    <div
                      className={`w-[61px] h-[22px] rounded-full flex items-center justify-center ${
                        mode === "Paid" ? " bg-[#DEA8061A]" : " bg-[#3333331A]"
                      }`}
                    >
                      {/* {mode === "Paid" && ( */}
                      <Image
                        src="/paid.svg"
                        alt="mentor"
                        width={12}
                        height={12}
                        className="w-[12px] h-[12px] rounded-full"
                      />
                      {/* )} */}
                      <span
                        className={` text-[12px] font-medium leading-[18px] font-inter ${
                          mode === "Paid" ? "text-[#F3B704]" : "text-[#333333]"
                        } `}
                      >
                        {mode}
                      </span>
                    </div>
                    {mode === "Paid" && (
                      <div className=" flex items-center gap-1 justify-center">
                        <span className="text-[#333333] text-[14px] font-bold leading-[140%] font-inter ">
                          {type === "NGN" ? "₦" : "$"}
                          100000
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="font-semibold text-sm">
                    {i % 3 === 0
                      ? "Global leadership"
                      : "Be a master at your craft"}
                  </div>
                  <p className="text-xs text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros.
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="text-xs">
                      {i % 3 === 0 ? "45 Mins" : "15 Mins"}
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
                <div className="border border-[#EDEDED] border-t-4 border-t-[#F48025] shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer py-7 px-4 space-y-2">
                  <span className="text-xs bg-[#F480251A] text-[#F48025] px-2 py-1 rounded-[32px] font-medium">
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
                    <div className="text-xs">45 Mins • Once a week</div>
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
    </div>
  );
};

export default MentorshipPackages;
