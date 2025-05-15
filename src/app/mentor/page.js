"use client";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";

import { MdVerified } from "react-icons/md";
import {
  cardValues,
  imageCards,
  mentorCardValues,
  testimonials,
} from "@/constants/constant";
import Slider from "react-slick";
import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/nav";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Modal from "@/components/modal/modal";
import { fetchMentors } from "@/api/authentication/auth";
import ValueCard from "@/components/valueCard/MentorValueCard copy 2";
import { LuDot } from "react-icons/lu";
import Cookies from "js-cookie";

const mentor = () => {
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
    autoplay: false,
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
  useEffect(() => {
    fetchMentors("")
      .then((res) => {
        // console.log(res);
        // console.log(res.data.data.mentors[0].firstName);
        const mentors = res.data.data.mentors;
        const mentorsSlice = mentors.slice(0, 8);
        // console.log(mentorsSlice);
        setListOfMentors(mentorsSlice);
        // console.log(listOfMentors.slug);
      })
      .catch((err) => console.log(err));
  }, []);
  const handleContact = () => {
    router.push("/faq#contact-form");
  };
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
  const handleMentorClick = (mentorSlug) => {
    Cookies.set("mentorSlug", mentorSlug, { expires: 7 });
    router.push(`/mentors/${mentorSlug}`);
  };
  return (
    <div>
      <Navbar />
      <div className="max-w-[1440px] mx-auto">
        <section className="font-onest px-[80px] xl:px-[25px] sm:px-[25px] xm:px-[16px] relative bg-[#F9FBFF]">
          <div className="  py-[48px] px-20 md:px-[0]  ">
            <div className="w-[722px] md:w-[60%] sm:w-auto mx-auto text-center ">
              {/* <div className='flex gap-2 w-[256px] md:w-[200px] sm:w-[256px] py-2 px-3 rounded-[32px] justify-center items-center border-[0.6px] border-[#989898] mb-[32px] whitespace-pre'> */}
              <div className="font-inter flex gap-2 w-[174px] mx-auto  px-3 py-2 rounded-[32px] justify-center items-center border-[0.6px] border-[#989898] mb-[32px] whitespace-pre">
                <MdVerified className="text-[#FFD700] text-[16px]" />
                <h3 className="font-medium text-[14px] text-[#121927] leading-[15.4px] tracking-[4%] ">
                  Become a Mentor
                </h3>
              </div>
              <h1 className="font-bold text-[64px] xxl:text-[50px] xl:text-[45px] lg:text-[35px] md:text-[32px] leading-[83.2px] xxl:leading-[75px] md:leading-[44px] sm:leading-[41px]  text-[#121927] ">
                Make Impact on the Next Generation
              </h1>
              <p className="font-regular text-[16px] lg:text-[16px] leading-6 text-[#727272]  pt-8 sm:pt-4 pb-8">
                Share your expertise, guide aspiring talents, and help shape the
                future of the tech industry.
              </p>
              {/* <Link href="https://hackthejobs-web-dashoard-production.up.railway.app/auth/signup"> */}
              {/* <Link href="https://mentor.hackthejobs.com/auth/signup">
                <button className="font-medium leading-6 tracking-[3%] text-4 text-[#fff] bg-primary rounded-[8px] px-10 lg:px-4 md:px-3 py-4 mr-[16px] lg:mr-[12px] sm:mr-[5px]">
                  Become a Mentor
                </button>
              </Link> */}
              {/* <Link href="https://mentor.hackthejobs.com/auth/signup"> */}
              <a
                href="https://mentor.hackthejobs.com/auth/signup"
                target="_blank"
                className="font-medium leading-6 tracking-[3%] text-4 text-[#fff] bg-primary rounded-[8px] px-10 lg:px-4 md:px-3 py-4 mr-[16px] lg:mr-[12px] sm:mr-[5px]"
              >
                Become a Mentor
              </a>
              {/* </Link> */}
            </div>
            <div className=" mt-[64px] sm:mt-[45px]">
              <Image
                src="/mentors-hero.png"
                alt="group of pictures"
                width={1150}
                height={450}
                className="object-cover mx-auto"
              />
            </div>
          </div>
          <Image
            src="/tiny-star.png"
            width={25}
            height={24}
            alt="tiny star"
            className="absolute top-[112.38px] 1xl:top-[70px] lgx:top-[25px] sm:top-[20px] left-[110.88px] xxl:left-[100px] lgx:left-[60px] sm:left-[37px]"
          />
          <Image
            src="/hero-star.png"
            width={59}
            height={59}
            alt="big star"
            className="absolute bottom-[12.38px] 1xl:top-[70px]  sm:top-[10px] right-[20%] sm:right-[20px] z-[0]"
          />
          <Image
            src="/hero-star.png"
            width={59}
            height={59}
            alt="tiny star"
            className="absolute bottom-[12.38px] left-[5%] sm:hidden "
          />
          <Image
            src="/hero-star.png"
            width={23.6}
            height={23.6}
            alt="big star"
            className="absolute bottom-[50.38px] right-[10%]  z-[0] sm:hidden"
          />
          {/* right-[623px] 1xl:right-[520px] xxl:right-[520px] xl:right-[480px] lgx:right-[400px] lg:right-[400px] md:right-[300px] sm:right-[410px] xm:right-[290px] xxm:right-[230px] sxm:right-[200px] */}
        </section>
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
            Why Mentor at Hackthejobs
          </h2>
          <h3 className="font-regular text-[18px] text-[#FCFCFC] lg:text-[16px] leading-6 lg:leading-[20.8px] text-center text-[#333] w-[690px] md:w-[100%] mx-auto pb-[42px]">
            Hackthejobs offers you a unique opportunity to make an impact on the
            future of tech in Africa.
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
        <section className="w-[100%] font-onest flex sm:flex-wrap justify-center sm:justify-around gap-[24px] lg:gap-[16px] px-[112px] xxl:px-[80px] xl:px-[25px] xm:px-[16px] py-[64px] sm:py-[52px]">
          {/* <div className='w-[28.125%] xxl:w-[30%] lgx:w-[33%] lg:w-[35%] md:w-[38%] sm:w-[100%] bg-[#1453FF] rounded-[16px] pt-[47px] pl-[30px] xl:pl-[15px] pr-[14px] pb-[72px] xxl:pb-[22px] relative'> */}
          <div className="w-[28.125%] xxl:w-[30%] lgx:w-[33%] lg:w-[35%] md:w-[38%] sm:w-[100%] bg-[#1453FF] rounded-[16px] pt-[70px] pl-[30px] xl:pl-[15px] pr-[14px] pb-[72px] xxl:pb-[22px] relative">
            {/* <h4 className='w-[288px] xl:w-[275px] lg:w-[250px] md:w-[220px] sm:w-[70%] font-medium text-[48px] xl:text-[45px] lg:text-[40px] md:text-[40px] sm:text-[48px] sxm:text-[40px] leading-[52.8px] text-[#FBFCFD] pb-[17px]'>
              Get Onboarded in Four Easy Steps!
            </h4> */}
            <h4 className="w-[288px] xl:w-[275px] lg:w-[250px] md:w-[220px] sm:w-[70%] xm:w-[231px] font-medium text-[48px] xl:text-[45px] lg:text-[40px] md:text-[40px] sm:text-[48px] xm:text-[32px] leading-[52.8px] xm:leading-[35.2px] text-[#FBFCFD] pb-[17px]">
              Become a mentor with these four easy steps
            </h4>
            {/* <p className="w-[298px] 1xl:w-[262px] lg:w-[250px] md:w-[220px] sm:w-[100%] font-regular text-[16px] leading-[22px] text-[#EDEDED]">
              Follow these simple steps to get onboarded into Hackthejobs right
              away! Our onboarding procedure is as basic as it gets!
            </p> */}
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
            {mentorCardValues.map((cardValue, i) => {
              return (
                <div
                  className="font-onest w-[48%] sm:w-[100%] border-[1px] border-[#EAEAEA] rounded-[8px] px-5 md:px-2 sm:px-5 py-4"
                  key={i}
                >
                  <h4 className="border-[2px] border-[#D0DDFF] w-[44px] h-[44px] rounded-[50%] flex items-center justify-center text-[18px] leading-[20.31px] font-medium text-[#fff] bg-[#1453FF]">
                    {cardValue.number}
                  </h4>
                  <h5 className="pt-[25px] pb-[14px] font-medium text-[20px] leading-[30px] text-[#121927]">
                    {cardValue.heading}
                  </h5>
                  <p className="font-regular text-[14px] leading-[20px] text-[#4F4F4F]">
                    {cardValue.text}
                  </p>
                </div>
              );
            })}
          </div>
        </section>
        <section className="font-onest flex justify-between sm:flex-col px-[80px] lgx:px-[25px] xm:px-[16px] pt-[96px] sm:pt-[40px] pb-[64px] sm:pb-[24px]">
          <div>
            <h3 className="font-medium w-[768px] xl:w-[720px] lgx:w-[630px] lg:w-[580px] md:w-[510px] sm:w-[100%] text-[48px] xl:text-[44px] lgx:text-[36px] md:text-[32px] leading-[52.8px] sm:leading-[35.2px] text-[#121927] mb-[20px] sm:mb-[0px] sm:text-center">
              We have a team of Top-Rated Mentors
            </h3>
            <p className="font-regular text-[20px] leading-[30px] text-[#4f4f4f] w-[768px] lgx:w-[670px] lg:w-[580px] md:w-[510px] sm:hidden">
              Easily connect with exceptional mentors from various backgrounds
              and openly discuss your career challenges with them.
            </p>
          </div>
          <Link href="/mentors">
            <button className="w-[239px] h-[64px] rounded-[8px] bg-[#1453FF] text-[#fff] font-medium text-[16px] leading-6 tracking-[3%] sm:hidden">
              View More Mentors
            </button>
          </Link>
        </section>
        <section className="pb-[96px] sm:pb-[52px] ">
          <div className="sm:hidden  w-[1280px]  1xl:w-[90%] mx-auto flex justify-start flex-wrap gap-[32px] pb-[96px]  sm:pb-[52px]">
            {listOfMentors.map((listOfMentor, i) => {
              return (
                <div
                  key={i}
                  className="font-onest w-[23%] lgx:w-[30.5%] sm:w-[48%] xm:w-[343px] p-2 border border-[#EAEAEA] rounded-lg cursor-pointer"
                  onClick={() => handleMentorClick(listOfMentor?.slug)}
                >
                  <div className="h-[296px]  1xl:h-[256px] xxl:h-[230px] lgx:h-[210px] overflow-hidden">
                    <Image
                      src={listOfMentor.image}
                      width={296}
                      height={296}
                      alt="mentor image"
                      className="w-full h-full object-cover filter grayscale hover:filter-none"
                    />
                  </div>
                  <h4 className="font-medium text-[20px] leading-[30px] text-[#101828] mt-[24px] mb-[4px]">
                    {listOfMentor?.firstName} {listOfMentor?.lastName}
                  </h4>
                  <h5 className="font-regular text-[16px] leading-[28px] text-[#1453FF] mb-[16px]">
                    {listOfMentor?.role}
                  </h5>
                  <p className="font-regular w-[296px] 1xl:w-[250px] xl:w-[200px] text-[16px] leading-[20.8px] text-[#667085]">
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
                    className="font-onest mx-auto sm:w-[302px] xm:w-[80%] p-4 border border-[#EAEAEA] mx-3 rounded-lg cursor-pointer"
                  >
                    <div
                      className="h-[296px] sm:h-[258px] overflow-hidden"
                      onClick={() => handleMentorClick(listOfMentor.slug)}
                    >
                      <Image
                        src={listOfMentor.image}
                        width={363}
                        height={297}
                        alt="mentor image"
                        className="object-cover px-[5px]"
                      />
                    </div>
                    <h4 className="font-medium text-[20px] leading-[30px] text-[#101828] mt-[24px] mb-[4px]">
                      {listOfMentor?.firstName} {listOfMentor?.lastName}
                    </h4>
                    <h5 className="font-regular text-[16px] leading-[28px] text-[#1453FF] mb-[16px] truncate overflow-hidden whitespace-nowrap ">
                      {listOfMentor?.role}
                    </h5>
                    <p className="font-regular w-[296px] 1xl:w-[250px] xl:w-[200px] text-[16px] leading-[20.8px] text-[#667085] truncate overflow-hidden whitespace-nowrap">
                      {listOfMentor?.company}
                    </p>
                  </div>
                );
              })}
            </Slider>
          </div>
          <Link href="/mentors">
            <button className="w-[239px] h-[64px] rounded-[8px] bg-[#1453FF] text-[#fff] font-medium text-[16px] leading-6 tracking-[3%] hidden sm:block mx-auto">
              View More Mentors
            </button>
          </Link>
        </section>
        {/* <section className="pb-[96px] sm:pb-[52px] ">
        <div className="sm:hidden px-[80px] lgx:px-[25px] sm:px-[16px] flex justify-center lg:justify-start flex-wrap gap-[22px] pb-[96px] sm:pb-[52px]">
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
                <h5 className="font-regular text-[18px] leading-[28px] text-[#1453FF] mb-[16px]">
                  {listOfMentor?.role}
                </h5>
                <p className="font-regular w-[296px] 1xl:w-[250px] xl:w-[200px] text-[16px] leading-[20.8px] text-[#667085]">
                  {listOfMentor?.company}
                </p>
              </div>
            );
          })}
        </div>
        <div className="font-inter flex justify-center sm:block sm:pb-[40px] sm:w-[400px] xm:w-[100%] mx-auto px-[80px] lgx:px-[25px] sm:px-[16px]">
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
                  <h5 className="font-regular text-[18px] leading-[28px] text-[#1453FF] mb-[16px]">
                    {listOfMentor.role}
                  </h5>
                  <p className="font-regular w-[296px] xm:w-[100%] text-[16px] leading-[20.8px] text-[#667085]">
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

        {/* <section className="font-onest px-[80px] xl:px-[25px] sm:px-[16px] py-[84px] sm:py-[78.95px] relative">
      
          <h4 className="font-medium text-[#121927] text-[48px] lgx:text-[38px] sm:text-[36px] leading-[52.8px] sm:leading-[39.6px] w-[696px] lgx:w-[550px] sm:w-[93%] mb-[62px] mx-auto text-center">
            What Mentors have to say about us
          </h4>
          
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
                        <h4 className="font-regular text-[32px] xxl:text-[30px] lgx:text-[26px] md:text-[24px] leading-[44px] xxl:leading-[40px] md:leading-[36px] tracking-[-2%] text-[#fff] w-[672px] 1xl:w-[640px] xxl:w-[600px] xl:w-[560px] lgx:w-[480px] lg:w-[450px] md:w-[350px] sm:w-[100%] mb-[32px] sm:mb-[24px]">
                          {testimonial.text}
                        </h4>
                        <h5 className="font-medium  sm:w-[100%] text-[18px] leading-[28px] text-[#fff]">
                          {testimonial.name}
                        </h5>
                        <p className="font-regular text-[16px] leading-[24px] text-[#BEBEBE] pb-[32px]">
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
        </section> */}

        <section className="px-[80px] xl:px-[25px] xm:px-[16px] pt-[80px] sm:mt-[40px]">
          <div className="font-onest bg-[#121927] pt-[122px] pb-[99px] rounded-[16px] bg-[url(/stroke.svg)]">
            <div className="w-[710px] md:w-[100%] mx-auto px-[20px]">
              <h4 className="font-medium text-[48px] md:text-[40px] sm:text-[32px] leading-[52.8px] md:leading-[40px] sm:leading-[35.2px] text-[#fff] mx-auto text-center">
                Have a Question?
              </h4>
              <p className="font-regular text-[16px] leading-[24px] sm:leading-[19.2px] text-center text-[#FAFAFA] py-2 sm:py-4">
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
      </div>
      <Footer openModal={() => setShowModal(true)} />
    </div>
  );
};

export default mentor;
