

"use client";

import React, { useEffect,useRef,useState } from "react";
import Navbar from "@/components/navbar/nav";
import Footer from "@/components/footer/footer";
import Modal from "@/components/modal/modal";
import Image from "next/image";
import ValueCard from "@/components/valueCard/PriceValueCard copy";
import { motion, useAnimation } from "framer-motion";
import { RiDoubleQuotesL } from "react-icons/ri";


const testimonialsTop = [
  {
    name: "Abayomi Babajide",
    role: " Digital Marketing Expert",
    text: "As someone who juggles multiple clients, I needed a simple way to share digital products and offer consultations without stress. Prooval made that possible. It feels like having an organized online office here.",
    image: "/testimonial1.png",
    icon: <RiDoubleQuotesL />,
  },
  {
    name: "Joy Omowaye",
    role: " Product Designer",
    text: "Beyond my 9-5, Prooval helped me turn my design expertise into a side income. I now run design mentorships, consultation,  sell UI templates and guides for new designers and host webinars with ease.",
    image: "/testimonial2.png",
    icon: <RiDoubleQuotesL />,
  },
  {
    name: "Gift Adeyemi",
    role: " Wellness Coach",
    text: "I wanted to create my own website before I found out about Prooval and what I love mostly about Prooval is having my own personalized page. I manage my entire business from one using my prooval link and it’s been fulfilling for me",
    image: "/testimonial3.png",
    icon: <RiDoubleQuotesL />,
  },
  {
    name: "Sola Ogunbanwo",
    role: " Creative Director",
    text: "Prooval has changed the way I connect with creatives. The major challenge for me was difficulty in managing mentorship requests and as much as I wanted to make the impact, I just couldn't manage all via DMs and this is one of the reason I will stick with Prooval till forever.",
    image: "/testimonial4.png",
    icon: <RiDoubleQuotesL />,
  },
  {
    name: "Festus Osas",
    role: " HR Consultant",
    text: "Mentoring the next generation has always been something I’m passionate about, but Prooval just changed the game for me. It gave me a platform to share my knowledge, connect with aspiring professionals, and finally get paid for doing what I love.",
    image: "/testimonial5.png",
    icon: <RiDoubleQuotesL />,
  },
  {
    name: "James Babalola",
    role: " Immigration Consultant",
    text: "Prooval took my immigration consultancy to the next level. It gave me a seamless way to offer consultations, share valuable resources, and connect with clients globally. Now, I can guide more people towards achieving their dream of living abroad and professionally earning from what I know best.",
    image: "/testimonial6.png",
    icon: <RiDoubleQuotesL />,
  },
];

const testimonialsBottom = [
  {
    name: "Abayomi Babajide",
    role: " Digital Marketing Expert",
    text: "As someone who juggles multiple clients, I needed a simple way to share digital products and offer consultations without stress. Prooval made that possible. It feels like having an organized online office here.",
    image: "/testimonial1.png",
    icon: <RiDoubleQuotesL />,
  },
  {
    name: "Joy Omowaye",
    role: " Product Designer",
    text: "Beyond my 9-5, Prooval helped me turn my design expertise into a side income. I now run design mentorships, consultation,  sell UI templates and guides for new designers and host webinars with ease.",
    image: "/testimonial2.png",
    icon: <RiDoubleQuotesL />,
  },
  {
    name: "Gift Adeyemi",
    role: " Wellness Coach",
    text: "I wanted to create my own website before I found out about Prooval and what I love mostly about Prooval is having my own personalized page. I manage my entire business from one using my prooval link and it’s been fulfilling for me",
    image: "/testimonial3.png",
    icon: <RiDoubleQuotesL />,
  },
  {
    name: "Sola Ogunbanwo",
    role: " Creative Director",
    text: "Prooval has changed the way I connect with creatives. The major challenge for me was difficulty in managing mentorship requests and as much as I wanted to make the impact, I just couldn't manage all via DMs and this is one of the reason I will stick with Prooval till forever.",
    image: "/testimonial4.png",
    icon: <RiDoubleQuotesL />,
  },
  {
    name: "Festus Osas",
    role: " HR Consultant",
    text: "Mentoring the next generation has always been something I’m passionate about, but Prooval just changed the game for me. It gave me a platform to share my knowledge, connect with aspiring professionals, and finally get paid for doing what I love.",
    image: "/testimonial5.png",
    icon: <RiDoubleQuotesL />,
  },
  {
    name: "James Babalola",
    role: " Immigration Consultant",
    text: "Prooval took my immigration consultancy to the next level. It gave me a seamless way to offer consultations, share valuable resources, and connect with clients globally. Now, I can guide more people towards achieving their dream of living abroad and professionally earning from what I know best.",
    image: "/testimonial6.png",
    icon: <RiDoubleQuotesL />,
  },
];

