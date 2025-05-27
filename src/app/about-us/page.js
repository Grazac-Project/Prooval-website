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
            Positioning you for success
          </h1>
          <p className=" font-onest text-[16px] leading-[20.8px] font-400 my-6 ">
            We strongly believe mentorship is the hidden gem required to build
            highly competitive talents.
          </p>
        </div>
        {/* <Image src="/about.png" alt="img" width={1440} height={600} /> */}
        <Image src="/about-hero.png" alt="img" width={1440} height={600} />
      </div>
      <div className={Classes.mission}>
        <h4>Our Mission </h4>
        <p>
          Our mission is to equip individuals with the right mentorship and
          experience needed to scale their tech careers to the next level. We
          are dedicated to building a supportive community that promotes growth
          and encourages collaboration.
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
          <p>
            The launch of bootcamps keep rising globally with the goal of
            upskilling millions of young individuals but there is less attention
            paid to the already upskilled talents in the job market. After we
            launched a bootcamp in 2019, we strongly believe the workforce of
            the future will be from Africa but bootcamps alone won’t prepare our
            talents for this and to fill this void, we have built hackthejobs to
            build their soft skills, give them work experience, and most
            importantly the right mentorship to attract and retain global
            opportunities.
          </p>
        </div>
      </div>
      <div>
        <div className="text-center mt-[48px] mb-[148px] md:mb-[48px] sm:[24px] font-onest">
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
      <div className={Classes.donation}>
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
      </div>

      <Footer openModal={() => setShowModal(true)} />
    </>
  );
};

export default AboutUs;
