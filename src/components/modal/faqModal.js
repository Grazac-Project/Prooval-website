"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { RiVerifiedBadgeFill } from "react-icons/ri";

const FaqModal = ({ modalClose }) => {
  const [topModalPosition, setTopModalPosition] = useState();
  useEffect(() => {
    const modal = document.querySelector(".modal");
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const modalHeight = 103;
    const modalTopPosition =
      scrollPosition + windowHeight / 2 - modalHeight / 2;
    setTopModalPosition(modalTopPosition);
    // modal.style.top = modalTopPosition + 'px'
  }, []);
  return (
    <section className="font-whyte">
      <div
        className="bg-[black] opacity-[0.7] h-full w-[100%] z-[1000] fixed top-0 left-0"
        onClick={modalClose}
      ></div>
      <div
        style={{ top: topModalPosition + "px" }}
        className="modal w-[588px] sm:w-[343px] ssxm:w-[90%]  md:w-[90%] h-[108px] py-[21px] mx-auto bg-[#fff] rounded-[16px] border-solid border-[1px] border-[#fff] z-[9900] absolute left-[calc(25%)] xl:left-[calc(17%)] lg:left-[calc(14%)] md:left-[calc(5%)] sm:left-[calc(19%)] xm:left-[calc(10%)] xxxm:left-[calc(7%)]"
      >
        <div className="flex justify-center items-center gap-[2px] mb-[8px]">
          <RiVerifiedBadgeFill className="text-[#13AD61] text-[24px]" />
          <h4 className=" font-bold text-[24px] leading-[36px] text-[#1C1C1C] text-center">
            
          </h4>
        </div>
        <p className="font-regular text-[20px] sm:text-[16px] leading-[30px] sm:leading-[19.2px] text-[#667085] text-center">
          Your message has been sent
        </p>
        <span
          className="text-[24px] absolute top-[21px] right-[20px] text-[#373737] z-[10001] cursor-pointer"
          onClick={modalClose}
        >
          &times;
        </span>
      </div>
    </section>
  );
};

export default FaqModal;
