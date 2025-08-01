"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

const BookingModal = ({ closeModal, mentor }) => {
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
          setMentorData(res.data.data.data.mentor); 
          
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
  
  return (
    <div className="relative">
      <div
        className="fixed inset-0 bg-[#344054B2] opacity-[0.9] z-100"
        onClick={closeModal}
      ></div>
      <div className="fixed inset-0 flex items-center justify-center z-100 p-4 sm:p-6 md:p-8">
        
        <div className="bg-[#fff] w-[447px] h-[291px]  md:max-w-full p-8 sm:p-6 pb-[277px] sm:pb-[41px] flex flex-col items-center text-center rounded-[8px]">
          <Image src="/sucess.svg" width={57} height={57} alt="success" />
          <h3 className="font-medium text-[24px] text-[#121927] leading-[11.71px] py-[16px]">
            Session Booked
          </h3>
          <p className="font-normal text-[16px] text-[#555555] leading-[24px] mb-[20px]">
            Your booking with {mentor} was
            successful. A confirmation email has been sent to your inbox.
          </p>
          <button
            className="w-[76px] h-[44px] rounded-[8px] border-[1px] px-[20px] py-[12px] font-medium bg-[#1453FF] text-[14px] text-[#fff] leading-[19.6px] tracking-[2%] mx-auto"
            onClick={closeModal}
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
