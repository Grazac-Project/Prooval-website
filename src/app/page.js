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



import Image from 'next/image'
import React from 'react'
import ValueCard from '@/components/valueCard/valueCard'

const Landing = () => {
  return (
    <div>
      <section className='px-[80px] xl:px-[25px] sm:px-[100px] xm:px-[50px] xxm:px-4 flex gap-[58px] xl:gap-[25px] items-center'>
        <div className='font-whyte'>
          <h1 className='font-bold text-[64px] xl:text-[50px] md:text-[40px] leading-[70.4px] xl:leading-[50px] md:leading-[44px] text-[#121927] w-[607px] xl:w-[500px] md:w-[400px] sm:w-[100%]'>Become workplace ready and prepared</h1>
          <p className='font-regular text-[18px] leading-6 text-[#727272] w-[555px] xl:w-[500px] md:w-[400px] sm:w-[100%] pt-8 sm:pt-4 pb-8'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. 
            Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. 
          </p>
          <button className='w-[173px] sm:w-[100%] font-medium leading-6 tracking-[3%] text-4 text-[#fff] bg-primary rounded-[8px] px-10 py-4'>Get started</button>
        </div>
        <Image src='/hero-pic.png' alt='group of pictures' width={635} height={696} className='sm:hidden' />
      </section>
      <section className='px-[80px] xl:px-[25px] sm:px-[100px] xm:px-[50px] xxm:px-4 font-whyte bg-[#F5F8FF]'>
        <h2 className='font-medium text-[48px] lg:text-[32px] leading-[52.8px] lg:leading-[41.6px] text-[#121927] text-center w-[865px] lg:w-[95%] mx-auto pt-[94px] md:pt-[40px] pb-3'>
          Communicate value that users will get
        </h2>
        <h3 className='font-regular text-[18px] lg:text-[16px] leading-6 lg:leading-[20.8px] text-center text-[#333] w-[690px] md:w-[100%] mx-auto'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.
        </h3>

        <ValueCard /> 
      </section>
    </div>
  )
}

export default Landing
