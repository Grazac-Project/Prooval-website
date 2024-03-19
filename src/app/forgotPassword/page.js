// "use client";

// import React from "react";
// import Image from "next/image";
// import Classes from "./forgotPassword.module.css";
// import { ForgetPasswordAction } from "@/api/authentication/auth";
// import { useRouter } from "next/navigation";
// import { useFormik } from "formik";
// import * as yup from "yup";

// const initialValues = {
//   email: "",
// };

// const page = () => {
//   const router = useRouter();

//   const schema = yup.object({
//     email: yup
//       .string()
//       .email("Please enter a valid email")
//       .required("Email is required"),
//   });
//   const { values, handleSubmit, handleChange, handleBlur, errors, touched } =
//     useFormik({
//       initialValues,
//       validationSchema: schema,
//       onSubmit: async (payload, actions) => {
//         ForgetPasswordAction(payload)
//           .then((res) => {
//             console.log(res);
//             actions.resetForm();
//             // router.push("/");
//           })
//           .catch((error) => {
//             console.log(error);
//             toast.warn(error.response.data.message);
//           });
//       },
//     });

//   return (
//     <div className={Classes.container}>
//       <div>
//         <Image
//           src="/hack-log.png"
//           alt="icon"
//           width={164.204}
//           height={36}
//           style={{ margin: "40px" }}
//         />
//         <div className={Classes.innerContainer}>
//           <div className={Classes.content}>
//             <h3>Forgot password</h3>
//             <p>
//               We are happy to have you back. Provide the correct information
//             </p>
//             <form className={Classes.form} onSubmit={handleSubmit}>
//               <h4>Email Address</h4>
//               <div className={Classes.input}>
//                 <input
//                   placeholder="usersemail.com"
//                   type="email"
//                   name="email"
//                   value={values.email}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className={Classes.errorMsg}>
//                 {" "}
//                 {errors.email && touched.email && <p>{errors.email}</p>}
//               </div>
//               <button className={Classes.btn} type="submit">
//                 {" "}
//                 Reset Password
//               </button>
//             </form>
//             <a href="login">
//               <div className={Classes.back}>
//                 <Image src="arrow-left.svg" alt="icon" width={20} height={20} />
//                 Back to log in
//               </div>
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default page;


'use client'
import React, {useState} from 'react'
import { FcGoogle } from "react-icons/fc";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Image from 'next/image';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from 'next/navigation'
import Link from 'next/link';
import { IoIosArrowRoundBack } from "react-icons/io";
import { forgetPasswordAction } from '@/api/authentication/auth';


const initialValues = {
  email: ''
}

const forgotPassword = () => {
  const router =  useRouter()
  const schema = yup.object({
    email: yup.string().email('Please enter a valid email').required('Email is required')
  });

  const onSubmit = async (values, actions) => {
    console.log('values',values)
   forgetPasswordAction(values)
    .then((res) => {
      // console.log(res)
      if(res.status === 200) {
          // toast.success('Success')
            router.push('/verify')
        }
        // console.log(res)
    })
    .catch((err) => {
        // console.log(err)
    })
    actions.resetForm()
}
  
  const {values, handleSubmit, handleChange,handleBlur,isSubmitting, errors, touched} = useFormik({
    initialValues,
    validationSchema: schema,
    onSubmit
  })
  return (
    <div className='min-h-screen bg-[#EFF6FF] xm:bg-[#fff]'>
            <div className='bg-[#fff] border-b-[1px] xm:border-b-[0px] border-b-[#1453FF]'>
                <Link href='/'><Image src='/hack-logo.png' alt='hackthejobs logo' width={180} height={52} className='cursor-pointer mx-auto xm:m-[0px] py-[20px] xm:pb-[0px] xm:px-4'/></Link>
            </div>
        <section className='font-whyte py-[150px] 1xl:py-[100px] xl:py-[80px] lgx:py-[50px] xm:py-[0px]'>
            <div className='w-[616px] md:w-[90%] xm:w-[100%] bg-[#fff] p-[24px] sm:p-[16px] xm:pt-[0px] xm:pb-[48px] rounded-[8px] mx-auto'>
                <h1 className='text-[32px] font-medium leading-[41.6px] text-[#2A2A2A] mb-2 xm:mt-[42px] text-center xm:text-start'>Forgot password</h1>
                <p className='font-regular text-[16px] leading-[20.8px] text-[#828282] mb-[48px] text-center sm:text-start'>We are happy to have you back. Provide the correct information</p>
                <form className='text-[#333] font-regular' onSubmit={handleSubmit}>
                    <label className={(errors.email && touched.email) ?'font-regular text-[16px] leading-[20.8px] text-[#333333] mb-[8px] text-[#fc8181]':'font-regular text-[16px] leading-[20.8px] text-[#333333] mb-[8px]'}>{errors.email && touched.email ?`${errors.email}`:'Email Address'}</label>
                    <input type='text' id='email' placeholder='Enter your email' value={values.email} onChange={handleChange} onBlur={handleBlur} className='w-[100%] p-[10px] rounded-[8px] border-[0.8px] border-[#EAEAEA]'/>
                    <button className='w-[100%] bg-[#1453FF] border-[0.3px] border-[#654DE4] h-[48px] text-[#fff] mt-[48px] xm:mt-[371px] mb-[24px]'>Reset password</button>
                </form>
                <Link href='login'><div className='flex justify-center items-center text-[#667085] cursor-pointer '><IoIosArrowRoundBack className=' text-[24px]'/> Back to log in</div></Link>
            </div>
        </section>
    </div>
  )
}

export default forgotPassword
