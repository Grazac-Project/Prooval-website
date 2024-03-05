// import Footer from '@/components/footer/footer'
// import Navbar from '@/components/navbar/nav'
// import Image from 'next/image'
// import Link from 'next/link'

// export default function Home() {
//   return (
//     <main className="">

//       <Navbar/>
//       <section className='relative bg-[#091A29] flex justify-between sm:justify-center sm:flex-wrap pl-[120px] xl:pl-[80px] lg:pl-[50px] md:pl-[25px] sm:pl-[16px] sm:pr-[16px] pb-[120px] sm:pb-[31px] sm:block sm:text-center pt-[100px]'>
//         <div className=''>
//           <h1 className='font-grotesk w-[652px] xl:w-[458px] sm:w-[80%] xm:w-[90%] sm:m-auto sm:mb-[24px] text-[48px] xl:text-[40px] lg:text-[36px] xm:text-[30px] text-[#fff] pt-[137.5px] xl:pt-[47.5px] lg:pt-[27px] pb-6 xl:p-2 leading-[61.25px] md:leading-[40.83px] sm:text-center'>
//           Gain Real-Life Experience working on Exciting Projects as a Newbie!
//           </h1>
//           <p className='font-mont w-[558px] xl:w-[408px] sm:w-[80%] xm:w-[90%] sm:m-auto sm:mb-[24px] text-[20px] lg:text-[18px] font-normal leading-[30px] md:leading-[24px] text-[#fff] opacity-80 mb-20 xl:mb-[24px] mt-6 xl:mt-2 sm:text-center'>
//             With HacktheJobs, you can now walk to a potential employer with 100% confidence
//           </p>
//           <Link href='/waitList'>
//             <button className='bg-[#005F70] hover:bg-[#fff] font-mont text-[18px] leading-[21.94px] font-medium text-[#fff] hover:text-[#005F70] p-[10px] w-[277px] h-[56px] rounded-lg lg:mb-[20px]'>Join waitlist</button>
//           </Link>
//         </div>
//         <div className=''>
//           <Image src='/landinghero.png' width={685} height={834} alt='a guy reading'/>
//         </div>
//           <Image src='/floatmobi.png' width={343} height={394} alt='floating image' className='hidden sm:block sm:pt-[43px] mx-auto'/>
//           <div className='block sm:hidden w-[80%] absolute top-[calc(85%)] left-[calc(8%)]'>
//             <Image src='/float.png' width={1200} height={237} alt='floating image' className=''/>
//           </div>
//       </section>
//       <section className='bg-white gap-[20px] flex justify-between sm:justify-center sm:flex-wrap  px-[120px] xl:px-[80px] lg:px-[50px] pt-[150px] sm:pt-[24px] pb-[52px]  items-center '>
//         <div className='sm:pb-[24px]'>
//           <Image src='/man.png' width={449.69} height={462.5} alt='man holding fone' />
//         </div>
//         <div >
//           <h2 className='font-grotesk font-normal text-[18px] leading-[27px] text-[#33333399] opacity-80 sm:text-center'>
//             WHO ARE WE?
//           </h2>
//           <h3 className='font-grotesk font-medium text-[48px] xl:text-[38px] lg:text-[32px] leading-[72px] lg:leading-[48px] text-[#333333] pt-4 sm:text-center'>
//             What to Know <span className='text-[#005F70]'>About Us</span>
//           </h3>
//           <div className='xm:hidden py-8 lg:py-5 px-4 rounded-[8px] shadow-abc mb-6 mt-7 w-[697.07px] xl:w-[497px] lg:w-[400px]'>
//               <h3 className='font-grotesk font-medium text-[24px] leading-9 text-[#333333]'>
//                 Our Vision
//               </h3>
//               <p className='w-[665.07px] xl:w-[100%] font-mont font-normal text-[16px] text-[#333] leading-6'>
//                 Our vision is to bridge the gap between tech novices and experts by connecting aspiring individuals with valuable internship opportunities. We strive to empower newcomers in the tech industry, fostering growth, learning, and real-world experi...
//               </p>
//           </div>
//           <div className='hidden xm:block py-8 lg:py-5 px-4 rounded-[8px] shadow-abc mb-6 mt-7 w-[305px]'>
//               <h3 className='font-grotesk font-medium text-[24px] leading-9 text-[#333333]'>
//                 Our Vision
//               </h3>
//               <p className='w-[100%] font-mont font-normal text-[16px] text-[#333] leading-6'>
//                 Our vision is to bridge the gap between tech novices and experts by connecting aspiring individuals with...
//               </p>
//           </div>
//           <div className='xm:hidden py-8 lg:py-5 px-4 rounded-[8px] shadow-abc mb-7 w-[697.07px] xl:w-[497px] lg:w-[400px]'>
//             <h3 className='font-grotesk font-medium text-[24px] leading-9 text-[#333333]'>
//               Our Mission
//             </h3>
//             <p className='w-[665.07px] xl:w-[100%] font-mont font-normal text-[16px] text-[#333] leading-6'>
//               Our mission is to create a thriving tech community where every enthusiast has access to mentorship, internship opportunities, and hands-on learning experiences. We aim to be the premier destination for tech newcomers, guiding...
//             </p>
//           </div>
//           <div className='hidden xm:block py-8 lg:py-5 px-4 rounded-[8px] shadow-abc mb-7 w-[305px]'>
//             <h3 className='font-grotesk font-medium text-[24px] leading-9 text-[#333333]'>
//               Our Mission
//             </h3>
//             <p className='w-[665.07px] xl:w-[100%] font-mont font-normal text-[16px] text-[#333] leading-6'>
//               Our mission is to create a thriving tech community where every enthusiast has access to mentorship, internship...
//             </p>
//           </div>
//           <Link href='/aboutUs'>
//             <button className='bg-[#005F70] text-[18px] text-[#fff] font-mont leading-[21.94px] rounded-[8px] w-[277px] sm:w-[100%] h-[56px]'>
//               Learn more
//             </button>
//           </Link>
//         </div>
//       </section>
//       <section className='flex xm:block items-end justify-between sm:justify-center sm:flex-wrap  bg-[#F9F9F9] text-[#333333] pl-[120px] xl:pl-[80px] lg:pl-[50px] md:pl-[25px] pr-[60px] xl:pr-[30px] lg:pr-0'>
//         <div className='mb-[67px] md:mb-[10px]'>
//           <h3 className='font-grotesk font-normal text-[18px] leading-[27px] opacity-60 mb-4 mt-[78px] xm:mt-[0] xm:pt-4 xm:text-center'>GET STARTED</h3>
//           <h4 className='font-grotesk font-medium text-[48px] xl:text-[40px] lg:text-[36px] xm:text-[32px] leading-[72px] xl:leading-[60px] lg:leading-[55px] xm:leading-[48px] mb-6 w-[526px] xl:w-[460px] lg:w-[400px] xm:w-[100%] xm:text-center'>Join us in 3 easy steps</h4>
//           <div className='flex gap-6'>
//             <div className='w-[41px] flex items-center justify-center flex-col'>
//               <p className='font-grotesk font-medium text-[32px] leading-[48px] text-[#005F70] w-10'>01</p>
//               <Image src={'/line.png'} width={23} height={151} alt='line' />
//             </div>
//             <div className='w-[323px] md:w-[300px]'>
//               <h4 className='font-grotesk font-bold text-[24px] md:text-[20px] leading-9 md:leading-[30px]'>Assessment & Interview</h4>
//               <p className='font-mont font-normal text-[16px] leading-6'>
//                 Join the waitlist, take the skills assessment, and if you pass, you could be selected to join the program after an interview.
//               </p>
//             </div>
//           </div>
//           <div className='flex gap-6'>
//             <div className='w-[41px] flex items-center justify-center flex-col'>
//               <p className='font-grotesk font-medium text-[32px] leading-[48px] text-[#005F70] w-10'>02</p>
//               <Image src={'/line.png'} width={23} height={151} alt='line' />
//             </div>
//             <div className='w-[323px] md:w-[300px]'>
//               <h4 className='font-grotesk font-bold text-[24px] md:text-[20px] leading-9 md:leading-[30px] w-[339px] sm:w-[100%]'>Team matching & Assignment</h4>
//               <p className='font-mont font-normal text-[16px] leading-6'>
//                 Upon joining, you'll be assigned to a team that suits your skills and aspirations. You'll then receive project-based tasks under the guidance of an experienced Product manager.
//               </p>
//             </div>
//           </div>
//           <div className='flex gap-6'>
//               <p className='font-grotesk font-medium text-[32px] leading-[48px] text-[#005F70] w-10'>03</p>
//             <div className='w-[323px] md:w-[300px]'>
//               <h4 className='font-grotesk font-bold text-[24px] md:text-[20px] text-[#333] leading-9 md:leading-[30px]'>Portfolio Building</h4>
//               <p className='font-mont font-normal text-[16px] leading-6'>Display your finished projects in your portfolio to showcase real-world results, facilitating connections with potential employers interested in your skills.
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className=''>
//           <Image src='/phone.png' width={979.76} height={725.96} alt='iPhone' className='block lg:hidden'/>
//           <Image src='/iPhonesmall.png' width={339} height={387} priority alt='iPhone on mobile screen' className='hidden lg:block sm:mt-5 pb-[50px]'/>
//         </div>
//       </section>
//       <Footer />
//     </main>
//   )
// }


