"use client";

import React from "react";
import Image from "next/image";
import Classes from "./forgotPassword.module.css";

const page = () => {
  return (
    <div className={Classes.container}>
      <div>
        <Image
          src="hackthejobs.svg"
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
            <form className={Classes.form}>
              <h4>Email Address</h4>
              <div className={Classes.input}>
                <input placeholder="usersemail.com" type="email" />
              </div>
            </form>
            <button className={Classes.btn}> Reset Password</button>
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
