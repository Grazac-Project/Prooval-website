"use client";

import React, { useState } from "react";
import Classes from "./wait.module.css";
import Image from "next/image";
import { useFormik } from "formik";
import * as yup from "yup";
import Navbar from "@/components/navbar/nav";
import axios from "axios";
import Footer from "@/components/footer/footer";
import Modal from "@/components/modal/modal";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const initialValues = {
  email: "",
  name: "",
};

const WaitList = () => {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const schema = yup.object({
    email: yup
      .string()
      .email("Please enter a valid email")
      .required("Email is required"),
    name: yup.string().required("Name is required"),
  });
  const { values, handleSubmit, handleChange, handleBlur, errors, touched } =
    useFormik({
      initialValues,
      validationSchema: schema,
      onSubmit: async (values, actions) => {
        await axios
          .post(
            "https://hack-d-jobs-6b8f81a0524b.herokuapp.com/api/v1/user/create",
            values
          )
          .then((res) => {
            console.log(res);
            setShowModal(true);
            actions.resetForm();
          })
          .catch((error) => {
            console.log(error);
            toast.warn(error.response.data.message);
          });
      },
    });
  const closeModal = () => {
    router.push("/");
  };
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <>
      <ToastContainer closeButton={false} />
      <Navbar />
      {showModal ? (
        <Modal modalClose={closeModal} />
      ) : (
        <>
          <div className={Classes.hero}>
            <div className={Classes.heroText}>
              <h3>
                Get merged with an <span>expert</span> and gain{" "}
                <span>real-life</span> experience{" "}
              </h3>
              <p>
                As a newbie in tech, you now have access to a team and a senior
                product manager to get started on building your confidence and
                potfolio, taking you closer t the job market
              </p>
              <form onSubmit={handleSubmit}>
                <div className={Classes.formFlex}>
                  <div className={Classes.form}>
                    <input
                      type="text"
                      placeholder="Enter firstname"
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                  <div className={Classes.form2}>
                    <input
                      type="email"
                      placeholder="Enter Email Address"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                </div>

                <button type="submit" className={Classes.button}>
                  Join the Waitlist
                </button>
              </form>
            </div>
            <div className={Classes.heroImage}>
              <Image src="/heroImg.png" width="548" height="554" alt="img" />
            </div>
          </div>
          <section className={Classes.talents}>
            <h4>Hear from our Past talents</h4>
            <div className={Classes.slider}>
              <Carousel
                swipeable={true}
                draggable={false}
                showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["desktop","tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                // itemClass="carousel-item-padding-40-px"
              >
                <div className={Classes.card}>
                  <Image
                    src="/talent1.png"
                    width="362"
                    height="192"
                    alt="img"
                  />
                  <h5>Joy Omowaye</h5>
                  <span>Front-End Developer</span>
                  <p>
                    As a newbie in tech, you now have access to a team and a
                    senior product manager to get started on
                  </p>
                </div>
                <div className={Classes.card}>
                  <Image
                    src="/talent2.png"
                    width="362"
                    height="192"
                    alt="img"
                  />
                  <h5>Joy Omowaye</h5>
                  <span>UI/UX Designer</span>
                  <p>
                    As a newbie in tech, you now have access to a team and a
                    senior product manager to get started on
                  </p>
                </div>
                <div className={Classes.card}>
                  <Image
                    src="/talent3.png"
                    width="362"
                    height="192"
                    alt="img"
                  />
                  <h5>Joy Omowaye</h5>
                  <span>Back-End Developer</span>
                  <p>
                    As a newbie in tech, you now have access to a team and a
                    senior product manager to get started on
                  </p>
                </div>
                <div className={Classes.card}>
                  <Image
                    src="/talent3.png"
                    width="362"
                    height="192"
                    alt="img"
                  />
                  <h5>Joy Omowaye</h5>
                  <span>Back-End Developer</span>
                  <p>
                    As a newbie in tech, you now have access to a team and a
                    senior product manager to get started on
                  </p>
                </div>
                <div className={Classes.card}>
                  <Image
                    src="/talent1.png"
                    width="362"
                    height="192"
                    alt="img"
                  />
                  <h5>Joy Omowaye</h5>
                  <span>Front-End Developer</span>
                  <p>
                    As a newbie in tech, you now have access to a team and a
                    senior product manager to get started on
                  </p>
                </div>
              </Carousel>
            </div>
          </section>
          <Footer />
        </>
      )}
    </>
  );
};
export default WaitList;
