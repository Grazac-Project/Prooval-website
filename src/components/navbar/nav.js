"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import Classes from "./nav.module.css";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Cookies from "js-cookie";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const [isActive, setIsActive] = useState("");
  const [token, setToken] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [details, setDetails] = useState({});

  const handleMouseEnter = () => {
    setShowModal(true); // Show modal on hover
  };

  const handleMouseLeave = () => {
    setShowModal(false); // Hide modal when hover ends
  };
  const pathname = usePathname();
  const data = Cookies.get("user_details");
  if (data) {
    try {
      const parsedData = JSON.parse(data);
      setToken(parsedData?.token);
      setDetails(parsedData);
    } catch (error) {
      console.error("Failed to parse token:", error);
    }
  }
  return (
    <>
      <header className={Classes.header} suppressHydrationWarning>
        <div className={Classes.navbar}>
          <Link href="/" className={Classes.logo}>
            <Image src="/navLogo.svg" alt="logo" width={164} height={36} />
          </Link>
          <nav className={Classes.nav}>
            <ul>
              {/* <li>
                <Link
                  href="/"
                  style={{ color: pathname === "/" ? "#1453ff" : "#667085" }}
                >
                  Home
                </Link>
              </li> */}
              <li>
                <Link
                  href="/about-us"
                  style={{
                    color: pathname === "/about-us" ? "#1453ff" : "#667085",
                  }}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  style={{ color: pathname === "/faq" ? "#1453ff" : "#667085" }}
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/donation"
                  style={{
                    color: pathname === "/donation" ? "#1453ff" : "#667085",
                  }}
                >
                  Donation
                </Link>
              </li>
              <li>
                <Link
                  href="/mentor"
                  style={{
                    color: pathname === "/mentor" ? "#1453ff" : "#667085",
                  }}
                >
                  Mentor
                </Link>
              </li>
              <li>
                <Link
                  href="/spm"
                  style={{
                    color: pathname === "/spm" ? "#1453ff" : "#667085",
                  }}
                >
                  PM
                </Link>
              </li>
              <li>
                <Link
                  href="/hire"
                  style={{
                    color: pathname === "/hire" ? "#1453ff" : "#667085",
                  }}
                >
                  Hire
                </Link>
              </li>
            </ul>
            {!token ? (
              <div className="flex items-center space-x-4">
                <button className=" border border-[#1453FF] rounded-[8px] px-[18px] py-[10px] font-medium text-[#1453FF] text-[12px] bg-[#fff] leading-[150%] tracking-[3%]">
                  {/* <Link href="https://hackthejobs-web-dashoard-production.up.railway.app/auth/login"> */}
                  <Link href="/login">View Dashboard</Link>
                </button>
                <Image
                  src="/dummyPic.svg"
                  alt="avatar"
                  width={40}
                  height={40}
                  className="w-[40px] h-[40px] rounded-[50%]"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                />
              </div>
            ) : (
              <div className={Classes.btnFlex}>
                <button className={Classes.btnFlex1}>
                  {/* <Link href="https://hackthejobs-web-dashoard-production.up.railway.app/auth/login"> */}
                  <Link href="/login">Log in</Link>
                </button>
                <button className={Classes.btnFlex2}>
                  {/* <Link href="https://hackthejobs-web-dashoard-production.up.railway.app/auth/signup"> */}
                  <Link href="/signup">Sign up</Link>
                </button>
              </div>
            )}
          </nav>
          {dropdown ? (
            <nav className={Classes.navMobile}>
              <ul>
                {/* <li>
                  <Link
                    href="/"
                    onClick={() => setDropdown(false)}
                    style={{ color: pathname === "/" ? "#1453ff" : "" }}
                  >
                    Home
                  </Link>
                </li> */}
                <li>
                  <Link
                    href="/about-us"
                    onClick={() => setDropdown(false)}
                    style={{ color: pathname === "/about-us" ? "#1453ff" : "" }}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faq"
                    onClick={() => setDropdown(false)}
                    style={{ color: pathname === "/faq" ? "#1453ff" : "" }}
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    href="/donation"
                    onClick={() => setDropdown(false)}
                    style={{ color: pathname === "/donation" ? "#1453ff" : "" }}
                  >
                    Donation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/mentor"
                    onClick={() => setDropdown(false)}
                    style={{ color: pathname === "/mentor" ? "#1453ff" : "" }}
                  >
                    Mentor
                  </Link>
                </li>
                <li>
                  <Link
                    href="/hire"
                    onClick={() => setDropdown(false)}
                    style={{ color: pathname === "/hire" ? "#1453ff" : "" }}
                  >
                    Hire
                  </Link>
                </li>
              </ul>
              <div className={Classes.btnFlex}>
                <button>
                  {/* <Link href="https://hackthejobs-web-dashoard-production.up.railway.app/auth/login"> */}
                  <Link href="/login">Log in</Link>
                </button>
                <button>
                  {/* <Link href="https://hackthejobs-web-dashoard-production.up.railway.app/auth/signup"> */}
                  <Link href="/signup">Sign up</Link>
                </button>
              </div>
            </nav>
          ) : null}
          {!dropdown ? (
            <div className={Classes.dropdown} onClick={() => setDropdown(true)}>
              <Image src="/menu.svg" alt="logo" width={24} height={24} />
            </div>
          ) : (
            <div
              className={Classes.dropdown}
              onClick={() => setDropdown(false)}
            >
              <span style={{ fontSize: "34px" }}>&#215;</span>
            </div>
          )}
        </div>
        <div>
          {showModal && (
            <div
              className=" w-[242px]   bg-[#ffffff] py-8 px-4   rounded-[8px] absolute top-[60px] right-8 z-50 border border-[#EAEAEA]"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="w-full flex flex-col justify-between items-center gap-8   ">
                <div className=" w-full flex flex-col    gap-3  ">
                  <Image
                    // src={mentorData?.mentor?.image}
                    src="/dummyPic.svg"
                    alt="avatar"
                    width={80}
                    height={80}
                    className="w-[80px] h-[80px] mx-auto rounded-[50%]"
                  />
                  <div className="flex flex-col justify-center text-center items-center gap-2">
                    <h2 className="font-medium text-[18px] text-[#101828] leading-[25.62px] ">
                      {details?.firstName}
                      {details?.lastName}
                    </h2>
                    <p className="font-medium text-[14px] text-[#888888] leading-[130%]">
                      {/* {mentorData?.mentor?.role}, {mentorData?.mentor?.company} */}{" "}
                      {details?.email}
                    </p>
                    <button className=" w-[100%]  h-[44.43px] leading-[150%] text-[12.57px] text-[#ffff]  bg-primary rounded-[6.29px] ">
                      Edit Profile
                    </button>
                  </div>
                </div>
                <ul className="flex flex-col  gap-2">
                  <li className="p-2  w-full font-medium text-[14px] text-[#333333] leading-[120%]">
                    <Link
                      href="/about-us"
                      // onClick={() => setDropdown(false)}
                    >
                      View my bookings
                    </Link>
                  </li>
                  
                  <li className="p-2  w-full font-medium text-[14px] text-[#333333] leading-[120%]">
                    <Link
                      href="/about-us"
                      // onClick={() => setDropdown(false)}
                    >
                      Gain Experience{" "}
                      <span className="font-[350px] text-[10px] text-[#888888] leading-[120%]">
                        (become a fellow)
                      </span>
                    </Link>
                  </li>
                  <li className="p-2  w-full font-medium text-[14px] text-[#333333] leading-[120%]">
                    <Link
                      href="/about-us"
                      // onClick={() => setDropdown(false)}
                    >
                      View profile
                    </Link>
                  </li>
                  <li className="p-2  w-full font-medium text-[14px] text-[#333333] leading-[120%]">
                    <Link
                      href="/about-us"
                      // onClick={() => setDropdown(false)}
                    >
                      Sign out
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Navbar;
