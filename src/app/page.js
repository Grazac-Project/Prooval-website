"use client";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import ValueCard from "@/components/valueCard/valueCard";
import { MdVerified } from "react-icons/md";
import { cardValues, imageCards, testimonials } from "@/constants/constant";
import Slider from "react-slick";
import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/nav";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Modal from "@/components/modal/modal";
import { fetchMentors } from "@/api/authentication/auth";
import useAnalytics from "@/components/useAnalytics";
import Expertise from "@/components/expertise/page";
import Cookies from "js-cookie";
import { FaArrowRightLong } from "react-icons/fa6";
import { TypeAnimation } from "react-type-animation";

const Landing = () => {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [angle, setAngle] = useState("2.93deg");
  const [color, setColor] = useState("#F2C003");
  const [border, setBorder] = useState("#FFEFB2");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [dotPosition, setDotPosition] = useState(1);
  const [load, setLoad] = useState(false);
  const [logo, setLogo] = useState(false);
  const [logo1, setLogo1] = useState(false);
  const [logo2, setLogo2] = useState(false);
  const [logo3, setLogo3] = useState(false);
  const [logo4, setLogo4] = useState(false);
  const [listOfMentors, setListOfMentors] = useState([]);

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const sliderDotChange = setInterval((index) => {
    if (index === 0) {
      setDotPosition(index);
    }
    if (index === 1) {
      setDotPosition(index);
    }
    if (index === 2) {
      setDotPosition(index);
    }
  }, 0);

  let sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: false,
    dotsClass: "slick-dots custom-dots",
    // beforeChange: (current, next) => {console.log(current);
    //   console.log(next);
    //   setCurrentSlide(next)},

    afterChange: (index) => {
      setDotPosition(index);
    },
  };
  const logoSettings = {
    dots: false,
    infinite: true,
    speed: 900,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: false,
    dotsClass: "slick-dots custom-dots",
    beforeChange: (current, next) => setCurrentSlide(next),

    afterChange: (index) => setCurrentSlide(index),
  };
  const mentorSettings = {
    dots: false,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: "15px",
    arrows: false,
    nextArrow: false,
    prevArrow: false,
    dotsClass: "slick-dots custom-dots",
    beforeChange: (current, next) => setCurrentSlide(next),

    afterChange: (index) => setCurrentSlide(index),
  };

  const goToSlide = (index, i) => {
    if (index === i) {
      sliderRef.slickGoTo(i);
      // setCurrentSlide(i);
      setDotPosition(i);
    }
    sliderRef.slickGoTo(i);
    // setCurrentSlide(i);
    setDotPosition(i);
  };

  const handleMouseOver = () => {
    setLoad(true);
  };

  const handleLogoEvent = () => {
    setLogo((prev) => !prev);
  };
  const handleLogoEvent1 = () => {
    setLogo1((prev) => !prev);
  };
  const handleLogoEvent2 = () => {
    setLogo2((prev) => !prev);
  };
  const handleLogoEvent3 = () => {
    setLogo3((prev) => !prev);
  };
  const handleLogoEvent4 = () => {
    setLogo4((prev) => !prev);
  };

  const handleContact = () => {
    router.push("/faq#contact-form");
  };
  useEffect(() => {
    fetchMentors("")
      .then((res) => {
        // console.log(res);
        // console.log(res.data.data.mentors[0].firstName);
        const mentors = res.data.data.mentors;
        const mentorsSlice = mentors.slice(0, 8);
        setListOfMentors(mentorsSlice);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setAngle((prevAngle) => {
        return prevAngle === "-2.93deg" ? "2.93deg" : "-2.93deg";
      });
      setColor((prevColor) => {
        return prevColor === "#F2C003" ? "#1453ff" : "#F2C003";
      });
      setBorder((prevColor) => {
        return prevColor === "#FFEFB2" ? "#B3C7FF" : "#FFEFB2";
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  // console.log(listOfMentors);

  const GA_TRACKING_ID = "G-JS3RNTYLD8";
  useAnalytics(GA_TRACKING_ID);
  const handleMentorClick = (mentorSlug) => {
    Cookies.set("mentorSlug", mentorSlug, { expires: 7 });
    router.push(`/mentors/${mentorSlug}`);
  };
  return (
    <div className="overflow-x-hidden ">
      <Navbar />
      {showModal && <Modal modalClose={() => setShowModal(false)} />}
      <div className="max-w-[1440px] mx-auto">
        {/* Hero Section */}
        <section className="font-onest mx-auto relative bg-[#FFFFFF]">
          <div className="flex flex-col items-center justify-center text-center py-[48px]">
            {/* Heading */}
            <h1 className="font-bold text-[60px] text-center xxl:text-[50px] xl:text-[45px] lg:text-[35px] md:text-[25px] sm:text-[40px] xm:text-[35px] xxm:text-[30px] leading-[83.2px] xxl:leading-[75px] md:leading-[44px] sm:leading-[54px] text-[#121927]">
              Monetize Your
            </h1>

            {/* Typing animation + static text */}
            <div className="flex flex-wrap justify-center items-center gap-2">
              <TypeAnimation
                sequence={[
                  "1-on-1 Booking",
                  1500,
                  "Mentorship",
                  1500,
                  "Talent",
                  1500,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-primary font-[700] text-[60px] xxl:text-[50px] xl:text-[45px] lg:text-[35px] md:text-[25px] sm:text-[40px] xm:text-[35px] xxm:text-[30px] leading-[68px]"
              />
              <span className="text-[60px] xxl:text-[50px] xl:text-[45px] lg:text-[35px] md:text-[25px] sm:text-[40px] xm:text-[35px] xxm:text-[30px] leading-[68px] font-[700] text-[#121927]">
                in One Place
              </span>
            </div>

            {/* Paragraph & Buttons */}
            <div className="max-w-[989px] pt-4">
              <p className="font-normal text-[18px] leading-[160%] text-[#727272] pb-8">
                Turn what you know into income by hosting webinars, selling
                resources, and offering 1:1 bookings. Everything is designed to
                help you grow your brand and build meaningful connections with
                your audience.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/mentors">
                  <button className="w-[195px] md:w-[130px] sm:w-[120px] xm:w-[140px] sxm:w-[130px] font-medium leading-6 tracking-[3%] text-[16px] text-[#fff] bg-primary rounded-[8px] md:px-3 py-4">
                    View All Experts
                  </button>
                </Link>
                <Link href="/signup">
                  <button className="w-[226px] md:w-[150px] sm:w-[150px] xm:w-[160px] sxm:w-[150px] font-medium leading-6 tracking-[3%] text-[16px] text-primary bg-[#fff] rounded-[8px] px-10 lg:px-4 md:px-2 py-4 border border-[#DADADA]">
                    Create your profile
                  </button>
                </Link>
              </div>
            </div>
          </div>
          {/* Hero Image  */}
          <div className="relative w-full max-w-[1200px] mx-auto mt-16">
            {/* Main Image */}
            <div className="w-full">
              <img
                src="/dashboard_img.png"
                alt="Main Mockup"
                className="w-full h-auto "
              />
            </div>
            {/* Yellow Stats Card */}
            <div className="absolute left-[-20px] bottom-[100px] sm:left-2 sm:bottom-2 bg-[#FFCA01] text-[#FBFCFD] rounded-xl shadow-lg py-[32px] px-[26px] w-[351px]">
              <div className="flex flex-col space-y-2">
                {/* Digital Products */}
                <div className="flex items-center justify-between bg-[#0000001A] p-2 rounded-md">
                  <div className="flex flex-col">
                    <span className="text-2xl font-bold leading-tight">
                      50+
                    </span>
                    <span className="text-[12.29px] font-normal leading-none">
                      Digital Products
                    </span>
                  </div>
                  <img src="/product_img.png" alt="icon" className="w-6 h-6" />
                </div>

                {/* Page Views */}
                <div className="flex items-center justify-between bg-[#0000001A] p-2 rounded-md">
                  <div className="flex flex-col">
                    <span className="text-2xl font-bold leading-tight">
                      8,000+
                    </span>
                    <span className="text-[12.29px] font-normal leading-none">
                      Page Views
                    </span>
                  </div>
                  <img src="/pageView.png" alt="icon" className="w-6 h-6" />
                </div>

                {/* Sessions Booked */}
                <div className="flex items-center justify-between bg-[#0000001A] p-2 rounded-md">
                  <div className="flex flex-col">
                    <span className="text-2xl font-bold leading-tight">
                      200+
                    </span>
                    <span className="text-[12.29px] font-normal leading-none">
                      Sessions Booked
                    </span>
                  </div>
                  <img
                    src="/sessionBooked.png"
                    alt="icon"
                    className="w-6 h-6"
                  />
                </div>
              </div>
            </div>

            {/* Earnings Badge - Top Right */}
            <div className="absolute top-[20px] right-[40px] bg-white rounded-full shadow-md flex items-center gap-2 px-4 py-2">
              <img src="/preview_sign.png" alt="coin" className="w-5 h-5" />
              <span className="font-semibold">$6,000</span>
            </div>

            {/* Booking Badge - Mid Right */}
            <div className="absolute top-[45%] right-[-15px] bg-white rounded-full shadow-md flex items-center gap-2 px-4 py-2">
              <img src="/preview_sign.png" alt="booking" className="w-5 h-5" />
              <span className="font-semibold">+50</span>
            </div>
          </div>
        </section>
        <section className="h-[64px] sm:h-[40px] bg-[#fff]"></section>
        <section className="font-onest px-[80px] xl:px-[25px] xm:px-[16px] py-[48px] sm:py-[32px] bg-[#F9F9F9]">
          <h2 className="font-medium text-[24px] leading-[38px] text-[#121927] text-center mb-[32px]">
            As featured in
          </h2>
          <div className="sm:hidden flex justify-between items-center">
            <div
              className=""
              onMouseOver={handleLogoEvent}
              onMouseOut={handleLogoEvent}
            >
              {logo ? (
                <Image
                  src="/techcabal.png"
                  alt="group of pictures"
                  width={164}
                  height={39}
                />
              ) : (
                <Image
                  src="/techcabal-initial.png"
                  alt="group of pictures"
                  width={164}
                  height={39}
                />
              )}
            </div>
            <div
              className=""
              onMouseOver={handleLogoEvent1}
              onMouseOut={handleLogoEvent1}
            >
              {logo1 ? (
                <Image
                  src="/bendada.png"
                  alt="group of pictures"
                  width={179}
                  height={29}
                />
              ) : (
                <Image
                  src="/bendada-initial.png"
                  alt="group of pictures"
                  width={179}
                  height={29}
                />
              )}
            </div>
            <div
              className=""
              onMouseOver={handleLogoEvent2}
              onMouseOut={handleLogoEvent2}
            >
              {logo2 ? (
                <Image
                  src="/techcrunch.png"
                  alt="group of pictures"
                  width={74}
                  height={37}
                />
              ) : (
                <Image
                  src="/techcrunch-initial.png"
                  alt="group of pictures"
                  width={74}
                  height={37}
                />
              )}
            </div>
            <div
              className=""
              onMouseOver={handleLogoEvent3}
              onMouseOut={handleLogoEvent3}
            >
              {logo3 ? (
                <Image
                  src="/bi.png"
                  alt="group of pictures"
                  width={165}
                  height={15}
                />
              ) : (
                <Image
                  src="/bi-initial.png"
                  alt="group of pictures"
                  width={165}
                  height={15}
                />
              )}
            </div>
            <div
              className=""
              onMouseOver={handleLogoEvent4}
              onMouseOut={handleLogoEvent4}
            >
              {logo4 ? (
                <Image
                  src="/techpoint.png"
                  alt="group of pictures"
                  width={164}
                  height={50}
                />
              ) : (
                <Image
                  src="/techpoint-initial.png"
                  alt="group of pictures"
                  width={164}
                  height={50}
                />
              )}
            </div>
          </div>
          <div className="hidden sm:block sm:pb-[0px] sm:w-[100%] xm:w-[100%] mx-auto px-[80px] lgx:px-[25px] sm:px-[16px]">
            <Slider
              ref={(slider) => {
                sliderRef = slider;
              }}
              {...logoSettings}
              className=""
            >
              <div
                className="pr-[30px]"
                onMouseOver={handleLogoEvent}
                onMouseOut={handleLogoEvent}
              >
                {logo ? (
                  <Image
                    src="/techcabal-mobile.png"
                    alt="group of pictures"
                    width={146}
                    height={34}
                  />
                ) : (
                  <Image
                    src="/techcabal-mobile-initial.png"
                    alt="group of pictures"
                    width={146}
                    height={34}
                  />
                )}
              </div>
              <div
                className="pr-[30px]"
                onMouseOver={handleLogoEvent1}
                onMouseOut={handleLogoEvent1}
              >
                {logo1 ? (
                  <Image
                    src="/bendada-mobile.png"
                    alt="group of pictures"
                    width={160}
                    height={26}
                  />
                ) : (
                  <Image
                    src="/bendada-mobile-initial.png"
                    alt="group of pictures"
                    width={160}
                    height={26}
                  />
                )}
              </div>
              <div
                className=""
                onMouseOver={handleLogoEvent2}
                onMouseOut={handleLogoEvent2}
              >
                {logo2 ? (
                  <Image
                    src="/techcrunch-mobile.png"
                    alt="group of pictures"
                    width={66}
                    height={36}
                  />
                ) : (
                  <Image
                    src="/techcrunch-mobile-initial.png"
                    alt="group of pictures"
                    width={66}
                    height={36}
                  />
                )}
              </div>
              <div
                className="pr-[30px]"
                onMouseOver={handleLogoEvent3}
                onMouseOut={handleLogoEvent3}
              >
                {logo3 ? (
                  <Image
                    src="/bi-mobile.png"
                    alt="group of pictures"
                    width={147}
                    height={14}
                  />
                ) : (
                  <Image
                    src="/bi-mobile-initial.png"
                    alt="group of pictures"
                    width={147}
                    height={14}
                  />
                )}
              </div>
              <div
                className="pr-[30px]"
                onMouseOver={handleLogoEvent4}
                onMouseOut={handleLogoEvent4}
              >
                {logo4 ? (
                  <Image
                    src="/techpoint-mobile.png"
                    alt="group of pictures"
                    width={146}
                    height={44}
                  />
                ) : (
                  <Image
                    src="/techpoint-mobile-initial.png"
                    alt="group of pictures"
                    width={146}
                    height={45}
                  />
                )}
              </div>
            </Slider>
          </div>
        </section>
        <section className="h-[64px] bg-[#fff]"></section>
        <section className="px-[80px] xl:px-[25px] xm:px-4 py-[137.5px] sm:py-[62px] font-onest bg-[#121927] relative">
          <h2 className="font-medium text-[48px] lg:text-[32px] leading-[52.8px] lg:leading-[41.6px] text-[#FFFFFF] text-center w-[865px] lg:w-[95%] mx-auto pb-3">
            What you get from Hackthejobs.
          </h2>
          <h3 className="font-normal text-[18px] text-[#FCFCFC] lg:text-[16px] leading-6 lg:leading-[20.8px] text-center text-[#333] w-[690px] md:w-[100%] mx-auto pb-[42px]">
            Access industry experts in your field you need to attract global
            opportunities.
          </h3>

          <ValueCard />
          <Image
            src="/big-star1.png"
            width={127}
            height={128}
            alt="star"
            className="absolute top-[0] right-[154px] lgx:hidden block"
          />
          <Image
            src="/mobile-bigstar.png"
            width={74}
            height={65}
            alt="star"
            className="absolute top-[0] right-[16px] lgx:block hidden"
          />
        </section>

        <section className="font-onest flex justify-between sm:flex-col px-[80px] lgx:px-[25px] xm:px-[16px] pt-[96px] sm:pt-[40px] pb-[64px] sm:pb-[24px]">
          <div>
            <h3 className="font-semibold w-[768px] xl:w-[720px] lgx:w-[630px] lg:w-[560px] md:w-[510px] sm:w-[100%] text-[48px] xl:text-[44px] lgx:text-[36px] md:text-[32px] leading-[52.8px] sm:leading-[35.2px] text-[#121927] mb-[20px] sm:mb-[0px] sm:text-center">
              We’ve got outstanding mentors to guide you.
            </h3>
            <p className="font-normal text-[20px] leading-[30px] text-[#4f4f4f] w-[768px] lgx:w-[670px] lg:w-[560px] md:w-[510px] sm:hidden">
              We are not leaving you alone on this journey, connect with
              exceptional mentors from various backgrounds and openly discuss
              your career challenges and blockers with them.
            </p>
          </div>
          <Link href="/mentors">
            <button className="w-[239px] lg:w-[200px] h-[64px] rounded-[8px] bg-[#1453FF] text-[#fff] font-medium text-[16px] leading-6 tracking-[3%] sm:hidden">
              View More Mentors
            </button>
          </Link>
        </section>
        {/* <section className="pb-[96px] sm:pb-[52px] ">
          <div className="sm:hidden flex px-[80px] lgx:px-[25px] sm:px-[16px] flex justify-center lg:justify-start flex-wrap gap-[22px] pb-[96px] sm:pb-[52px]">
            {listOfMentors.map((listOfMentor, i) => {
              return (
                <div key={i} className="font-onest w-[23%] lg:w-[29%] ">
                  <div className="h-[296px] 1xl:h-[256px] xxl:h-[230px] lgx:h-[210px] overflow-hidden">
                    <Image
                      src={listOfMentor.image}
                      width={296}
                      height={296}
                      alt="mentor image"
                      className="object-cover filter grayscale hover:filter-none"
                    />
                  </div>
                  <h4 className="font-medium text-[20px] leading-[30px] text-[#101828] mt-[24px] mb-[4px]">
                    {listOfMentor?.firstName} {listOfMentor?.lastName}
                  </h4>
                  <h5 className="font-normal text-[18px] leading-[28px] text-[#1453FF] mb-[16px]">
                    {listOfMentor?.role}
                  </h5>
                  <p className="font-normal  text-[16px] leading-[20.8px] text-[#667085]">
                    {listOfMentor?.company}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="font-inter hidden flex justify-center sm:block sm:pb-[40px] sm:w-[400px] xm:w-[100%] mx-auto px-[80px] lgx:px-[25px] sm:px-[16px]">
            <Slider
              ref={(slider) => {
                sliderRef = slider;
              }}
              {...mentorSettings}
              className=""
            >
              {listOfMentors.map((listOfMentor, i) => {
                return (
                  <div
                    key={i}
                    className="font-onest mx-auto sm:w-[302px] xm:w-[80%]"
                  >
                    <div className="h-[296px] sm:h-[258px] overflow-hidden">
                      <Image
                        src={listOfMentor.image}
                        width={363}
                        height={297}
                        alt="mentor image"
                        className="object-cover px-[5px]"
                      />
                    </div>
                    <h4 className="font-medium text-[20px] leading-[30px] text-[#101828] mt-[24px] mb-[4px] ">
                      {listOfMentor.firstName} {listOfMentor.lastName}
                    </h4>
                    <h5 className="font-normal text-[18px] leading-[28px] text-[#1453FF] mb-[16px]">
                      {listOfMentor.role}
                    </h5>
                    <p className="font-normal w-[296px] xm:w-[100%] text-[16px] leading-[20.8px] text-[#667085]">
                      {listOfMentor.company}
                    </p>
                  </div>
                );
              })}
            </Slider>
          </div>

          <button className=" w-[239px] h-[64px] rounded-[8px] bg-[#1453FF] text-[#fff] font-medium text-[16px] leading-6 tracking-[3%] mx-auto sm:block hidden">
            View More Mentors
          </button>
        </section> */}
        <section className="pb-[96px] sm:pb-0 ">
          <div className="flex sm:hidden  xm:justify-around lg:justify-start flex-wrap gap-[32px] pb-[0px] sm:pb-[0px] w-[1280px]  1xl:w-[90%] mb-20 md:mb-10  mx-auto ">
            {listOfMentors?.slice(0, 8).map((listOfMentor, i) => {
              return (
                <div
                  key={listOfMentor._id}
                  className="font-onest w-[23%] lgx:w-[30.5%] sm:w-[48%] xm:w-[343px] p-2 border border-[#EAEAEA] rounded-lg cursor-pointer group hover:border-b-[3px] hover:border-b-[#1453FF] transition-all duration-300"
                  onClick={() => handleMentorClick(listOfMentor.slug)}
                >
                  <div className="relative h-[296px] 1xl:h-[256px] xxl:h-[230px] lgx:h-[210px] xm:h-[296px] overflow-hidden">
                    <Image
                      src={listOfMentor.image}
                      width={343}
                      height={296}
                      alt="mentor image"
                      className="w-full h-full object-cover filter grayscale group-hover:filter-none transition-all duration-300"
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[rgba(0,0,0,0.7)] via-[rgba(0,0,0,0.3)] to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end px-4 pb-3">
                      <span className="text-[white] text-[14px] leading-[24px] font-medium flex justify-center items-center gap-[10px] mx-auto text-center">
                        View Profile
                        <FaArrowRightLong className="w-4 h-4 xm:hidden" />
                      </span>
                    </div>
                  </div>

                  <h4 className="font-medium text-[20px] leading-[30px] text-[#101828] mt-[24px] mb-[4px]">
                    {listOfMentor?.firstName} {listOfMentor?.lastName}
                  </h4>
                  <h5 className="font-regular text-[18px] leading-[28px] text-[#1453FF] mb-[16px] truncate overflow-hidden whitespace-nowrap">
                    {listOfMentor?.role}
                  </h5>
                  <div className="flex items-center gap-1 mb-[16px]">
                    <img
                      src={listOfMentor.flag}
                      alt={listOfMentor.country + " flag"}
                      className="w-[12px] h-[12px]"
                    />
                    <span className="text-[16px] text-[#667085] font-normal truncate">
                      {listOfMentor.country}
                    </span>
                  </div>
                  <p className="font-regular  text-[16px] leading-[20.8px] text-[#667085] truncate overflow-hidden whitespace-nowrap">
                    {listOfMentor?.company}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="custom-slider font-inter hidden flex justify-center sm:block sm:pb-[40px] sm:w-[400px] xm:w-[100%] gap-4 mx-auto px-[80px] lgx:px-[25px] sm:px-[16px]">
            <Slider
              ref={(slider) => {
                sliderRef = slider;
              }}
              {...mentorSettings}
              className=""
            >
              {listOfMentors.map((listOfMentor, i) => {
                return (
                  <div
                    key={i}
                    className="font-onest mx-auto sm:w-[302px] xm:w-[80%] p-2 border border-[#EAEAEA] rounded-lg cursor-pointer"
                  >
                    <div
                      className="relative h-[296px] sm:h-[258px] w-full overflow-hidden"
                      onClick={() => handleMentorClick(listOfMentor.slug)}
                    >
                      <Image
                        src={listOfMentor.image}
                        width={363}
                        height={297}
                        alt="mentorimage"
                        className="object-cover "
                      />
                      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[rgba(0,0,0,0.7)] via-[rgba(0,0,0,0.3)] to-transparent opacity-100 transition-all duration-300 flex items-end px-4 pb-3">
                        <span className="text-[white] text-[14px] leading-[24px] font-medium flex justify-center items-center gap-[10px] mx-auto text-center">
                          View Profile
                          {/* <FaArrowRightLong className="w-4 h-4" /> */}
                        </span>
                      </div>
                    </div>
                    <h4 className="font-medium text-[20px] leading-[30px] text-[#101828] mt-[24px] mb-[4px]">
                      {listOfMentor?.firstName} {listOfMentor?.lastName}
                    </h4>
                    <h5 className="font-normal text-[18px] leading-[28px] text-[#1453FF] mb-[16px] truncate overflow-hidden whitespace-nowrap">
                      {listOfMentor?.role}
                    </h5>
                    <div className="flex items-center gap-1 mb-[16px]">
                      <img
                        src={listOfMentor.flag}
                        alt={listOfMentor.country + " flag"}
                        className="w-[12px] h-[12px]"
                      />
                      <span className="text-[16px] text-[#667085] font-normal truncate">
                        {listOfMentor.country}
                      </span>
                    </div>
                    <p className="font-normal  text-[16px] leading-[20.8px] text-[#667085] truncate overflow-hidden whitespace-nowrap">
                      {listOfMentor?.company}
                    </p>
                  </div>
                );
              })}
            </Slider>
          </div>
          <Link href="/mentors">
            <button className=" w-[239px] h-[64px] rounded-[8px] bg-[#1453FF] text-[#fff] font-medium text-[16px] leading-6 tracking-[3%] mx-auto sm:block hidden">
              View More Mentors
            </button>
          </Link>
        </section>

        <section className="w-[100%] font-onest flex sm:flex-wrap justify-center sm:justify-around gap-[24px] lg:gap-[16px] px-[112px] xxl:px-[80px] xl:px-[25px] xm:px-[16px] py-[80px] sm:py-[52px]">
          {/* <div className='w-[28.125%] xxl:w-[30%] lgx:w-[33%] lg:w-[35%] md:w-[38%] sm:w-[100%] bg-[#1453FF] rounded-[16px] pt-[47px] pl-[30px] xl:pl-[15px] pr-[14px] pb-[72px] xxl:pb-[22px] relative'> */}
          <div className="w-[28.125%] xxl:w-[30%] lgx:w-[33%] lg:w-[35%] md:w-[38%] sm:w-[100%] bg-[#1453FF] rounded-[16px] pt-[70px] pl-[30px] xl:pl-[15px] pr-[14px] pb-[72px] xxl:pb-[22px] relative">
            {/* <h4 className='w-[288px] xl:w-[275px] lg:w-[250px] md:w-[220px] sm:w-[70%] font-medium text-[48px] xl:text-[45px] lg:text-[40px] md:text-[40px] sm:text-[48px] sxm:text-[40px] leading-[52.8px] text-[#FBFCFD] pb-[17px]'>
              Get Onboarded in Four Easy Steps!
            </h4> */}
            <h4 className="w-[288px] xl:w-[275px] lg:w-[250px] md:w-[220px] sm:w-[70%] xm:w-[231px] font-medium text-[48px] xl:text-[45px] lg:text-[40px] md:text-[40px] sm:text-[48px] xm:text-[32px] leading-[52.8px] xm:leading-[35.2px] text-[#FBFCFD] pb-[17px]">
              Get Onboarded in Four Easy Steps!
            </h4>
            <p className="w-[298px] 1xl:w-[262px] lg:w-[250px] md:w-[220px] sm:w-[100%] font-normal text-[16px] leading-[22px] text-[#EDEDED]">
              Follow these simple steps to join our talents on hackthejobs right
              away.
            </p>
            <Image
              src="/easy-arrow.png"
              width={123}
              height={117}
              alt="arrow"
              className="absolute top-[9.32px] right-[14.18px] object-cover sm:hidden"
            />
            <Image
              src="/easy-arrow-mobile.png"
              width={126}
              height={123}
              alt="arrow"
              className="absolute top-[59.6px] right-[0px] ssxm:right-[-15px] object-cover hidden sm:block"
            />
          </div>
          <div className="w-[69.90%] xxl:w-[70%] lgx:w-[67%] lg:w-[65%] md:w-[62%] sm:w-[100%] flex flex-wrap sm:justify-around gap-[16px] lgx:gap-[12px] lg:gap-[10px]">
            {cardValues.map((cardValue, i, arr) => {
              return (
                <div
                  className="font-onest w-[48%] sm:w-[100%] border-[1px] border-[#EAEAEA] rounded-[8px] px-5 md:px-2 sm:px-5 py-4"
                  key={i}
                >
                  <h4 className="border-[2px] border-[#D0DDFF] w-[44px] h-[44px] rounded-[50%] flex items-center justify-center text-[18px] leading-[20.31px] font-medium text-[#fff] bg-[#1453FF]">
                    {cardValue.number}
                  </h4>
                  <div className="pt-[25px] pb-[14px]">
                    <span className="font-medium text-[20px] leading-[30px] text-[#121927] leading-[150%] tracking-[0%]">
                      {cardValue.heading}
                    </span>
                    {arr.length - 1 === i ? (
                      <span className="text-[14px] text-[#888888] font-[350] leading-[150%] tracking-[0%]">{` ${cardValue.headingSpan}`}</span>
                    ) : (
                      ""
                    )}
                  </div>
                  {/* <h5 className="pt-[25px] pb-[14px] font-medium text-[20px] leading-[30px] text-[#121927] leading-[150%] tracking-[0%]">
                    {cardValue.heading}
                    {arr.length - 1 === i? <span className="text-[!12px] text-[#888888] font-[350] leading-[150%] tracking-[0%]">{cardValue.headingSpan}</span>: ''}
                  </h5> */}
                  <p className="font-normal text-[14px] leading-[20px] text-[#4F4F4F]">
                    {cardValue.text}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="pb-[96px] sm:pb-0 ">
          <Expertise />
        </section>

        <section className="flex items-center sm:flex-wrap px-[80px] xl:px-[25px] xm:px-[16px] gap-[50px] lgx:gap-[30px] sm:gap-[0] py-[160px] sm:py-[52px] bg-[#F5F8FF]">
          <div>
            <Image
              // src="/bootcamp.png"
              src="/bootcamp-img.png"
              width={602}
              height={519}
              alt="several images merged into one"
              className="object-cover"
            />
          </div>
          <div className="font-onest ">
            <h4 className="font-semibold text-[48px] xl:text-[44px] lgx:text-[40px] lg:text-[35px] md:text-[30px] leading-[52.8px] lgx:leading-[45px] lg:leading-[40px] text-[#121927] mb-[40px] sm:mb-[16px] w-[596px] xl:w-[580px] lgx:w-[450px] lg:w-[400px] md:w-[350px] sm:w-[100%] sm:text-center sm:mt-[16px]">
              Bootcamps alone are never enough!
            </h4>
            <p className="font-normal text-[18px] sm:text-center lgx:text-[16px] md  :text-[14px] leading-[27px] lgx:leading-[24px] text-[#4f4f4f] mb-[40px] sm:mb-[32px] w-[629px] 1xl:w-[580px] xl:w-[580px] lgx:w-[450px] lg:w-[400px] md:w-[350px] sm:w-[100%]">
              Our mission is to equip individuals with the right mentorship and
              experience needed to advance their tech careers. We are dedicated
              to building a supportive community that promotes growth and
              encourages collaboration.
            </p>
            <div className="font-onest text-[#1453FF] text-center flex sm:justify-center  sm:items-center gap-[16px]">
              {/* <div className="w-[192px] 1xl:w-[170px] xl:w-[150px] lgx:w-[130px] lg:w-[110px]">
                <h5 className="font-medium text-[43.64px] xl:text-[38px] lgx:text-[34px] leading-[52.36px] xl:leading-[48px] lgx:leading-[40px] tracking-[-2%]">
                  400+
                </h5>
                <p className="font-normal text-[18px] xl:text-[16px] lgx:text-[14px] lg:text-[12px] leading-[28px] text-[#121927]">
                  Projects completed
                </p>
              </div>
              <div className="w-[192px] 1xl:w-[170px] xl:w-[150px] lgx:w-[130px] lg:w-[110px]">
                <h5 className="font-medium text-[43.64px] xl:text-[38px] lgx:text-[34px] leading-[52.36px] xl:leading-[48px] lgx:leading-[40px] tracking-[-2%]">
                  70%
                </h5>
                <p className="font-normal text-[18px] lgx:text-[14px] lg:text-[12px] leading-[28px] text-[#121927]">
                  Employment rate
                </p>
              </div>
              <div className="w-[192px] 1xl:w-[170px] xl:w-[150px] lgx:w-[130px] lg:w-[110px]">
                <h5 className="font-medium text-[43.64px] xl:text-[38px] lgx:text-[34px] leading-[52.36px] xl:leading-[48px] lgx:leading-[40px] tracking-[-2%]">
                  3000+
                </h5>
                <p className="font-normal text-[18px] lgx:text-[14px] lg:text-[12px] leading-[28px] text-[#121927]">
                  Trained
                </p>
              </div> */}
              <a
                // href="https://dashboard.hackthejobs.com/auth/signup"
                href={`${baseUrl}/auth/signup`}
                target="_blank"
              >
                <button className="w-[173px] lg:w-[150px] md:w-[130px] sm:w-[120px] xm:w-[140px] sxm:w-[130px]  font-medium leading-6 tracking-[3%] text-4 text-[#fff] bg-primary rounded-[8px] px-10 lg:px-4 md:px-3 py-4">
                  Get Started
                </button>
              </a>
              <Link href="/donation">
                <button className="w-[213px] lg:w-[170px] md:w-[150px] sm:w-[150px] xm:w-[160px] sxm:w-[150px] font-medium leading-6 tracking-[3%] text-4 text-primary bg-[#fff] rounded-[8px] px-10 lg:px-4 md:px-2 py-4 border-[1px] border-[#DADADA]">
                  Support a Talent
                </button>
              </Link>
            </div>
          </div>
        </section>
        <section className="font-onest px-[80px] xl:px-[25px] sm:px-[16px] py-[84px] sm:py-[78.95px] relative">
          <h4 className="font-semibold text-[#121927] text-[48px] lgx:text-[38px] sm:text-[36px] leading-[52.8px] sm:leading-[39.6px] w-[696px] lgx:w-[550px] sm:w-[93%] mb-[62px] mx-auto text-center">
            Let our reviews do the talking
          </h4>
          {/* <div className='w-[100%] rounded-[24px]'> */}
          <div className="w-[100%] rounded-[24px]">
            <Slider
              ref={(slider) => {
                sliderRef = slider;
              }}
              {...settings}
              className="w-[100%]"
            >
              {testimonials.map((testimonial, index) => {
                return (
                  <div key={index} className="w-[100%] rounded-[24px]">
                    <div className="bg-[#121927] flex sm:flex-col justify-between relative rounded-[24px] ">
                      <div className="w-[800px] 1xl:w-[680px] xxl:w-[610px] lgx:w-[570px] lg:w-[470px] md:w-[390px] sm:w-[100%] px-[64px] 1xl:px-[40px] lg:px-[20px] sm:px-[16px] py-[108px] sm:pt-[29.73px] sm:pb-[36.27px] sm:order-2">
                        <h4 className="font-normal text-[32px] xxl:text-[30px] lgx:text-[26px] md:text-[24px] leading-[44px] xxl:leading-[40px] md:leading-[36px] tracking-[-2%] text-[#fff] w-[672px] 1xl:w-[640px] xxl:w-[600px] xl:w-[560px] lgx:w-[480px] lg:w-[450px] md:w-[350px] sm:w-[100%] mb-[32px] sm:mb-[24px]">
                          {testimonial.text}
                        </h4>
                        <h5 className="font-medium  sm:w-[100%] text-[18px] leading-[28px] text-[#fff]">
                          {testimonial.name}
                        </h5>
                        <p className="font-normal text-[16px] leading-[24px] text-[#BEBEBE] pb-[32px]">
                          {testimonial.position}
                        </p>
                        <div className="flex sm:justify-center gap-4">
                          {[...Array(testimonials.length).keys()].map(
                            (_, i) => (
                              <div
                                key={i}
                                className={`w-[10px] h-[10px] rounded-[6px] ${
                                  dotPosition === i
                                    ? "bg-[#fff]"
                                    : "bg-[#667085]"
                                }`}
                                onClick={() => goToSlide(index, i)}
                              ></div>
                            )
                          )}
                        </div>
                        <Image
                          src="/quote.png"
                          width={149}
                          height={114}
                          alt="quote"
                          className=" absolute top-[0px]  left-[54.29px] 1xl:left-[40px] lg:left-[20px] sm:invisible visible"
                        />
                        <Image
                          src="/quote-mobile.png"
                          width={76}
                          height={82}
                          alt="quote"
                          className="absolute top-[480px] xm:top-[350px] xxm:top-[270px] xxxm:top-[320px] xxxxm:top-[290px] sxm:top-[220px]  right-[15.23px] sm:visible invisible"
                        />
                      </div>
                      <div>
                        <Image
                          src={testimonial.img}
                          width={480}
                          height={465}
                          alt="testimonial picture"
                          className="sm:order-1 rounded-tr-[24px] rounded-br-[24px] sm:rounded-br-none sm:rounded-tl-[24px] max-w-[100%] h-[100%] object-cover"
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
          <Image
            src="/big-star.png"
            width={109}
            height={110}
            alt="big star"
            className="absolute top-[83px] lg:top-[40px] md:top-[20px] sm:hidden left-[107px] lg:left-[40px] md:left-[20px] "
          />
          <Image
            src="/medium-star.png"
            width={54}
            height={54}
            alt="medium star"
            className="absolute sm:top-[26px] sm:right-[14px] hidden sm:block"
          />
          <Image
            src="/small-star.png"
            width={43}
            height={44}
            alt="small star"
            className="absolute top-[174px] lg:top-[184px] right-[143px] lg:right-[103px] sm:hidden block"
          />
          <Image
            src="/smallest-star.png"
            width={21}
            height={21}
            alt="smallest star"
            className="absolute sm:top-[162px] sm:left-[23px] sm:block hidden"
          />
        </section>
        {/* <section className="flex sm:flex-wrap gap-[60px] lgx:gap-[40px] lg:gap-[20px] md:gap-[10px] items-center px-[80px] xl:px-[25px] xm:px-[16px] py-[97px] sm:pt-[20px] sm:pb-[40px]">
          <div className="font-onest sm:order-1">
            <h4 className="font-medium text-[48px] xxl:text-[40px] lgx:text-[36px] lg:text-[34px] sm:text-[32px] leading-[52.8px] xxl:leading-[46px] lgx:leading-[40px] sm:leading-[35.2px] text-[#121927] pb-[32px] sm:pb-[24px] sm:pt-[32px] w-[592px] xxl:w-[500px] lgx:w-[450px] lg:w-[400px] md:w-[350px] sm:w-[100%]">
              Our Resources
            </h4>
            <p className="w-[589px] xxl:w-[500px] lgx:w-[450px] lg:w-[400px] md:w-[350px] sm:w-[100%] font-normal text-[16px] lgx:text-[14px] leading-[24px] lgx:leading-[20px] text-[#333333] pb-[32px] sm:pb-[24px]">
              We carefully curate vital resources to empower you with the latest
              information in the tech industry. Our resources are designed to
              get you prepped for your technical job interviews, ensuring a
              smooth experience. You can have access to invaluable resources
              that will equip you on your journey to a successful career in
              tech.
            </p>
            <Link href="https://waitlist.hackthejobs.com">
              <button className="w-[173px] h-[56px] font-medium leading-[24px] tracking-[3%] text-[#fff] bg-[#1453FF] rounded-[8px]">
                Join waitlist
              </button>
            </Link>
          </div>
          <div className="bg-[#EEF2FF] px-[40px] lg:px-[20px] pt-[95px]">
            <Image
              src="/resources.png"
              width={556}
              height={460}
              alt="resources"
              className="object-cover sm:order-3"
            />
          </div>
        </section> */}
        <section className="bg-[url(/bg-stroke.svg)] bg-no-repeat bg-cover w-[100%] py-[39px] ">
          <div className="font-onest flex flew-wrap items-center gap-[24px] justify-center w-[1274px]   m-auto 1xl:w-[95%] lg:block">
            <Image
              src="/hire-image.svg"
              width="536"
              height="444"
              alt="hire-image"
              className="lgx: w-[450px] lg:m-auto"
            />
            <div className="w-[56%] lg:w-[95%] lg:m-auto lg:text-center lg:mt-[32px]">
              <h4 className=" font-semibold text-[48px] lg:sm:text-[32px] leading-[52.8px] lgx:leading-[48px] sm:leading-[35.2px] text-[#121927]">
                Hire from the top 10% most proficient talents in the world
              </h4>
              <p className="  xl:w-auto text-[16px] leading-[24px] text-[#787676] my-[32px] lgx:my-[26px] sm:my-[16px] ">
                Hackthejobs offers you access to experienced talents with
                exceptional soft skills, empowering you with up-to-date
                information. We also provide tools suited for your technical job
                interviews, ensuring a smooth experience.
              </p>
              {/* <Link href="/hire">
                <button className="w-[247px] py-[20px] font-medium leading-[24px] text-[#fff] bg-[#1453FF] rounded-[8px]">
                  Hire Top Talents
                </button>
              </Link> */}

              <button className="w-[247px] py-[20px] font-medium leading-[24px] text-[#fff] bg-[#1453FF] rounded-[8px]">
                Coming soon ...
              </button>
            </div>
          </div>
        </section>
        <section className="px-[80px] xl:px-[25px] xm:px-[16px] pt-[80px] sm:mt-[40px]">
          <div className="font-onest bg-[#121927] pt-[122px] pb-[99px] rounded-[16px] bg-[url(/stroke.svg)]">
            <div className="w-[710px] md:w-[100%] mx-auto px-[20px]">
              <h4 className="font-medium text-[48px] md:text-[40px] sm:text-[32px] leading-[52.8px] md:leading-[40px] sm:leading-[35.2px] text-[#fff] mx-auto text-center">
                Have a Question?
              </h4>
              <p className="font-normal text-[16px] leading-[24px] sm:leading-[19.2px] text-center text-[#FAFAFA] py-2 sm:py-4">
                Do you have any enquiries or feedback for the team?
              </p>
              <button
                className="w-[173px] h-[56px] rounded-[8px] bg-[#1453FF] text-[16px] leading-[24px] tracking-[3%] font-medium text-[#fff] block mx-[auto]"
                onClick={handleContact}
              >
                Contact Us
              </button>
            </div>
          </div>
        </section>
        <Footer openModal={() => setShowModal(true)} />
      </div>
    </div>
  );
};

export default Landing;
