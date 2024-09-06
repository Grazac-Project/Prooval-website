"use client";
import React, { useEffect, useRef, useState } from "react";
import Classes from "./donation.module.css";
import Navbar from "@/components/navbar/nav";
import Footer from "@/components/footer/footer";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import Modal from "@/components/modal/modal";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Donation = () => {
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  const handleContact = () => {
    router.push("/faq#contact-form");
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 200,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const logoSettings = {
    dots: false,
    infinite: true,
    speed: 900,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    Arrow: false,
  };
  const tooglePlay = () => {
    const video = videoRef.current;
    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <Navbar />
      {showModal && <Modal modalClose={() => setShowModal(false)} />}

      <div className={Classes.hero}>
        <div className={Classes.heroText} data-aos="fade-down">
          <h1>Support a Talent </h1>
          <p>
            Give the next generation a chance to get into the tech space with
            your contribution.
          </p>
        </div>
        <div className="flex  items-center justify-center">
          <div className="flex  items-center justify-center md:flex-col gap-6">
            <Link href="#">
              <div className=" font-whyte flex gap-2 justify-center items-center  font-medium leading-6 tracking-[3%] text-[16px] text-[#fff] bg-primary rounded-[8px] px-10 lg:px-4 md:px-3 py-4 mr-[16px] lg:mr-[12px] sm:mr-[5px] md:w-[310px] ssxm:w-auto">
                <Image
                  src="stripe.svg"
                  alt="icon"
                  width={24}
                  height={24}
                  className=""
                />
                Donate with Stripe
              </div>
            </Link>
            <Link href="#">
              <div className=" font-whyte flex gap-2 justify-center items-center  font-medium leading-6 tracking-[3%] text-[16px] text-[#fff] rounded-[8px] px-10 lg:px-4 md:px-3 py-4 mr-[16px] lg:mr-[12px] sm:mr-[5px] md:w-[310px] ssxm:w-auto  border border-[#ffff]">
                <Image
                  src="flutterwave.svg"
                  alt="icon"
                  width={24}
                  height={24}
                  className=""
                />
               Donate with Flutterwave
              </div>
            </Link>
            <Link href="#">
              <div className=" font-whyte flex gap-2 justify-center items-center  font-medium leading-6 tracking-[3%] text-[16px] text-[#fff] border border-[#ffff] rounded-[8px] px-10 lg:px-4 md:px-3 py-4 mr-[16px] lg:mr-[12px] sm:mr-[5px] md:w-[310px] ssxm:w-auto">
                <Image
                  src="goFundme.svg"
                  alt="icon"
                  width={24}
                  height={24}
                  className=""
                />
                Support us on GoFundMe
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className={Classes.why}>
        <div className={Classes.whyFlex}>
          <div className={Classes.whyText}>
            <h3>Why we start Hackthejob </h3>
            <p>
              We know that the tech space is full of opportunities and talents.
              But fresh talents seem to find it difficult to crack this market
              or get their desired job. We then came to understand that there
              was a big difference between what they were taught and what
              employers expected from them. That is why we created HackTheJobs
              to fill that void and bring the employers and fresh talents
              together. Our mission is to help people get the hands-on practice
              and assistance they require in order to achieve their goals.
            </p>
          </div>
          <div className={Classes.whyStat}>
            <div className={Classes.stat}>
              <h3>100K +</h3>
              <p>Bootcamp graduates</p>
            </div>
            <div className={Classes.statFLex}>
              <div className={Classes.stat}>
                <h3>500K +</h3>
                <p>Bootcamps</p>
              </div>
              <div className={Classes.stat}>
                <h3> &lt;50K +</h3>
                <p>Junior opportunities </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={Classes.video}>
        <div className={Classes.videoFlex}>
          <h4>We did not just start, we have a story</h4>
          <Link href="#hero">
            <button>Make donation</button>
          </Link>
        </div>
        <div className={Classes.vidCon}>
          <video ref={videoRef} id="video" width="100%" height="489" loop>
            <source src="/landing-video.mp4" type="video/mp4" />
          </video>
          <div className={Classes.play} onClick={tooglePlay}>
            {isPlaying ? (
              <Image
                src="/pause.png"
                width={91}
                height={91}
                alt="img"
                className={Classes.playBtn}
              />
            ) : (
              <Image
                src="/play.png"
                width={91}
                height={91}
                alt="img"
                className={Classes.playBtn}
              />
            )}
          </div>
        </div>
      </div>
      <div className={Classes.numb}>
        <div className={Classes.numbFlex}>
          <div className={Classes.numbContent}>
            <Image
              src="/numImg.svg"
              width={58}
              height={58}
              alt="img"
              className={Classes.numbImg}
            />
            <h2 data-aos="fade-down">67+</h2>
            <span>
              Connected to <br />
              remote jobs
            </span>
          </div>
          <div className={Classes.numbContent}>
            <Image
              src="/numImg.svg"
              width={58}
              height={58}
              alt="img"
              className={Classes.numbImg}
            />
            <h2 data-aos="fade-down">67+</h2>
            <span>
              Connected to <br />
              remote jobs
            </span>
          </div>
          <div className={Classes.numbContent}>
            <Image
              src="/numImg.svg"
              width={58}
              height={58}
              alt="img"
              className={Classes.numbImg}
            />
            <h2 data-aos="fade-down">67+</h2>
            <span>
              Connected to <br />
              remote jobs
            </span>
          </div>
        </div>
      </div>
      <div className={Classes.donate}>
        <div className={Classes.donateFlex}>
          <div className={Classes.donateText}>
            <h4>
              Together Let’s <span>Scale</span> The Next Generation
            </h4>
            <p>
              Join us in shaping the future of tech by donating to sponsor
              talents through HackTheJobs. By supporting us, you're not just
              investing in a program, you're investing in the future of tech
              innovation. Your support will enable us to provide essential
              resources, mentorship, and opportunities to aspiring tech
              professionals, empowering them to reach their dreams in the world
              of tech. Together, let's build a brighter future for the tech
              workforce.
            </p>
            <p>
              Together, let's build a brighter future for the tech workforce.
            </p>

            <Link href="#hero">
              <button>Make donation</button>
            </Link>
          </div>
          {/* <Image src="/donateImg2.png" width={630} height={489} alt="img" /> */}
          <Image src="/donation-main.png" width={630} height={489} alt="img" />
        </div>
      </div>
      {/* <div className={Classes.logo}>
        <h4>Our partners samples</h4>
        <div className={Classes.logoSlide}>
          <div className={Classes.grid} >
            <div>
              <Image
                src="/layers.png"
                alt="group of pictures"
                width={164}
                height={48}
              />
            </div>
            <div>
              <Image
                src="/sisyphus.png"
                alt="group of pictures"
                width={164}
                height={48}
              />
            </div>
            <div>
              <Image
                src="/circooles.png"
                alt="group of pictures"
                width={164}
                height={48}
              />
            </div>
            <div>
              <Image
                src="/catalog.png"
                alt="group of pictures"
                width={164}
                height={48}
              />
            </div>
          </div>
        </div>
      </div> */}
      <div className={Classes.contact}>
        <div className={Classes.contactText}>
          <h4>Have a Question ? </h4>
          <p>We would love to hear from you.</p>
        </div>
        <button onClick={handleContact}>Contact Us</button>
      </div>
      <Footer openModal={() => setShowModal(true)} />
    </>
  );
};

export default Donation;
