import Image from "next/image";
import { useState } from "react";

const ValueCard = () => {
  const [changeHover, setChangeHover] = useState(false);
  const [changeHover1, setChangeHover1] = useState(false);
  const [changeHover2, setChangeHover2] = useState(false);
  const [changeHover3, setChangeHover3] = useState(false);

  const handleHover = () => {
    setChangeHover(true);
  };
  const handleHoverOut = () => {
    setChangeHover(false);
  };
  const handleHover1 = () => {
    setChangeHover1(true);
  };
  const handleHoverOut1 = () => {
    setChangeHover1(false);
  };
  const handleHover2 = () => {
    setChangeHover2(true);
  };
  const handleHoverOut2 = () => {
    setChangeHover2(false);
  };
  const handleHover3 = () => {
    setChangeHover3(true);
  };
  const handleHoverOut3 = () => {
    setChangeHover3(false);
  };
  return (
    <div className="w-[100%] flex flex-wrap justify-center gap-[24px] xl:gap-[14px]">
      {/* <div className='flex flex-wrap gap-[24px]  '> */}
      <div
        className=" w-[63.77%] xxl:w-[60%] lg:w-[48%] sm:w-[100%] rounded-[8px] px-[15px] pt-[48px] bg-[#070B14] hover:bg-[#1453FF] relative"
        onMouseOver={handleHover}
        onMouseOut={handleHoverOut}
      >
        <Image src="/card1.png" width={56} height={57} alt="gvh" />
        <h4 className="font-medium text-[24px] leading-[36px] text-[#FBFCFD] pt-8 pb-4 ">
          Personalized Mentorship
        </h4>
        <p className="font-normal text-[16px] text-[#D1D1D1] leading-[24px] pb-[80px]">
          Get advice, and insights from industry experts that help you to
          navigate existing challenges and grow.
        </p>
        <Image
          style={{ filter: changeHover ? "none" : "grayscale(100%)" }}
          src="/value1.png"
          width={324}
          height={131}
          alt="background image"
          className="absolute top-0 right-0 sm:hidden filter grayscale opacity-[0.3]"
        />
        <Image
          style={{ filter: changeHover ? "none" : "grayscale(100%)" }}
          src="/value-mobile.png"
          width={202}
          height={101}
          alt="background image"
          className="absolute top-0 right-0 hidden sm:block filter grayscale opacity-[0.3]"
        />
      </div>
      <div
        className=" w-[33.36%] xxl:w-[36%] lg:w-[48%] sm:w-[100%] rounded-[8px] px-[15px] pt-[48px] bg-[#070B14] hover:bg-[#1453FF] relative"
        onMouseOver={handleHover1}
        onMouseOut={handleHoverOut1}
      >
        <Image src="/card2.png" width={56} height={57} alt="gvh" />
        <h4 className="font-medium text-[24px] leading-[36px] text-[#FBFCFD] pt-8 pb-4 ">
          Community Networking
        </h4>
        <p className="font-normal text-[16px] text-[#D1D1D1] leading-[24px] pb-[56px]">
          Join our community and get open access to people of like minds. Build
          connections that will last throughout your career.
        </p>
        <Image
          style={{ filter: changeHover1 ? "none" : "grayscale(100%)" }}
          src="/value2.png"
          width={220}
          height={140}
          alt="background image"
          className="absolute top-0 right-0 sm:hidden filter grayscale opacity-[0.3]"
        />
        <Image
          style={{ filter: changeHover1 ? "none" : "grayscale(100%)" }}
          src="/value-mobile.png"
          width={202}
          height={101}
          alt="background image"
          className="absolute top-0 right-0 hidden sm:block filter grayscale opacity-[0.3]"
        />
      </div>
      <div
        className="w-[33.36%] xxl:w-[36%] lg:w-[48%] sm:w-[100%] rounded-[8px] px-[15px] pt-[48px] bg-[#070B14] hover:bg-[#1453FF] relative"
        onMouseOver={handleHover2}
        onMouseOut={handleHoverOut2}
      >
        <Image src="/card3.png" width={56} height={57} alt="gvh" />
        <h4 className="font-medium text-[24px] leading-[36px] text-[#FBFCFD] pt-8 pb-4 ">
          Build Your Portfolio
        </h4>
        <p className="font-normal text-[16px] text-[#D1D1D1] leading-[24px] pb-[51px]">
          Collaborate and work with other fellows to build real life projects
          that will help you for your job search.
        </p>
        <Image
          style={{ filter: changeHover2 ? "none" : "grayscale(100%)" }}
          src="/value2.png"
          width={236}
          height={155}
          alt="background image"
          className="absolute top-0 right-0 sm:hidden filter grayscale opacity-[0.3]"
        />
        <Image
          style={{ filter: changeHover2 ? "none" : "grayscale(100%)" }}
          src="/value-mobile.png"
          width={202}
          height={101}
          alt="background image"
          className="absolute top-0 right-0 hidden sm:block filter grayscale opacity-[0.3]"
        />
      </div>
      <div
        className="w-[63.77%] xxl:w-[60%] lg:w-[48%] sm:w-[100%] rounded-[8px] px-[15px] pt-[48px] bg-[#070B14] hover:bg-[#1453FF] relative"
        onMouseOver={handleHover3}
        onMouseOut={handleHoverOut3}
      >
        <Image src="/card4.png" width={56} height={57} alt="gvh" />
        <h4 className="font-medium text-[24px] leading-[36px] text-[#FBFCFD] pt-8 pb-4 ">
          Soft Skills & Career Tips
        </h4>
        <p className="font-normal text-[16px] text-[#D1D1D1] leading-[24px] pb-[80px]">
          Equip yourself with essential soft skills to remain competitive on a
          global scale. You’ll gain expertise in problem-solving, communication,
          and professional work attitude. You’d also learn job search
          strategies, interview preparation material and professional ATS resume
          guide.
        </p>
        <Image
          style={{ filter: changeHover3 ? "none" : "grayscale(100%)" }}
          src="/value1.png"
          width={324}
          height={130}
          alt="background image"
          className="absolute top-0 right-0 sm:hidden filter grayscale opacity-[0.3]"
        />
        <Image
          style={{ filter: changeHover3 ? "none" : "grayscale(100%)" }}
          src="/value-mobile.png"
          width={202}
          height={101}
          alt="background image"
          className="absolute top-0 right-0 hidden sm:block filter grayscale opacity-[0.3]"
        />
      </div>
    </div>
  );
};

export default ValueCard;
