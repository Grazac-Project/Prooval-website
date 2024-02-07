"use client";

import React from "react";
import Classes from "./login.module.css";
import Image from "next/image";
import AuthSide from "@/components/authSide/page";

const Login = () => {
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
                <input placeholder="Email Address" type="email" />
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
                <input placeholder="Enter Password" type="password" />
                <Image src="eye.svg" alt="icon" width={20} height={20} />
              </div>
            </div>
            <button className={Classes.btn}>Login</button>
          </form>
          <p className={Classes.create}>
            Don’t have an account ? <a href="signup"> Create account</a>{" "}
          </p>
        </div>
        <div className={Classes.innerContainer2}>
          <AuthSide/>
        </div>
      </div>
    </>
  );
};

export default Login;
