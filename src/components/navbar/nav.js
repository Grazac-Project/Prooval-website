"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import Classes from "./nav.module.css";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const [isActive, setIsActive] = useState("");

  const router = useRouter();
  const pathname = usePathname();

  const setActive = () => {
    useEffect((pathname) => {
      
      setIsActive(pathname);
    }, []);


  }
  console.log(pathname);
  console.log(isActive);

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
                <Link href="/" className={isActive === "/" ? "active" : ""} onClick={setActive}>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  className={isActive === "/about-us" ? "active" : ""} onClick={setActive}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/faq">FAQ</Link>
              </li>
              <li>
                <Link href="/donation">Donation</Link>
              </li>
            </ul>
            <div className={Classes.btnFlex}>
              <button>
                <Link href="https://hackthejobs-web-dashoard-production.up.railway.app/auth/login">
                  Log in
                </Link>
              </button>
              <button>
                <Link href="https://hackthejobs-web-dashoard-production.up.railway.app/auth/signup">
                  Sign up
                </Link>
              </button>
            </div>
          </nav>
          {dropdown ? (
            <nav className={Classes.navMobile}>
              <ul>
                <li>
                  <Link href="/" onClick={() => setDropdown(false)}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about-us" onClick={() => setDropdown(false)}>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/faq" onClick={() => setDropdown(false)}>
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/donation" onClick={() => setDropdown(false)}>
                    Donation
                  </Link>
                </li>
              </ul>
              <div className={Classes.btnFlex}>
                <button>
                  <Link href="https://hackthejobs-web-dashoard-production.up.railway.app/auth/login">
                    Log in
                  </Link>
                </button>
                <button>
                  <Link href="https://hackthejobs-web-dashoard-production.up.railway.app/auth/signup">
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
