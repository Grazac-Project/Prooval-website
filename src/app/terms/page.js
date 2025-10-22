"use client";
import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/nav";
import React from "react";
import Image from "next/image";


const Terms = () => {
  return (
    <>
      <Navbar />
      <div className="bg-[#EFF6FF] py-[64px] md:py-[32px] relative overflow-hidden">
        {/* Overlay image */}
        <Image
          src="/Terms_overlay.png"
          alt="Overlay"
          fill
          className="object-cover pointer-events-none z-0"
          style={{ opacity: 1.0 }} // Adjust opacity as needed
        />
        <div className="relative z-5 w-[1024px]  lgx:w-[95%] sm:w-full mx-auto  bg-[#ffff] rounded-2xl ">
          <div className="bg-primary rounded-t-2xl h-[149px] sm ">
            <div className="p-[40px] sm:p-10">
              <h4 className="text-[32px] sm:text-[22ps] font-onest font-700 leading-[41.6px] text-[#fff] ">
                Terms of Service
              </h4>
              <p className="text-[14px] font-onest leading-[20.6px] text-[#fff]">
                Last Modified: 10th October, 2025
              </p>
            </div>
          </div>
          <div className="p-[44px] sm:p-[11px]">
            <p className="text-[14px] mb-[16px] md:mb-[16px] sm:mb-[8px] font-onest leading-[24px] text-[#4F4F4F]">
              Welcome to <span className="font-bold">Prooval</span>(formerly HackTheJobs). Please read these Terms of Service ("Terms") carefully before using our website, platform, and related services (collectively, the “Service”).
              By accessing or using Prooval, you agree to be bound by these Terms. If you do not agree with any part of these Terms, please do not use our Service.

            </p>
            <div>
              <h4 className="text-[18px] font-onest font-700 leading-[30px] text-[#121927]">
                1. Acceptance of Terms
              </h4>
              <p className="text-[14px] mb-[16px] md:mb-[16px] sm:mb-[8px] font-onest leading-[24px] text-[#4F4F4F]">
                By creating an account or using Prooval(formerly HackTheJobs) in any manner, you agree to comply with and be legally bound by these Terms and our Privacy Policy. 
                These Terms apply to all users, including professionals, clients, and visitors.
              </p>
            </div>
            <div>
              <h4 className="text-[18px] font-onest font-700 leading-[30px] text-[#121927]">
                2. Description of Service
              </h4>
              <p className="text-[14px] mb-[16px] md:mb-[16px] sm:mb-[8px] font-onest leading-[24px] text-[#4F4F4F]">
                Prooval(formerly HackTheJobs) is a digital platform that enables professionals to monetize their knowledge by hosting mentorship sessions, consultations, webinars, and selling digital products all from a single link.
                Prooval(formerly HackTheJobs) provides tools for scheduling, hosting, payments, and audience management to help professionals grow their businesses efficiently.
              </p>
            </div>
            <div>
              <h4 className="text-[18px] font-onest font-700 leading-[30px] text-[#121927]">
                3. User Accounts
              </h4>
              <div className=" gap-[12px]">
                <span className=" text-[16px] font-onest leading-[27px] text-[#000000]">
                  3.1 Account Creation
                </span>{" "}
                <p className="text-[14px] mb-[8px] font-onest leading-[24px] text-[#4F4F4F]">
                  To access certain features, you must create an account. 
                  You agree to provide accurate, current, and complete information during registration.
                </p>
              </div>
              <div className=" gap-[12px]">
                <span className="text-[16px] font-onest leading-[27px] text-[#000000]">
                  3.2 Account Responsibility
                </span>{" "}
                <p className="text-[14px] mb-[8px] font-onest leading-[24px] text-[#4F4F4F]">
                  You are solely responsible for maintaining the confidentiality of your login credentials and
                  for all activities that occur under your account.
                </p>
              </div>
              <div className=" gap-[12px]">
                <span className="text-[16px] font-onest leading-[27px] text-[#000000]">
                  3.3 Account Integrity
                </span>{" "}
                <p className="text-[14px] mb-[16px] md:mb-[16px] sm:mb-[8px] font-onest leading-[24px] text-[#4F4F4F]">
                  You agree not to share, sell, or transfer your account to any other person. 
                  If you suspect unauthorized use of your account, you must notify us immediately at support@prooval.com.
                </p>
              </div>
            </div>
            <div>
              <h4 className="text-[18px] font-onest font-700 leading-[30px] text-[#121927]">
                4. User Conduct
              </h4>
              <div className=" gap-[12px]">
                <span className="text-[16px] font-onest leading-[27px] text-[#000000]">
                  4.1 Prohibited Activities
                </span>{" "}

                <p className="text-[14px] mb-[8px] font-onest leading-[24px] text-[#4F4F4F]">
                  You agree not to :
                </p>
                <ul className="list-disc pl-5 text-[14px] mb-[8px] font-onest leading-[24px] text-[#4F4F4F] ">
                  <li>Use the Service for any unlawful purpose.</li>
                  <li>Interfere with or disrupt the Service or servers connected to it.</li>
                  <li>Attempt to gain unauthorized access to any portion of the Service, other accounts, or networks.</li>
                  <li>Upload, share, or distribute any harmful, fraudulent, or misleading content.</li>
                </ul>
              </div>
              <div className=" gap-[12px]">
                <span className="text-[16px] font-onest leading-[27px] text-[#000000]">
                  4.2 Professional Use
                </span>{" "}
                <p className="text-[14px] mb-[16px] md:mb-[16px] sm:mb-[8px] font-onest leading-[24px] text-[#4F4F4F]">
                  You agree to use Prooval(formerly HackTheJobs) only for lawful, 
                  professional purposes and in a manner consistent with applicable laws and regulations.
                </p>
              </div>
            </div>
            <div>
              <h4 className="text-[18px] font-onest font-700 leading-[30px] text-[#121927]">
                5. Intellectual Property
              </h4>
              <div className="flex gap-[12px]">
                {/* <span className="text-[16px] font-onest leading-[27px] text-[#000000]">
                  5.1
                </span>{" "} */}
                <p className="text-[14px] mb-[26px] sm:mb-[16px] font-onest leading-[24px] text-[#4F4F4F]">
                  All content, design elements, software, trademarks, and materials within Prooval(formerly HackTheJobs) are the property of Prooval(formerly HackTheJobs) and are protected by copyright, trademark, and other intellectual property laws.
                  You may not copy, modify, distribute, or exploit any part of the Service without our express written consent.
                </p>
              </div>
            </div>
            <div>
              <h4 className="text-[18px] font-onest font-700 leading-[30px] text-[#121927]">
                6. Payments and Fees
              </h4>
              <div className=" gap-[12px]">
                <p className="text-[14px] mb-[8px] font-onest leading-[24px] text-[#4F4F4F]">
                  You agree to :
                </p>
                <ul className="list-disc pl-5 text-[14px] mb-[8px] font-onest leading-[24px] text-[#4F4F4F] ">
                  <li>Pay applicable transaction fees as outlined on the platform.</li>
                  <li>Ensure that all payment information provided is accurate and authorized.</li>
                  <li>Understand that Prooval(formerly HackTheJobs) is not liable for issues arising from third-party payment providers.</li>
                </ul>
                <p className="text-[14px] mb-[8px] font-onest leading-[24px] text-[#4F4F4F]">Prooval(formerly HackTheJobs) reserves the right to update its fee structure with notice to users.</p>
              </div>
            </div>
            <div>
              <h4 className="text-[18px] font-onest font-700 leading-[30px] text-[#121927]">
                7. Refunds and Cancellations
              </h4>
              <div className=" gap-[12px]">
                <span className="text-[16px] font-onest leading-[27px] text-[#000000]">
                  7.1 Digital Products
                </span>{" "}
                <p className="text-[14px] mb-[16px] md:mb-[16px] sm:mb-[8px] font-onest leading-[24px] text-[#4F4F4F]">
                  All sales of digital products (including courses, guides, templates, and downloadable materials) are final and non-refundable, 
                  except in cases of technical errors or duplicate transactions.
                </p>
              </div>
              <div className=" gap-[12px]">
                <span className="text-[16px] font-onest leading-[27px] text-[#000000]">
                  7.2 Sessions and Webinars
                </span>{" "}
                <p className="text-[14px] mb-[16px] md:mb-[16px] sm:mb-[8px] font-onest leading-[24px] text-[#4F4F4F]">
                  Refunds for mentorship sessions, consultations, or webinars are determined by the individual professional offering the service. 
                  Prooval(formerly HackTheJobs) acts solely as a facilitator and is not responsible for issuing refunds on behalf of professionals.
                </p>
                <p className="text-[14px] mb-[16px] md:mb-[16px] sm:mb-[8px] font-onest leading-[24px] text-[#4F4F4F]">We encourage professionals to clearly communicate their cancellation and refund policies on their Prooval(formerly HackTheJobs) pages.</p>
              </div>
              <div className=" gap-[12px]">
                <span className="text-[16px] font-onest leading-[27px] text-[#000000]">
                  7.3 Technical Issues
                </span>{" "}
                <p className="text-[14px] mb-[16px] md:mb-[16px] sm:mb-[8px] font-onest leading-[24px] text-[#4F4F4F]">
                  If a session or digital product purchase fails due to a technical issue on Prooval’s end, please contact support@prooval.com within 48 hours of the issue. We will investigate and, where applicable, process a refund or credit.
                </p>
              </div>
            </div>
            <div>
              <h4 className="text-[18px] font-onest font-700 leading-[30px] text-[#121927]">
                8. Termination
              </h4>
              <p className="text-[14px] mb-[16px] md:mb-[16px] sm:mb-[8px] font-onest leading-[24px] text-[#4F4F4F]">
                We may suspend or terminate your account at any time, without prior notice, if you violate these Terms or misuse the platform.
                Upon termination, your right to access and use the Service will immediately cease.
              </p>
            </div>
            <div>
              <h4 className="text-[18px] font-onest font-700 leading-[30px] text-[#121927]">
                9. Limitation of Liability
              </h4>

              {/* <p className="text-[14px] mb-[8px] font-onest leading-[24px] text-[#4F4F4F]">
                If you have any questions about these terms, please contact us
                at{" "}
                <a href="mailto:hello@hackthejobs.com">hello@hackthejobs.com</a>
                .
              </p> */}
              <p className="text-[14px] mb-[8px] font-onest leading-[24px] text-[#4F4F4F]">
                To the fullest extent permitted by law, Prooval and its directors, employees, partners, agents, 
                and affiliates shall not be liable for any indirect, incidental, consequential, or punitive damages, including loss of profits, data, or goodwill, arising from your use of the Service.
              </p>
            </div>
            <div>
              <h4 className="text-[18px] font-onest font-700 leading-[30px] text-[#121927]">
                10. Changes to These Terms
              </h4>
              <p className="text-[14px] mb-[16px] md:mb-[16px] sm:mb-[8px] font-onest leading-[24px] text-[#4F4F4F]">
                We reserve the right to modify or replace these Terms at any time. Updates will be effective once posted on this page, with a revised “Last Updated” date.
                Continued use of the Service after changes are posted constitutes your acceptance of the new Terms.
              </p>
            </div>
            <div>
              <h4 className="text-[18px] font-onest font-700 leading-[30px] text-[#121927]">
                11. Contact Us
              </h4>
               <p className="text-[14px] mb-[8px] font-onest leading-[24px] text-[#4F4F4F]">
                If you have any questions about these terms, please contact us
                at:{" "}
                <span className="block">
                  <span className="font-bold">Email:</span>
                  <a className="hover:underline transition" href="mailto:hello@prooval.com">hello@prooval.com</a>
                  </span>.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="-mt-[80px]"><Footer /></div>
      
    </>
  );
};

export default Terms;
