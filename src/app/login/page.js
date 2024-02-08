"use client";

import React, { useState } from "react";
import Classes from "./login.module.css";
import Image from "next/image";
import AuthSide from "@/components/authSide/page";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Login = () => {
  const [hidePassword, setHidePassword] = useState(true);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const doLogin = () => {
    e.preventDefualt();
    let payload = JSON.stringify({
      email: email,
      password: password,
    });
    
  };

  const toggleVisibility = () => {
    setHidePassword((prev) => !prev);
  };
  return (
    <>
      <div className={Classes.innerContainer}>
        <div className={Classes.auth}>
          <Image src="hackthejobs.svg" alt="icon" width={164.204} height={36} />

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
          <form>
            <div className={Classes.form}>
              <h4>Email Address</h4>
              <div className={Classes.input}>
                <input
                  placeholder="Email Address"
                  type="email"
                  name="email"
                  onChange={handleChange}
                />
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
                  onChange={handleChange}
                />
                <div onClick={toggleVisibility}>
                  {hidePassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                </div>
              </div>
            </div>
            <button className={Classes.btn}>Login</button>
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
