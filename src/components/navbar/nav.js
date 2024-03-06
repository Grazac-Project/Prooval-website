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
            <Image src="/navLogo.svg" alt="logo" width={164} height={36} />
          </Link>
          <nav className={Classes.nav}>
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
            </ul>
            <div className={Classes.btnFlex}>
              <button>
                <Link href="/login">Log in</Link>
              </button>
              <button>
                <Link href="/signup">Sign up</Link>
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
              </ul>
              <div className={Classes.btnFlex}>
              <button>
                <Link href="/login">Log in</Link>
              </button>
              <button>
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
              <span style={{fontSize:"34px",  }}>&#215;</span>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Navbar;
