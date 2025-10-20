"use client";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import Link from "next/link";

const features = [
  {
    id: "bookings",
    label: "1-on-1 Sessions",
    title: "Host 1-on-1 Sessions",
    description:
      "Host mentorships, consultations, and discovery calls with ease. You bring the expertise, we handle everything else.",
    image: "/host_session.png",
    bg: "bg-[#FFF1F2]",
  },
  {
    id: "products",
    label: "Digital Products",
    title: "Sell Digital Products",
    description:
      "Sell courses, exclusive content, guides, ebooks, templates and everything else. Start earning passively.",
    image: "/digital-products.png",
    bg: "bg-[#FFFBEB]",
  },
  {
    id: "packages",
    label: "Package Sessions",
    title: "Offer Package Sessions",
    description:
      "Perfect for long-term client consultation, mentorship or recurring engagements up to 3 months.",
    image: "/offer-package.png",
    bg: "bg-[#F0FDF4]",
  },
  {
    id: "webinar",
    label: "Webinar",
    title: "Host a Webinar",
    description:
      "Connect with hundreds of followers at once. Host classes, group calls, and workshops all in one place.",
    image: "/host_webinar.png",
    bg: "bg-[#FFF4D0]",
  },
];

export default function FeatureScroll() {
  const containerRef = useRef(null);
  const [activeTab, setActiveTab] = useState(features[0].id);
  const tabRefs = useRef({});
  const tabScrollRef = useRef(null); // ✅ added
  const hasMounted = useRef(false);
  const isProduction = process.env.NEXT_PUBLIC_DOMAIN_DEV;

  // Disable browser scroll restoration
  if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
    window.history.scrollRestoration = "manual";
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "instant" });
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  // Handle scroll progress for feature activation
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const sectionIndex = Math.floor(latest * features.length);
    const newActiveId = features[sectionIndex]?.id;
    if (newActiveId && newActiveId !== activeTab) {
      setActiveTab(newActiveId);
    }
  });

  // Keep active tab centered on mobile when activeTab changes
  useEffect(() => {
    if (!tabScrollRef.current) return;
    const activeIndex = features.findIndex((f) => f.id === activeTab);
    const activeButton = tabScrollRef.current.children[activeIndex];

    if (activeButton && window.innerWidth < 640) {
      activeButton.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [activeTab]);

  // Handle incoming hash navigation (e.g., from footer links on other pages)
  useEffect(() => {
    if (typeof window === "undefined") return;

    // don't auto-scroll when the user reloads the page — only when navigating with a hash
    const isReload = (() => {
      try {
        const navEntries = performance.getEntriesByType && performance.getEntriesByType("navigation");
        if (navEntries && navEntries.length > 0) {
          return navEntries[0].type === "reload";
        }
        // fallback for older browsers
        if (performance && performance.navigation) {
          return performance.navigation.type === performance.navigation.TYPE_RELOAD;
        }
      } catch (e) {
      }
      return false;
    })();

    if (isReload) return;

    const hash = window.location.hash ? window.location.hash.replace("#", "") : null;
    if (!hash) return;

    // If hash matches a feature id
    if (features.some((f) => f.id === hash)) {
      setActiveTab(hash);
      // small timeout to allow layout to settle
      setTimeout(() => {
        const el = document.getElementById("explore-features");
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 80);
    } else if (hash === "explore-features") {
      setTimeout(() => {
        const el = document.getElementById("explore-features");
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 80);
    }
  }, []);

  const activeFeature = features.find((f) => f.id === activeTab);

  return (
    <>
      <section
        id="explore-features"
        ref={containerRef}
        className="relative h-[400vh] md:h-[350vh] sm:h-[400vh] font-satoshi "
      >
        {/* Header */}
        <div className="max-w-[800px] mx-auto text-center px-4 pt-10">
          <h1 className="text-[48px] leading-[56px] font-bold text-[#121927] md:text-[36px] md:leading-[44px] sm:text-[28px] sm:leading-[36px] font-satoshi">
            Unlimited ways to share your expertise across board
          </h1>
          <p className="font-normal text-[16px] leading-[160%] text-[#787878] mt-5 mb-10 font-satoshi sm:text-[14px] sm:mt-3 sm:mb-6">
            Share what you know with your audience and get paid
          </p>
        </div>

        {/* Tabs */}
        <div
          ref={tabScrollRef}
          className="sticky top-0 z-40 bg-[white] px-4 py-4 flex justify-center gap-3 
  sm:overflow-x-auto sm:px-[16px] sm:justify-start sm:whitespace-nowrap sm:gap-4 sm:pb-4 scrollbar-hide"
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

          {features.map((feature) => (
            <button
              ref={(el) => (tabRefs.current[feature.id] = el)}
              id={feature.id}
              key={feature.id}
              onClick={() => setActiveTab(feature.id)}
              className={`font-semibold text-[16px] rounded-[9.02px] px-5 min-w-[179px] h-[48px] transition-colors duration-300
        ${
          activeTab === feature.id
            ? "bg-[#050212] text-[white] border border-[#050212]"
            : "border border-[#DDDDDD] text-[#050212] hover:bg-gray-100"
        }`}
            >
              {feature.label}
            </button>
          ))}
        </div>

        {/* Feature Card */}
        <div className="sticky top-12 flex items-center justify-center h-screen font-satoshi px-4 sxm:px-2">
          <AnimatePresence mode="wait">
            {activeFeature && (
              <motion.div
                key={activeFeature.id}
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -80 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className={`w-full max-w-[1200px] rounded-[22px] overflow-hidden py-[55px] px-[75px] ${
                  activeFeature.bg
                } text-black 
        flex justify-between items-center gap-[60px]
        md:px-8 md:py-10 md:gap-10
        sm:flex-col-reverse sm:py-6 sm:px-4 sm:rounded-[18px] sxm:px-2
        ${
          features.indexOf(activeFeature) % 2 !== 0
            ? "lg:flex-row-reverse"
            : "lg:flex-row"
        }`}
              >
                {/* Text */}
                <div className="w-[540px] md:w-[400px] sm:w-full sm:text-start">
                  <h2 className="text-[47px] leading-[100%] font-bold mb-3 text-[#333] md:text-[30px] md:leading-[110%] sm:text-[30px] sm:leading-[34px] sm:mb-[11.83px] sxm:text-[20px]">
                    {activeFeature.title}
                  </h2>
                  <p className="text-[23px] leading-[150%] text-[#787878] md:text-[16px] sm:text-[16px] sm:leading-[160%] font-normal sxm:text-[12px]">
                    {activeFeature.description}
                  </p>
                </div>

                {/* Image */}
                <div className="relative flex-shrink-0 w-[409px] h-[354px] md:w-[320px] md:h-[280px] sm:w-full sm:h-[300.04px] sxm:w-[300px]">
                  <Image
                    src={activeFeature.image}
                    alt={activeFeature.title}
                    fill
                    className="object-cover w-0"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <section className="flex justify-center pb-20 sm:pb-[24px] sm:pt-[24px]">
        <Link
          href={
            isProduction === "development"
              ? `${process.env.NEXT_PUBLIC_STAGING_DASH_URL}/auth/signup`
              : `${process.env.NEXT_PUBLIC_DASH_URL}/auth/signup`
          }
          
        >
          <button className="bg-primary text-[white] font-semibold text-lg rounded-lg w-[300px] h-16 transition sm:w-[220px] sm:h-12 sm:text-base">
            Create my Page
          </button>
        </Link>
      </section>
    </>
  );
}
