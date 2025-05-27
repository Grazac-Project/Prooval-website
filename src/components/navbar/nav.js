"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import Classes from "./nav.module.css";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import Cookies from "js-cookie";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const [isActive, setIsActive] = useState("");
  const [token, setToken] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [details, setDetails] = useState({});
  const [role, setRole] = useState();
  const router = useRouter();
  const isProduction = process.env.NEXT_PUBLIC_DOMAIN_DEV;
  // const DashboardbaseUrl = process.env.NEXT_PUBLIC_DASH_URL;
  // const DashboardTestbaseUrl = process.env.NEXT_PUBLIC_STAGING_DASH_URL;


  const handleMouseEnter = () => {
    setShowModal(true); // Show modal on hover
  };

  const handleMouseLeave = () => {
    setShowModal(false); // Hide modal when hover ends
  };
  const pathname = usePathname();
  useEffect(() => {
    const data = Cookies.get("user_details");
    if (data) {
      try {
        const parsedData = JSON.parse(data);
        setToken(parsedData?.token);
        setRole(parsedData?.role);
        setDetails(parsedData);
      } catch (error) {
        console.error("Failed to parse token:", error);
      }
    }
  }, []);
  const handleLogOut = () => {
    // console.log('remove');
    setDropdown(false);
    Cookies.remove("user_details", {
      path: "/",
      domain: ".hackthejobs.com",
    });
    router.push("/");
    window.location.reload();
  };
  return (
    <>
      <header
        className={`${dropdown ? Classes.fixed : Classes.header}`}
        suppressHydrationWarning
      >
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
              {/* <li>
                <Link
                  href="/hire"
                  style={{
                    color: pathname === "/hire" ? "#1453ff" : "#667085",
                  }}
                >
                  Hire
                </Link>
              </li> */}
            </ul>
            {token ? (
              <div className="flex items-center space-x-4 relative">
                <button className=" border border-[#1453FF] rounded-[8px] px-[18px] py-[10px] font-medium text-[#1453FF] text-[12px] bg-[#fff] leading-[150%] tracking-[3%]">
                  {/* <Link href="https://dashboard.hackthejobs.com/dashboard"> */}
                  <Link
                    href={
                      isProduction === "development"
                        ? `${process.env.NEXT_PUBLIC_STAGING_DASH_URL}/dashboard`
                        : `${process.env.NEXT_PUBLIC_DASH_URL}/dashboard`
                    }
                  >
                    View Dashboard
                  </Link>
                </button>
                <Image
                  src={details?.profilePic}
                  alt="avatar"
                  width={40}
                  height={40}
                  className="w-[40px] h-[40px] rounded-[50%]"
                  onMouseEnter={handleMouseEnter}
                  // onMouseLeave={handleMouseLeave}
                />
                {showModal && (
                  <div
                    className="Drop w-[242px]   bg-[#ffffff] py-8 px-4   rounded-[8px] absolute top-[60px] right-0 z-40 border border-[#EAEAEA]"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="w-full flex flex-col justify-between items-center gap-8   ">
                      <div className=" w-full flex flex-col    gap-3  ">
                        <Image
                          src={details?.profilePic}
                          alt="avatar"
                          width={80}
                          height={80}
                          className="w-[80px] h-[80px] mx-auto rounded-[50%]"
                        />
                        <div className="flex flex-col justify-center text-center items-center gap-2">
                          <h2 className="font-medium text-[18px] text-[#101828] leading-[25.62px] ">
                            {details?.name} {details?.lastName}
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
                      <div className="w-full flex flex-col  gap-2 justify-start text-left">
                        <div className="p-2  w-full font-medium text-[14px] text-[#333333] leading-[120%]">
                          <Link
                            // href="https://dashboard.hackthejobs.com/bookings"
                            // href={`${baseUrl}/bookings`}
                            href={
                              isProduction === "development"
                                ? `${process.env.NEXT_PUBLIC_STAGING_DASH_URL}/bookings`
                                : `${process.env.NEXT_PUBLIC_DASH_URL}/bookings`
                            }
                            // onClick={() => setDropdown(false)}
                          >
                            View my bookings
                          </Link>
                        </div>

                        {/* <div className="p-2  w-full font-medium text-[14px] text-[#333333] leading-[120%]">
                          <Link
                            href="https://dashboard.hackthejobs.com/auth/expertise"
                            // onClick={() => setDropdown(false)}
                          >
                            Gain Experience{" "}
                            <span className="font-[350px] text-[10px] text-[#888888] leading-[120%]">
                              (become a fellow)
                            </span>
                          </Link>
                        </div> */}
                        <div className="p-2  w-full font-medium text-[14px] text-[#333333] leading-[120%]">
                          <Link
                            // href="https://dashboard.hackthejobs.com/settings"
                            // href={`${baseUrl}/settings`}
                            href={
                              isProduction === "development"
                                ? `${process.env.NEXT_PUBLIC_STAGING_DASH_URL}/settings`
                                : `${process.env.NEXT_PUBLIC_DASH_URL}/settings`
                            }
                          >
                            View profile
                          </Link>
                        </div>
                        <div className="p-2  w-full font-medium text-[14px] text-[#333333] leading-[120%] cursor-pointer">
                          <div onClick={() => handleLogOut()}>Sign out</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className={Classes.btnFlex}>
                <button className={Classes.btnFlex1}>
                  {/* <Link href="https://hackthejobs-web-dashoard-production.up.railway.app/auth/login"> */}
                  <a
                    // href="https://dashboard.hackthejobs.com/auth/login"
                    href={
                      isProduction === "development"
                        ? `${process.env.NEXT_PUBLIC_STAGING_DASH_URL}/auth/login`
                        : `${process.env.NEXT_PUBLIC_DASH_URL}/auth/login`
                    }
                    target="_blank"
                  >
                    Log in
                  </a>
                </button>
                <button className={Classes.btnFlex2}>
                  {/* <Link href="https://hackthejobs-web-dashoard-production.up.railway.app/auth/signup"> */}
                  <a
                    // href="https://dashboard.hackthejobs.com/auth/signup"
                    // href={`${baseUrl}/auth/signup`}
                    href={
                      isProduction === "development"
                        ? `${process.env.NEXT_PUBLIC_STAGING_DASH_URL}/auth/signup`
                        : `${process.env.NEXT_PUBLIC_DASH_URL}/auth/signup`
                    }
                    target="_blank"
                  >
                    Sign up
                  </a>
                </button>
              </div>
            )}
          </nav>
          {dropdown ? (
            <nav className={Classes.navMobile}>
              <ul>
                {token ? (
                  <div className="">
                    <div className="w-full flex flex-col justify-between  gap-8   ">
                      <div className=" w-full flex flex-col    gap-3  ">
                        <Image
                          src={details?.profilePic}
                          alt="avatar"
                          width={80}
                          height={80}
                          className="w-[80px] h-[80px] mx-auto rounded-[50%]"
                        />
                        <div className="flex flex-col justify-center text-center items-center gap-2">
                          <h2 className="font-medium text-[18px] text-[#101828] leading-[25.62px] ">
                            {details?.name} {details?.lastName}
                          </h2>
                          <p className="font-medium text-[14px] text-[#888888] leading-[130%]">
                            {/* {mentorData?.mentor?.role}, {mentorData?.mentor?.company} */}{" "}
                            {details?.email}
                          </p>
                          <Link
                            // href="https://dashboard.hackthejobs.com"
                            href={
                              isProduction === "development"
                                ? `${process.env.NEXT_PUBLIC_STAGING_DASH_URL}`
                                : `${process.env.NEXT_PUBLIC_DASH_URL}`
                            }
                            onClick={() => setDropdown(false)}
                          >
                            <button className=" w-[183px]  h-[44.43px] leading-[150%] text-[12.57px] text-[#ffff]  bg-primary rounded-[6.29px] ">
                              View Dashboard
                            </button>
                          </Link>
                        </div>
                      </div>
                      <div className="flex flex-col  gap-2 text-left">
                        <div className="p-2  w-full font-medium text-[14px] text-[#333333] leading-[120%]">
                          <Link
                            // href="https://dashboard.hackthejobs.com/bookings"
                            href={
                              isProduction === "development"
                                ? `${process.env.NEXT_PUBLIC_STAGING_DASH_URL}/bookings`
                                : `${process.env.NEXT_PUBLIC_DASH_URL}/bookings`
                            }
                            onClick={() => setDropdown(false)}
                          >
                            View my bookings
                          </Link>
                        </div>

                        {/* <div className="p-2  w-full font-medium text-[14px] text-[#333333] leading-[120%]">
                          <Link
                            href="https://dashboard.hackthejobs.com/auth/expertise"
                            onClick={() => setDropdown(false)}
                          >
                            Gain Experience{" "}
                            <span className="font-[350px] text-[10px] text-[#888888] leading-[120%]">
                              (become a fellow)
                            </span>
                          </Link>
                        </div> */}
                        <div className="p-2  w-full font-medium text-[14px] text-[#333333] leading-[120%] border border-[#ffff] border-b-[#EAEAEA]">
                          <Link
                            // href="https://dashboard.hackthejobs.com/settings"
                            href={
                              isProduction === "development"
                                ? `${process.env.NEXT_PUBLIC_STAGING_DASH_URL}/settings`
                                : `${process.env.NEXT_PUBLIC_DASH_URL}/settings`
                            }
                            onClick={() => setDropdown(false)}
                          >
                            View profile
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )}
                <div className="p-2  w-full font-medium text-[14px] text-[#333333] leading-[120%] ">
                  <Link
                    href="/about-us"
                    onClick={() => setDropdown(false)}
                    style={{ color: pathname === "/about-us" ? "#1453ff" : "" }}
                  >
                    About
                  </Link>
                </div>
                <div className="p-2  w-full font-medium text-[14px] text-[#333333] leading-[120%]">
                  <Link
                    href="/faq"
                    onClick={() => setDropdown(false)}
                    style={{ color: pathname === "/faq" ? "#1453ff" : "" }}
                  >
                    FAQ
                  </Link>
                </div>
                <div className="p-2  w-full font-medium text-[14px] text-[#333333] leading-[120%]">
                  <Link
                    href="/donation"
                    onClick={() => setDropdown(false)}
                    style={{ color: pathname === "/donation" ? "#1453ff" : "" }}
                  >
                    Donation
                  </Link>
                </div>
                <div className="p-2  w-full font-medium text-[14px] text-[#333333] leading-[120%]">
                  <Link
                    href="/mentor"
                    onClick={() => setDropdown(false)}
                    style={{ color: pathname === "/mentor" ? "#1453ff" : "" }}
                  >
                    Mentor
                  </Link>
                </div>
                <div className="p-2  w-full font-medium text-[14px] text-[#333333] leading-[120%]">
                  <Link
                    href="/spm"
                    onClick={() => setDropdown(false)}
                    style={{ color: pathname === "/spm" ? "#1453ff" : "" }}
                  >
                    PM
                  </Link>
                </div>
                {/* <div className="p-2  w-full font-medium text-[14px] text-[#333333] leading-[120%]">
                  <Link
                    href="/hire"
                    onClick={() => setDropdown(false)}
                    style={{ color: pathname === "/hire" ? "#1453ff" : "" }}
                  >
                    Hire
                  </Link>
                </div> */}
              </ul>
              {token ? (
                <div className="p-2  w-full font-medium text-[14px] text-[#EA4335] leading-[120%] cursor-pointer border border-[#ffff] border-t-[#EAEAEA] mb-3">
                  <div onClick={() => handleLogOut()}>Sign out</div>
                </div>
              ) : (
                <div className={Classes.btnFlex}>
                  <a
                    // href="https://dashboard.hackthejobs.com/auth/login"
                    href={
                      isProduction === "development"
                        ? `${process.env.NEXT_PUBLIC_STAGING_DASH_URL}/auth/login`
                        : `${process.env.NEXT_PUBLIC_DASH_URL}/auth/login`
                    }
                    target="_blank"
                  >
                    <button>
                      {/* <Link href="https://hackthejobs-web-dashoard-production.up.railway.app/auth/login"> */}
                      {/* <Link href="/login">Log in</Link> */}
                      Log in
                    </button>
                  </a>
                  <a
                    // href="https://dashboard.hackthejobs.com/auth/signup"
                    href={
                      isProduction === "development"
                        ? `${process.env.NEXT_PUBLIC_STAGING_DASH_URL}/auth/signup`
                        : `${process.env.NEXT_PUBLIC_DASH_URL}/auth/signup`
                    }
                    target="_blank"
                  >
                    <button>
                      {/* <Link href="https://hackthejobs-web-dashoard-production.up.railway.app/auth/signup"> */}
                      {/* <Link href="/signup">Sign up</Link> */}
                      Sign up
                    </button>
                  </a>
                </div>
              )}
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
        <div></div>
      </header>
    </>
  );
};

export default Navbar;
