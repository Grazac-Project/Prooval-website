"use client";

import React, {useState} from "react";
import Classes from "./wait.module.css";
import Image from "next/image";
import { useFormik } from "formik";
import * as yup from "yup";
import Navbar from "@/components/navbar/nav";
import axios from "axios";
import Footer from "@/components/footer/footer";
import Modal from "@/components/modal/modal";
import { useRouter } from 'next/navigation'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const initialValues = {
      email: '',
      name: '',
      phoneNumber: '',
      gender: '',
      location: '',
      haveYouEverAttendedABootCamp: '',
      duration: '',
      whatSkillsDoYouHave: '',
      howDoYouKnowAboutUs: '',
}

const WaitList = () => {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false)
  const schema = yup.object({
    email: yup.string().email('Please enter a valid email').required('Email is required'),
    name: yup.string().required('Name is required'),
    phoneNumber: yup.string().required('Phone number is required'),
    gender: yup.string().required('Please choose your gender'),
    location: yup.string().required('Please enter your location'),
    haveYouEverAttendedABootCamp: yup.string().required('Please make a selection'),
    duration: yup.string(),
    whatSkillsDoYouHave: yup.string().required('Please choose one of the options'),
    howDoYouKnowAboutUs: yup.string().required('Please make a selection'),
  });
  const {values, handleSubmit, handleChange,handleBlur, errors, touched} = useFormik({
    initialValues,
    validationSchema: schema,
    onSubmit: async (values, actions) => {
     await axios.post("https://hack-d-jobs-6b8f81a0524b.herokuapp.com/api/v1/user/create", values)
      .then(res => {
        console.log(res)
        setShowModal(true)
        actions.resetForm();
      })
      .catch(error => {
        console.log(error)
        toast.warn(error.response.data.message);
      })
    }
  })
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
            <form onSubmit={handleSubmit}>
              <div className={Classes.form}>
                <h4>Email Address</h4>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <div className={Classes.formError}>
                {errors.email && touched.email && (<p >{errors.email}</p>)}
              </div>
              <div className={Classes.form}>
                <h4>Preferred Name</h4>
                <input
                  type="text"
                  placeholder="Enter your first name"
                  name='name'
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <div className={Classes.formError}>
                {errors.name && touched.name && (<p>{errors.name}</p>)}
              </div>

              <div className={Classes.form}>
                <h4>Phone Number</h4>
                <input
                  type="number"
                  placeholder="Enter your Phone Number"
                  name='phoneNumber'
                  value={values.phoneNumber}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <div className={Classes.formError}>
                {errors.phoneNumber && touched.phoneNumber && (<p>{errors.phoneNumber}</p>)}
              </div>
              <div className={Classes.form}>
                <h4>Gender</h4>
                <select
                  placeholder="Select Gender"
                  name='gender'
                  value={values.gender}
                  onChange={handleChange}
                >
                  <option value=""></option>

                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="I’d rather not say">I’d rather not say</option>
                </select>
              </div>
              <div className={Classes.formError}>
                {errors.gender && touched.gender && (<p>{errors.gender}</p>)}
              </div>
              <div className={Classes.form}>
                <h4>Have you ever attended a bootcamp?</h4>
                <select name="haveYouEverAttendedABootCamp" value={values.haveYouEverAttendedABootCamp} onChange={handleChange}>
                  <option value=""></option>

                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
              <div className={Classes.formError}>
                {errors.haveYouEverAttendedABootCamp && touched.haveYouEverAttendedABootCamp && (<p>{errors.haveYouEverAttendedABootCamp}</p>)}
              </div>
              <div className={Classes.form}>
                <h4>If yes, what was the duration?(optional)</h4>
                <select name="duration" value={values.duration} onChange={handleChange} >
                  <option value=""></option>

                  <option value="2 months">2 months</option>
                  <option value="3 months">3 months</option>
                  <option value="6 months">6 months</option>
                  <option value="1 year">1 year</option>
                  <option value="others">others</option>
                </select>
              </div>
              <div className={Classes.formError}>
                {errors.duration && touched.duration && (<p>{errors.duration}</p>)}
              </div>
              <div className={Classes.form}>
                <h4>What skills do you have?</h4>
                <select name="whatSkillsDoYouHave" value={values.whatSkillsDoYouHave} onChange={handleChange}>
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
              <div className={Classes.formError}>
                {errors.whatSkillsDoYouHave && touched.whatSkillsDoYouHave && (<p>{errors.whatSkillsDoYouHave}</p>)}
              </div>
              <div className={Classes.form}>
                <h4>Location</h4>
                <input name="location" value={values.location} onChange={handleChange}/>
              </div>
              <div className={Classes.formError}>
                {errors.location && touched.location && (<p>{errors.location}</p>)}
              </div>
              <div className={Classes.form}>
                <h4>How did you hear about us?</h4>
                <select name="howDoYouKnowAboutUs" value={values.howDoYouKnowAboutUs} onChange={handleChange}>
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
              <div className={Classes.formError}>
                {errors.howDoYouKnowAboutUs && touched.howDoYouKnowAboutUs && (<p>{errors.howDoYouKnowAboutUs}</p>)}
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