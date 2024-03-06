"use client";
import Navbar from "@/components/navbar/nav";
import Classes from "./faq.module.css";
import Image from "next/image";
import React, { useState } from "react";
import Footer from "@/components/footer/footer";

const Faq = () => {
  const faq = [
    {
      id: 1,
      question: "Is HacktheJobs free?",
      answer:
        "Yes, It’s completely free. Absolutely no charge. Mentors and senior product managers are volunteers in our community and they are paying it forward. ",
    },
    {
      id: 2,
      question: "What's the duration of this program?",
      answer: "The duration for Hackthejobs is six months ",
    },
    {
      id: 3,
      question: "How long is account approval? ",
      answer:
        "Upon completion of your registration, the onboarding team reviews to ensure you are qualified to get in for Hackthejobs. ",
    },
    {
      id: 4,
      question: "I am a mentee, can I be a mentor? ",
      answer:
        "No, a mentee can not become a mentor because our mentors are selected using strict prerequisites, and career achievements, so, as a mentee, it’s certain you are yet to attain that level of becoming a mentor on Hackthejobs. ",
    },
    {
      id: 5,
      question:
        "What are the eligibility criteria to get approved as a verified mentor? ",
      answer:
        "To get approved and verified as a mentor, there must be a proven track record of success and achievement in your tech career. ",
    },
    {
      id: 6,
      question: "Can I work alone? ",
      answer:
        "No. The nature of Hackthejobs requires collaboration with a few team members and a senior product manager who monitors your progress while you work on different projects/products. ",
    },
    {
      id: 7,
      question:
        "Will I get a certificate of completion at the end of this program?",
      answer:
        "No. While we provide you with work experience and valuable resources to help you advance in your career, we don't issue a certificate of completion.",
    },
    {
      id: 8,
      question: "Can I start before completing my tech training? ",
      answer:
        "No. Individuals must complete their tech training before commencing Hackthejobs whether by a physical bootcamp/online boot camp or any other training ",
    },
    {
      id: 9,
      question: "Are mentors paid? ",
      answer:
        "No, our platform operates on the principle of community support and our mentors get appreciated from time to time.",
    },
    {
      id: 10,
      question: "What benefits do Mentors get?",
      answer:
        "Mentors get recognition for their work, appreciation from us and of course, that gratifying satisfaction of making an impact in someone’s career. ",
    },
  ];
  const [show, setShow] = useState({});
  const [show2, setShow2] = useState({});
  const [question, setQuestion] = useState(false);

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
  return (
    <>
      <Navbar />

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
                  onClick={() => handleToggle(index)}
                >
                  <div className={Classes.question}>
                    {item.question}
                    <>
                      {!show[index] ? (
                        <Image
                          src="/drop.svg"
                          alt="img"
                          width={20}
                          height={20}
                          onClick={() => handleToggle(index)}
                          key={index}
                          style={{ cursor: "pointer" }}
                        />
                      ) : (
                        <Image
                          src="/drop2.svg"
                          alt="img"
                          width={20}
                          height={20}
                          onClick={() => handleToggle(index)}
                          key={index}
                          style={{ cursor: "pointer" }}
                        />
                      )}
                    </>
                  </div>
                  {show[index] && (
                    <div className={Classes.answer}>{item.answer}</div>
                  )}
                </div>
              ))}
            </div>
            <div className={Classes.flex2}>
              {faq.slice(5, 10).map((item, index) => (
                <div
                  className={Classes.questionContainer}
                  key={index}
                  onClick={() => handleToggle2(index)}
                >
                  <div className={Classes.question}>
                    {item.question}
                    <>
                      {!show2[index] ? (
                        <Image
                          src="/drop.svg"
                          alt="img"
                          width={20}
                          height={20}
                          onClick={() => handleToggle2(index)}
                          key={index}
                          style={{ cursor: "pointer" }}
                        />
                      ) : (
                        <Image
                          src="/drop2.svg"
                          alt="img"
                          width={20}
                          height={20}
                          onClick={() => handleToggle2(index)}
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
            {question && (
              <div className={Classes.flex3}>
                {faq.slice(5, 10).map((item, index) => (
                  <div
                    className={Classes.questionContainer}
                    click={handleToggle}
                    key={index}
                    onClick={() => handleToggle2(index)}
                  >
                    <div className={Classes.question}>
                      {item.question}
                      <>
                        {!show2[index] ? (
                          <Image
                            src="/drop.svg"
                            alt="img"
                            width={20}
                            height={20}
                            onClick={() => handleToggle2(index)}
                            key={index}
                            style={{ cursor: "pointer" }}
                          />
                        ) : (
                          <Image
                            src="/drop2.svg"
                            alt="img"
                            width={20}
                            height={20}
                            onClick={() => handleToggle2(index)}
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
        <div className={Classes.formContainer}>
          <h4>Get in touch</h4>
          <p>We’d love to hear from you. Please fill out this form.</p>
          <form className={Classes.form}>
            <div className={Classes.inputFlex}>
              <div>
                <h5>First name</h5>
                <input type="text" placeholder="First name" />
              </div>
              <div>
                <h5>First name</h5>
                <input type="text" placeholder="First name" />
              </div>
            </div>
            <div>
              <h5>Email</h5>
              <input type="email" placeholder="you@company.com" />
            </div>
            <div>
              <h5>Message</h5>
              <textarea data-typebox name="message" />
            </div>
            <button>Send message</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Faq;
