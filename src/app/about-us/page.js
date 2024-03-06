"use client";

import React from "react";
import Classes from "./about.module.css";
import Image from "next/image";
import Navbar from "@/components/navbar/nav";
import Footer from "@/components/footer/footer";
import Link from "next/link";
import Slider from "react-slick";


const AboutUs = () => {
  var settings = {
    dots: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 768, // for screens between 768px and 1024px wide
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600, // for screens less than 768px wide
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <>
      <Navbar />
      <div className={Classes.about}>
        <div className={Classes.intro}>
          <h1>
            We are <span></span>
          </h1>
          <p>
            Our mission is to ensure teams can do their best work, no matter
            their size or budget. We focus on the details of everything we do.
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
        <Image src="/story.png" alt="img" width={1280} height={432} className={Classes.storyImg1}/>
        <Image src="/story2.png" alt="img" width={1280} height={432} className={Classes.storyImg} />

        <div className={Classes.storyFlex}>
          <p>
            Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id
            scelerisque est ultricies ultricies. Duis est sit sed leo nisl,
            blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at
            scelerisque amet nulla purus habitasse.
            <br /> Nunc sed faucibus bibendum feugiat sed interdum. Ipsum
            egestas condimentum mi massa. In tincidunt pharetra consectetur sed
            duis facilisis metus. Etiam egestas in nec sed et. Quis lobortis at
            sit dictum eget nibh tortor commodo cursus.
            <br />
            <br />
            Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id
            scelerisque est ultricies ultricies. Duis est sit sed leo nisl,
            blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at
            scelerisque amet nulla purus habitasse.
          </p>
          <p>
            Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id
            scelerisque est ultricies ultricies. Duis est sit sed leo nisl,
            blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at
            scelerisque amet nulla purus habitasse. <br /> Nunc sed faucibus
            bibendum feugiat sed interdum. Ipsum egestas condimentum mi massa.
            In tincidunt pharetra consectetur sed duis facilisis metus. Etiam
            egestas in nec sed et. Quis lobortis at sit dictum eget nibh tortor
            commodo cursus.
            <br />
            <br />
            Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id
            scelerisque est ultricies ultricies. Duis est sit sed leo nisl,
            blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at
            scelerisque amet nulla purus habitasse.
          </p>
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
          <div className={Classes.galleryFlex}>
            <div className={Classes.card}>
              <Image src="/team.png" alt="img" width={296} height={296} />
              <h5>Olivia Rhye</h5>
              <span>Founder & CEO</span>
              <div className={Classes.social}>
                <Link href="#">
                  <Image src="/twitter.svg" alt="img" width={24} height={24} />
                </Link>
                <Link href="#">
                  <Image src="/linkledn.svg" alt="img" width={24} height={24} />
                </Link>
              </div>
            </div>
            <div className={Classes.card}>
              <Image src="/team.png" alt="img" width={296} height={296} />
              <h5>Olivia Rhye</h5>
              <span>Founder & CEO</span>
              <div className={Classes.social}>
                <Link href="#">
                  <Image src="/twitter.svg" alt="img" width={24} height={24} />
                </Link>
                <Link href="#">
                  <Image src="/linkledn.svg" alt="img" width={24} height={24} />
                </Link>
              </div>
            </div>
            <div className={Classes.card}>
              <Image src="/team.png" alt="img" width={296} height={296} />
              <h5>Olivia Rhye</h5>
              <span>Founder & CEO</span>
              <div className={Classes.social}>
                <Link href="#">
                  <Image src="/twitter.svg" alt="img" width={24} height={24} />
                </Link>
                <Link href="#">
                  <Image src="/linkledn.svg" alt="img" width={24} height={24} />
                </Link>
              </div>
            </div>
            <div className={Classes.card}>
              <Image src="/team.png" alt="img" width={296} height={296} />
              <h5>Olivia Rhye</h5>
              <span>Founder & CEO</span>
              <div className={Classes.social}>
                <Link href="#">
                  <Image src="/twitter.svg" alt="img" width={24} height={24} />
                </Link>
                <Link href="#">
                  <Image src="/linkledn.svg" alt="img" width={24} height={24} />
                </Link>
              </div>
            </div>
          </div>
          <div className={Classes.galleryFlex}>
            <div className={Classes.card}>
              <Image src="/team.png" alt="img" width={296} height={296} />
              <h5>Olivia Rhye</h5>
              <span>Founder & CEO</span>
              <div className={Classes.social}>
                <Link href="#">
                  <Image src="/twitter.svg" alt="img" width={24} height={24} />
                </Link>
                <Link href="#">
                  <Image src="/linkledn.svg" alt="img" width={24} height={24} />
                </Link>
              </div>
            </div>
            <div className={Classes.card}>
              <Image src="/team.png" alt="img" width={296} height={296} />
              <h5>Olivia Rhye</h5>
              <span>Founder & CEO</span>
              <div className={Classes.social}>
                <Link href="#">
                  <Image src="/twitter.svg" alt="img" width={24} height={24} />
                </Link>
                <Link href="#">
                  <Image src="/linkledn.svg" alt="img" width={24} height={24} />
                </Link>
              </div>
            </div>
            <div className={Classes.card}>
              <Image src="/team.png" alt="img" width={296} height={296} />
              <h5>Olivia Rhye</h5>
              <span>Founder & CEO</span>
              <div className={Classes.social}>
                <Link href="#">
                  <Image src="/twitter.svg" alt="img" width={24} height={24} />
                </Link>
                <Link href="#">
                  <Image src="/linkledn.svg" alt="img" width={24} height={24} />
                </Link>
              </div>
            </div>
            <div className={Classes.card}>
              <Image src="/team.png" alt="img" width={296} height={296} />
              <h5>Olivia Rhye</h5>
              <span>Founder & CEO</span>
              <div className={Classes.social}>
                <Link href="#">
                  <Image src="/twitter.svg" alt="img" width={24} height={24} />
                </Link>
                <Link href="#">
                  <Image src="/linkledn.svg" alt="img" width={24} height={24} />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={Classes.gallerySlide}>
          <Slider {...settings}>
            <div className={Classes.card}>
              <Image src="/team.png" alt="img" width={296} height={296} />
              <h5>Olivia Rhye</h5>
              <span>Founder & CEO</span>
              <div className={Classes.social}>
                <Link href="#">
                  <Image src="/twitter.svg" alt="img" width={24} height={24} />
                </Link>
                <Link href="#">
                  <Image src="/linkledn.svg" alt="img" width={24} height={24} />
                </Link>
              </div>
            </div>
            <div className={Classes.card}>
              <Image src="/team.png" alt="img" width={296} height={296} />
              <h5>Olivia Rhye</h5>
              <span>Founder & CEO</span>
              <div className={Classes.social}>
                <Link href="#">
                  <Image src="/twitter.svg" alt="img" width={24} height={24} />
                </Link>
                <Link href="#">
                  <Image src="/linkledn.svg" alt="img" width={24} height={24} />
                </Link>
              </div>
            </div>
            <div className={Classes.card}>
              <Image src="/team.png" alt="img" width={296} height={296} />
              <h5>Olivia Rhye</h5>
              <span>Founder & CEO</span>
              <div className={Classes.social}>
                <Link href="#">
                  <Image src="/twitter.svg" alt="img" width={24} height={24} />
                </Link>
                <Link href="#">
                  <Image src="/linkledn.svg" alt="img" width={24} height={24} />
                </Link>
              </div>
            </div>
            <div className={Classes.card}>
              <Image src="/team.png" alt="img" width={296} height={296} />
              <h5>Olivia Rhye</h5>
              <span>Founder & CEO</span>
              <div className={Classes.social}>
                <Link href="#">
                  <Image src="/twitter.svg" alt="img" width={24} height={24} />
                </Link>
                <Link href="#">
                  <Image src="/linkledn.svg" alt="img" width={24} height={24} />
                </Link>
              </div>
            </div>

            <div className={Classes.card}>
              <Image src="/team.png" alt="img" width={296} height={296} />
              <h5>Olivia Rhye</h5>
              <span>Founder & CEO</span>
              <div className={Classes.social}>
                <Link href="#">
                  <Image src="/twitter.svg" alt="img" width={24} height={24} />
                </Link>
                <Link href="#">
                  <Image src="/linkledn.svg" alt="img" width={24} height={24} />
                </Link>
              </div>
            </div>
            <div className={Classes.card}>
              <Image src="/team.png" alt="img" width={296} height={296} />
              <h5>Olivia Rhye</h5>
              <span>Founder & CEO</span>
              <div className={Classes.social}>
                <Link href="#">
                  <Image src="/twitter.svg" alt="img" width={24} height={24} />
                </Link>
                <Link href="#">
                  <Image src="/linkledn.svg" alt="img" width={24} height={24} />
                </Link>
              </div>
            </div>
            <div className={Classes.card}>
              <Image src="/team.png" alt="img" width={296} height={296} />
              <h5>Olivia Rhye</h5>
              <span>Founder & CEO</span>
              <div className={Classes.social}>
                <Link href="#">
                  <Image src="/twitter.svg" alt="img" width={24} height={24} />
                </Link>
                <Link href="#">
                  <Image src="/linkledn.svg" alt="img" width={24} height={24} />
                </Link>
              </div>
            </div>
            <div className={Classes.card}>
              <Image src="/team.png" alt="img" width={296} height={296} />
              <h5>Olivia Rhye</h5>
              <span>Founder & CEO</span>
              <div className={Classes.social}>
                <Link href="#">
                  <Image src="/twitter.svg" alt="img" width={24} height={24} />
                </Link>
                <Link href="#">
                  <Image src="/linkledn.svg" alt="img" width={24} height={24} />
                </Link>
              </div>
            </div>
          </Slider>
        </div>
      </div>
      <div className={Classes.donation}>
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
      </div>

      <Footer />
    </>
  );
};

export default AboutUs;
