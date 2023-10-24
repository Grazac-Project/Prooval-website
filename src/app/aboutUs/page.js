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
              At Hack the Jobs, we're trailblazing in the tech industry by
              ensuring that tech newbies get a strong head start in their
              careers. We achieve this by pairing them with seasoned experts and
              senior product managers, offering valuable hands-on experience and
              mentorship. Join us in this exciting journey and kickstart your
              tech career with confidence
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
                    Our vision is to make tech accessible and rewarding for
                    newcomers, guiding tech enthusiasts from beginners to
                    experts through a trusted platform that helps them grow and
                    succeed in the industry. Our goal is to empower every tech
                    newbie to thrive.
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
                    Our mission is to empower tech newbies by providing them
                    with the opportunity to work on real-life projects that
                    function as internships, bridging the gap in a landscape
                    where numerous bootcamps train tech enthusiasts but job
                    opportunities remain scarce. We connect these newcomers with
                    tangible experiences that they can proudly present to
                    potential clients and employers, enabling them to kickstart
                    their tech careers with confidence
                  </p>
                </div>
              </div>
            </div>
          </section>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
