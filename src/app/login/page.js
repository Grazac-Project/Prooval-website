"use client";

import React, { useState } from "react";
import Classes from "./login.module.css";
import Image from "next/image";
import AuthSide from "@/components/authSide/page";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { LoginAction } from "@/api/authentication/auth";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialValues = {
  email: "",
  password: "",
};

const Login = () => {
  const router = useRouter();
  const [hidePassword, setHidePassword] = useState(true);
  const schema = yup.object({
    email: yup
      .string()
      .email("Please enter a valid email")
      .required("Email is required"),
    password: yup.string().min(8).required("Please enter your password"),
  });
  const { values, handleSubmit, handleChange, handleBlur, errors, touched } =
    useFormik({
      initialValues,
      validationSchema: schema,
      onSubmit: async (payload, actions) => {
        LoginAction(payload)
          .then((res) => {
            if (res.status === 200) {
              console.log(resp);
              toast.success(response.data.message);
              actions.resetForm();
              router.push("/dashboard");
            } else {
              toast.warn("Something went wrong, please try again!!!");
            }
          })
          .catch((error) => {
            console.log(error);
            toast.warn(error.response.data.message);
          });
      },
    });
  const toggleVisibility = () => {
    setHidePassword((prev) => !prev);
  };
  return (
    <>
      <ToastContainer closeButton={false} />
      <div className={Classes.innerContainer}>
        <div className={Classes.auth}>
          <Image src='/hack-logo.png' alt="icon"  width={164.204} height={36}  />

          <div className={Classes.authText}>
            <h5>Welcome back!</h5>
            <p>
              We are happy to have you back. Provide the correct information
            </p>
          </div>
          <div className={Classes.google}>
            <Image src="google.svg" alt="icon" width={20} height={20} />
            <p>Login with Google</p>
          </div>
          <div className={Classes.line}>
            <hr></hr>
            <p>or</p>
            <hr></hr>
          </div>
          <form onSubmit={handleSubmit}>
            <div className={Classes.form}>
              <h4>Email Address</h4>
              <div className={Classes.input}>
                <input
                  placeholder="Email Address"
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <div className={Classes.errorMsg}>
                {errors.email && touched.email && <p>{errors.email}</p>}
              </div>
            </div>
            <div className={Classes.form}>
              <div className={Classes.labelFlex}>
                <h4>Password</h4>
                <a href="forgotPassword">
                  <p>Forgot Password</p>
                </a>
              </div>
              <div className={Classes.input}>
                <input
                  placeholder="Enter Password"
                  type={hidePassword ? "password" : "text"}
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <div onClick={toggleVisibility}>
                  {hidePassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                </div>
              </div>
              <div className={Classes.errorMsg}>
                {errors.password && touched.password && (
                  <p>{errors.password}</p>
                )}
              </div>
            </div>
            <button className={Classes.btn} type="submit">
              Login
            </button>
          </form>
          <p className={Classes.create}>
            Don’t have an account ?&nbsp; <a href="signup"> Create account</a>{" "}
          </p>
        </div>
        <div className={Classes.innerContainer2}>
          <AuthSide />
        </div>
      </div>
    </>
  );
};

export default Login;
