// "use client";

// import React, { useState } from "react";
// import Image from "next/image";
// import Classes from "./setPassword.module.css";
// import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

// const page = () => {
//   const [hidePassword, setHidePassword] = useState(true)
//   const [hidePassword2, setHidePassword2] = useState(true)

//     const toggleVisibility = () => {
//         setHidePassword(prev => !prev)
        
//     }
//     const toggleVisibility2 = () => {
      
//       setHidePassword2(prev => !prev)
//   }
//   return (
//     <div className={Classes.container}>
//       <Image
//         src="/hack-log.png"
//         alt="icon"
//         width={164.204}
//         height={36}
//         style={{ margin: "40px" }}
//       />
//       <div className={Classes.innerContainer}>
//         <div className={Classes.content}>
//           <h3>Set new password</h3>
//           <p>We are happy to have you back. Provide the correct information</p>
//           <div className={Classes.form}>
//             <h4>New Password</h4>
//             <div className={Classes.input}>
//               <input placeholder="Enter Password" type={hidePassword?'password':'text'} id='password'/>
//               <div onClick={toggleVisibility}>{hidePassword?<AiOutlineEyeInvisible />:<AiOutlineEye />}</div>
//             </div>
//           </div>
//           <div className={Classes.form}>
//             <h4>Confirm new Password</h4>
//             <div className={Classes.input}>
//               <input placeholder="Enter Password" type={hidePassword2?'password':'text'} id='password'/>
//               <div onClick={toggleVisibility2}>{hidePassword2?<AiOutlineEyeInvisible />:<AiOutlineEye />}</div>
//             </div>
//           </div>
//           <button className={Classes.btn}> Reset Password</button>
//           <a href="login">
//             <div className={Classes.back}>
//               <Image src="arrow-left.svg" alt="icon" width={20} height={20} />
//               Back to log in
//             </div>
//           </a>
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
import { resetPasswordAction } from '@/api/authentication/auth';


const initialValues = {
  password: '',
  confirmPassword: ''
}

const setPassword = () => {
  const router =  useRouter()
  const [showPassword, setShowPassword] = useState(false);
  const toggleVisibility = () => {
    setShowPassword(prev => !prev)
}
  const schema = yup.object({
    password: yup.string().required('Password is required').min(6),
    confirmPassword: yup.string().oneOf([yup.ref('password')], 'Password does not match').required('Password is required').min(6)
  });

  const onSubmit = async (values, actions) => {
    console.log('values',values)
    resetPasswordAction(values)
    .then((res) => {
      console.log(res)
      if(res.status === 200) {
          // toast.success('Success')
            router.push('/reset-successful')
        }
        console.log(res)
    })
    .catch((err) => {
        console.log(err)
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
        <section className='font-whyte py-[80px] 1xl:py-[50px] xm:py-[0px]'>
            <div className='w-[616px] md:w-[90%] xm:w-[100%] bg-[#fff] p-[24px] sm:p-[16px] xm:pt-[0px] xm:pb-[28px] rounded-[8px] mx-auto'>
                <h1 className='text-[32px] font-medium leading-[41.6px] text-[#2A2A2A] mb-2 xm:mt-[32px] text-center xm:text-start'>Set new password</h1>
                <p className='font-regular text-[16px] leading-[20.8px] text-[#828282] mb-[48px] xm:mb-[32px] text-center sm:text-start'>We are happy to have you back. Provide the correct information</p>
                <form className='text-[#333] font-regular' onSubmit={handleSubmit}>
                    {/* <label className={(errors.email && touched.email) ?'font-regular text-[16px] leading-[20.8px] text-[#333333] mb-[8px] text-[#fc8181]':'font-regular text-[16px] leading-[20.8px] text-[#333333] mb-[8px]'}>{errors.email && touched.email ?`${errors.email}`:'Email Address'}</label> */}
                    {/* <input type='text' id='email' placeholder='Enter your email' value={values.email} onChange={handleChange} onBlur={handleBlur} className='w-[100%] p-[10px] rounded-[8px] border-[0.8px] border-[#EAEAEA]'/> */}
                    <div className='relative mb-[35px] xm:mb-[24px]'>
                        <div className=''>
                          <label htmlFor='password' className={(errors.password && touched.password) ? 'text-[#fc8181] block mb-2':'block mb-2 '}>{errors.password && touched.password ?`${errors.password}`:'New password'}</label>
                        </div>
                        <input type={showPassword?'text':'password'} id='password' placeholder='Enter Password' value={values.password} onChange={handleChange} onBlur={handleBlur} className='block text-[#828282] border-[1px] border-[#EAEAEA] h-[48px] w-[100%] rounded-[8px] p-[15px] outline-none'/>
                        <div className='absolute right-[10px] top-[60%] cursor-pointer' onClick={toggleVisibility}>{showPassword?<AiOutlineEye />:<AiOutlineEyeInvisible />}</div>
                        
                    </div>
                    <div className='relative mb-[48px]'>
                        <div className=''>
                          <label htmlFor='confirmPassword' className={(errors.confirmPassword && touched.confirmPassword) ? 'text-[#fc8181] block mb-2':'block mb-2 '}>{errors.confirmPassword && touched.confirmPassword ?`${errors.confirmPassword}`:'Confirm new password'}</label>
                        </div>
                        <input type={showPassword?'text':'password'} id='confirmPassword' placeholder='Enter Password' value={values.confirmPassword} onChange={handleChange} onBlur={handleBlur} className='block text-[#828282] border-[1px] border-[#EAEAEA] h-[48px] w-[100%] rounded-[8px] p-[15px] outline-none'/>
                        <div className='absolute right-[10px] top-[60%] cursor-pointer' onClick={toggleVisibility}>{showPassword?<AiOutlineEye />:<AiOutlineEyeInvisible />}</div>
                        
                    </div>
                    <button className='w-[100%] bg-[#1453FF] border-[0.3px] border-[#654DE4] h-[48px] text-[#fff] mt-[51px] xm:mt-[276px] mb-[24px]'>Reset password</button>
                </form>
                <Link href='login'><div className='flex justify-center items-center text-[#667085] cursor-pointer '><IoIosArrowRoundBack className=' text-[24px]'/> Back to log in</div></Link>
            </div>
        </section>
    </div>
  )
}

export default setPassword

