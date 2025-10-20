"use client";
import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/nav";
import React from "react";

const Privacy = () => {
  return (
    <>
      <Navbar />

      <div
        className="relative min-h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/Group.png')",
        }}
      >
        <div className=" py-[64px] md:py-[32px] font-satoshi">
          <div className=" w-[1024px]  lgx:w-[95%] sm:w-full mx-auto  bg-[#ffff] rounded-b-2xl ">
            <div className="bg-primary rounded-t-2xl h-[149px] sm ">
              <div className="p-[40px] sm:p-10">
                <h4 className="text-[32px] sm:text-[22ps]  font-700 leading-[41.6px] text-[#fff] ">
                  Privacy Policy
                </h4>
                <p className="text-[16px] leading-[20.6px] text-[#fff]">
                  Last Updated: 10th, October 2025
                </p>
              </div>
            </div>
            <div className="p-[44px] sm:p-[11px]">
              <p className="text-[16px] mb-[16px] md:mb-[16px] sm:mb-[8px]  leading-[24px] text-[#4F4F4F]">
                This Privacy Policy describes how Prooval (formally Hackthejobs)
                ("we", "our", or "us") collects, uses, and shares your personal
                information when you use our website, platform, and related
                services.
              </p>

              <div>
                <h4 className="text-[20px] font-satoshi font-700 leading-[30px] text-[#121927]">
                  1. Information We Collect
                </h4>
                <div>
                  <span className="text-[20px] font-satoshi leading-[27px] text-[#000000]">
                    1.1 Personal Information
                  </span>{" "}
                  <p className="text-[16px] mb-[16px] md:mb-[16px] sm:mb-[8px] font-satoshi leading-[24px] text-[#4F4F4F]">
                    When you create an account on Prooval, we collect personal
                    details such as your name, email address and professional
                    information related to the services you offer(e.g..
                    mentorship, consultations, or digital products).
                  </p>
                </div>
                <div className="">
                  <span className="text-[20px] font-satoshi leading-[27px] text-[#000000]">
                    1.2 Usage Data
                  </span>{" "}
                  <p className="text-[16px] mb-[26px] md:mb-[16px] sm:mb-[8px] font-satoshi leading-[24px] text-[#4F4F4F]">
                    We automatically collect information about how you interact
                    with Prooval, including access times pages viewed, features
                    used, device type, browser information, and IP address.
                  </p>
                </div>

                <div className="">
                  <span className="text-[20px] font-satoshi leading-[27px] text-[#000000]">
                    1.3 Payment Information
                  </span>{" "}
                  <p className="text-[16px] mb-[26px] md:mb-[16px] sm:mb-[8px] font-satoshi leading-[24px] text-[#4F4F4F]">
                    When you make or recieve payments through Prooval, we
                    collect necessary transaction and billing information to
                    process and complete those payments securely through our
                    trusted payment partners.
                  </p>
                </div>
              </div>
              <div className="mb-[16px] md:mb-[16px] sm:mb-[8px]">
                <h4 className="text-[20px] mb-[8px] font-onest font-700 leading-[30px] text-[#121927]">
                  2. How We Use Your Information
                </h4>
                <>
                  <p className="text-[16px] mb-[8px] font-satoshi leading-[24px] text-[#4F4F4F]">
                    We use your personal information to:
                  </p>
                  <li className="text-[16px]  pl-[14px] font-satoshi leading-[24px] text-[#4F4F4F]">
                    Provide, operate, and maintain the Prooval platform.
                  </li>
                  <li className="text-[16px]  pl-[14px] font-satoshi leading-[24px] text-[#4F4F4F]">
                    Process transactions and facilitate payments.
                  </li>
                  <li className="text-[16px] pl-[14px]  font-satoshi leading-[24px] text-[#4F4F4F]">
                    Communicate with you regarding your account or service
                    updates.
                  </li>
                  <li className="text-[16px] pl-[14px]  font-satoshi leading-[24px] text-[#4F4F4F]">
                    Offer customer support and resolve issues.
                  </li>
                  <li className="text-[16px] pl-[14px]  font-satoshi leading-[24px] text-[#4F4F4F]">
                    Improve, personalize, and expand our services.
                  </li>
                  <li className="text-[16px] pl-[14px]  font-satoshi leading-[24px] text-[#4F4F4F]">
                    Monitor usage and prevent fraud or unathorized access
                  </li>
                  <li className="text-[16px] pl-[14px]  font-satoshi leading-[24px] text-[#4F4F4F]">
                    Comply with legal obligations and regulatory requirements.
                  </li>
                </>
              </div>
              <div className="mb-[16px] mt-14 md:mb-[16px] sm:mb-[8px]">
                <h4 className="text-[20px] mb-[8px] font-satoshi font-700 leading-[30px] text-[#121927]">
                  3. Data Sharing and Disclosure
                </h4>
                <>
                  <p className="text-[16px] mb-[8px] font-satoshi leading-[24px] text-[#4F4F4F]">
                    We may share your information with:
                  </p>
                  <li className="text-[16px]  pl-[14px] font-satoshi leading-[24px] text-[#4F4F4F]">
                    Service providers who help us operate and maintain the
                    Prooval(formally Hackthejobs) platform(e.g. hosting,
                    analytics, and payment processing).
                  </li>
                  <li className="text-[16px]  pl-[14px] font-satoshi leading-[24px] text-[#4F4F4F]">
                    Legal Authorities when required by law or to protect our
                    legal rights.
                  </li>

                  <li className="text-[16px]  pl-[14px] font-satoshi leading-[24px] text-[#4F4F4F]">
                    Business Partners in limited cases, such as collaboration
                    features or integrations you enable
                  </li>
                </>
                <p className="mt-6 mb-7 text-[18px]">
                  We do not sell your personal information to third parties
                </p>
              </div>
              <div>
                <h4 className="text-[20px] font-satoshi font-700 leading-[30px] text-[#121927]">
                  4. Data Security
                </h4>
                <p className="text-[16px] mb-[16px] md:mb-[16px] sm:mb-[8px] font-satoshi leading-[24px] text-[#4F4F4F]">
                  We take data security seriously. Prooval(formally Hackthejobs)
                  implements industry-standard technical and organizational
                  measures to safeguard your personal information.
                  <br />
                  However, please note that not method of data transmission or
                  electronic storage is completely secure and we cannot
                  guarantee absolute security.
                </p>
              </div>
              <div className="mt-7">
                <h4 className="text-[20px] font-satoshi font-700 leading-[30px] text-[#121927]">
                  5. Your Data Protection Rights
                </h4>
                <p className="text-[16px] mb-[16px] md:mb-[16px] sm:mb-[8px] font-satoshi leading-[24px] text-[#4F4F4F]">
                  Depending on your location, you may have the right too:
                </p>
                <div className="mb-6">
                  <li className="text-[16px]  pl-[14px] font-satoshi leading-[24px] text-[#4F4F4F]">
                    Access the personal data we hold about you.
                  </li>

                  <li className="text-[16px]  pl-[14px] font-satoshi leading-[24px] text-[#4F4F4F]">
                    Request correction of inaccurate or incomplete data.
                  </li>
                  <li className="text-[16px]  pl-[14px] font-satoshi leading-[24px] text-[#4F4F4F]">
                    Request deletion of your data where applicable.
                  </li>
                  <li className="text-[16px]  pl-[14px] font-satoshi leading-[24px] text-[#4F4F4F]">
                    Object or restrict certain types of data processing.
                  </li>
                  <li className="text-[16px]  pl-[14px] font-satoshi leading-[24px] text-[#4F4F4F]">
                    Withdraw consent for processing where applicable.
                  </li>

                  <p className="mt-3 text-[16px]">
                    To exercise any of these rights, contact us at{" "}
                    <a className="underline" href="mailto:hello@prooval.com">
                      hello@prooval.com
                    </a>{" "}
                  </p>
                </div>
              </div>
              <div>
                <h4 className="text-[20px] font-onest font-700 leading-[30px] text-[#121927]">
                  6. Data Retention
                </h4>
                <p className="text-[16px] mb-[16px] md:mb-[16px] sm:mb-[8px] font-onest leading-[24px] text-[#4F4F4F]">
                  We retain your personal information only as long as necessary
                  to provide our services, comply with legal obligations,
                  resolve disputes and enforce our agreements
                </p>
              </div>

              <div>
                <h4 className="text-[20px] font-satoshi font-700 leading-[30px] text-[#121927]">
                  7. Changes to This Privacy Policy
                </h4>
                <p className="text-[16px] mb-[26px] sm:mb-[16px] font-satoshi leading-[24px] text-[#4F4F4F]">
                  We may update this Privacy Policy Periodically. Any updates
                  will be posted on this page with a revised "Last Updated"
                  date.Significant changes may be communicated via email or
                  platform notifications.
                </p>
              </div>
              <div>
                <h4 className="text-[20px] font-satoshi font-700 leading-[30px] text-[#121927]">
                  8. Contact Us
                </h4>

                <p className="text-[16px] mb-[26px] sm:mb-[16px] font-satoshi leading-[24px] text-[#4F4F4F]">
                  If you have any questions about this Privacy Policy or how
                  your data is handled, please contact us at:{" "}
                  <a className="underline" href="mailto:hello@prooval.com">
                    hello@prooval.com.
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Privacy;