// "use client";

// import React, { useState } from "react";
// import Classes from "../app/waitList/wait.module.css";
// import Image from "next/image";
// import { useFormik } from "formik";
// import * as yup from "yup";
// import Navbar from "@/components/navbar/nav";
// import axios from "axios";
// import Footer from "@/components/footer/footer";
// import Modal from "@/components/modal/modal";
// import { useRouter } from "next/navigation";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const initialValues = {
//   email: "",
//   firstName: "",
// };

// const WaitList = () => {
//   const router = useRouter();
//   const [showModal, setShowModal] = useState(false);
//   const schema = yup.object({
//     email: yup
//       .string()
//       .email("Please enter a valid email")
//       .required("Email is required"),
//     firstName: yup.string().required("firstName is required"),
//   });
//   const { values, handleSubmit, handleChange, handleBlur, errors, touched } =
//     useFormik({
//       initialValues,
//       validationSchema: schema,
//       onSubmit: async (values, actions) => {
//         await axios
//           .post(
//             "https://hackthejobs-staging-staging.up.railway.app/api/v1/user/create",
//             values
//           )
//           .then((res) => {
//             console.log(res);
//             setShowModal(true);
//             actions.resetForm();
//           })
//           .catch((error) => {
//             console.log(error);
//             toast.warn(error.response.data.message);
//           });
//       },
//     });
//   const closeModal = () => {
//     setShowModal(false);
//     router.push("/");
//   };
  
//   var settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true, 
//     autoplaySpeed: 1500, 
//     responsive: [
//       {
//         breakpoint: 1024, // for screens larger than 1024px wide
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 768, // for screens between 768px and 1024px wide
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 480, // for screens less than 768px wide
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
  
