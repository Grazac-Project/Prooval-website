"use client";

import Link from "next/link";
import React, { useState } from "react";
import Classes from "./nav.module.css";
import Image from "next/image";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
 
  return (
    <>
      <header className={Classes.header} suppressHydrationWarning>
        <div className={Classes.navbar}>
          <Link href="/" className={Classes.logo}>
            <Image src="/logo.svg" alt="logo" width={150} height={150} />
          </Link>
          <nav className={Classes.nav}>
              <ul>
                <li>
                  <Link href="/aboutUs" >About us</Link>
                </li>
                <li>
                  <Link href="/" >Contact us</Link>
                </li>
               
              </ul>

              <button>
                <Link href="/waitList" >Join Waitlist</Link>
              </button>
            </nav>
          {dropdown ? (
            <nav className={Classes.navMobile}>
              <ul>
                <li>
                  <Link href="/aboutUs" onClick={() => setDropdown(false)}>About Us</Link>
                </li>
                <li>
                  <Link href="/" onClick={() => setDropdown(false)}>Contact Us</Link>
                </li>
              </ul>

            </nav>
          ) : null}
          {!dropdown ? (
            <div className={Classes.dropdown} onClick={() => setDropdown(true)}>
              <Image src="/menu.svg" alt="logo" width={50} height={50} />
            </div>
          ) : (
            <div className={Classes.dropdown} onClick={() => setDropdown(false)}>             
              <Image src="/cancel.svg" alt="logo" width={50} height={50} />
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Navbar;
