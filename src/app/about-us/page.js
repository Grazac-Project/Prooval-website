"use client";

import React, { useEffect } from "react";
import Classes from "./about.module.css";
import Image from "next/image";
import Navbar from "@/components/navbar/nav";
import Footer from "@/components/footer/footer";
import Link from "next/link";
import { CoreValue, TeamCards } from "@/constants/constant";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const AboutUs = () => {
  var options = {
    type: "loop",
    gap: "8px",
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
        <div className={Classes.intro}>
          <h1>
            Known <span className={Classes.for}>for</span>{" "}
            <span className={Classes.exc}>Excellence</span>
          </h1>
          <p>
            Our mission is to provide recent bootcamp graduates and self-taught
            tech talents with real world work experience, helping them land
            their dream job in tech.
          </p>
        </div>
        <Image src="/about.png" alt="img" width={1440} height={600} />
      </div>
      <div className={Classes.mission}>
        <h4>Our mission is to equip people to be job READY!</h4>
        <p>
          Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id
          scelerisque est ultricies ultricies. Duis est sit sed leo nisl,
          blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at
          scelerisque amet nulla purus habitasse. Nunc sed faucibus bibendum
          feugiat sed interdum. Ipsum egestas condimentum mi massa. In tincidunt
          pharetra consectetur sed duis facilisis metus. Etiam egestas in nec
          sed et. Quis lobortis at sit dictum eget nibh tortor commodo cursus
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
            In a world filled with endless possibilities, countless talented
            individuals still face barriers to landing their dream jobs due to
            the constraint of lack of experience. At Hackthejobs, our journey
            begins with a simple yet profound belief: that everyone, regardless
            of their background or circumstances, deserves the chance to thrive
            in the digital age and make a career for themselves.
            <br /> Imagine a world where a young aspiring coder, filled with
            dreams and potential, lacks the experiences required to land his
            first tech role frustrated and held back by lack of projects in her
            portfolio to convince a prospective employer that she can unleash
            her creativity. It was these stories, these untapped reservoirs of
            talent and ambition, that ignited a spark within us.
          </p>
          <p>
            We knew that we had to bridge the gap between ambition and
            opportunity, to empower individuals to unlock their full potential.
            That's why we created Hackthejobs – not just as a platform, but as a
            beacon of hope and possibility. With each donation, you're not just
            supporting a cause – you're changing lives.
            <br /> You're giving someone the chance to learn, to grow, to
            succeed in ways they never thought possible. Every penny contributed
            goes towards providing the sort-after experience, environment
            resources, and mentorship that open doors and shatter barriers for
            every newbie in tech. It's about more than just helping them gain
            experiences or putting their technical skills to use; it's about
            empowering individuals to write their futures, to dream big and
            achieve even bigger
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
              Morbi sed imperdiet in ipsum, adipiscing elit dui lectus.
              adipiscing elit dui lectus.{" "}
            </p>
          </div>

          <div className="grid  grid-cols-3 lg:grid-cols-2 gap- sm:block gap-[27px]  w-[1281px] 2xl:w-[90%] sm:w-[95%] m-auto mt-[48px]">
            {CoreValue.map((item, index) => (
              <div
                key={index}
                className="w-auto h-[319px] rounded-lg px-[32px] py-[40px]  sm:mb-[24px] sm:m-auto "
                style={{ backgroundColor: item.background }}
              >
                <Image
                  src={item.img}
                  alt="book-icon"
                  width={33}
                  height={33}
                  className="mb-[50px]"
                />
                <h5 className="text-[24px]  leading-[26.4px] font-[500] text-[#101828] text-left mb-[16px]">
                  {item.heading}
                </h5>
                <p className="text-[16px]  leading-[24px]  font-[400] text-[#545454] text-left">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={Classes.team}>
        <div className={Classes.teamText}>
          <h3>Meet our team</h3>
          <p>
            Nisl at scelerisque amet nulla purus habitasse.Nunc sed faucibus
            bibendum feugiat sed interdum. Ip
          </p>
        </div>

        <div className={Classes.gallery}>
          <div className="grid  grid-cols-4 xl:grid-cols-3 md:hidden gap-[32px] w-[1280px] 2xl:w-[90%] sm:w-[95%] my-[64px] mx-auto">
            {TeamCards.map((item, index) => (
              <div
                key={index}
                className={Classes.card}
               
              >
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
              <SplideSlide
                key={index}
                className={Classes.card}
              >
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
      </div>
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

      <Footer />
    </>
  );
};

export default AboutUs;
