"use client";
import React, { useEffect, useRef, useState } from "react";
import Classes from "./donation.module.css";
import Navbar from "@/components/navbar/nav";
import Footer from "@/components/footer/footer";
import Image from "next/image";
import AOS from 'aos';
import 'aos/dist/aos.css';



const Donation = () => {


  useEffect(() => {
    AOS.init({duration: 1000,
      offset: 200,
      easing: 'ease-in-sine',
      delay: 100,});
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
      <div className={Classes.hero}>
        <div className={Classes.heroText} data-aos="fade-down">
          <h1>Support a Talent </h1>
          <p>
            Our mission is to ensure teams can do their best work, no matter
            their size or budget. We focus on the details of everything we do.
          </p>
        </div>
        <button>Make donation</button>
      </div>
      <div className={Classes.why}>
        <div className={Classes.whyFlex} data-aos="zoom-in">
          <div className={Classes.whyText}>
            <h3>Why we start Hackthejob </h3>
            <p>
              Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus
              id scelerisque est ultricies ultricies. Duis est sit sed leo nisl,
              blandit elit sagittis. Quisque tristique consequat quam sed. Nisl
              at scelerisque amet nulla purus habitasse. <br />
              <br /> Nunc sed faucibus bibendum feugiat sed interdum. Ipsum
              egestas condimentum mi massa. In tincidunt pharetra consectetur
              sed duis facilisis metus. Etiam egestas in nec sed et. Quis
              lobortis at sit dictum eget nibh tortor commodo cursus
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
          <button>Make donation</button>
        </div>
        <div className={Classes.vidCon}>
          <video>
            <source src="."/>
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
        <div className={Classes.donateFlex} data-aos="zoom-in">
          <div className={Classes.donateText}>
            <h4>
              Together we can <span>transform</span> next generation
            </h4>
            <p>
              Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus
              id scelerisque est ultricies ultricies. Duis est sit sed leo nisl,
              blandit elit sagittis. Quisque tristique consequat quam sed. Nisl
              at scelerisque amet nulla purus habitasse. Nunc sed faucibus
              bibendum feugiat sed interdum. IpsumEtiam egestas in nec sed et.
              Quis lobortis at sit dictum eget nibh tortor commodo <br />
              <br />
              cursusNunc sed faucibus bibendum feugiat sed interdum. Ipsum
              egestas condimentum mi massa. In tincidunt pharetra consectetur
              sed duis facilisis metus. Etiam egestas in nec sed et.{" "}
            </p>
            <button>Make donation</button>
          </div>
          <Image src="/donateImg2.png" width={630} height={489} alt="img" />
        </div>
      </div>
      <div className={Classes.logo}>
        <h4>Our partners samples</h4>
        <div className={Classes.logoSlide}>
          <div className={Classes.grid} data-aos="zoom-in">
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
            <div>
              <Image
                src="/quotient.png"
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
            <div>
              <Image
                src="/quotient.png"
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
            <div>
              <Image
                src="/quotient.png"
                alt="group of pictures"
                width={164}
                height={48}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={Classes.contact}>
        <div className={Classes.contactText} data-aos="zoom-in">
          <h4>Have a Question ? </h4>
          <p>
            Our mission is to ensure teams can do their best work, no matter
            their size or budget. We focus on the details of everything we do.
          </p>
        </div>
        <button>Contact Us</button>
      </div>
      <Footer />
    </>
  );
};

export default Donation;
