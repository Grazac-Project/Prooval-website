"use client";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import { card, valueCards, testimonials } from "@/constants/constant";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/nav";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Modal from "@/components/modal/modal";
import useAnalytics from "@/components/useAnalytics";
import { TypeAnimation } from "react-type-animation";
import { motion, useAnimation } from "framer-motion";
import { RiDoubleQuotesL } from "react-icons/ri";

const professionals = [
  {
    id: 1,
    name: "Jay Doe",
    role: "Financial Mentor at Energy",
    image: "/professional_1.jpg",
  },
  {
    id: 2,
    name: "Allan Stanton",
    role: "Expert in Creative Business",
    image: "/professional_2.jpg",
  },
  {
    id: 3,
    name: "Joy Doe",
    role: "Personal Coach",
    image: "/professional_5.jpg",
  },
  {
    id: 4,
    name: "Jay Doe",
    role: "Financial Mentor at Energy",
    image: "/professional_1.jpg",
  },
  {
    id: 5,
    name: "Jay Doe",
    role: "Financial Mentor at Energy",
    image: "/professional_3.jpg",
  },
];

const testimonialsTop = [
  {
    name: "Jane Doe",
    role: "CEO, Grazac LTD",
    text: "Join our community and get open access to people of like minds. Build connections that will last throughout your career.",
    image: "/testimonial_1.png",
    icon: <RiDoubleQuotesL />,
  },
  {
    name: "Jane Doe",
    role: "CEO, Grazac LTD",
    text: "Join our community and get open access to people of like minds. Build connections that will last throughout your career.",
    image: "/testimonial_1.png",
    icon: <RiDoubleQuotesL />,
  },
  {
    name: "Jane Doe",
    role: "CEO, Grazac LTD",
    text: "Join our community and get open access to people of like minds. Build connections that will last throughout your career.",
    image: "/testimonial_1.png",
    icon: <RiDoubleQuotesL />,
  },
  {
    name: "Jane Doe",
    role: "CEO, Grazac LTD",
    text: "Join our community and get open access to people of like minds. Build connections that will last throughout your career.",
    image: "/testimonial_1.png",
    icon: <RiDoubleQuotesL />,
  },
];

