"use client";

import React from "react";
import Image from "next/image";
import Classes from "./forgotPassword.module.css";
import { ForgetPasswordAction } from "@/api/authentication/auth";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as yup from "yup";

const initialValues = {
  email: "",
};

const page = () => {
  const router = useRouter();

  const schema = yup.object({
    email: yup
      .string()
      .email("Please enter a valid email")
      .required("Email is required"),
  });
  const { values, handleSubmit, handleChange, handleBlur, errors, touched } =
    useFormik({
      initialValues,
      validationSchema: schema,
      onSubmit: async (payload, actions) => {
        ForgetPasswordAction(payload)
          .then((res) => {
            console.log(res);
            actions.resetForm();
            // router.push("/");
          })
          .catch((error) => {
            console.log(error);
            toast.warn(error.response.data.message);
          });
      },
    });

  return (
    <div className={Classes.container}>
      <div>
        <Image
          src="/hack-log.png"
          alt="icon"
          width={164.204}
          height={36}
          style={{ margin: "40px" }}
        />
        <div className={Classes.innerContainer}>
          <div className={Classes.content}>
            <h3>Forgot password</h3>
            <p>
              We are happy to have you back. Provide the correct information
            </p>
            <form className={Classes.form} onSubmit={handleSubmit}>
              <h4>Email Address</h4>
              <div className={Classes.input}>
                <input
                  placeholder="usersemail.com"
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                />
              </div>
              <div className={Classes.errorMsg}>
                {" "}
                {errors.email && touched.email && <p>{errors.email}</p>}
              </div>
              <button className={Classes.btn} type="submit">
                {" "}
                Reset Password
              </button>
            </form>
            <a href="login">
              <div className={Classes.back}>
                <Image src="arrow-left.svg" alt="icon" width={20} height={20} />
                Back to log in
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