//   };
//   return (
//     <>
//       <ToastContainer  Button={false} />
//       <Navbar />
//       {showModal ? (
//         <Modal modalClose={closeModal} />
//       ) : (
//         <>
//           <div className={Classes.hero}>
//             <div className={Classes.heroText}>
//               <h3>
//                 Get merged with an <span>expert</span> and gain{" "}
//                 <span>real-life</span> experience{" "}
//               </h3>
//               <p>
//                 As a newbie in tech, you now have access to a team and a senior
//                 product manager to get started on building your confidence and
//                 potfolio, taking you closer to the job market
//               </p>
//               <form onSubmit={handleSubmit}>
//                 <div className={Classes.formFlex}>
//                   <div className={Classes.form}>
//                     <input
//                       type="text"
//                       placeholder="Enter firstname"
//                       name="firstName"
//                       value={values.firstName}
//                       onChange={handleChange}
//                     />
//                     <div className={Classes.errorMsg}>
//                       {errors.firstName && touched.firstName && (
//                         <p>{errors.firstName}</p>
//                       )}
//                     </div>
//                   </div>
//                   <div className={Classes.form2}>
//                     <input
//                       type="email"
//                       placeholder="Enter Email Address"
//                       name="email"
//                       value={values.email}
//                       onChange={handleChange}
//                     />
//                     <div className={Classes.errorMsg}>
//                       {" "}
//                       {errors.email && touched.email && <p>{errors.email}</p>}
//                     </div>
//                   </div>
//                 </div>

//                 <button type="submit" className={Classes.button}>
//                   Join the Waitlist
//                 </button>
//               </form>
//             </div>
//             <div className={Classes.heroImage}>
//               <Image src="/heroImg.png" width="548" height="554" alt="img" />
//             </div>
//           </div>
//           <section className={Classes.talents}>
//             <h4>Hear from our Past talents</h4>
//             <div className={Classes.slider}>
//               <Slider {...settings}>
//                 <div className={`${Classes.card} ${Classes.cardSpacing}`}>
//                   <Image
//                     src="/talent1.png"
//                     width="362"
//                     height="192"
//                     alt="img"
//                   />
//                   <h5>Joy Omowaye</h5>
//                   <span>Front-End Developer</span>
//                   <p>
//                     As a newbie in tech, you now have access to a team and a
//                     senior product manager to get started on
//                   </p>
//                 </div>
//                 <div className={Classes.card}>
//                   <Image
//                     src="/talent2.png"
//                     width="362"
//                     height="192"
//                     alt="img"
//                   />
//                   <h5>Joy Omowaye</h5>
//                   <span>UI/UX Designer</span>
//                   <p>
//                     As a newbie in tech, you now have access to a team and a
//                     senior product manager to get started on
//                   </p>
//                 </div>
//                 <div className={Classes.card}>
//                   <Image
//                     src="/talent3.png"
//                     width="362"
//                     height="192"
//                     alt="img"
//                   />
//                   <h5>Joy Omowaye</h5>
//                   <span>Back-End Developer</span>
//                   <p>
//                     As a newbie in tech, you now have access to a team and a
//                     senior product manager to get started on
//                   </p>
//                 </div>
//                 <div className={Classes.card}>
//                   <Image
//                     src="/talent3.png"
//                     width="362"
//                     height="192"
//                     alt="img"
//                   />
//                   <h5>Joy Omowaye</h5>
//                   <span>Back-End Developer</span>
//                   <p>
//                     As a newbie in tech, you now have access to a team and a
//                     senior product manager to get started on
//                   </p>
//                 </div>
//                 <div className={Classes.card}>
//                   <Image
//                     src="/talent1.png"
//                     width="362"
//                     height="192"
//                     alt="img"
//                   />
//                   <h5>Joy Omowaye</h5>
//                   <span>Front-End Developer</span>
//                   <p>
//                     As a newbie in tech, you now have access to a team and a
//                     senior product manager to get started on
//                   </p>
//                 </div>
//               </Slider>
//             </div>
//           </section>
//           <Footer />
//         </>
//       )}
//     </>
//   );
// };
// export default WaitList;


'use client'
import Image from 'next/image'
import React, {useState, useRef, useEffect} from 'react'
import ValueCard from '@/components/valueCard/valueCard'
import { MdVerified } from "react-icons/md";
import { cardValues, imageCards, testimonials } from '@/constants/constant';
import Slider from "react-slick";
import Footer from '@/components/footer/footer';
import Navbar from '@/components/navbar/nav';

