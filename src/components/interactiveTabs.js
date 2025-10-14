"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const tabs = [
  {
    id: "bookings",
    label: "1-on-1 Sessions",
    imageSrc: "/session.png",
    mobileImage: "/mobile_session.png",
    positionClasses: "top-[10px] right-[35px]",
    zIndex: 1,
  },
  {
    id: "products",
    label: "Digital Products",
    imageSrc: "/digital_product.png",
    mobileImage: "/mobile_digital.png",
    positionClasses: "top-[-20px] right-[-5px]",
    zIndex: -2,
  },
  {
    id: "packages",
    label: "Package Sessions",
    imageSrc: "/package_session.png",
    mobileImage: "/mobile_package.png",
    positionClasses: "top-[-30px] right-[-20px]",
    zIndex: -3,
  },
  {
    id: "webinar",
    label: "Webinar",
    imageSrc: "/webinar_img.png",
    mobileImage: "/mobile_webinar.png",
    positionClasses: "top-[-40px] right-[-30px]",
    zIndex: -5,
  },
];

function getScrollYTransform(ref, index) {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return useTransform(scrollYProgress, [0, 1], [index * 100, -index * 100]);
}

const ExpertiseSection = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const scrollRef = useRef(null);
  const tabScrollRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
  });

  // Horizontal scroll auto-scroll to end on mount
  useEffect(() => {
    if (tabScrollRef.current) {
      tabScrollRef.current.scrollTo({
        left: tabScrollRef.current.scrollWidth,
        behavior: "smooth",
      });
    }
  }, [activeTab]);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const currentTabIndex = Math.min(
        Math.floor(latest * tabs.length),
        tabs.length - 1
      );
      const newActiveTabId = tabs[currentTabIndex]?.id;

      if (newActiveTabId && newActiveTabId !== activeTab) {
        setActiveTab(newActiveTabId);
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress, activeTab]);

  // ✅ Scroll to active tab when it changes (including back to first)
  useEffect(() => {
    if (!tabScrollRef.current) return;
    const activeIndex = tabs.findIndex((t) => t.id === activeTab);
    const activeButton = tabScrollRef.current.children[activeIndex];

    if (activeButton) {
      activeButton.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [activeTab, tabs]);

  // ✅ Update active tab on scroll
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const index = Math.min(tabs.length - 1, Math.floor(latest * tabs.length));
      setActiveTab(tabs[index].id);
    });
    return () => unsubscribe();
  }, [scrollYProgress, tabs]);

  return (
    <section ref={scrollRef} className="relative mb-[80px] font-satoshi">
      <div className="sm:hidden">
        {/* Header Section */}
        <div className="m-auto w-[800px] lgx:w-[90%] md:w-[100%] sm:w-[100%] text-center px-[16px] pt-10">
          <h1 className="text-[48px] leading-[56px] font-bold text-[#121927] sm:text-[30px] sm:leading-[38px] font-satoshi ">
           Unlimited ways to share your expertise across board
          </h1>
          <p className="font-normal text-[16px] leading-[160%] text-[#787878] mt-[20px] mb-[40px] font-satoshi">
            Share what you know with your audience and get paid
          </p>
        </div>

        {/*  Tab Buttons */}
        <div className="sticky top-0 z-40 bg-[white] px-4 py-4 lg:px-[120px] flex justify-center gap-4 lg:whitespace-nowrap md:whitespace-nowrap md:px-2 ">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
            font-semibold font-satoshi text-[16px] rounded-[9.02px] w-[197px] md:w-[160px] h-[48px] transition-colors duration-300
            ${
              activeTab === tab.id
                ? "bg-[#050212] text-[#fff] border border-[#050212]"
                : "border border-[#DDDDDD] text-[#050212] hover:bg-gray-100"
            }
          `}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Images Section */}
        <div className="relative w-full max-w-[1000px] mx-auto mt-[153px] h-[250vh] lgx:w-[80%] md:w-[90%]">
          <div className="sticky top-[200px] h-[465.94px] lgx:h-[400px] md:h-[350px]">
            {tabs.map((tab) => (
              <motion.div
                key={tab.id}
                className={`absolute ${tab.positionClasses}`}
                animate={{
                  zIndex: activeTab === tab.id ? 10 : tab.zIndex,
                  scale: activeTab === tab.id ? 1 : 0.95,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 25,
                }}
              >
                <Image
                  src={tab.imageSrc}
                  alt={tab.label}
                  width={1000}
                  height={450}
                  className="w-full h-auto"
                  style={{ objectFit: "contain" }}
                />
              </motion.div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center">
          <button className="bg-primary border border-[#DDDDDD] text-[#FFFFFF] font-semibold font-satoshi text-lg rounded-lg w-[300px] h-16">
            Start Creating
          </button>
        </div>
      </div>

      {/* Mobile View */}
      <section className="sm:block 3xl:hidden relative" ref={scrollRef}>
        {/* Header */}
        <div className="m-auto w-[800px] sm:w-[100%] text-center px-[16px] pt-10">
          <h1 className="text-[48px] leading-[56px] font-bold text-[#121927] sm:text-[30px] sm:leading-[38px] ">
            Limitless ways to share your expertise across board
          </h1>
          <p className="font-normal text-[16px] leading-[160%] text-[#787878] mt-[20px] mb-[20px]">
            Every expert adds something unique. Join the growing community of
            professionals turning their knowledge into impact and income.
          </p>
        </div>

        {/* Sticky & Scrollable Tab Buttons */}
        <div
          ref={tabScrollRef}
          className="overflow-x-auto whitespace-nowrap px-4 flex gap-4  pb-4 sticky top-1 z-50 bg-[white] scrollbar-hide"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <style jsx>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
              font-semibold font-satoshi text-[16px] rounded-[9.02px] px-5 w-[197px] h-[48px] transition-colors duration-300
              ${
                activeTab === tab.id
                  ? "bg-[#050212] text-[#fff] border border-[#050212]"
                  : "border border-[#DDDDDD] text-[#050212] hover:bg-gray-100"
              }
            `}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Stacking Images Section */}
        <div className="relative h-[250vh] mt-6">
          {tabs.map((tab, index) => (
            <motion.div
              key={tab.id}
              className="sticky top-[100px] flex justify-center"
              style={{
                zIndex: index + 1, // each new image is above the previous
              }}
            >
              <div className="w-[90%] max-w-[400px]">
                <Image
                  src={tab.mobileImage}
                  alt={tab.label}
                  width={400}
                  height={300}
                  className="w-full h-auto"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <button className="bg-primary border border-[#DDDDDD] text-[#FFFFFF] font-semibold font-satoshi text-lg rounded-lg w-[300px] h-16">
            Start Creating
          </button>
        </div>
      </section>
    </section>
  );
};

export default ExpertiseSection;