const testimonialsBottom = [
  {
    name: "Jane Doe",
    role: "CEO, Grazac LTD",
    text: "Join our community and get open access to people of like minds. Build connections that will last throughout your career.",
    image: "/testimonial_1.png",
    icon: <RiDoubleQuotesL />,
  },
  {
    name: "Jane Doe",
    role: "CEO, Grazac LTD",
    text: "Join our community and get open access to people of like minds. Build connections that will last throughout your career.",
    image: "/testimonial_1.png",
    icon: <RiDoubleQuotesL />,
  },
  {
    name: "Jane Doe",
    role: "CEO, Grazac LTD",
    text: "Join our community and get open access to people of like minds. Build connections that will last throughout your career.",
    image: "/testimonial_1.png",
    icon: <RiDoubleQuotesL />,
  },
  {
    name: "Jane Doe",
    role: "CEO, Grazac LTD",
    text: "Join our community and get open access to people of like minds. Build connections that will last throughout your career.",
    image: "/testimonial_1.png",
    icon: <RiDoubleQuotesL />,
  },
];
const Landing = () => {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [load, setLoad] = useState(false);

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const handleContact = () => {
    router.push("/faq#contact-form");
  };

  const GA_TRACKING_ID = "G-JS3RNTYLD8";
  useAnalytics(GA_TRACKING_ID);
  return (
    <div className="overflow-x-hidden ">
      <Navbar />
      {showModal && <Modal modalClose={() => setShowModal(false)} />}
      <div className="max-w-[1440px] mx-auto">
        {/* Hero Section */}
        <section className="font-satoshi mx-auto relative bg-[#FFFFFF]">
          <div className="flex flex-col items-center justify-center text-center py-[48px]">
            <h1 className="font-bold text-[60px] text-center xxl:text-[50px] xl:text-[45px] lg:text-[35px] md:text-[25px] sm:text-[40px] xm:text-[35px] xxm:text-[30px] leading-[83.2px] xxl:leading-[75px] md:leading-[44px] sm:leading-[54px] text-[#121927]">
              Monetize Your
            </h1>

            {/* Typing animation */}
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
                className="text-primary font-[700] text-[60px] xxl:text-[50px] lgx:text-[50px] xl:text-[45px] lg:text-[35px] md:text-[25px] sm:text-[40px] xm:text-[35px] xxm:text-[30px] leading-[68px]"
              />
              <span className="text-[60px] xxl:text-[50px] xl:text-[45px] lg:text-[35px] md:text-[25px] sm:text-[40px] xm:text-[35px] xxm:text-[30px] leading-[68px] font-[700] text-[#121927]">
                in One Place
              </span>
            </div>

            <div className="max-w-[989px] lgx:w-[700px] xm:w-[100%] xm:px-[21.5px] pt-4">
              <p className="font-normal text-[18px]  leading-[160%] text-[#727272] pb-8">
                Turn what you know into income by hosting webinars, selling
                resources, and offering 1:1 bookings. Everything is designed to
                help you grow your brand and build meaningful connections with
                your audience.
              </p>

              <div className="flex justify-center gap-4 sxm:gap-2">
                <Link href="/professionals">
                  <button className="w-[226px] sm:w-[150px] xm:w-[160px] sxm:w-[150px] font-medium leading-6 tracking-[3%] text-[16px] text bg-[#fff] rounded-[8px] px-10 lg:px-4 md:px-2 py-4 border border-[#DADADA] sxm:text-[14px]">
                    View All Experts
                  </button>
                </Link>
                <Link href="/signup">
                  <button className="w-[226px] sm:w-[150px] xm:w-[160px] sxm:w-[150px] font-medium leading-6 tracking-[3%] text-[16px] text-[#ffffff] bg-primary rounded-[8px] px-10 lg:px-4 md:px-2 py-4 border border-[#DADADA] sxm:text-[14px]">
                    Create your profile
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="relative w-full max-w-[1200px] mx-auto mt-16 mb-[80px] font-satoshi">
            {/* Main Image */}
            <div className="w-full">
              <img
                src="/dashboard_img.png"
                alt="Main Mockup"
                className="w-full h-auto "
              />
            </div>
            {/* Yellow Card */}
            <div className="absolute left-[-20px] bottom-[100px] sm:left-2 sm:bottom-2 bg-[#FFCA01] text-[#FBFCFD] rounded-xl shadow-lg py-[32px] px-[26px] w-[351px] xm:w-[112.42px] xm:py-[9.89px] xm:px-[7.98px] xm:bottom-[40px] lgx:w-[300px] lgx:py-[25px] lgx:px-[25px] lgx:left-[20px] md:w-[200px] md:py-[15px] md:px-[15px] md:bottom-[60px] sxm:bottom-[20px]">
              <div className="flex flex-col space-y-2">
                <div className="flex items-center justify-between bg-[#0000001A] p-2 xm:p-1 lgx:p-2 md:p-2 rounded-md">
                  <div className="flex flex-col">
                    <span className="text-[30.72px] xm:text-[9.84px] lgx:text-[16px] font-semibold leading-[101.01%]">
                      50+
                    </span>
                    <span className="text-[12.29px] xm:text-[3.94px] lgx:text-[12px] xm:leading-[5.41px] font-normal leading-[16.9px]">
                      Digital Products
                    </span>
                  </div>
                  <img
                    src="/product_img.png"
                    alt="icon"
                    className="w-[41.61px] h-[41.61px] xm:w-[19.68px] xm:h-[19.68px] lgx:w-[25px] lgx:h-[25px]"
                  />
                </div>

                <div className="flex items-center justify-between bg-[#0000001A] p-2 xm:p-1 rounded-md lgx:p-2">
                  <img
                    src="/pageView.png"
                    alt="icon"
                    className="w-[60.93px] h-[48.64px] xm:w-[19.68px] xm:h-[19.68px] lgx:w-[25px] lgx:h-[25px]"
                  />
                  <div className="flex flex-col">
                    <span className="text-[30.72px] xm:text-[9.84px] lgx:text-[16px] font-semibold leading-[101.01%]">
                      8,000+
                    </span>
                    <span className="text-[12.29px] xm:text-[3.94px] lgx:text-[12px] xm:leading-[5.41px] font-normal leading-[16.9px]">
                      Page Views
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between bg-[#0000001A] p-2 xm:p-1 rounded-md lgx:p-2">
                  <div className="flex flex-col">
                    <span className="text-[30.72px] xm:text-[9.84px] lgx:text-[16px] font-semibold leading-[101.01%]">
                      200+
                    </span>
                    <span className="text-[12.29px] xm:text-[3.94px] lgx:text-[12px] xm:leading-[5.41px] font-normal leading-[16.9px]">
                      Sessions Booked
                    </span>
                  </div>
                  <img
                    src="/sessionBooked.png"
                    alt="icon"
                    className="w-[41.61px] h-[41.61px] xm:w-[19.68px] xm:h-[19.68px] lgx:w-[25px] lgx:h-[25px]"
                  />
                </div>
              </div>
            </div>

            {/* Badge - Top*/}
            <div className="absolute top-[20px] right-[350px] lgx:right-[300px] md:right-[220px] xm:right-[100px] z-10 bg-[#FFFFFF] rounded-[4px] shadow-md border-[#E4E7EC] border-[1px] flex items-center gap-[17.5px] px-[20px] py-[24.5px] md:px-[15px] md:py-[15px] xm:px-[9px] xm:py-[9px] xm:gap-[8px] xm:top-[-5px] sxm:right-[60px] sxm:p-[5px] sxm:gap-[2px]">
              <img
                src="/preview_sign.png"
                alt="coin"
                className="w-5 h-5 mr-2 sxm:w-[15px] sxm:h-[15px]"
              />
              <div className="flex flex-col items-start">
                <span className="font-semibold text-[14px] xm:text-[10px] sxm:text-[8px] leading-[18.96px] text-[#121927]">
                  $5,000
                </span>
                <span className="text-[10px] xm:text-[8px] sxm:text-[8px] text-[#8B8B8B] leading-[100%] font-normal">
                  Revenue Earned
                </span>
              </div>
            </div>

            {/* Badge-Right */}
            <div className="absolute top-[45%] right-[-15px] lgx:right-[15px] lgx:top-[35%] lgx:px-[12px] lgx:py-[12px] lgx:gap-[12px] md:px-[10px] md:py-[10px] md:gap-[10px] xm:px-[8px] xm:py-[8px] xm:gap-[8px] sxm:px-[5px] sm:py-[5px] bg-white rounded-[4px] shadow-md flex items-center gap-[17.5px] px-[20px] py-[12px] bg-[#FFFFFF]">
              <img
                src="/preview_sign.png"
                alt="booking"
                className="w-5 h-5 sxm:w-[15px] sxm:h-[15px]"
              />
              <div className="flex flex-col items-start">
                <span className="font-semibold text-[14px] xm:text-[10px] sxm:text-[8px] leading-[18.96px] text-[#121927]">
                  +50
                </span>
                <span className="text-[10px] xm:text-[8px] sxm:text-[8px] text-[#8B8B8B] leading-[100%] font-normal">
                  Bookings Created
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="px-[80px] xl:px-[25px] xm:px-4 font-satoshi">
          <div className="bg-[#121927] rounded-[24px] p-[80px] lgx:p-[40px] md:p-[20px]">
            <h2 className="font-bold text-[48px] lg:text-[32px] leading-[56px] lg:leading-[41.6px] text-[#FCFCFC] text-center w-[865px] lg:w-[95%] mx-auto pb-3 sm:text-[30px] sm:leading-[38px] sm:pb-[8px]">
              Why you should use Prooval?
            </h2>
            <h3 className="font-normal text-[16px] text-[#FCFCFC] leading-[160%] text-center w-[786px] md:w-[100%] mx-auto pb-[64px] md:pb-[40px] md:text-[12px] sm:text-[16px] sm:pb-[64px]">
              You no longer need to jump from one platform to another, we help
              you organize all you need to do in 1 place
            </h3>
            <div className="flex items-center gap-[33px] lgx:gap-[20px] sm:flex-col">
              {card.map((card, index) => {
                return (
                  <div
                    key={index}
                    className="w-[351.33px] flex flex-col items-center py-[32px] px-[16px] rounded-2xl border-[1px] border-[#DDDDDD1A] lgx:py-[25px] lgx:px-[12px] sm:w-[100%] sm:py-[21.5px] sm:px-[16px] bg-[#070C1633]"
                  >
                    <img src={card.image} alt="name" />
                    <div className="text-center mt-[20px] ">
                      <h1 className="font-semibold text-[20px] md:text-[16px] leading-[100%] text-[#FFFFFF] mb-[8px]">
                        {card.heading}
                      </h1>
                      <p className="font-light text-[14px] md:text-[12px] leading-[150%] text-[#E3E3E3]">
                        {card.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="font-satoshi bg-[url(/background.png)] bg-center px-[80px] lgx:px-[25px] xm:px-[16px] mt-[96px] sm:pt-[40px] pb-[64px] sm:pb-[24px]">
          <div className="flex flex-col items-center py-[80px] sm:px-[26px] xxm:px-[16px] sxm:px-[8px] sm:flex-col">
            <h3 className="font-bold w-[924px] text-center md:w-[100%] md:leading-[48px] sm:w-[100%] text-[48px] sm:text-[30px] lgx:text-[36px] md:text-[32px] leading-[56px] sm:leading-[35.2px] text-[#121927] mb-[20px]">
              See all trusted experts and picture your profile right alongside
              them.
            </h3>
            <p className="font-normal text-center text-[16px] leading-[30px] text-[#787878] mb-[32px]">
              Every expert adds something unique. Join the growing community of
              professionals turning their knowledge into impact and income.
            </p>
            <Link href="/mentors">
              <button className="w-[239px] lg:w-[200px] h-[64px] rounded-[8px] bg-[#1453FF] text-[#fff] font-medium text-[16px] leading-6 tracking-[3%]">
                Go to Marketplace
              </button>
            </Link>
          </div>

          <div className="w-full max-w-[1200px] mx-auto px-4 py-10">
            {/* Static Layout */}
            <div className="sm:hidden flex justify-center gap-2 md:flex-wrap">
              {professionals.map((pro, index) => (
                <div
                  key={pro.id}
                  className={`relative rounded-lg overflow-hidden shadow-md h-[329px] 
        ${index === 2 ? "w-[419px]" : "w-[207.5px]"}`}
                >
                  <img
                    src={pro.image}
                    alt={pro.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-2 z-10 ">
                    <h3 className="font-medium text-[16px] text-[#fff]">
                      {pro.name}
                    </h3>
                    <p className="text-[10px] font-normal text-[#fff] border-[0.69px] border-[#FFFFFF] rounded-[5.5px] py-[2.62px] px-[6.87px] w-[140.74px]">
                      {pro.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Carousel */}
            <div className="sm:block 3xl:hidden">
              <Slider
                dots={false}
                infinite={true}
                speed={500}
                slidesToShow={1}
                slidesToScroll={1}
                autoplay={true}
                arrows={false}
              >
                {professionals.map((pro, index) => (
                  <div
                    key={pro.id}
                    className={`mx-auto ${
                      index === 2 ? "w-[207.5px]" : "w-[419px]"
                    } px-0`}
                  >
                    <div className="relative rounded-lg overflow-hidden shadow-md h-[332px]">
                      <img
                        src={pro.image}
                        alt={pro.name}
                        className="w-full h-full object-cover"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>

                      <div className="absolute bottom-0 left-0 right-0 p-3 z-10">
                        <h3 className="font-medium text-[16px] text-[#fff]">
                          {pro.name}
                        </h3>
                        <p className="text-[10px] font-normal text-[#fff] border-[0.69px] border-[#FFFFFF] rounded-[5.5px] py-[2.62px] px-[6.87px] w-[140.74px]">
                          {pro.role}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </section>

        <section className="pt-[80px] pb-[80px] font-satoshi">
          <div className="m-auto w-[800px] lgx:w-[90%] md:w-[100%] text-center px-[16px]">
            <h1 className="text-[48px] leading-[56px] font-bold text-[#121927]">
              Limitless ways to share your expertise across board
            </h1>
            <p className="font-normal text-[16px] leading-[160%] text-[#787878] mt-[20px] mb-[40px]">
              Every expert adds something unique. Join the growing community of
              professionals turning their knowledge into impact and income.
            </p>
          </div>

          <div className="px-[120px] flex justify-center gap-[19.7px] flex-wrap">
            <button className="border border-[#DDDDDD] text-[#050212] font-semibold font-satoshi text-[16px] rounded-[9.02px] w-[197px] h-[48px]">
              1-on-1 bookings
            </button>
            <button className="border border-[#DDDDDD] text-[#050212] font-semibold font-satoshi text-[16px] rounded-[9.02px] w-[197px] h-[48px]">
              Digital Products
            </button>
            <button className="border border-[#DDDDDD] text-[#050212] font-semibold font-satoshi text-[16px] rounded-[9.02px] w-[197px] h-[48px]">
              Package Bookings
            </button>
            <button className="border border-[#DDDDDD] text-[#050212] font-semibold font-satoshi text-[16px] rounded-[9.02px] w-[197px] h-[48px]">
              Resources
            </button>
            <button className="border border-[#DDDDDD] text-[#050212] font-semibold font-satoshi text-[16px] rounded-[9.02px] w-[197px] h-[48px]">
              Webinar
            </button>
          </div>

          <div className="px-[80px] mt-[153px] relative flex flex-col items-center">
            <div className="relative w-full max-w-[1000px] h-[480px]">
              <img
                src="/session.png"
                alt=""
                className="absolute top-0 right-0 z-[1]"
              />
              <img
                src="/digital_product.png"
                alt=""
                className="absolute top-[20px] right-[20px] z-[2]"
              />
              <img
                src="/package_session.png"
                alt=""
                className="absolute top-[40px] right-[40px] z-[3]"
              />
              <img
                src="/resources_1.png"
                alt=""
                className="absolute top-[60px] right-[60px] z-[4]"
              />
              <img
                src="/webinar_img.png"
                alt=""
                className="absolute top-[80px] right-[80px] z-[5]"
              />
            </div>

            <button className="mt-[24px] bg-primary border border-[#DDDDDD] text-[#FFFFFF] font-semibold font-satoshi text-[16px] rounded-[9.02px] w-[197px] h-[48px]">
              Start Creating
            </button>
          </div>
        </section>

        <section className="w-[100%] bg-[#F5F8FF] font-satoshi flex sm:flex-wrap justify-center sm:justify-around gap-[24px] lg:gap-[16px] px-[112px] lgx:px-[80px] md:px-[40px] xl:px-[25px] xm:px-[16px] py-[80px] sm:pt-[52px] sm:pb-0 md:py-[40px] ">
          <div className="bg-[#1453FF] w-[429px] pt-[103.81px] px-[34px] rounded-[16px] md:w-[300px] sm:w-full sm:pb-[48px] relative">
            <h4 className="text-[60px] font-bold leading-[68px] text-[#FBFCFD] pb-[24px] md:text-[30px] md:leading-[36px]">
              Get Onboarded in Four Easy Steps!
            </h4>
            <p className="font-normal text-[20px] leading-[160%] text-[#EDEDED] md:text-[16px] md:leading-[24px]">
              Follow these simple steps to start monetizing your skills on
              Prooval
            </p>
            <Image
              src="/easy-arrow.png"
              width={123}
              height={117}
              alt="arrow"
              className="absolute top-[9.32px] right-[14.18px] object-cover "
            />
          </div>
          <div className="space-y-[16px] w-[601px] ">
            {valueCards.map((valueCards, i) => {
              return (
                <div
                  className="font-satoshi  border-[1px] border-[#EAEAEA] rounded-[8px] py-[26px] px-[19px] flex gap-[8px] lgx:py[18px] lgx:px-[12px] md:py-[12px] md:px-[8px] "
                  key={i}
                >
                  <h4 className="border-[2px] border-[#D0DDFF] w-[44px] h-[44px] rounded-[50%] flex items-center py-[10.84px] px-[18px] justify-center text-[18px] leading-[24px] font-medium text-[#fff] bg-[#1453FF] md:text-[12px]">
                    {valueCards.number}
                  </h4>
                  <div className="">
                    <span className="font-semibold text-[20px] text-[#121927] leading-[28px] pb-[6px] md:text-[20px]">
                      {valueCards.heading}
                    </span>
                    <p className="font-normal text-[14px] leading-[160%] text-[#4F4F4F] md:text-[14px]">
                      {valueCards.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="sm:pt-[40px]">
          <div className="w-full font-satoshi bg-[url(/background.png)] bg-cover bg-center py-[50px] sm:py-[19.06px] overflow-hidden">
            <div>
              <h1 className="text-[#121927] font-bold text-[48px] leading-[56px] mx-auto text-center mb-[40px] w-[978px] md:w-[100%] sm:text-[30px] sm:leading-[38px]">
                Words from people who have interacted with us
              </h1>
            </div>
            <motion.div
              className="flex gap-6 sm:gap-4"
              animate={{ x: ["-100%", "0%"] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            >
              {[...testimonialsTop, ...testimonialsTop].map((t, i) => (
                <div
                  key={i}
                  className="sm:min-w-[100%] sm:max-w-[100%] min-w-[400px] max-w-[400px] bg-[#FAFAFA] p-8 rounded-xl shadow-xl flex flex-col justify-between sm:p-4"
                >
                  <p className="text-[80px] font-normal text-[#1453FF] mb-2">
                    {t.icon}
                  </p>
                  <p className="text-[#787878] text-base mb-8">{t.text}</p>
                  <div className="flex gap-2">
                    <img src={t.image} alt={t.name} />
                    <div>
                      <h4 className="font-bold text-base text-[#787878]">
                        {t.name}
                      </h4>
                      <p className="text-xs text-[#787878]">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div
              className="flex gap-6 mt-8"
              animate={{ x: ["0%", "-100%"] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            >
              {[...testimonialsBottom, ...testimonialsBottom].map((t, i) => (
                <div
                  key={i}
                  className="min-w-[400px] max-w-[400px] bg-[#FAFAFA] p-8 rounded-xl shadow-xl flex flex-col justify-between"
                >
                  <p className="text-[80px] font-normal text-[#1453FF] mb-2">
                    {t.icon}
                  </p>
                  <p className="text-[#787878] text-base mb-8">{t.text}</p>
                  <div className="flex gap-2">
                    <img src={t.image} alt={t.name} />
                    <div>
                      <h4 className="font-bold text-base text-[#787878]">
                        {t.name}
                      </h4>
                      <p className="text-xs text-[#787878]">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="w-full flex justify-center items-center pt-[40px] px-[80px] md:px-[40px] xl:px-[25px] xm:px-[16px] ">
          <div className="relative w-full bg-[#0057FF] rounded-[24px] text-center text-white overflow-hidden bg-[url(/Stroke_1.svg)] bg-cover bg-center">
            <div className="absolute top-11 right-14 w-[59px] h-[59px] sm:w-[28px] sm:h-[28px] sm:top-6 sm:right-7 ">
              <Image
                src="/Stars.png"
                alt="Star Icon"
                fill
                className="object-contain"
              />
            </div>

            <div className="absolute bottom-8 left-6 w-[59px] h-[59px] sm:left-5 sm:bottom-7 sm:w-[28px] sm:h-[28px] ">
              <Image
                src="/Stars.png"
                alt="Star Icon"
                fill
                className="object-contain"
              />
            </div>

            <div className="relative z-10 flex flex-col items-center justify-center pt-[114.5px] pb-[80px]">
              <div className="w-[609px] max-w-full sm:w-[300px]">
                <h1 className="text-[48px] text-[#FCFCFC] font-bold mb-2 leading-[56px] sm:text-[20px] sm:leading-[32px]">
                  Hurry Up &amp; monetize your{" "}
                  <br className="hidden sm:block" />
                  skills seamlessly
                </h1>
                <p className="text-base text-[#FCFCFC] leading-[160%] mb-8 sm:text-[14px]">
                  You no longer need to jump from one platform to another, we
                  help you organize all you need to do in 1 place
                </p>
              </div>

              <button className="bg-[#ffffff] text-[#1453FF] font-medium px-6 py-3 w-[300px] sm:w-[218px] rounded-md hover:bg-gray-100 transition">
                Start Creating
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
