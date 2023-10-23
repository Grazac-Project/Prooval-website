import React from "react";
import Classes from "./about.module.css";
import Image from "next/image";
import Navbar from "@/components/navbar/nav";
import Footer from "@/components/footer/footer";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div className={Classes.about}>
      <div className={Classes.pad}></div>

        <section className={Classes.hero}>
          <div className={Classes.heroText}>
            <h4>ABOUT HACKTHEJOB</h4>
            <h1>We are here to provide you real life experiences</h1>
            <p>
              Don’t stop now, fill in your details correctly and get ready to be
              a real tech enthusiast, don’t stop again, fill in your everything
              about us would make you happy correctly and get ready to be a real
              tech enthusiast
            </p>
          </div>
          <Image
            src="/about.png"
            alt="image"
            width={1440}
            height={834}
            // style={{ width: "100%", objectFit: "cover" }}
          />
          <section className={Classes.statement}>
            <div className={Classes.statementContent}>
              <div className={Classes.vision}>
                <div className={Classes.visionText}>
                  <h1>Our Vision</h1>
                  <p>
                    Our vision is to create a thriving tech community where
                    every enthusiast has access to mentorship, internship
                    opportunities, and hands-on learning experiences. We aim to
                    be the premier destination for tech newcomers, guiding them
                    toward successful careers while nurturing innovation and
                    excellence. Our ultimate goal is to shape the future of
                    tech, one internship at a time.
                  </p>
                </div>
                <Image
                  src="/vision.png"
                  alt="vision"
                  width={400}
                  height={400}
                />
              </div>
              <div className={Classes.mission}>
                <Image
                  src="/mission.png"
                  alt="vision"
                  width={400}
                  height={400}
                />
                <div className={Classes.missionText}>
                  <h1>Our mision</h1>
                  <p>
                    Our mission is to bridge the gap between tech novices and
                    experts by connecting aspiring individuals with valuable
                    internship opportunities. We strive to empower newcomers in
                    the tech industry, fostering growth, learning, and
                    real-world experience. Our platform is dedicated to
                    facilitating a seamless journey toward technical excellence.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </section>
      </div>
      <Footer/>
    </>
  );
};

export default AboutUs;
