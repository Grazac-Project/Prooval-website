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

  const pathname = usePathname();
  const data = Cookies.get("user_details");
  if (data) {
    try {
      const parsedData = JSON.parse(data);
      setToken(parsedData?.token);
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
          
        </div>

      </header>
    </>
  );
};

export default Navbar;
