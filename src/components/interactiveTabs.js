'use client';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, useScroll } from 'framer-motion';

const tabs = [
  {
    id: 'bookings',
    label: '1-on-1 bookings',
    imageSrc: '/session.png',
    mobileImage: '/mobile_session.png',
    positionClasses: 'top-[50px] right-[40px]',
    zIndex: 1,
  },
  {
    id: 'products',
    label: 'Digital Products',
    imageSrc: '/digital_product.png',
    mobileImage: '/mobile_digital.png',
    positionClasses: 'top-[10px] right-[-5px]',
    zIndex: -2,
  },
  {
    id: 'packages',
    label: 'Package Bookings',
    imageSrc: '/package_session.png',
    mobileImage: '/mobile_package.png',
    positionClasses: 'top-[-20px] right-[-20px]',
    zIndex: -3,
  },
  {
    id: 'resources',
    label: 'Resources',
    imageSrc: '/resources_1.png',
    mobileImage: '/mobile_resources.png',
    positionClasses: 'top-[-40px] right-[-40px]',
    zIndex: -4,
  },
  {
    id: 'webinar',
    label: 'Webinar',
    imageSrc: '/webinar_img.png',
    mobileImage: '/mobile_webinar.png',
    positionClasses: 'top-[-60px] right-[-50px]',
    zIndex: -5,
  },
];

const ExpertiseSection = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const scrollRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start start', 'end end'],
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      const currentTabIndex = Math.min(Math.floor(latest * tabs.length), tabs.length - 1);
      const newActiveTabId = tabs[currentTabIndex]?.id;

      if (newActiveTabId && newActiveTabId !== activeTab) {
        setActiveTab(newActiveTabId);
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress, activeTab]);

  
  
  
    // Manual scroll with drag
    const isDragging = useRef(false);
    const startX = useRef(0);
    const scrollLeft = useRef(0);
  
    const onMouseDown = (e) => {
      isDragging.current = true;
      startX.current = e.pageX - scrollRef.current.offsetLeft;
      scrollLeft.current = scrollRef.current.scrollLeft;
    };
  
    const onMouseLeaveOrUp = () => {
      isDragging.current = false;
    };
  
    const onMouseMove = (e) => {
      if (!isDragging.current) return;
      e.preventDefault();
      const x = e.pageX - scrollRef.current.offsetLeft;
      const walk = (x - startX.current) * 1.5; // speed
      scrollRef.current.scrollLeft = scrollLeft.current - walk;
    };

  return (
    <section ref={scrollRef} className="relative mb-[80px] ">
      <div className="sticky top-0 overflow-hidden sm:hidden">
        {/* Header Section */}
        <div className="m-auto w-[800px] lgx:w-[90%] md:w-[100%] sm:w-[100%] text-center px-[16px] pt-10">
          <h1 className="text-[48px] leading-[56px] font-bold text-[#121927] sm:text-[30px] sm:leading-[38px] ">
            Limitless ways to share your expertise across board
          </h1>
          <p className="font-normal text-[16px] leading-[160%] text-[#787878] mt-[20px] mb-[40px]">
            Every expert adds something unique. Join the growing community of
            professionals turning their knowledge into impact and income.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="px-4 lg:px-[120px] flex justify-center gap-4 lg:whitespace-nowrap "
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                font-semibold font-satoshi text-[16px] rounded-[9.02px] w-[197px] h-[48px] transition-colors duration-300
                ${activeTab === tab.id
                  ? 'bg-[#050212] text-[#fff] border border-[#050212]'
                  : 'border border-[#DDDDDD] text-[#050212] hover:bg-gray-100'
                }
              `}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="px-[20px] md:px-[80px] mt-[60px] lg:mt-[153px] flex flex-col items-center">
          <div className="relative w-full max-w-[1100px] mt-[100px] h-[480px]">
            {tabs.map((tab) => (
              <motion.div
                key={tab.id}
                className={`absolute ${tab.positionClasses}`}
                animate={{
                  zIndex: activeTab === tab.id ? 10 : tab.zIndex,
                  scale: activeTab === tab.id ? 1 : 0.95,
                }}
                transition={{
                  type: 'spring',
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
                  style={{ objectFit: 'contain' }}
                />
              </motion.div>
            ))}
          </div>

          <button className="mt-[80px] bg-primary border border-[#DDDDDD] text-[#FFFFFF] font-semibold font-satoshi text-[16px] rounded-[9.02px] w-[300px] h-[64px]">
            Start Creating
          </button>
        </div>
      </div>


      <section className='sm:block 3xl:hidden'>
        <div className="sticky top-0 overflow-hidden">
        {/* Header Section */}
        <div className="m-auto w-[800px] lgx:w-[90%] md:w-[100%] sm:w-[100%] text-center px-[16px] pt-10">
          <h1 className="text-[48px] leading-[56px] font-bold text-[#121927] sm:text-[30px] sm:leading-[38px] ">
            Limitless ways to share your expertise across board
          </h1>
          <p className="font-normal text-[16px] leading-[160%] text-[#787878] mt-[20px] mb-[40px]">
            Every expert adds something unique. Join the growing community of
            professionals turning their knowledge into impact and income.
          </p>
        </div>

        {/* Tab Buttons */}
                <div
          ref={scrollRef}
          className="overflow-x-auto whitespace-nowrap px-2 flex gap-4"
          onMouseDown={onMouseDown}
          onMouseUp={onMouseLeaveOrUp}
          onMouseLeave={onMouseLeaveOrUp}
          onMouseMove={onMouseMove}
          style={{
            scrollbarWidth: "none", // Firefox
            msOverflowStyle: "none", // IE 10+
          }}
        >
          <div className="px-4 flex justify-center gap-4">
          {/* Hides the scrollbar in Webkit browsers */}
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
                font-semibold font-satoshi text-[16px] rounded-[9.02px] w-[197px] h-[48px] transition-colors duration-300
                ${activeTab === tab.id
                  ? 'bg-[#050212] text-[#fff] border border-[#050212]'
                  : 'border border-[#DDDDDD] text-[#050212] hover:bg-gray-100'
                }
              `}
            >
              {tab.label}
            </button>
          ))}
        </div>
        </div>

     <div className="px-[20px] mt-[60px] flex  flex-col items-center">
          {tabs.map((tab) => (
            <div key={tab.id} className="w-full max-w-[400px] mb-8">
              <motion.div
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={tab.mobileImage}
                  alt={tab.label}
                  width={400}
                  height={300}
                  className="w-full h-auto rounded-lg"
                  style={{ objectFit: 'cover' }}
                />
              </motion.div>
            </div>
          ))}
          <button className="mt-8 bg-primary border border-[#DDDDDD] text-[#FFFFFF] font-semibold font-satoshi text-lg rounded-lg w-[300px] h-16">
            Start Creating
          </button>
        </div>
      </div>
    </section>
    </section>
  );
};

export default ExpertiseSection;