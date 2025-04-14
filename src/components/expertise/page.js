import Image from "next/image";
import Link from "next/link";
import React from "react";

const Expertise = () => {
  return (
    <section className=" font-whyte px-[80px] lgx:px-[25px] xm:px-[16px] sm:py-[48px] flex sm:flex-col justify-between sm:justify-around items-center">
      <div className="w-[49%] lg:w-[56%] sm:w-full sm:order-2">
        <h2 className="font-medium text-[48px] lg:text-[40px] md:text-[32px] text-[#121927] leading-[110%] tracking-[0%] sm:text-center">
          Take your expertise to the next level
        </h2>
        <p className="font-regular text-[18px] md:text-[16px] text-[#333] leading-[150%] tracking-[0%] py-[40px] md:py-[30px] sm:py-10 sm:text-center">
          Join us on the journey to eliminate mediocrity and build global
          talents. Whether you're here to mentor aspiring professionals or lead
          a team to acquire real life work experience as a senior Product
          Manager, your experience can make a huge difference.
        </p>
        <div>
          <Link href="/mentor" target="_blank">
            <button className="mr-[16px] sm:mr-0 sm:mb-4 w-[214px] md:w-[180px] sm:w-[100%] h-[56px] rounded-[8px] bg-[#1453FF] text-[#fff] font-medium text-[16px] leading-[150%] tracking-[3%]">
              Become a Mentor
            </button>
          </Link>
          <a href="/spm" target="_blank">
            <button className=" w-[214px] md:w-[180px] sm:w-[100%] h-[56px] border-[1px] border-[#DADADA] rounded-[8px] bg-[#fff] text-[#1453FF] font-medium text-[16px] leading-[150%] tracking-[3%]">
              Join as Senior PM
            </button>
          </a>
        </div>
      </div>
      <div className="w-[48%] lg:w-[41%] md:w-[43%] sm:w-full sm:order-1 sm:pb-12">
        <Image
          width={586}
          height={620}
          src="/expertise.png"
          alt="expert image"
        />
      </div>
    </section>
  );
};

export default Expertise;
