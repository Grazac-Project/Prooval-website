'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react';
import { RiVerifiedBadgeFill } from "react-icons/ri";

const Modal = ({modalClose}) => {
  const [topModalPosition, setTopModalPosition] = useState()
  
  useEffect(() => {
    const modal = document.querySelector('.modal');
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const modalHeight = 103;
    const modalTopPosition = scrollPosition + (windowHeight / 2) - (modalHeight / 2);
    setTopModalPosition(modalTopPosition)
    // modal.style.top = modalTopPosition + 'px'
  }, [])
  return (
    // <section className=' relative'>
    //     <div className='bg-[black] opacity-[60%] h-screen w-100% z-[1000]' onClick={modalClose}></div>
    //     <div className='w-[720px] lg:w-[600px] md:w-[85%] h-[436px] sm:h-[400px] mx-auto bg-[#fff] rounded-[24px] border-solid border-[1px] border-[#fff] z-[9900] absolute top-[calc(20%)] xl:top-[calc(30%)] lg:top-[calc(20%)] md:top-[calc(20%)] sm:top-[calc(15%)] left-[calc(25%)] xl:left-[calc(17%)] lg:left-[calc(14%)] md:left-[calc(14%)] sm:left-[calc(10%)]'>
    //         <Image src='/confirm.png' width={120} height={120} alt='confirm' className='mx-auto pt-[98.5px] sm:pt-[50px] pb-[10px]' />
    //         <h4 className='font-inter font-bold text-[32px] lg:text-[30px] md:text-[28px] leading-[40.83px] lg:leading-[38px] md:leading-[36px] text-[black] text-center'>Registration Confirmed</h4>
    //         <p className='font-inter font-normal text-base text-center pb-[126.5px] sm:pb-[70px] sm:px-[20px]'>Thank you for joining our waitlist, be sure to check your email for any updates.</p>
    //     <span className='text-[24px] absolute top-[20px] right-[20px] text-[#373737] z-[10001] cursor-pointer' onClick={modalClose}>&times;</span>
    //     </div>
        
        
    // </section>
    <section className='font-whyte'>
        <div className='bg-[black] opacity-[0.7] h-full w-[100%] z-[1000] fixed top-0 left-0' onClick={modalClose}></div>
        <div style={{top: topModalPosition + 'px'}} className='modal w-[588px] sm:w-[343px] ssxm:w-[90%]  md:w-[90%] h-fit py-[21px] mx-auto bg-[#fff] rounded-[16px] border-solid border-[1px] border-[#fff] z-[9900] absolute left-[calc(25%)] xl:left-[calc(17%)] lg:left-[calc(14%)] md:left-[calc(5%)] sm:left-[calc(19%)] xm:left-[calc(10%)] xxxm:left-[calc(7%)]'>
            <div className='flex justify-center items-center gap-[2px] mb-[8px]'>
              <RiVerifiedBadgeFill className='text-[#13AD61] text-[24px]'/>
              <h4 className='font-medium font-bold text-[24px] leading-[36px] text-[#1C1C1C] text-center'> We Received Your Request!</h4>
            </div>
            <p className='font-regular text-[20px] sm:text-[16px] leading-[30px] sm:leading-[19.2px] text-[#667085] text-center'>Thank you for filling out the "Hire a Talent" form on Hackthejobs! Our team will review your details and get back to you within 7-10 working days.</p>
            <span className='text-[24px] absolute top-[21px] right-[20px] text-[#373737] z-[10001] cursor-pointer' onClick={modalClose}>&times;</span>
        </div>
        
        
    </section>
  )
}

export default Modal