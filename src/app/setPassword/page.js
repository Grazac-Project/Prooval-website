"use client";

import React, { useState } from "react";
import Image from "next/image";
import Classes from "./setPassword.module.css";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const page = () => {
  const [hidePassword, setHidePassword] = useState(true)
  const [hidePassword2, setHidePassword2] = useState(true)

    const toggleVisibility = () => {
        setHidePassword(prev => !prev)
        
    }
    const toggleVisibility2 = () => {
      
      setHidePassword2(prev => !prev)
  }
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
              <input placeholder="Enter Password" type={hidePassword?'password':'text'} id='password'/>
              <div onClick={toggleVisibility}>{hidePassword?<AiOutlineEyeInvisible />:<AiOutlineEye />}</div>
            </div>
          </div>
          <div className={Classes.form}>
            <h4>Confirm new Password</h4>
            <div className={Classes.input}>
              <input placeholder="Enter Password" type={hidePassword2?'password':'text'} id='password'/>
              <div onClick={toggleVisibility2}>{hidePassword2?<AiOutlineEyeInvisible />:<AiOutlineEye />}</div>
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
