"use client";
import Image from "next/image";
import React from "react";
const Modal = ({close, status}) => {

  const handleClose = () => {
    const isProduction = process.env.NEXT_PUBLIC_DOMAIN_DEV;

    window.location.href =
      isProduction === "development"
        ? `${process.env.NEXT_PUBLIC_STAGING_DASH_URL}/digital-products`
        : `${process.env.NEXT_PUBLIC_DASH_URL}/digital-products`;
  };

  return (
    <div className="h-[323px] w-[462px]  mx-auto top-1/4 p-8 space-y-8 bg-[white] rounded-2xl fixed inset-0 translate-1/2  z-50 overflow-y-auto">
      <div className="bg-[#fff] flex flex-col items-center text-center rounded-[8px]">
        <Image src="/sucess.svg" width={57} height={57} alt="success" />
        <h3 className="font-medium  text-[24px] text-[#121927] leading-[11.71px] py-[16px]">
          {status === "success" ? "Registered Successfully" : "Registration Failed"}
        </h3>
        <p className="font-regular text-[16px] text-[#555555] leading-[24px] mb-[40px]">
        {status === "success"
          ? "You have successfully registered for"
          : "Registration failed for"}
        <span className="font-bold">7 UI design principles to improve product design webinar</span>
        </p>
        <button
          className="w-full h-[44px] rounded-[8px] border-[1px] px-[20px] py-[12px] font-medium bg-[#1453FF] text-[14px] text-[#fff] leading-[19.6px] tracking-[2%] mx-auto"
          onClick={close}
        >
          close
        </button>
      </div>
    </div>
  );
};

export default Modal;
