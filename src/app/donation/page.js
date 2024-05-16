"use client";
import React, { useEffect, useRef, useState } from "react";
import Classes from "./donation.module.css";
import Navbar from "@/components/navbar/nav";
import Footer from "@/components/footer/footer";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import Modal from "@/components/modal/modal";
import { useRouter } from 'next/navigation';


const Donation = () => {
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  
  const handleContact = () => {
    router.push('/faq#contact-form')
  }

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
      { showModal && <Modal modalClose={(() => setShowModal(false))}/>}
      
      <div className={Classes.hero}>
        <div className={Classes.heroText} data-aos="fade-down">
          <h1>Donation</h1>
          <p>
            We're one step closer to our mission with each contribution you make: enabling teams to perform at their best, 
            regardless of their size or budget
          </p>
        </div>
        <button>Coming soon...</button>
      </div>
      <div className={Classes.why}>
        <div className={Classes.whyFlex} >
          <div className={Classes.whyText}>
            <h3>Why we started Hackthejob </h3>
            <p>
              Our journey began with a simple yet powerful realization that the tech industry is bursting with 
              opportunities and talents however, tech talents can’t seem to break into this industry or land their dream role, especially for recent graduates from tech bootcamps and self-taught tech talents. We realized there was a huge gap between the skills they acquired and the real-world experience employers demanded. That's why we founded HackTheJobs to bridge that gap. Our passion lies in empowering individuals with the hands-on experience and support they need to turn their aspirations into reality. We believe in the transformative power of practical learning and personalized mentorship. 
              Join us in our mission to unlock the doors to the tech world for everyone, one opportunity at a time.
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
          <video ref={videoRef} id="video" width="100%" height="489"  loop>
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
        <div className={Classes.donateFlex} >
          <div className={Classes.donateText}>
            <h4>
              Together We can The <span>transform</span> Next Generation
            </h4>
            <p>
              Join us in shaping the future of tech by donating and sponsoring talents through HackTheJobs. 
              By sponsoring us, you're not just investing in a program, you're investing in the future of tech innovation. 
              Your support will enable us to provide essential resources, mentorship, and opportunities to aspiring tech 
              professionals, empowering them to reach their full potential and make a meaningful impact in the world of 
              technology.
            </p>
            <p>Together, let's build a brighter future for the tech workforce.</p>
            <button>Make donation</button>
          </div>
          <Image src="/donateImg2.png" width={630} height={489} alt="img" />
        </div>
      </div>
      <div className={Classes.logo}>
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
      </div>
      <div className={Classes.contact}>
        <div className={Classes.contactText} >
          <h4>Have a Question ? </h4>
          <p>
            We would love to hear from you.
          </p>
        </div>
        <button onClick={handleContact}>Contact Us</button>
      </div>
      <Footer  openModal={() => setShowModal(true)} />
    </>
  );
};

export default Donation;