const Landing = () => {
  const [angle, setAngle] = useState('2.93deg');
  const [color, setColor] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [load, setLoad] = useState(false)

  let sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: false,
    dotsClass: 'slick-dots custom-dots',
    beforeChange: (current, next) => setCurrentSlide(next),
    
    afterChange: (index) => setCurrentSlide(index),
  };
  const logoSettings = {
    dots: false,
    infinite: true,
    speed: 900,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: false,
    dotsClass: 'slick-dots custom-dots',
    beforeChange: (current, next) => setCurrentSlide(next),
    
    afterChange: (index) => setCurrentSlide(index),
  };
  const mentorSettings = {
    dots: false,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: false,
    centerMode: true,
    dotsClass: 'slick-dots custom-dots',
    beforeChange: (current, next) => setCurrentSlide(next),
    
    afterChange: (index) => setCurrentSlide(index),
  };

  const goToSlide = (index, i) => {
    sliderRef.slickGoTo(i);
    setCurrentSlide(i);
  };

  // useEffect(() => {
  //   setLoad(true)
  // }, [])
  useEffect(() => {
    const interval = setInterval(() => {
      setAngle((prevAngle) => prevAngle === '-2.93deg' ? '2.93deg' : '-2.93deg'); 
      setColor((prevColor) => !prevColor);
    }, 1000);

    return () => clearInterval(interval);
  }, []);


  return (
    <div>
      <Navbar />
      <section className='font-whyte px-[640px] 2xl:px-[80px] xl:px-[25px] sm:px-[25px] xm:px-[16px] relative'>
        <div className='  py-[48px]  flex sm:flex-col gap-[58px] xl:gap-[25px] items-center bg-[#F9FBFF]'>
          <div className=''>
            <div className='flex gap-2 w-[256px] md:w-[200px] sm:w-[256px] py-2 px-3 rounded-[32px] justify-center items-center border-[0.6px] border-[#989898] mb-[32px]'>
              <MdVerified className='text-[#FFD700] w-[15.28px] h-[15.99px]'/>
              <h3 className='font-regular text-[14px] md:text-[10px] sm:text-[14px] text-[#121927] leading-[15.4px] tracking-[4%] '>
                Empowered over 14k students 
              </h3>
            </div>
            <h1 className='font-bold w-[621px] xxl:w-[550px] xl:w-[500px] lg:w-[400px] md:w-[300px] sm:w-[100%] text-[64px] xxl:text-[50px] xl:text-[45px] lg:text-[35px] md:text-[25px] sm:text-[52px] xm:text-[45px] xxm:text-[40px] leading-[83.2px] xxl:leading-[75px] md:leading-[44px] sm:leading-[54px]  text-[#121927] '>
              Become workplace ready and <span className={`text-[#000] text-[54px] xxl:text-[50px] xl:text-[45px] lg:text-[40px] md:text-[25px] sm:text-[30px] leading-[59.4px] lg:leading-[50px] sm:leading-[33px] w-[279px] xl:w-fit bg-[${color ? 'red': '#1453ff'}] rounded-[48px] px-5 py-3 border-[#B3C7FF] border-[1px] inline-block transform rotate-[${angle}]`}>prepared</span>
            </h1>
            <p className='font-regular text-[18px] lg:text-[16px] leading-6 text-[#727272] w-[555px] xl:w-[500px] lg:w-[400px] md:w-[300px] sm:w-[100%] pt-8 sm:pt-4 pb-8'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis  
            </p>
            <button className='w-[173px] lg:w-[150px] md:w-[130px] sm:w-[120px] xm:w-[140px] sxm:w-[130px]  font-medium leading-6 tracking-[3%] text-4 text-[#fff] bg-primary rounded-[8px] px-10 lg:px-4 md:px-3 py-4 mr-[16px] lg:mr-[12px] sm:mr-[5px]'>Get started</button>
            <button className='w-[213px] lg:w-[170px] md:w-[150px] sm:w-[150px] xm:w-[160px] sxm:w-[150px] font-medium leading-6 tracking-[3%] text-4 text-primary bg-[#fff] rounded-[8px] px-10 lg:px-4 md:px-2 py-4 border-[1px] border-[#DADADA]'>Make a donation</button>
          </div>
          <div className='w-[598px] sm:w-[100%] pl-[40px] xxl:pl-[30px] pr-[37px] xxl:pr-[30px]'>
            <Image src='/hero-pic.png' alt='group of pictures' width={524} height={673} className='object-cover' />
          </div>
          
        </div>
        <div className={` absolute z-[100] w-[205px] lgx:w-[189px] xm:w-[117.32px] px-[18px] lgx:px-[10px] py-[16px] lgx:py-2 rounded-[4px] border-[0.6px] bg-[#fff] border-[#E4E7EC] shadow-def transition-all duration-1000 ease-in-out ${load? 'top-[90px] right-[650px]': 'top-[81px] xxl:top-[70px] sm:top-[510px] sxm:top-[630px] right-[1183px] 2xl:right-[623px] xxl:right-[520px] xl:right-[600px] lgx:right-[420px] lg:right-[400px] md:right-[300px] sm:right-[410px] xm:right-[290px] xxm:right-[230px] sxm:right-[200px]'}`}>
            <p className='font-regular text-[12px] text-[#414449] xm:text-[6.87px] leading-[13px] xm:leading-[7.44px] w-[169px] xm:w-[96.72px] mx-auto text-center text-[#121927]'>More than +12,000 Satisfied students across the globe</p>
          </div>
          <div className={` absolute bg-[#fff] w-[139.5px] lgx:w-[123.5px] xm:w-[79.83px] rounded-[4px] px-[18px] lgx:px-[10px] py-[10px] lgx:py-[6px] shadow-ghi border-[#E4E7EC] border-[0.9px] flex justify-between sm:items-center transition-all duration-1000 ease-in-out ${load? 'top-[90px] right-[650px]': 'top-[149px] lgx:top-[120px] sm:top-[530px] sxm:top-[625px] right-[622.5px] 2xl:right-[22.5px] lgx:right-[0px] sm:right-[30px] xm:right-[10px]  '}`}>
            <Image src='/courses.png' width={33} height={33} alt='course' className='object-contain' />
            <p className='font-regular text-[14px] xm:text-[8px] text-[#414449] leading-[24px] lgx:leading-4 xm:leading-[11.54px] w-[54px] xm:w-[30.9px]'>+1000 <span className='text-[#8B8B8B]'>Courses</span></p>
          </div>
          <div className={` absolute bg-[#fff] flex justify-between sm:items-center rounded-[4px] w-[146px] lgx:w-[126px] xm:w-[83.55px] border-[0.99px] border-[#E4E7EC] px-[20px] lgx:px-[10px] py-[10px] lgx:py-[6px] shadow-def transition-all duration-1000 ease-in-out ${load? 'top-[90px] right-[650px]': 'bottom-[182px] xxl:bottom-[140px] lgx:bottom-[110px] md:bottom-[130px] sm:bottom-[280px] xm:bottom-[180px] sxm:bottom-[120px] right-[1173px] 2xl:right-[613px] xxl:right-[520px] xl:right-[600px] lgx:right-[420px] lg:right-[390px] md:right-[320px] sm:right-[470px] xm:right-[320px] xxm:right-[280px] sxm:right-[220px]'}`}>
            <Image src='/mentors.png' width={33} height={33} alt='mentors' className='object-contain'/>
            <p className='font-regular w-[58px] xm:w-[33.19px] text-[14px] xm:text-[8px] text-[#414449] leading-[20.85px] lgx:leading-4 xm:leading-[11.93px]'>+2000 <span className='text-[#8B8B8B]'>Mentors</span></p>
          </div>
          <div className={` absolute bg-[#fff] w-[161px] lgx:w-[141px] xm:w-[99.29px] flex sm:items-center justify-between rounded-[4px] border-[0.9px] border-[#E4E7EC] pl-[20px] lgx:pl-[10px] py-[12px] lgx:py-2 shadow-ghi transition-all duration-1000 ease-in-out ${load? 'top-[90px] right-[650px]': 'bottom-[134px] sm:bottom-[140px] xm:bottom-[100px] right-[640px] 2xl:right-[0px] sm:right-[40px] xm:right-[10px]'}`}>
            <Image src='/live.png' width={33} height={33} alt='live' className='object-contain'/>
            <p className='w-[84px] xm:w-[48.07px] font-regular text-[14px] xm:text-[8.01px] text-[#414449] leading-[18.96px] lgx:leading-4 xm:leading-[10.85px]'>+154<br/> <span className='text-[#8B8B8B]'>Live projects</span></p>
          </div>
          <Image src='/tiny-star.png' width={25} height={24} alt='tiny star' className='absolute top-[112.38px] xxl:top-[110px] lgx:top-[60px] lg:top-[40px] sm:top-[20px] left-[700.88px] 2xl:left-[110.88px] xxl:left-[70px] sm:left-[37px]'/>
      </section>
      <section className='h-[64px] bg-[#fff]'>

      </section>
      <section className='font-whyte px-[680px] 2xl:px-[80px] xl:px-[25px] xm:px-[16px] py-[48px] bg-[#F9F9F9]'>
        <h2 className='font-medium text-[24px] leading-[38px] text-[#121927] text-center mb-[32px]'>
          As featured in
        </h2>
        <div className='sm:hidden flex justify-between '>
          <div className='px-0 py-[2px] flex gap-[2px] items-center font-semibold text-[#475467]'>
            <Image src='/layers.svg' alt='group of pictures' width={40} height={40}  />
            <p>Layers</p>
          </div>
          <div className='px-0 py-[2px] flex gap-[2px] items-center font-semibold text-[#475467]'>
            <Image src='/sisyphus.png' alt='group of pictures' width={27} height={44}  />
            <p>Sisyphus</p>
          </div>
          <div className='px-0 py-[2px] flex gap-[2px] items-center font-semibold text-[#475467]'>
            <Image src='/circooles.png' alt='group of pictures' width={41} height={40}  />
            <p>Circooles</p>
          </div>
          <div className='px-0 py-[2px] flex gap-[2px] items-center font-semibold text-[#475467]'>
            <Image src='/catalog.png' alt='group of pictures' width={40} height={40}  />
            <p>Catalog</p>
          </div>
          <div className='px-0 py-[2px] flex gap-[2px] items-center font-semibold text-[#475467]'>
            <Image src='/quotient.png' alt='group of pictures' width={41} height={40}  />
            <p>Quotient</p>
          </div>
        </div>
        <div className='sm:block 3xl:hidden sm:pb-[40px] sm:w-[400px] xm:w-[100%] mx-auto px-[80px] lgx:px-[25px] sm:px-[16px]'>
          <Slider ref={slider => {sliderRef = slider}} {...logoSettings} className=''>
            <div className='px-0 py-[2px] flex gap-[2px] items-center font-semibold text-[#475467]'>
              <Image src='/layers.svg' alt='group of pictures' width={40} height={40}  />
              <p>Layers</p>
            </div>
            <div className='px-0 py-[2px] flex gap-[2px] items-center font-semibold text-[#475467]'>
              <Image src='/sisyphus.png' alt='group of pictures' width={27} height={44}  />
              <p>Sisyphus</p>
            </div>
            <div className='px-0 py-[2px] flex gap-[2px] items-center font-semibold text-[#475467]'>
              <Image src='/circooles.png' alt='group of pictures' width={41} height={40}  />
              <p>Circooles</p>
            </div>
            <div className='px-0 py-[2px] flex gap-[2px] items-center font-semibold text-[#475467]'>
              <Image src='/catalog.png' alt='group of pictures' width={40} height={40}  />
              <p>Catalog</p>
            </div>
            <div className='px-0 py-[2px] flex gap-[2px] items-center font-semibold text-[#475467]'>
              <Image src='/quotient.png' alt='group of pictures' width={41} height={40}  />
              <p>Quotient</p>
            </div> 
          </Slider>
        </div>     
      </section>
      <section className='h-[64px] bg-[#fff]'></section>
      <section className='px-[592.50px] 2xl:px-[80px] xl:px-[25px] xm:px-4 py-[137.5px] sm:py-[62px] font-whyte bg-[#121927] relative'>
        <h2 className='font-medium text-[48px] lg:text-[32px] leading-[52.8px] lg:leading-[41.6px] text-[#FFFFFF] text-center w-[865px] lg:w-[95%] mx-auto pb-3'>
          Communicate value that users will get
        </h2>
        <h3 className='font-regular text-[18px] text-[#FCFCFC] lg:text-[16px] leading-6 lg:leading-[20.8px] text-center text-[#333] w-[690px] md:w-[100%] mx-auto pb-[42px]'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.
        </h3>

        <ValueCard /> 
        <Image src='/big-star1.png' width={127} height={128} alt='star' className='absolute top-[0] right-[664.5px] 2xl:right-[154px] lgx:hidden 3xl:block'/>
        <Image src='/mobile-bigstar.png' width={74} height={65} alt='star' className='absolute top-[0] right-[16px] lgx:block 3xl:hidden'/>
      </section>
      <section className='font-whyte flex sm:flex-wrap sm:justify-around gap-[24px] px-[624.5px] 2xl:px-[112px] xxl:px-[80px] xl:px-[25px] xm:px-[16px] py-[64px] sm:py-[52px]'>
        <div className='w-[342px] xxl:w-[300px] md:w-[250px] sm:w-[100%] bg-[#1453FF] rounded-[16px] pt-[47px] pl-[30px] xxl:pl-[14px] pr-[14px] pb-[72px] xxl:pb-[22px] relative'>
          <h4 className='w-[242px] md:w-[220px] sm:w-[70%] font-medium text-[48px] md:text-[40px] sm:text-[48px] leading-[52.8px] text-[#FBFCFD] pb-[17px]'>
            Easy process to onboard you
          </h4>
          <p className='w-[298px] xxl:w-[262px] md:w-[220px] sm:w-[100%] font-regular text-[16px] leading-[22px] text-[#EDEDED]'>
            Lorem ipsum dolor sit amet, cons adipi ing elit. Suspendisse varius enim in eros elementum tristique. 
          </p>
          <Image src='/easy-arrow.png' width={123} height={117} alt='arrow' className='absolute top-[9.32px] right-[14.18px] object-cover'/>
        </div>
        <div className='flex flex-wrap sm:justify-around gap-[16px]'>
          {
            cardValues.map((cardValue, i) => {
              return (
                <div className='font-whyte w-[417px] xxl:w-[350px] lgx:w-[300px] lg:w-[250px] md:w-[200px] sm:w-[100%] border-[1px] border-[#EAEAEA] rounded-[8px] px-5 py-5' key={i}>
                  <h4 className='w-[44px] h-[44px] rounded-[50%] flex items-center justify-center text-[18px] leading-[20.31px] font-medium text-[#fff] bg-[#1453FF]'>
                    {cardValue.number}
                  </h4>
                  <h5 className='pt-[40px] pb-[14px] font-medium text-[20px] leading-[30px] text-[#121927]'>
                    {cardValue.heading}
                  </h5>
                  <p className='font-regular text-[14px] leading-[20px] text-[#4F4F4F]'>
                    {cardValue.text}  
                  </p>
                </div>
              )
            })
          }
        </div>
      </section>
      <section className='font-whyte flex justify-between sm:flex-col px-[592.5px] 2xl:px-[80px] lgx:px-[25px] xm:px-[16px] pt-[96px] sm:pt-[40px] pb-[64px] sm:pb-[24px]'>
        <div>
          <h3 className='font-medium w-[768px] xl:w-[720px] lgx:w-[630px] lg:w-[580px] md:w-[510px] sm:w-[100%] text-[48px] xl:text-[44px] lgx:text-[36px] md:text-[32px] leading-[52.8px] sm:leading-[35.2px] text-[#121927] mb-[20px] sm:mb-[0px] sm:text-center'>
            World class mentorship at your finger tip
          </h3>
          <p className='font-regular text-[20px] leading-[30px] text-[#4f4f4f] w-[768px] lgx:w-[670px] lg:w-[580px] md:w-[510px] sm:hidden'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. 
          </p>
        </div>
        <button className='w-[239px] h-[64px] rounded-[8px] bg-[#1453FF] text-[#fff] font-medium text-[16px] leading-6 tracking-[3%] sm:hidden'>
            Connect to a mentor
        </button>
          
      </section>
      <section className='pb-[96px] sm:pb-[52px]'>
        <div className='sm:hidden 3xl:flex px-[592.5px] 2xl:px-[80px] lgx:px-[25px] sm:px-[16px] flex flex-wrap gap-[32px] pb-[96px] sm:pb-[52px]'>
          {
            imageCards.map((imageCard, i) => {
              return (
                <div key={i} className='font-whyte'>
                  <Image src={imageCard.img} width={296} height={297} alt='mentor image' className='object-cover'/>
                  <h4 className='font-medium text-[20px] leading-[30px] text-[#101828] mt-[24px] mb-[4px]'>{imageCard.name}</h4>
                  <h5 className='font-regular text-[18px] leading-[28px] text-[#1453FF] mb-[16px]'>{imageCard.position}</h5>
                  <p className='font-regular w-[296px] text-[16px] leading-[20.8px] text-[#667085]'>{imageCard.formerPosition}</p>
                </div>
              )
            })
          }
        </div>
        <div className='sm:block 3xl:hidden sm:pb-[40px] sm:w-[400px] xm:w-[100%] mx-auto px-[80px] lgx:px-[25px] sm:px-[16px]'>
          <Slider ref={slider => {sliderRef = slider}} {...mentorSettings} className=''>
                {imageCards.map((imageCard, i) => {
                  return(
                    <div key={i} className='font-whyte mx-auto sm:w-[400px] xm:w-[100%]'>
                      <Image src={imageCard.img} width={296} height={297} alt='mentor image' className='object-cover'/>
                      <h4 className='font-medium text-[20px] leading-[30px] text-[#101828] mt-[24px] mb-[4px]'>{imageCard.name}</h4>
                      <h5 className='font-regular text-[18px] leading-[28px] text-[#1453FF] mb-[16px]'>{imageCard.position}</h5>
                      <p className='font-regular w-[296px] xm:w-[100%]  text-[16px] leading-[20.8px] text-[#667085]'>{imageCard.formerPosition}</p>
                    </div>
                      )})}
          </Slider>
        </div>
        <button className=' w-[239px] h-[64px] rounded-[8px] bg-[#1453FF] text-[#fff] font-medium text-[16px] leading-6 tracking-[3%] mx-auto sm:block hidden'>
            Connect to a mentor
        </button> 
      </section>
      <section className='flex sm:flex-wrap px-[592.5px] 2xl:px-[80px] xl:px-[25px] xm:px-[16px] gap-[50px] lgx:gap-[30px] sm:gap-[0] py-[160px] sm:py-[52px] bg-[#F5F8FF]'>
        <Image src='/bootcamp.png' width={602} height={519} alt='several images merged into one' className='object-cover' />
        <div className='font-whyte'>
          <h4 className='font-medium text-[48px] xl:text-[44px] lgx:text-[40px] lg:text-[35px] md:text-[30px] leading-[52.8px] lgx:leading-[45px] lg:leading-[40px] text-[#121927] mb-[40px] w-[596px] xl:w-[580px] lgx:w-[450px] lg:w-[400px] md:w-[350px] sm:w-[100%] sm:text-center sm:mt-[16px]'>
            We are not just another Bootcamp
          </h4>
          <p className='font-regular text-[18px] lgx:text-[16px] md:text-[14px] leading-[27px] lgx:leading-[24px] text-[#4f4f4f] mb-[16px] w-[629px] xl:w-[580px] lgx:w-[450px] lg:w-[400px] md:w-[350px] sm:w-[100%]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Suspendisse varius enim in eros elementum tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Suspendisse varius enim in eros elementum tristique. Lorem ipsum dolor sit amet, consectetur adipiscing e
          </p>
          <p className='font-regular text-[18px] lgx:text-[16px] md:text-[14px] leading-[27px] lgx:leading-[24px] text-[#4f4f4f] mb-[40px] sm:mb-[32px] w-[629px] xl:w-[580px] lgx:w-[450px] lg:w-[400px] md:w-[350px] sm:w-[100%]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Suspendisse varius enim in eros elementum tristique. Lorem ipsum dolor sit amet, 
          </p>
          <div className='font-whyte text-[#1453FF] text-center flex sm:flex-col sm:items-center gap-[26px] lgx:gap-[16px] lg:gap-[10px] sm:gap-[32px]'>
            <div className='w-[192px] xl:w-[150px] lgx:w-[130px] lg:w-[110px]'>
              <h5 className='font-medium text-[43.64px] xl:text-[38px] lgx:text-[34px] leading-[52.36px] xl:leading-[48px] lgx:leading-[40px] tracking-[-2%]'>400+</h5>
              <p className='font-regular text-[18px] xl:text-[16px] lgx:text-[14px] lg:text-[12px] leading-[28px] text-[#121927]'>Projects completed</p>
            </div>
            <div className='w-[192px] xl:w-[150px] lgx:w-[130px] lg:w-[110px]'>
              <h5 className='font-medium text-[43.64px] xl:text-[38px] lgx:text-[34px] leading-[52.36px] xl:leading-[48px] lgx:leading-[40px] tracking-[-2%]'>70%</h5>
              <p className='font-regular text-[18px] lgx:text-[14px] lg:text-[12px] leading-[28px] text-[#121927]'>Employment rate</p>
            </div>
            <div className='w-[192px] xl:w-[150px] lgx:w-[130px] lg:w-[110px]'>
              <h5 className='font-medium text-[43.64px] xl:text-[38px] lgx:text-[34px] leading-[52.36px] xl:leading-[48px] lgx:leading-[40px] tracking-[-2%]'>3000+</h5>
              <p className='font-regular text-[18px] lgx:text-[14px] lg:text-[12px] leading-[28px] text-[#121927]'>Trained</p>
            </div>
          </div>
        </div>
      </section>
      <section className='font-whyte px-[592.5px] 2xl:px-[80px] xl:px-[25px] sm:px-[16px] py-[84px] sm:py-[78.95px] relative'>
        <h4 className='font-medium text-[#121927] text-[48px] lgx:text-[38px] sm:text-[36px] leading-[52.8px] sm:leading-[39.6px] w-[696px] lgx:w-[550px] sm:w-[93%] mb-[62px] mx-auto text-center'>
          What our students has to say about us
        </h4>
        <div className='w-[100%] rounded-[24px] '>
          <Slider ref={slider => {sliderRef = slider}} {...settings} className='w-[100%]'>
                {testimonials.map((testimonial, index) => {
                  return(
                      <div key={index} className='w-[100%] rounded-[24px]'>
                        <div  className='bg-[#121927] flex sm:flex-col justify-between relative rounded-[24px]'>
                          <div className='px-[64px] xxl:px-[40px] lg:px-[20px] sm:px-[16px] py-[108px] sm:pt-[29.73px] sm:pb-[36.27px] sm:order-2'>
                            <h4 className='font-regular text-[36px] xxl:text-[30px] lgx:text-[26px] md:text-[24px] leading-[44px] xxl:leading-[40px] md:leading-[36px] tracking-[-2%] text-[#fff] w-[672px] xxl:w-[600px] lgx:w-[500px] lg:w-[450px] md:w-[350px] sm:w-[100%] mb-[32px] sm:mb-[24px]'>
                              {testimonial.text}
                            </h4>
                            <h5 className='font-medium  sm:w-[100%] text-[18px] leading-[28px] text-[#fff]'>
                              {testimonial.name}
                            </h5>
                            <p className='font-regular text-[16px] leading-[24px] text-[#BEBEBE] pb-[32px]'>{testimonial.position}</p>
                            <div className='flex sm:justify-center gap-4'>
                              {[...Array(testimonials.length).keys()].map((_, i) => (
                                <div
                                  key={i}
                                  className={`w-[10px] h-[10px] rounded-[6px] ${currentSlide === i ? 'bg-[#fff]' : 'bg-[#667085]'}`}
                                  // onClick={() => setCurrentSlide(i)}
                                  onClick={() => goToSlide(index, i)}
                                ></div>
                              ))}
                            </div>
                            <Image src='/quote.png' width={149} height={114} alt='quote' className=' absolute top-[0px]  left-[54.29px] xxl:left-[40px] sm:invisible visible' />
                            <Image src='/quote-mobile.png' width={76} height={82} alt='quote' className='absolute top-[480px] xm:top-[350px] xxm:top-[270px] sxm:top-[220px]  right-[15.23px] sm:visible invisible' />
                          </div>
                          <Image src='/testimonial.png' width={480} height={465} alt='testimonial picture' className='sm:order-1 rounded-tr-[24px] rounded-br-[24px] sm:rounded-br-none sm:rounded-tl-[24px] w-[100%] object-cover' />
                        </div>
                      </div>
                      )})}
              

          </Slider>
        </div>
        <Image src='/big-star.png' width={109} height={110} alt='big star' className='absolute top-[83px] lg:top-[40px] md:top-[20px] sm:hidden left-[619.5px] 2xl:left-[107px] lg:left-[40px] md:left-[20px] '/>
        <Image src='/medium-star.png' width={54} height={54} alt='medium star' className='absolute sm:top-[26px] sm:right-[14px] 3xl:hidden sm:block'/>
        <Image src='/small-star.png' width={43} height={44} alt='small star' className='absolute top-[174px] lg:top-[184px] right-[655.5px] 2xl:right-[143px] lg:right-[103px] sm:hidden 3xl:block'/>
        <Image src='/smallest-star.png' width={21} height={21} alt='smallest star' className='absolute sm:top-[162px] sm:left-[23px] sm:block 3xl:hidden' />
      </section>
      <section className='flex sm:flex-wrap gap-[60px] lgx:gap-[40px] lg:gap-[20px] md:gap-[10px] items-center px-[592.5px] 2xl:px-[80px] xl:px-[25px] xm:px-[16px] py-[160px] sm:pt-[20px] sm:pb-[40px]'>
        <div className='font-whyte sm:order-1'>
          <h4 className='font-medium text-[48px] xxl:text-[40px] lgx:text-[36px] lg:text-[34px] sm:text-[32px] leading-[52.8px] xxl:leading-[46px] lgx:leading-[40px] sm:leading-[35.2px] text-[#121927] pb-[32px] sm:pb-[24px] sm:pt-[32px] w-[592px] xxl:w-[500px] lgx:w-[450px] lg:w-[400px] md:w-[350px] sm:w-[100%]'>
            Access to endless resources
          </h4>
          <p className='w-[589px] xxl:w-[500px] lgx:w-[450px] lg:w-[400px] md:w-[350px] sm:w-[100%] font-regular text-[16px] lgx:text-[14px] leading-[24px] lgx:leading-[20px] text-[#333333] pb-[32px] sm:pb-[24px]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. 
            Duis cursus, mi quis viverra ornare.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. 
            Duis cursus, mi quis viverra ornare.Lorem ipsum dolor sit amet, sectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. 
            Duis cursus, mi quis viverra ornare.Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          </p>
          <button className='w-[173px] h-[56px] font-medium leading-[24px] tracking-[3%] text-[#fff] bg-[#1453FF] rounded-[8px]'>
            Get started
          </button>
        </div>
        <div className='bg-[#EEF2FF] px-[40px] lg:px-[20px] pt-[95px]'>
          <Image src='/resources.png' width={556} height={460} alt='resources' className='object-cover sm:order-3'/>
        </div>
      </section>
      <section className='px-[592.5px] 2xl:px-[80px] xl:px-[25px] xm:px-[16px] pt-[80px] sm:pt-[40px]'>
        <div className="font-whyte bg-[#121927] pt-[122px] pb-[99px] rounded-[16px] bg-[url(/stroke.svg)]">
          <div className='w-[710px] md:w-[100%] mx-auto'>
            <h4 className='font-medium text-[48px] md:text-[40px] sm:text-[32px] leading-[52.8px] md:leading-[40px] sm:leading-[35.2px] text-[#fff] mx-auto text-center'>
              Have a Question?
            </h4>
            <p className='font-regular text-[16px] leading-[24px] sm:leading-[19.2px] text-center text-[#FAFAFA] py-5 sm:py-4'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra
            </p>
            <button className='w-[173px] h-[56px] rounded-[8px] bg-[#1453FF] text-[16px] leading-[24px] tracking-[3%] font-medium text-[#fff] block mx-[auto]'>
              Contact Us
            </button>
          </div>
        </div>
      </section>
      <Footer />
      

      {/* <span className='text-[#fff] text-[54px] xxl:text-[50px] xl:text-[45px] lg:text-[40px] md:text-[25px] sm:text-[30px] leading-[59.4px] lg:leading-[50px] sm:leading-[33px] w-[279px] xl:w-fit bg-[#1453ff] rounded-[48px] px-5 py-3 border-[#B3C7FF] inline-block transform rotate-[-2.93deg]'>prepared</span> */}
    </div>
  )
}

export default Landing