const Pricing = () => {
  const [showModal, setShowModal] = useState(false);
  const [currency, setCurrency] = useState("Nigerian Naira");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const currencies = [
    { name: "Nigerian Naira", flag: "/Nigeria.png" },
    { name: "United States Dollar", flag: "/united-states.png" },
  ];

  // Get the current flag based on selected currency
  const currentFlag = currencies.find(c => c.name === currency)?.flag || "/Nigeria.png";
  const currentCurrency = currencies.find(c => c.name === currency) || currencies[0];
  const feePercent = currency === "United States Dollar" ? 8 : 5;
  const currAbbrev = currency === "United States Dollar" ? "USD" : "NGN"

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleCurrencySelect = (selectedCurrency) => {
    setCurrency(selectedCurrency.name);
    setIsDropdownOpen(false);
  };

  return (
    <>
      <Navbar />
      {showModal && <Modal modalClose={() => setShowModal(false)} />}

      <main className="bg-[#FFFFFF] text-[#000000] font-satoshi">
        {/* ====== FEE SECTION ====== */}
        <section className="w-full flex flex-col items-center justify-center text-center px-4 sm:px-6 py-16 md:py-24">
          <h1 className="text-4xl sm:text-3xl md:text-2xl font-semibold mb-4 max-w-3xl">
            No monthly fees, no hidden costs. We only earn when you do.
          </h1>
          <p className="text-[#666666] max-w-5xl mb-8 text-base sm:text-sm">
            Prooval is completely free to use. You only pay a small platform fee after every sale, no monthly subscriptions, no hidden charges. 
            The cost may vary slightly depending on your sales currency.
            Focus on creating and selling, and let Prooval handle the rest.
          </p>

          {/* Card Container */}
          <div className="bg-[#FAFAFA] border border-[#E2E8F0] rounded-2xl shadow-sm mt-7 p-8  md:p-6 w-full max-w-md ">
            <p className="font-bold pb-3">Select Currency</p>
            
            
            {/* Stylish Custom Currency Dropdown */}
            <div className="relative mb-6" ref={dropdownRef}>
              {/* Dropdown Trigger */}
              <div 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="border border-[#E2E8F0] rounded-lg px-4 py-3 w-full text-[#000000] focus:outline-none focus:ring-2 focus:ring-[#1453FF] cursor-pointer bg-[#FFFFFF] hover:bg-[#F8FAFC] transition-colors duration-200 flex items-center justify-between"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-6 rounded overflow-hidden flex items-center justify-center">
                    <Image 
                      src={currentCurrency.flag}
                      alt={`${currentCurrency.name} flag`} 
                      width={32}
                      height={24}
                      className="object-cover"
                    />
                  </div>
                  <div className="text-left">
                    <div className="font-medium text-[#000000]">{currentCurrency.name}</div>
                    <div className="text-xs text-[#666666]">{currentCurrency.code}</div>
                  </div>
                </div>
                <svg 
                  className={`w-5 h-5 text-[#666666] transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-[#FFFFFF] border border-[#E2E8F0] rounded-lg shadow-lg z-10 overflow-hidden">
                  {currencies.map((currencyOption) => (
                    <div
                      key={currencyOption.name}
                      onClick={() => handleCurrencySelect(currencyOption)}
                      className={`flex items-center space-x-3 px-4 py-3 cursor-pointer transition-colors duration-150 ${
                        currency === currencyOption.name 
                          ? 'bg-[#F6FAFF] border-r-2 border-[#1453FF]' 
                          : 'hover:bg-[#F8FAFC]'
                      }`}
                    >
                      <div className="w-8 h-6 rounded overflow-hidden flex items-center justify-center">
                        <Image 
                          src={currencyOption.flag}
                          alt={`${currencyOption.name} flag`} 
                          width={32}
                          height={24}
                          className="object-cover"
                        />
                      </div>
                      <div className="text-left flex-1">
                        <div className={`font-medium ${
                          currency === currencyOption.name ? 'text-[#1453FF]' : 'text-[#000000]'
                        }`}>
                          {currencyOption.name}
                        </div>
                        <div className="text-xs text-[#666666]">{currencyOption.code}</div>
                      </div>
                      {currency === currencyOption.name && (
                        <svg className="w-4 h-4 text-[#1453FF]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>


            {/* Fee Display */}
            <div className="bg-[#F6FAFF] border border-[#E2E8F0] text-center rounded-lg">
              <p className="text-6xl md:text-5xl text-[#1453FF]  mt-8 mb-4">{feePercent}%</p>
              <p className=" ">
                <span className="font-bold text-base sm:text-sm pb-[10px] block">Platform Fee</span> 
                <div className=" text-sm  sm:text-xs px-3  mb-6 max-w-[377px]">
                  We charge {feePercent}% on all {currAbbrev} transactions and this is charged before the professional is credited. 
                </div>
              </p>
            </div>
            
          </div>
        </section>
        <section className="h-[64px] bg-[#fff]"></section>
        <section className="px-[80px] xl:px-[25px] xm:px-4 py-[137.5px] sm:py-[62px] font-onest bg-[#121927] relative">
          <h2 className="font-medium text-[48px] lg:text-[32px] leading-[52.8px] lg:leading-[41.6px] text-[#FFFFFF] text-center w-[865px] lg:w-[95%] mx-auto pb-10">
            A glimpse of all our available features
          </h2>

          <ValueCard />
          <Image
            src="/big-star1.png"
            width={127}
            height={128}
            alt="star"
            className="absolute top-[0] right-[154px] lgx:hidden block"
          />
          <Image
            src="/mobile-bigstar.png"
            width={74}
            height={65}
            alt="star"
            className="absolute top-[0] right-[16px] lgx:block hidden"
          />
        </section>

        {/* Rest of your code remains the same */}
                  {/* Testimonials section */}
                <section className="sm:pt-[40px]">
                  <div className="w-full font-satoshi bg-[url(/background.png)] bg-cover bg-center py-[50px] sm:py-[19.06px] overflow-hidden">
                    <div className="flex flex-col items-center justify-center">
                      <h1 className="text-[#121927] font-bold text-[48px] leading-[56px] mx-auto text-center mb-[20px] w-[978px] md:w-[100%] sm:text-[30px] sm:leading-[38px]">
                        What Experts Are Saying
                      </h1>
                      <p className="text-base sxm:text-[11px] text-center font-normal leading-[160%] text-[#787878] mb-[40px]">Real stories from experts building their income on Prooval.</p>
                    </div>
                    <motion.div
                      className="flex gap-6 sm:gap-4 drop-shadow-[#0000001A]"
                      animate={{ x: ["-100%", "0%"] }}
                      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    >
                      {[...testimonialsTop, ...testimonialsTop].map((t, i) => (
                        <div
                          key={i}
                          className="sm:min-w-[100%] sm:max-w-[100%] min-w-[400px] max-w-[400px] bg-[#FAFAFA] p-8 rounded-xl shadow-xl flex flex-col justify-between sm:p-4"
                        >
                          <p className="text-[80px] font-normal text-[#1453FF] mb-2">
                            {t.icon}
                          </p>
                          <p className="text-[#787878] text-base mb-8">{t.text}</p>
                          <div className="flex gap-2 ">
                            <img className="h-[48px] w-[48px] rounded-full object-cover" src={t.image} alt={t.name} />
                            <div>
                              <h4 className="font-bold text-base text-[#787878]">
                                {t.name}
                              </h4>
                              <p className="text-xs text-[#787878]">{t.role}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </motion.div>
        
                    <motion.div
                      className="flex gap-6 mt-8"
                      animate={{ x: ["0%", "-100%"] }}
                      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    >
                      {[...testimonialsBottom, ...testimonialsBottom].map((t, i) => (
                        <div
                          key={i}
                          className="min-w-[400px] max-w-[400px] bg-[#FAFAFA] p-8 rounded-xl shadow-xl flex flex-col justify-between"
                        >
                          <p className="text-[80px] font-normal text-[#1453FF] mb-2">
                            {t.icon}
                          </p>
                          <p className="text-[#787878] text-base mb-8">{t.text}</p>
                          <div className="flex gap-2">
                            <img className="h-[48px] w-[48px] rounded-full object-cover" src={t.image} alt={t.name} />
                            <div>
                              <h4 className="font-bold text-base text-[#787878]">
                                {t.name}
                              </h4>
                              <p className="text-xs text-[#787878]">{t.role}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  </div>
                </section>

                <section className="w-full flex justify-center items-center pt-[40px] px-[80px] md:px-[40px] xl:px-[25px] xm:px-[16px] sm:px-[16px] ">
                          <div className="relative w-full bg-[#0057FF] rounded-[24px] text-center text-white overflow-hidden bg-[url(/Stroke_1.svg)] bg-cover bg-center">
                            <div className="absolute top-11 right-14 w-[59px] h-[59px] sm:w-[28px] sm:h-[28px] sm:top-6 sm:right-7 ">
                              <Image
                                src="/Stars.png"
                                alt="Star Icon"
                                fill
                                className="object-contain"
                              />
                            </div>
                
                            <div className="absolute bottom-8 left-6 w-[59px] h-[59px] sm:left-5 sm:bottom-7 sm:w-[28px] sm:h-[28px] ">
                              <Image
                                src="/Stars.png"
                                alt="Star Icon"
                                fill
                                className="object-contain"
                              />
                            </div>
                
                            <div className="relative z-10 flex flex-col items-center justify-center pt-[114.5px] pb-[80px]">
                              <div className="w-[609px] max-w-full sm:w-[300px]">
                                <h1 className="text-[48px] text-[#FCFCFC] font-bold mb-2 leading-[56px] sm:text-[20px] sm:leading-[32px]">
                                  Turn Your Knowledge into {" "}
                                  <br className="hidden sm:block" />
                                  Income Seamlessly
                                </h1>
                                <p className="text-base text-[#FCFCFC] leading-[160%] mb-8 sm:text-[14px]">
                                 You no longer have to juggle multiple platforms to monetize your knowledge. Prooval makes it simple to share your expertise and earn all from a single link.
                                </p>
                              </div>
                
                              <button className="bg-[#ffffff] text-[#1453FF] font-medium px-6 py-3 w-[300px] sm:w-[218px] rounded-md hover:bg-gray-100 transition">
                                Start my page
                              </button>
                            </div>
                          </div>
                        </section>
      </main>

      <Footer openModal={() => setShowModal(true)} />
    </>
  );
};

export default Pricing;