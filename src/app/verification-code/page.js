"use client";
import React, { useState } from "react";
import Image from "next/image";
import OtpInput from "react-otp-input";
import AuthSide from "@/components/authSide/page";
import styles from "./verification.module.css";

const Verification = () => {
  const [otp, setOtp] = useState();
  const containerStyle = {
    width: "100%",
    display: "flex",
    gap: "10px",
    // justifyContent: 'space-between',
  };
  const inputStyle = {
    width: "74px",
    height: "74px",
    fontSize: "16px",
    border: "1px solid #E0E0E0",
    borderRadius: "5.17px",
    textAlign: "center",
    outline: "none",
  };
  return (
    <section className="px-10 md:px-20 xm:px-[36px] xxm:px-[20px] py-[41px] flex gap-[79px] xxl:gap-[40px] ">
      <div className="font-onest w-[550px] sm:w-[100%]">
        <Image
          src="/hack-logo.png"
          width={180}
          height={52}
          alt="hackthejob logo"
          className="cursor-pointer"
        />
        <h1 className="font-medium text-8 leading-[41.6px] text-[#2A2A2A] mt-[94px] md:mt-[25px] mb-2">
          Enter the code
        </h1>
        <p className="font-regular text-4 leading-[20.8px] text-[#828282] mb-12 md:mb-8">
          Enter verification code that was sent to{" "}
          <span className="text-[#2A2A2A]">olalekandaramola@gmail.com</span>{" "}
        </p>
        <OtpInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          //   renderSeparator={<span>+</span>}
          renderInput={(props, index) => (
            <input {...props} className={styles.otpInput} key={index} />
          )}
          containerStyle={containerStyle}
        />
        <button className="bg-[#1453FF] text-[#fff] w-[100%] rounded-[4px] h-[48px] mt-[423px] md:mt-[260px] ">
          Verify email
        </button>
        <p className="font-regular text-4 text-[#828282] leading-[20.8px] mt-4 text-center">
          Already have an account?{" "}
          <span className="text-[#1453FF] cursor-pointer">Login</span>
        </p>
      </div>
      <div className="w-[728px] md:hidden">
        <AuthSide />
      </div>
    </section>
  );
};

export default Verification;
