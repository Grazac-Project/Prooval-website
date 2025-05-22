import React from "react";
import Image from "next/image";

const AuthSide = () => {
  return (
    <section className="font-onest pl-[52px] xxl:pl-[20px] pr-[68px] xxl:pr-[10px] text-[#fff] bg-[#1453FF] h-[100%] w-[100%] relative">
      <Image
        src="/pattern.svg"
        width={728}
        height={952}
        className="absolute top-[0px] left-[0px]"
      />
      <Image
        src="/star.svg"
        width={80}
        height={80}
        className="absolute top-[260px] left-[52px]"
      />
      <h2 className="w-[608px] text-[60px] leading-[72px] font-medium pb-[24px] pt-[468px] z-100 tracking-tighter">
        Skill Up, Connect, and Hack Your Success!
      </h2>
      <p className="text-[20px] w-[618px] leading-[28px] font-normal">
        Embark on a transformative journey with Hackthejobs, where you can
        unlock your full potential through curated learning paths.
      </p>
    </section>
  );
};

export default AuthSide;
