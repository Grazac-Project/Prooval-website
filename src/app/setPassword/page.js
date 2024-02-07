"use client";

import React from "react";
import Image from "next/image";
import Classes from "./setPassword.module.css";

const page = () => {
  return (
    <div className={Classes.container}>
      <Image
        src="hackthejobs.svg"
        alt="icon"
        width={164.204}
        height={36}
        style={{ margin: "40px" }}
      />
      <div className={Classes.innerContainer}>
        <div className={Classes.content}>
          <h3>Set new password</h3>
          <p>We are happy to have you back. Provide the correct information</p>
          <div className={Classes.form}>
            <h4>New Password</h4>
            <div className={Classes.input}>
              <input placeholder="Enter Password" type="password" />
              <Image
                src="eye.svg"
                alt="icon"
                width={20}
                height={20}
                style={{ cursor: "pointer" }}
              />
            </div>
          </div>
          <div className={Classes.form}>
            <h4>Confirm new Password</h4>
            <div className={Classes.input}>
              <input placeholder="Enter Password" type="password" />
              <Image
                src="eye.svg"
                alt="icon"
                width={20}
                height={20}
                style={{ cursor: "pointer" }}
              />
            </div>
          </div>
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
  );
};

export default page;
