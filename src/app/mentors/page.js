"use client";
import React, {
  useEffect,
  useState,
  useRef,
  useCallback,
  useMemo,
} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { IoIosSearch } from "react-icons/io";
import Navbar from "@/components/navbar/nav";
import { fetchMentors, cancel } from "@/api/authentication/auth";
import Image from "next/image";
import Footer from "@/components/footer/footer";
import { FaArrowCircleUp } from "react-icons/fa";
import Link from "next/link";
import Modal from "@/components/modal/modal";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
// import { FaCircleArrowUp } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";

const Page = () => {
  const [listOfMentors, setListOfMentors] = useState([]);
  const [inputText, setInputText] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [hasMorePages, setHasMorePages] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [showMentor, setShowMentor] = useState(true);
  const [positionStyle, setPositionStyle] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const observer = useRef();
  const router = useRouter();
  const lastMentorRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) {
        observer.current.disconnect();
      }
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMorePages) {
          setPage((prev) => prev + 1);
        }
      });
      if (node) {
        observer.current?.observe(node);
      }
    },
    [loading, hasMorePages]
  );
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 200,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  useEffect(() => {
    setListOfMentors([]);
  }, [inputText]);

  useEffect(() => {
    setLoading(true);
    setError(false);
    let isMounted = true;
    fetchMentors(inputText, page)
      .then((res) => {
        // console.log(res);
        const remainingPages = res.data.data.remainingPages;
        if (isMounted) {
          const mentors = res.data.data.mentors;
          if (
            (mentors.length === 1 || mentors.length > 4) &&
            inputText.length > 1
          ) {
            setPositionStyle(true);
          }
          // console.log(res.data.data.mentors[0].firstName);
          setShowMentor(true);
          setNotFound(false);
          // setListOfMentors(mentors)
          setListOfMentors((prevMentors) => {
            return [...prevMentors, ...mentors];
          });
        }
        // console.log(remainingPages > 0);
        setHasMorePages(remainingPages > 0);
        setLoading(false);
      })
      .catch((err) => {
        // console.log(err.response.status);
        setLoading(false);

        if (isMounted) {
          // if (axios.isCancel(err)) return
          if (err.response?.status) {
            // console.log(err);
            setListOfMentors(undefined);
            setShowMentor(false);
            setNotFound(true);
          }
        }
        // err.response.status === 404 && setListOfMentors(undefined)
      });
    return () => {
      isMounted = false; // Cleanup: Set isMounted to false when component unmounts
      cancel();
    };
  }, [inputText, page]);

  const handleChange = (e) => {
    const inputValue = e.target.value;
    // console.log(inputValue);
    setInputText(inputValue);
    setPage(1);
  };
  const handleMentorClick = (mentorSlug) => {
    Cookies.set("mentorSlug", mentorSlug, { expires: 7 });
    router.push(`/mentors/${mentorSlug}`);
  };
  return (
    <section className="font-onest ">
      {showModal && <Modal modalClose={() => setShowModal(false)} />}
      <Navbar />
      <div
        id="hero-section"
        className=" text-[#fff] text-center bg-[#121927] mx-auto"
      >
        <div className="py-[96px] xm:py-[78px]" data-aos="fade-down">
          <h1 className="font-medium w-[894px] lgx:w-[90%] sm:w-[90%] xm:w-[98%] text-[56px] sm:text-[40px] mx-auto leading-[56px] sm:leading-[48px] tracking-[-2%] text-[#fff] mb-[24px]">
            World class mentorship at your finger tips
          </h1>
          <p className="font-normal px-[10px] w-[768px] lgx:w-[75%] md:w-[85%] sm:w-[90%] xm:w-[98%] text-[20px] sm:text-[16px] mx-auto leading-[30px] sm:leading-[24px] text-[#EAECF0] mb-[24px]">
            Easily connect with exceptional mentors from various backgrounds and
            openly discuss your career challenges with them.
          </p>
          {/* <button className="font- w-[198px] px-[40px] py-[20px] font-medium text-[16px] leading-[24px] tracking-[3%] text-[#fff] bg-[#1453FF] rounded-[8px] ">
            Book a Mentor
          </button> */}
        </div>
      </div>
      <form className="font-inter py-[32px] xm:px-[16px] sticky top-[80px] lg:top-[75px] md:top-[50.5px] z-5 bg-[#fff]">
        <div className="relative w-[800px] lgx:w-[70%] xm:w-[100%] mx-auto">
          <IoIosSearch className="text-[20px] text-[#667085] absolute left-[16px] top-[12px] transform-translate-y-1/2" />
          <input
            type="search"
            placeholder="Search by name, company, role"
            className=" font-normal flex items-center w-[100%] rounded-[8px] border-[1px] border-[#D0D5DD] pl-[44px] pr-[14px] py-[8px] text-[16px] text-[#667085] leading-[24px] shadow-footerInput"
            value={inputText}
            onChange={handleChange}
          />
        </div>
      </form>
      <div className="bg-[#FAFCFF] py-20">
        {showMentor && (
          <div
            style={{ justifyContent: positionStyle ? "start" : "start" }}
            className="flex xm:justify-around lg:justify-start flex-wrap lg:gap-[12px] gap-[32px] pb-[0px] sm:pb-[0px] w-[1280px]  1xl:w-[90%]  m-auto "
          >
            {listOfMentors?.map((listOfMentor, i) => {
              // console.log(listOfMentor)
              if (listOfMentors.length === i + 1) {
                return (
                  <div
                    key={i}
                    ref={lastMentorRef}
                    className="font-onest w-[23%] lgx:w-[30.5%] xm:w-[100%] sm:w-[48%] p-2 border border-[#EAEAEA] rounded-lg cursor-pointer group hover:border-b-[3px] hover:border-b-[#1453FF] transition-all duration-300"
                    onClick={() => handleMentorClick(listOfMentor.slug)}
                  >
                    <div className="relative h-[296px] 1xl:h-[256px] xxl:h-[230px] lgx:h-[210px] xm:h-[296px] overflow-hidden">
                      <Image
                        src={listOfMentor.image}
                        width={343}
                        height={296}
                        alt="mentor image"
                        className="w-full h-full object-cover filter grayscale group-hover:filter-none transition-all duration-300"
                      />
                      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[rgba(0,0,0,0.7)] via-[rgba(0,0,0,0.3)] to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end px-4 pb-3">
                        <span className="text-[white] text-[14px] leading-[24px] font-medium flex items-center gap-[10px] mx-auto text-center">
                          View Profile
                          <FaArrowRightLong className="w-4 h-4 xm:hidden "/>
                        </span>
                      </div>
                    </div>
                    <h4 className="font-medium text-[20px] leading-[30px] text-[#101828] mt-[24px] mb-[4px]">
                      {listOfMentor?.firstName} {listOfMentor?.lastName}
                    </h4>
                    <h5 className="font-normal text-[18px] leading-[28px] text-[#1453FF] mb-[16px] truncate overflow-hidden whitespace-nowrap">
                      {listOfMentor?.role}
                    </h5>
                    <p className="font-normal w-[296px] 1xl:w-[250px] xl:w-[200px] text-[16px] leading-[20.8px] text-[#667085] truncate overflow-hidden whitespace-nowrap">
                      {listOfMentor?.company}
                    </p>
                  </div>
                );
              } else {
                return (
                  <div
                    key={listOfMentor._id}
                    className="ffont-onest w-[23%] lgx:w-[30.5%] sm:w-[48%] xm:w-[100%] p-2 border border-[#EAEAEA] rounded-lg cursor-pointer group xm:border-b-[3px] xm:border-b-[#1453FF] hover:border-b-[3px] hover:border-b-[#1453FF] transition-all duration-300"
                    onClick={() => handleMentorClick(listOfMentor.slug)}
                  >
                    <div className="relative h-[296px] 1xl:h-[256px] xxl:h-[230px] lgx:h-[210px] xm:h-[296px] overflow-hidden">
                      <Image
                        src={listOfMentor.image}
                        width={343}
                        height={296}
                        alt="mentor image"
                        className="w-full h-full object-cover filter grayscale group-hover:filter-none transition-all duration-300"
                      />
                      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[rgba(0,0,0,0.7)] via-[rgba(0,0,0,0.3)] to-transparent xm:opacity-100 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end px-4 pb-3">
                        <span className="text-[white] text-[14px] leading-[24px] font-medium flex justify-center items-center gap-[10px] mx-auto text-center">
                          View Profile
                          <FaArrowRightLong className="w-4 h-4 xm:hidden"/>
                        </span>
                      </div>
                    </div>

                    <h4 className="font-medium text-[20px] leading-[30px] text-[#101828] mt-[24px] mb-[4px]">
                      {listOfMentor?.firstName} {listOfMentor?.lastName}
                    </h4>
                    <h5 className="font-normal text-[18px] leading-[28px] text-[#1453FF] mb-[16px] truncate overflow-hidden whitespace-nowrap">
                      {listOfMentor?.role}
                    </h5>
                    <p className="font-normal w-[296px] 1xl:w-[250px] xl:w-[200px] text-[16px] leading-[20.8px] text-[#667085] truncate overflow-hidden whitespace-nowrap">
                      {listOfMentor?.company}
                    </p>
                  </div>
                );
              }
            })}
          </div>
        )}
        {notFound && (
          <div className="my-auto pb-[60px]">
            <Image
              src="/mentor-not-found.png"
              alt="not found image"
              width={440}
              height={313}
              className="mx-auto "
            />
            <p className="font-normal text-[20px] text-[#787676] leading-[30px] text-center">
              Search not found
            </p>
          </div>
        )}
        {loading && (
          <Image
            src="/spinner.gif"
            width={64}
            height={64}
            alt="loader"
            className="py-[5px] mx-auto"
          />
        )}
        <Link href="#hero-section">
          <Image
            src="/back-to-top.png"
            width={40}
            height={40}
            alt="back to top"
            className="cursor-pointer fixed bottom-[35px] right-[80px] sm:right-[16px]"
          />
        </Link>
        <Footer openModal={() => setShowModal(true)} />
      </div>
    </section>
  );
};

export default Page;
