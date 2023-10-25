"use client";

import React, {useState} from "react";
import Classes from "./wait.module.css";
import Image from "next/image";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Navbar from "@/components/navbar/nav";
import axios from "axios";
import Footer from "@/components/footer/footer";
import Modal from "@/components/modal/modal";
import { useRouter } from 'next/navigation'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const WaitList = () => {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false)
  const schema = yup.object().shape({
    email: yup.string().required(),
    name: yup.string().required(),
    phoneNumber: yup.string().min(11).required(),
    gender: yup.string(),
    location: yup.string(),
    haveYouEverAttendedABootCamp: yup.string(),
    duration: yup.string(),
    whatSkillsDoYouHave: yup.string(),
    howDoYouKnowAboutUs: yup.string(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const Fetch = (data) => {
    axios
      .post("https://hack-d-jobs-6b8f81a0524b.herokuapp.com/api/v1/user/create", data)
      .then((resp) => {
        console.log(resp);
        setShowModal(true)
        // toast.success(response.data.message);
        // console.log(data);
      })
      .catch((error) => {
        // console.error("Error making POST request:", error.message);
        toast.warn(error.response.data.message);
        // console.log(error);
      });
  };
  const onSubmit = (data) => {
    Fetch(data);
    console.log(data);
  };
  const closeModal = () => {
    router.push('/')
  }
  return (
    <>
      <ToastContainer closeButton={false} />
      <Navbar />
      {showModal ? <Modal modalClose={closeModal} /> : (<>
      <div className={Classes.waitListContainer}>
        <div className={Classes.pad}></div>
        <div className={Classes.heroText}>
          <h4>Join The Waitlist</h4>
          <h1>You are at the right place!</h1>
          <p>
            Don’t stop now, fill in your details correctly and get ready to gain
            real-life experiences
          </p>
        </div>
        <Image
          src="/spiral.png"
          width="200"
          height="200"
          alt="img"
          className={Classes.line}
        />
        <section className={Classes.authContainer}>
          <div className={Classes.auth}>
            <h5>HacktheJobs Waitlist</h5>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className={Classes.form}>
                <h4>Email Address</h4>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  {...register("email")}
                />
              </div>
              <div className={Classes.form}>
                <h4>Preferred Name</h4>
                <input
                  type="text"
                  placeholder="Enter your first name"
                  {...register("name")}
                />
              </div>

              <div className={Classes.form}>
                <h4>Phone Number</h4>
                <input
                  type="number"
                  placeholder="Enter your Phone Number"
                  {...register("phoneNumber")}
                />
              </div>
              <div className={Classes.form}>
                <h4>Gender</h4>
                <select
                  placeholder="Select Gender"
                  {...register("gender")}
                  required
                >
                  <option value=""></option>

                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="I’d rather not say">I’d rather not say</option>
                </select>
              </div>
              <div className={Classes.form}>
                <h4>Have you ever attended a bootcamp?</h4>
                <select {...register("haveYouEverAttendedABootCamp")}>
                  <option value=""></option>

                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
              <div className={Classes.form}>
                <h4>If yes, what was the duration?(optional)</h4>
                <select {...register("duration")} required>
                  <option value=""></option>

                  <option value="2 months">2 months</option>
                  <option value="3 months">3 months</option>
                  <option value="6 months">6 months</option>
                  <option value="1 year">1 year</option>
                  <option value="others">others</option>
                </select>
              </div>
              <div className={Classes.form}>
                <h4>What skills do you have?</h4>
                <select {...register("whatSkillsDoYouHave")} required>
                  <option value=""></option>

                  <option value="UI/UX Design">UI/UX Design</option>
                  <option value="Product Management">Product Management</option>
                  <option value="Front-End Web Development">
                    Front-End Web Development
                  </option>
                  <option value="Back-End Web Development">
                    Back-End Web Development
                  </option>
                  <option value="Mobile Developer">Mobile Developer</option>
                  <option value="Data Analysis">Data Analysis</option>
                  <option value="Others">Others</option>
                </select>
              </div>
              <div className={Classes.form}>
                <h4>Location</h4>
                <input {...register("location")} />
              </div>
              <div className={Classes.form}>
                <h4>How did you hear about us?</h4>
                <select {...register("howDoYouKnowAboutUs")} required>
                  <option value=""></option>
                  <option value="Ogun Digital Summit">
                    Ogun Digital Summit
                  </option>
                  <option value="Website">Website</option>
                  <option value="Advertisement">Advertisement</option>
                  <option value="Friend">Friend</option>
                  <option value="Social Media (Instagram, Twitter)">
                    Social Media (Instagram, Twitter)
                  </option>
                </select>
              </div>

              <button type="submit" className={Classes.button}>
                Submit
              </button>
            </form>
          </div>
        </section>
      </div>
      <Footer/>
    </>)}
    </>
  );
};
export default WaitList;
