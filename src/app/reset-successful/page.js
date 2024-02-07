"use client";

import React from "react";
import Image from "next/image";
import Classes from "./sucess.module.css";

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
            <Image
              src="verify.svg"
              alt="icon"
              width={100.75}
              height={100.75}
              style={{ margin: "auto" }}
            />
            <h3>Password reset successful</h3>
            <p>
              We are happy to have you back. Provide the correct information
            </p>
            <button className={Classes.btn}> Login </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
