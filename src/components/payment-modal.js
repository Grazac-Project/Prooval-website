"use client";

import { getMentorsBySlug } from "@/api/authentication/auth";
import Cookies from "js-cookie";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const PaymentModal = ({ productTitle, freeMode  }) => {
    const router = useRouter();
  
  return (
    <div className="relative">
      <div
        className="fixed inset-0 bg-[#344054B2] opacity-[0.9] z-100"
        // onClick={closeModal}
      ></div>
      <div className="fixed inset-0 flex items-center justify-center z-100 p-4 sm:p-6 md:p-8">
        
        <div className="bg-[#fff] w-[447px] h-[291px] md:max-w-full p-8 sm:p-6 pb-[277px] sm:pb-[41px] flex flex-col items-center text-center rounded-[8px] fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
                  <Image src="/sucess.svg" width={57} height={57} alt="success" />
                  <h3 className="font-medium text-[24px] text-[#121927] leading-[11.71px] py-[16px]">
                    {freeMode ? "You’re all set!" : "Purchase successful"}
                  </h3>
                  <p className="font-regular text-[16px] text-[#555555] leading-[24px] mb-[20px]">
                    {freeMode
                      ? `${productTitle} has been added to your dashboard. You can access it anytime`
                      : "You can now access your purchase"}
                  </p>
                  <button
                    className="min-w-[76px] h-[44px] rounded-[8px] border-[1px] px-[20px] py-[12px] font-medium bg-[#1453FF] text-[14px] text-[#fff] leading-[19.6px] tracking-[2%] mx-auto"
                    onClick={() => router.push('https://dashboard.prooval.com/auth/login')}
                  >
                    View Product
                  </button>
                </div>
      </div>
    </div>
  );
};

export default PaymentModal;
