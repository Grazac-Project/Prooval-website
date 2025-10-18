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
    <>
    <div className="w-[100%] flex flex-wrap justify-center gap-[24px] xl:gap-[14px]">
      {/* <div className='flex flex-wrap gap-[24px]  '> */}
      <div
        className=" w-[63.77%] xxl:w-[60%] lg:w-[48%] sm:w-[100%] rounded-[8px] px-[15px] pt-[48px] bg-[#070B14] hover:bg-[#1453FF] relative"
        onMouseOver={handleHover}
        onMouseOut={handleHoverOut}
      >
        <Image src="/glimpse1.png" width={56} height={57} alt="gvh" />
        <h4 className="font-medium text-[24px] leading-[36px] text-[#FBFCFD] pt-8 pb-4 ">
          Unlimited Products
        </h4>
        <p className="font-normal text-[16px] text-[#D1D1D1] leading-[24px] pb-[80px]">
          Upload and sell as many digital products as you want: courses, guides, templates, eBooks, or videos.<br/> 
          There’s no limit to how much value you can share or how much you can earn.
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
        <Image src="/glimpse2.png" width={56} height={57} alt="gvh" />
        <h4 className="font-medium text-[24px] leading-[36px] text-[#FBFCFD] pt-8 pb-4 ">
          Custom profile link
        </h4>
        <p className="font-normal text-[16px] text-[#D1D1D1] leading-[24px] pb-[56px]">
          Get a personalized Prooval link that’s uniquely yours. 
          Add it to your bio, website, or social pages so your audience can find, book, or buy from you in just one click.
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
        <Image src="/glimpse3.png" width={56} height={57} alt="gvh" />
        <h4 className="font-medium text-[24px] leading-[36px] text-[#FBFCFD] pt-8 pb-4 ">
          Multiple Currencies
        </h4>
        <p className="font-normal text-[16px] text-[#D1D1D1] leading-[24px] pb-[51px]">
          Sell globally without borders. Prooval supports multiple currencies, 
          making it easy for your audience to pay you from anywhere while you receive payments in your local currency.
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
        <Image src="/glimpse4.png" width={56} height={57} alt="gvh" />
        <h4 className="font-medium text-[24px] leading-[36px] text-[#FBFCFD] pt-8 pb-4 ">
          Host a webinar
        </h4>
        <p className="font-normal text-[16px] text-[#D1D1D1] leading-[24px] pb-[80px]">
          Connect live with your audience. Run mentorship sessions, discovery calls, 
          or online classes directly from <br/> your dashboard, no external tools needed.
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
    </>
  );
};

export default ValueCard;
