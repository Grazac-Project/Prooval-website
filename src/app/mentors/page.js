'use client'
import React, {useEffect, useState} from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { IoIosSearch } from "react-icons/io";
import Navbar from '@/components/navbar/nav';
import { fetchMentors } from '@/api/authentication/auth';
import Image from 'next/image';
import Footer from '@/components/footer/footer';
import { FaArrowCircleUp } from "react-icons/fa";
import Link from 'next/link';
import Modal from '@/components/modal/modal';
// import { FaCircleArrowUp } from "react-icons/fa6";

const Page = () => {
    const [listOfMentors, setListOfMentors] = useState([]);
    const [inputText, setInputText] = useState('');
    const [notFound, setNotFound] = useState(false);
    const [showMentor, setShowMentor] = useState(true);
    const [positionStyle, setPositionStyle] = useState(false)
    const [showModal, setShowModal] = useState(false);

    
    useEffect(() => {
        AOS.init({
          duration: 1000,
          offset: 200,
          easing: "ease-in-sine",
          delay: 100,
        });
      }, []);

    useEffect(() => {
    fetchMentors(inputText)
      .then((res) => {
        // console.log(res);
        const mentors = res.data.data.mentors
        if ((mentors.length === 1 || mentors.length > 4) && inputText.length > 1) {
            setPositionStyle(true)
        }
        // console.log(res.data.data.mentors[0].firstName);
        setShowMentor(true)
        setNotFound(false)
        setListOfMentors(mentors)

      })
      .catch((err) => {
        // console.log(err.response.status);
        if (err.response.status) {
            setListOfMentors(undefined)
            setShowMentor(false)
            setNotFound(true)
        }
        // err.response.status === 404 && setListOfMentors(undefined)
      })
  }, [inputText])
  const handleChange = (e) => {
    // e.preventDefault()
    const inputValue = e.target.value
    // console.log(inputValue);
    setInputText(inputValue)
  }
  return (
    <section className='font-whyte'>
        { showModal && <Modal modalClose={(() => setShowModal(false))}/>}
        <Navbar />
        <div id='hero-section' className=" text-[#fff] text-center bg-[#121927] mx-auto">
            <div className="py-[96px] xm:py-[78px]" data-aos="fade-down">
                <h1 className='font-medium w-[894px] lgx:w-[90%] sm:w-[90%] xm:w-[98%] text-[56px] sm:text-[40px] mx-auto leading-[56px] sm:leading-[48px] tracking-[-2%] text-[#fff] mb-[24px]'>World class mentorship at your finger tips</h1>
                <p className='font-regular px-[10px] w-[768px] lgx:w-[75%] md:w-[85%] sm:w-[90%] xm:w-[98%] text-[20px] sm:text-[16px] mx-auto leading-[30px] sm:leading-[24px] text-[#EAECF0] mb-[24px]'>
                    Easily connect with exceptional mentors from various backgrounds and openly discuss your career challenges with them.
                </p>
                <button className='font- w-[198px] px-[40px] py-[20px] font-medium text-[16px] leading-[24px] tracking-[3%] text-[#fff] bg-[#1453FF] rounded-[8px] '>Book a Mentor</button>
            </div>
        </div>
        <form className='font-inter py-[56px] lg:py-[32px] xm:px-[16px] sticky top-[30px] lg:top-[55px] md:top-[40.5px] z-10' >
          <div className='relative w-[800px] lgx:w-[70%] xm:w-[100%] mx-auto'>
            <IoIosSearch className='text-[20px] text-[#667085] absolute left-[16px] top-[12px] transform-translate-y-1/2'/>
            <input type='search' placeholder='Search by name, company, role' className=" font-regular flex items-center w-[100%] rounded-[8px] border-[1px] border-[#D0D5DD] pl-[44px] pr-[14px] py-[8px] text-[16px] text-[#667085] leading-[24px] shadow-footerInput" value={inputText} onChange={handleChange}/>
          </div>
        </form>
        {
            showMentor && (<div style={{justifyContent: positionStyle? 'start': 'center'}} className='flex px-[80px] lgx:px-[25px] sm:px-[16px] flex justify-center xm:justify-around lg:justify-start flex-wrap gap-[22px] pb-[0px] sm:pb-[0px]'>
            {
              listOfMentors.map((listOfMentor, i) => {
                return (
                //   <div key={listOfMentor._id} className='font-whyte w-[23%] lg:w-[29%] '>
                //   <div key={listOfMentor._id} className='font-whyte w-[23.6%] xxl:w-[23.4%] lgx:w-[30.5%] sm:w-[48%] xm:w-[343px] '>
                  <div key={listOfMentor._id} className='font-whyte w-[23%] lgx:w-[30.5%] sm:w-[48%] xm:w-[343px] '>
                    <div className='h-[296px] 1xl:h-[256px] xxl:h-[230px] lgx:h-[210px] xm:h-[296px] overflow-hidden'>

                      <Image src={listOfMentor.image} width={343} height={296} alt='mentor image' className='object-cover filter grayscale hover:filter-none'/>
                    </div>
                    <h4 className='font-medium text-[20px] leading-[30px] text-[#101828] mt-[24px] mb-[4px]'>{listOfMentor?.firstName} {listOfMentor?.lastName}</h4>
                    <h5 className='font-regular text-[18px] leading-[28px] text-[#1453FF] mb-[16px]'>{listOfMentor?.role}</h5>
                    <p className='font-regular w-[296px] 1xl:w-[250px] xl:w-[200px] text-[16px] leading-[20.8px] text-[#667085]'>{listOfMentor?.company}</p>
                  </div>
                )
              })
            }
        </div>)
        }
        {
            notFound && (
                <div className='my-auto pb-[60px]'>
                    <Image src='/mentor-not-found.png' alt='not found image' width={440} height={313} className='mx-auto '/>
                    <p className='font-regular text-[20px] text-[#787676] leading-[30px] text-center'>Search not found</p>
                </div>
            )
        }
        <Link href='#hero-section'><Image src='/back-to-top.png' width={40} height={40} alt='back to top' className='cursor-pointer fixed bottom-[35px] right-[80px] sm:right-[16px]'/></Link>
        <Footer openModal={() => setShowModal(true)}/>    
    </section>
  )
}

export default Page