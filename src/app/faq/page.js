"use client";
import Navbar from "@/components/navbar/nav";
import Classes from "./faq.module.css";
import Image from "next/image";
import React, { useState } from "react";
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
  const [loading, setLoading] = useState(false)
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);



  const handleToggle = (id) => {
    console.log(id);
    setShow((prevshow) => ({
      ...prevshow,
      [id]: !prevshow[id],
    }));
    // setShow(false);
  };
  const handleToggle2 = (id) => {
    console.log(id);
    setShow2((prevshow) => ({
      ...prevshow,
      [id]: !prevshow[id],
    }));
    // setShow(false);
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
        setLoading(true)
        faqForm(values)
          .then((res) => {
            if (res.status === 200) {
              setLoading(false)
              // console.log(res);
              actions.resetForm();
             setShowModal2(true)
            }
          })
          .catch((error) => {
            console.log(error);
            toast.warn(error.response.data.message);
          });
      },
    });

  return (
    <>
      <Navbar />
      { showModal && <Modal modalClose={(() => setShowModal(false))}/>}
      { showModal2 && <FaqModal modalClose={(() => setShowModal2(false))}/>}


      <div className={Classes.Faq}>
        <div className={Classes.hero}>
          <h1>Everything you need to know</h1>
          <p>
            Need something cleared up? Here are our most frequently asked
            questions.
          </p>
          <div className={Classes.search}>
            <Image src="/search.svg" alt="img" width={15} height={15} />
            <input type="search" placeholder="Search" />
          </div>
        </div>
        <div className={Classes.innerContainer}>
          <h2>Frequently asked questions</h2>
          <p>Everything you need to know about hacktheJobs.</p>
          <div className={Classes.questionFlex}>
            <div className={Classes.flex1}>
              {faq.slice(0, 5).map((item, index) => (
                <div
                  className={Classes.questionContainer}
                  // onClick={handleToggle}
                  key={index}
                >
                  <div
                    className={Classes.question}
                    onClick={() => handleToggle(index)}
                  >
                    {item.question}
                    <>
                      {!show[index] ? (
                        <Image
                          src="/drop.svg"
                          alt="img"
                          width={20}
                          height={20}
                          key={index}
                          style={{ cursor: "pointer" }}
                        />
                      ) : (
                        <Image
                          src="/drop2.svg"
                          alt="img"
                          width={20}
                          height={20}
                          key={index}
                          style={{ cursor: "pointer" }}
                        />
                      )}
                    </>
                  </div>
                  {show[index] && (
                    <div className={Classes.answer}>{item.answer} {item.link1 && <a href="#"><span className={Classes.link}>{item.link1}</span></a>} {item.link2 && <a href="mailto:hello@hackthejobs.com"><span className={Classes.link}>{item.link2}</span></a>}</div>
                  )}
                </div>
              ))}
            </div>
            <div className={Classes.flex2}>
              {faq.slice(5).map((item, index) => (
                <div className={Classes.questionContainer} key={index}>
                  <div
                    className={Classes.question}
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
                          key={index}
                          style={{ cursor: "pointer" }}
                        />
                      ) : (
                        <Image
                          src="/drop2.svg"
                          alt="img"
                          width={20}
                          height={20}
                          key={index}
                          style={{ cursor: "pointer" }}
                        />
                      )}
                    </div>
                  </div>
                  {show2[index] && (
                    <div className={Classes.answer}>{item.answer}</div>
                  )}
                </div>
              ))}
            </div>
            {question && (
              <div className={Classes.flex3}>
                {faq.slice(5, 10).map((item, index) => (
                  <div
                    className={Classes.questionContainer}
                    click={handleToggle}
                    key={index}
                   
                  >
                    <div
                      className={Classes.question}
                      onClick={() => handleToggle2(index)}
                    >
                      {item.question}
                      <>
                        {!show2[index] ? (
                          <Image
                            src="/drop.svg"
                            alt="img"
                            width={20}
                            height={20}
                            key={index}
                            style={{ cursor: "pointer" }}
                          />
                        ) : (
                          <Image
                            src="/drop2.svg"
                            alt="img"
                            width={20}
                            height={20}
                            key={index}
                            style={{ cursor: "pointer" }}
                          />
                        )}
                      </>
                    </div>
                    {show2[index] && (
                      <div className={Classes.answer}>{item.answer}</div>
                    )}
                  </div>
                ))}
              </div>
            )}
            <button
              className={Classes.mobileBtn}
              onClick={() => setQuestion(true)}
            >
              {" "}
              See more
            </button>
          </div>
        </div>
        <div className={Classes.formContainer} id="contact-form">
          <h4>Get in touch</h4>
          <p>We’d love to hear from you. Please fill out this form.</p>
          <form className={Classes.form} onSubmit={handleSubmit} >
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
            <button type="submit">{loading ? (
                <Image
                  src="/loader.gif"
                  width={16}
                  height={16}
                  alt="loader"
                  className="mx-auto"
                />
              ) : (
                "Send message"
              )}</button>
          </form>
        </div>
      </div>
      <Footer  openModal={() => setShowModal(true)} />
    </>
  );
};

export default Faq;
