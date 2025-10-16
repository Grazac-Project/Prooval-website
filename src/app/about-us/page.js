"use client";

import React, { useEffect, useState } from "react";
import Classes from "./about.module.css";
import Image from "next/image";
import Navbar from "@/components/navbar/nav";
import Footer from "@/components/footer/footer";
import Link from "next/link";
import { CoreValue, TeamCards } from "@/constants/constant";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Modal from "@/components/modal/modal";

const AboutUs = () => {
  const [showModal, setShowModal] = useState(false);

  var options = {
    type: "loop",
    gap: "16px",
    autoplay: true,
    pauseOnHover: true,
    resetProgess: false,
    arrows: false,
    dots: false,
    fixedWidth: "310px",
    pagination: 0,
    speed: 1000,
    easing: "cubic-bezier(0.5, 0, 0.5, 0.5)",
  };

  return (
    <>
      <Navbar />
      <div className={Classes.about}>
        {showModal && <Modal modalClose={() => setShowModal(false)} />}

        {/* <div className={Classes.intro}>
          <h1>
          Positioning you for <span className={Classes.for}></span>{" "}
            <span className={Classes.exc}>Success</span>
          </h1>
          <p>
          Success for us is when our fellows after building real-life projects land their dream job in tech.
          </p>
        </div> */}
        <div className="w-[95%] mx-auto pl-5 md:pl-[1px] mt-[48px] sm:mt-[24px] ">
          <h1 className="font-whyte text-[54px] sm:text-[40px] leading-[60px] sm:leading-12 font-500">
            Positioning yourself for growth
          </h1>
          <p className=" font-onest text-[16px] leading-[20.8px] font-400 my-6 ">
            Join thousands of professionals growing their impact and income with Prooval.
          </p>
        </div>
        {/* <Image src="/about.png" alt="img" width={1440} height={600} /> */}
        <Image src="/about-hero.png" alt="img" width={1440} height={600} />
      </div>
      <div className={Classes.mission}>
        <h4>Our Mission </h4>
        <p>
          Our mission is to make it simple for experts to share what they know and for people to connect with them through seamless, 
          personalized interactions that feel easy and meaningful.
        </p>
      </div>
      <div className={Classes.story}>
        <h4>Our Story</h4>
        <Image
          // src="/story.png"
          src="/about-story.png"
          alt="img"
          width={1280}
          height={432}
          className={Classes.storyImg1}
        />
        <Image
          src="/about-story2.png"
          alt="img"
          width={1280}
          height={432}
          className={Classes.storyImg}
        />

        <div className={Classes.storyFlex}>
          <p>Prooval was born from a simple truth, talented professionals shouldn't have to struggle to share their expertise or earn from what they know.</p>
        </div>
        <p className="-mt-[119px] mb-[15px]">We saw how experts, coaches, consultants, mentors, and creators were forced to juggle multiple platforms just to host sessions, sell products, or get paid. It was messy, time-consuming, and often discouraging. So, we set out to change that.</p>
        <p >Prooval was built to make it easy for professionals to do what they do best, teach, guide, create, and inspire without the tech headaches.
          From a single link, you can make an impact and generate more income, you can host live sessions, sell digital products, and connect with your audience.
        </p>
      </div>
      <div>
        <div className="text-center mt-[140px] md:mt-[49px]  mb-[148px] md:mb-[48px] sm:[24px] font-onest">
          <div className="w-[430px] sm:w-[95%] m-auto ">
            <h3 className="text-[48px] sm:text-[32px] leading-[51.36px] sm:[41.6px] font-[500] text-[#101828] mb-[16px]">
              Our Core Values
            </h3>
            <p className="text-[16px]  leading-[24px]  font-[400] text-[#667085] ">
              We hold the following in high regard
            </p>
          </div>

          <div className="grid  grid-cols-3 lg:grid-cols-2 gap- sm:block gap-[27px]  w-[1281px] 2xl:w-[90%] sm:w-[95%] m-auto mt-[48px]">
            {CoreValue.map((item, index) => (
              <div
                key={index}
                className="w-auto h-[357px] rounded-lg px-[32px] py-[40px]  sm:mb-[24px] sm:m-auto "
                style={{ backgroundColor: item.background }}
              >
                <Image
                  src={item.img}
                  alt="book-icon"
                  width={33}
                  height={33}
                  className="mb-[30px]"
                />
                <h5 className="text-[24px]  leading-[26.4px] font-[500] text-[#101828] text-left mb-[16px]">
                  {item.heading}
                </h5>
                <p className="text-[16px] leading-[24px] font-[400] text-[#545454] text-left">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <div className={Classes.donation}>
        <div className={Classes.donateText}>
          <h3>
            Support our vision by empowering a talent to get mentorship and work
            experience
          </h3>
          <p>
            Your donation goes a long way in empowering entry level talent to
            get mentorship and real world experience while addressing
            sustainable development focused goals.
          </p>
          <Link href="/donation">
            <button>Support a Talent</button>
          </Link>
        </div>
        <>
          <Image
            // src="/donateImg.png"
            src="/about-support.png"
            alt="img"
            width={509}
            height={477}
            className={Classes.donateImg}
          />
        </>
      </div> */}
      <section className="w-full flex justify-center items-center pt-[40px] px-[80px] md:px-[40px] xl:px-[25px] xm:px-[16px] sm:px-[16px] ">
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
                        All-in-one platform to monetize your knowledge {" "}
                        <br className="hidden sm:block" />
                        and scale your impact.
                      </h1>
                      <p className="text-base text-[#FCFCFC] leading-[160%] mb-8 sm:text-[14px]">
                       When you share what you know, it becomes easier for more people to learn, grow, and thrive.
                      </p>
                    </div>
      
                    <button className="bg-[#ffffff] text-[#1453FF] font-medium px-6 py-3 w-[300px] sm:w-[218px] rounded-md hover:bg-gray-100 transition">
                      Create my Page
                    </button>
                  </div>
                </div>
              </section>
      

      <Footer openModal={() => setShowModal(true)} />
    </>
  );
};

export default AboutUs;
