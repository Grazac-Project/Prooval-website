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
            {/* <Link href="#">
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
            </Link> */}
            <Link
              href="https://flutterwave.com/donate/qp4tnnzbnn7g"
              target="_blank"
            >
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
            <Link href="https://gofund.me/9d0eeec3" target="_blank">
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
              We understand the challenges talents face first hand in attracting
              opportunities after acquiring tech skills either online or in a
              physical bootcamp. The idea behind hackthejobs is simply to close
              this gap between these entry level talents and the work experience
              needed to land global opportunities and stay competitive.
            </p>
          </div>
          {/* <div className={Classes.whyStat}>
            <div className={Classes.stat}>
              <h3>500K</h3>
              <p>Bootcamps</p>
            </div>
            <div className={Classes.statFLex}>
              <div className={Classes.stat}>
                <h3>50K +</h3>
                <p>Bootcamps grads</p>
              </div>
              <div className={Classes.stat}>
                <h3> &lt;3K +</h3>
                <p>Junior opportunities </p>
              </div>
            </div>
          </div> */}
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
      </div>
      <div className={Classes.video}>
        <div className={Classes.videoFlex}>
          <h4>We did not just start, we have a story</h4>
          <Link href="#hero">
            <button>Support a talent</button>
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
            <h2 data-aos="fade-down">500+</h2>
            <span>Bootcamps</span>
          </div>
          <div className={Classes.numbContent}>
            <Image
              src="/numImg.svg"
              width={58}
              height={58}
              alt="img"
              className={Classes.numbImg}
            />
            <h2 data-aos="fade-down">50k</h2>
            <span>Bootcamp Grads</span>
          </div>
          <div className={Classes.numbContent}>
            <Image
              src="/numImg.svg"
              width={58}
              height={58}
              alt="img"
              className={Classes.numbImg}
            />
            <h2 data-aos="fade-down">&lt;3K +</h2>
            <span>Junior opportunities</span>
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
              We invite you to join us to build the workforce of the future.
              Together we can help millions of talents lead their dream jobs.
            </p>
            {/* <p>
              Together, let's build a brighter future for the tech workforce.
            </p>  */}

            <Link href="#hero">
              <button>Support a Talent</button>
            </Link>
          </div>
          {/* <Image src="/donateImg2.png" width={630} height={489} alt="img" />  */}
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
