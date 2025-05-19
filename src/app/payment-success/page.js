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
  const [mentorData, setMentorData] = useState({});
  const [loading, setLoading] = useState(false);
  const [slug, setSlug] = useState("");

  useEffect(() => {
    try {
      const mentorSlug = Cookies.get("mentorSlug");
      if (mentorSlug) {
        setSlug(mentorSlug); // Set the slug from cookies
      } else {
        console.error("Mentor slug not found in cookies");
      }
    } catch (err) {
      console.error("Failed to retrieve mentor slug:", err);
    }
  }, []);

  const getMentorsDetails = (slug) => {
    if (!slug) {
      console.error("Slug is not provided");
      return;
    }

    // setLoading(true); // Start loading
    getMentorsBySlug(slug)
      .then((res) => {
        console.log("Mentor Details Response:", res);
        setMentorData(res.data.data.data.mentor); // Update mentor data
        // setLoading(false); // Stop loading
      })
      .catch((err) => {
        console.error("Failed to fetch mentor details:", err);
        toast.error(
          err.response?.data?.message || "Failed to fetch mentor details"
        );
        setLoading(false); // Stop loading
      });
  };

  useEffect(() => {
    if (slug) {
      getMentorsDetails(slug); // Fetch mentor details when slug is available
    }
  }, [slug]);

  const handleClose = () => {
    const isProduction = process.env.NEXT_PUBLIC_DOMAIN_DEV;
   
    if (slug) {
      window.location.href =
        isProduction === "development"
          ? `${process.env.NEXT_PUBLIC_STAGING_URL}/mentors/${slug}`
          : `${process.env.NEXT_PUBLIC_PROD_URL}/mentors/${slug}`;
    } else {
      console.error("Slug is not available");
      window.location.href =
        isProduction === "development"
        ? `${process.env.NEXT_PUBLIC_STAGING_URL}/mentors`
        : `${process.env.NEXT_PUBLIC_PROD_URL}/mentors`;
    }
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
            Session Booked
          </h3>
          <p className="font-regular text-[16px] text-[#555555] leading-[24px] mb-[20px]">
            Your booking with {mentorData?.firstName} {mentorData?.lastName} was
            successful. A confirmation email has been sent to your inbox.
          </p>
          <button
            className="w-[76px] h-[44px] rounded-[8px] border-[1px] px-[20px] py-[12px] font-medium bg-[#1453FF] text-[14px] text-[#fff] leading-[19.6px] tracking-[2%] mx-auto"
            onClick={handleClose}
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
