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
        <div className="w-[95%] mx-auto pl-5 md:pl-[1px] ">
          <h1 className="font-whyte text-[54px] sm:text-[40px] leading-[60px] sm:leading-12 font-500 mt-12">
            Positioning you for success
          </h1>
          <p className=" font-whyte text-[16px] leading-[20.8px] font-400 my-6 ">
            Success for us is when our fellows after building real-life projects
            land their dream job in tech.
          </p>
        </div>
        <Image src="/about.png" alt="img" width={1440} height={600} />
      </div>
      <div className={Classes.mission}>
        <h4>Our mission is to equip you for jobs</h4>
        <p>
          There are struggles that all the smart techies you see have to go
          through till they land their dream role in tech. Our mission is to
          help you through these hurdles and ease you to landing a job.
        </p>
      </div>
      <div className={Classes.story}>
        <h4>Our story</h4>
        <Image
          src="/story.png"
          alt="img"
          width={1280}
          height={432}
          className={Classes.storyImg1}
        />
        <Image
          src="/story2.png"
          alt="img"
          width={1280}
          height={432}
          className={Classes.storyImg}
        />

        <div className={Classes.storyFlex}>
          <p>
            For some years now, Bootcamps have been able to up-skill millions of
            people across the continent of Africa. While many of them got
            entry-level jobs in the tech sector, a large chunk of these
            bootcamps didn’t. A critical gap emerged! It turns out that
            bootcamps alone are not enough to equip the graduates with
            everything they needed in the tech space. To fill this void, we
            launched Hackthejobs—a free work experience accelerator that gives
            bootcamp graduates real-world experience, communication skills, and
            guidance to secure a tech job.
          </p>
        </div>
      </div>
      <div>
        <div className="text-center mt-[48px] mb-[148px] md:mb-[48px] sm:[24px]">
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
      {/* <div className={Classes.team}>
        <div className={Classes.teamText}>
          <h3>Meet our team</h3>
          <p>
            We are a team of vibrant and dynamic individuals dedicated to
            changing the tech industry
          </p>
        </div>

        <div className={Classes.gallery}>
          <div className="grid grid-cols-4 xl:grid-cols-3 md:hidden gap-[32px] w-[1280px] 2xl:w-[90%] sm:w-[95%] my-[64px] mx-auto">
            {TeamCards.map((item, index) => (
              <div key={index} className={Classes.card}>
                <Image src={item.img} alt="img" width={296} height={296} />
                <h5>{item.name}</h5>
                <span>{item.position}</span>
                <div className={Classes.social}>
                  <Link href="#">
                    <Image
                      src="/twitter.svg"
                      alt="img"
                      width={24}
                      height={24}
                    />
                  </Link>
                  <Link href="#">
                    <Image
                      src="/linkledn.svg"
                      alt="img"
                      width={24}
                      height={24}
                    />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={Classes.gallerySlide}>
          <Splide options={options}>
            {TeamCards.map((item, index) => (
              <SplideSlide key={index} className={Classes.card}>
                <Image src={item.img} alt="img" width={310} height={296} />
                <h5>{item.name}</h5>
                <span>{item.position}</span>
                <div className={Classes.social}>
                  <Link href="#">
                    <Image
                      src="/twitter.svg"
                      alt="img"
                      width={24}
                      height={24}
                    />
                  </Link>
                  <Link href="#">
                    <Image
                      src="/linkledn.svg"
                      alt="img"
                      width={24}
                      height={24}
                    />
                  </Link>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div> */}
      {/* <div className={Classes.donation}>
        <div className={Classes.donateText}>
          <h3>Do you want to support our vision by sponsoring a talent ?</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra .
          </p>
          <button>Make donation</button>
        </div>

        <Image
          src="/stars1.svg"
          alt="img"
          width={96}
          height={96}
          className={Classes.star}
          style={{ position: "absolute", bottom: "186px", left: "80px" }}
        />
      </div> */}
      <div className={Classes.donation}>
        <div className={Classes.donateText}>
          <h3>
            Support our vision by empowering a talent to get work experience
          </h3>
          <p>
            Your donation goes a long way in empowering tech talent to get
            enough work experience building products that solve sustainable
            developmental goal project
          </p>
          <Link href="/donation">
            <button>Make donation</button>
          </Link>
        </div>
        <>
          <Image
            src="/donateImg.png"
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
