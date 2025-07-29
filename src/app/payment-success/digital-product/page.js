"use client";

import { getMentorsBySlug } from "@/api/authentication/auth";
import Footer from "@/components/footer/footer";
import { Load } from "@/components/loading";
import Navbar from "@/components/navbar/nav";
import Cookies from "js-cookie";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
const BookingModal = () => {
  const { modal } = useParams();


  const handleClose = () => {
    const isProduction = process.env.NEXT_PUBLIC_DOMAIN_DEV;

    window.location.href =
      isProduction === "development"
        ? `${process.env.NEXT_PUBLIC_STAGING_DASH_URL}/digital-products`
        : `${process.env.NEXT_PUBLIC_DASH_URL}/digital-products`;
  };

  return (
    <div className="relative bg-[#F2F2F7]">
      <div className="bg-[#fff] border-b-[1px] xm:border-b-[0px] border-b-[#1453FF]">
        <Link href="#">
          <Image
            src="/hack-logo.png"
            alt="hack the jobs logo"
            width={180}
            height={52}
            className="cursor-pointer mx-auto xm:m-[0px] py-[20px] xm:pb-[0px] xm:px-4"
          />
        </Link>
      </div>

      <div className="h-[85vh] flex items-center justify-center  bg-[#F2F2F7]">
        <div className="bg-[#fff] w-[447px] h-[291px]  md:max-w-full p-8 sm:p-6 pb-[277px] sm:pb-[41px] flex flex-col items-center text-center rounded-[8px]">
          <Image src="/sucess.svg" width={57} height={57} alt="success" />
          <h3 className="font-medium  text-[24px] text-[#121927] leading-[11.71px] py-[16px]">
            Purchase successful
          </h3>
          <p className="font-regular text-[16px] text-[#555555] leading-[24px] mb-[20px]">
            You can now access your purchase
          </p>
          <button
            className="min-w-[76px] h-[44px] rounded-[8px] border-[1px] px-[20px] py-[12px] font-medium bg-[#1453FF] text-[14px] text-[#fff] leading-[19.6px] tracking-[2%] mx-auto"
            onClick={handleClose}
          >
            Go to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
