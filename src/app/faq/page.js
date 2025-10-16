"use client";
import Navbar from "@/components/navbar/nav";
import Classes from "./faq.module.css";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Footer from "@/components/footer/footer";
import { faq } from "@/constants/faq";
import { useFormik } from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { faqForm } from "@/api/authentication/auth";
import Modal from "@/components/modal/modal";
import FaqModal from "@/components/modal/faqModal";

const initialValues = {
  email: "",
  firstName: "",
  lastName: "",
  msg: "",
};

const Faq = () => {
  const [show, setShow] = useState({});
  const [show2, setShow2] = useState({});
  const [question, setQuestion] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);

  const [visibleCount, setVisibleCount] = useState(4);
  const [isDesktop, setIsDesktop] = useState(false);

  // Handle window width safely
  useEffect(() => {
    const handleResize = () => {
      const desktop = window.innerWidth > 768;
      setIsDesktop(desktop);
      setVisibleCount(desktop ? faq.length : 4);
    };

    handleResize(); // Run once when mounted
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleToggle = (id) => {
    setShow((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleToggle2 = (id) => {
    setShow2((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const schema = yup.object({
    email: yup
      .string()
      .email("Please enter a valid email")
      .required("Email is required"),
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
    msg: yup.string().required("Message is required"),
  });

  const { values, handleSubmit, handleChange, handleBlur, errors, touched } =
    useFormik({
      initialValues,
      validationSchema: schema,
      onSubmit: async (values, actions) => {
        setLoading(true);
        faqForm(values)
          .then((res) => {
            if (res.status === 200) {
              setLoading(false);
              actions.resetForm();
              setShowModal2(true);
            }
          })
          .catch((error) => {
            toast.warn(error.response?.data?.message || "Something went wrong");
            setLoading(false);
          });
      },
    });

  return (
    <>
      <Navbar />
      {showModal && <Modal modalClose={() => setShowModal(false)} />}
      {showModal2 && <FaqModal modalClose={() => setShowModal2(false)} />}

      <div className={Classes.Faq}>
        <div className={Classes.hero}>
          <h1 className="font-satoshi">FAQs</h1>
          <p className="font-satoshi">
            Need more clarity? Here are our most frequently asked questions.
          </p>
          <div className={Classes.search}>
            <Image src="/search.svg" alt="img" width={15} height={15} />
            <input type="search" placeholder="Search" />
          </div>
        </div>

        <div className={Classes.innerContainer}>
          <h2 className="font-satoshi">Frequently asked questions</h2>

          <div className={Classes.questionFlex}>
            <div className={Classes.flex1}>
              {faq.slice(0, isDesktop ? 7 : visibleCount).map((item, index) => (
                <div className={Classes.questionContainer} key={index}>
                  <div
                    className={Classes.question}
                    onClick={() => handleToggle(index)}
                  >
                    {item.question}
                    {!show[index] ? (
                      <Image
                        src="/drop.svg"
                        alt="img"
                        width={20}
                        height={20}
                        style={{ cursor: "pointer", marginTop: "-20px" }}
                      />
                    ) : (
                      <Image
                        src="/drop2.svg"
                        alt="img"
                        width={20}
                        height={20}
                        style={{ cursor: "pointer", marginBottom: "2px" }}
                      />
                    )}
                  </div>
                  {show[index] && (
                    <div className={`${Classes.answer} font-satoshi`}>
                      {item.answer}{" "}
                      {item.link1 && (
                        <a href="#">
                          <span className={Classes.link}>{item.link1}</span>
                        </a>
                      )}{" "}
                      {item.link2 && (
                        <a href="mailto:hello@hackthejobs.com">
                          <span className={`${Classes.link} font-satoshi`}>
                            {item.link2}
                          </span>
                        </a>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className={Classes.flex2}>
              {faq
                .slice(
                  isDesktop ? 7 : 0,
                  isDesktop ? 13 : visibleCount > 4 ? visibleCount : 0
                )
                .map((item, index) => (
                  <div className={Classes.questionContainer} key={index}>
                    <div
                      className={`${Classes.question} font-satoshi`}
                      onClick={() => handleToggle2(index)}
                    >
                      {item.question}
                      <div>
                        {!show2[index] ? (
                          <Image
                            src="/drop.svg"
                            alt="img"
                            width={20}
                            height={20}
                            style={{ cursor: "pointer" }}
                          />
                        ) : (
                          <Image
                            src="/drop2.svg"
                            alt="img"
                            width={20}
                            height={20}
                            style={{ cursor: "pointer" }}
                          />
                        )}
                      </div>
                    </div>
                    {show2[index] && (
                      <div className={`${Classes.answer} font-satoshi`}>
                        {item.answer}
                      </div>
                    )}
                  </div>
                ))}
            </div>

            {visibleCount < faq.length ? (
              <button
                className={Classes.mobileBtn}
                onClick={() => setVisibleCount(faq.length)}
              >
                See more
              </button>
            ) : (
              <button
                className={Classes.mobileBtn}
                onClick={() => setVisibleCount(4)}
              >
                See less
              </button>
            )}
          </div>
        </div>

        <div className={Classes.formContainer} id="contact-form">
          <h4>Get in touch</h4>
          <p>We’d love to hear from you. Please fill out this form.</p>
          <form className={Classes.form} onSubmit={handleSubmit}>
            <div className={Classes.inputFlex}>
              <div>
                <h5>First name</h5>
                <input
                  type="text"
                  placeholder="First name"
                  name="firstName"
                  value={values.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <div className={Classes.errorMsg}>
                  {errors.firstName && touched.firstName && (
                    <span>{errors.firstName}</span>
                  )}
                </div>
              </div>
              <div>
                <h5>Last name</h5>
                <input
                  type="text"
                  placeholder="Last Name"
                  name="lastName"
                  value={values.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <div className={Classes.errorMsg}>
                  {errors.lastName && touched.lastName && (
                    <span>{errors.lastName}</span>
                  )}
                </div>
              </div>
            </div>
            <div>
              <h5>Email</h5>
              <input
                type="email"
                placeholder="you@company.com"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <div className={Classes.errorMsg}>
                {errors.email && touched.email && <span>{errors.email}</span>}
              </div>
            </div>
            <div>
              <h5>Message</h5>
              <textarea
                data-typebox
                name="msg"
                value={values.msg}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <div className={Classes.errorMsg}>
                {errors.msg && touched.msg && <span>{errors.msg}</span>}
              </div>
            </div>
            <button type="submit">
              {loading ? (
                <Image
                  src="/loader.gif"
                  width={16}
                  height={16}
                  alt="loader"
                  className="mx-auto"
                  unoptimized={true}
                />
              ) : (
                "Send message"
              )}
            </button>
          </form>
        </div>
      </div>

      <Footer openModal={() => setShowModal(true)} />
    </>
  );
};

export default Faq;
