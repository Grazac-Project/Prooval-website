"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import Classes from "./nav.module.css";
import Image from "next/image";
import {  usePathname } from "next/navigation";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const [isActive, setIsActive] = useState("");

  const pathname = usePathname();
  return (
    <>
      <header className={Classes.header} suppressHydrationWarning>
        <div className={Classes.navbar}>
          <Link href="/" className={Classes.logo} >
            <Image src="/navLogo.svg" alt="logo" width={164} height={36} />
          </Link>
          <nav className={Classes.nav}>
            <ul>
              <li>
                <Link href="/" style={{color: pathname === "/" ? "#1453ff" : "#667085"}}>
                  Home
                </Link>
              </li>
              {/* <li>
                <Link
                  href="/#"
                  style={{color: pathname === "/about-us" ? "#1453ff" : "#667085"}}
                >
                  About Us
                </Link>
              </li> */}
              <li>
                <Link href="/faq" 
                style={{color: pathname === "/faq" ? "#1453ff" : "#667085"}}
                >FAQ</Link>
              </li>
              <li>
                <Link href="/donation"
                style={{color: pathname === "/donation" ? "#1453ff" : "#667085"}}
                >Donation</Link>
              </li>
            </ul>
            <div className={Classes.btnFlex}>
              <button>
                {/* <Link href="https://hackthejobs-web-dashoard-production.up.railway.app/auth/login"> */}
                <Link href="https://waitlist.hackthejobs.com">
                  Log in
                </Link>
              </button>
              <button>
                {/* <Link href="https://hackthejobs-web-dashoard-production.up.railway.app/auth/signup"> */}
                <Link href="https://waitlist.hackthejobs.com">
                  Sign up
                </Link>
              </button>
            </div>
          </nav>
          {dropdown ? (
            <nav className={Classes.navMobile}>
              <ul>
                <li>
                  <Link href="/" onClick={() => setDropdown(false)}  style={{color: pathname === "/" ? "#1453ff" : ""}} >
                    Home
                  </Link>
                </li>
                {/* <li>
                  <Link href="/#" onClick={() => setDropdown(false)}  style={{color: pathname === "/about-us" ? "#1453ff" : ""}}>
                    About Us
                  </Link>
                </li> */}
                <li>
                  <Link href="/faq" onClick={() => setDropdown(false)}  style={{color: pathname === "/faq" ? "#1453ff" : ""}}>
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/donation" onClick={() => setDropdown(false)}  style={{color: pathname === "/donation" ? "#1453ff" : ""}}>
                    Donation
                  </Link>
                </li>
              </ul>
              <div className={Classes.btnFlex}>
                <button>
                  {/* <Link href="https://hackthejobs-web-dashoard-production.up.railway.app/auth/login"> */}
                  <Link href="https://waitlist.hackthejobs.com">
                    Log in
                  </Link>
                </button>
                <button>
                  {/* <Link href="https://hackthejobs-web-dashoard-production.up.railway.app/auth/signup"> */}
                  <Link href="https://waitlist.hackthejobs.com">
                    Sign up
                  </Link>
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
      </header>
    </>
  );
};

export default Navbar;
