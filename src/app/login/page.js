// "use client";

// import React, { useState } from "react";
// import Classes from "./login.module.css";
// import Image from "next/image";
// import AuthSide from "@/components/authSide/page";
// import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
// import { LoginAction } from "@/api/authentication/auth";
// import { useRouter } from "next/navigation";
// import { useFormik } from "formik";
// import * as yup from "yup";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const initialValues = {
//   email: "",
//   password: "",
// };

// const Login = () => {
//   const router = useRouter();
//   const [hidePassword, setHidePassword] = useState(true);
//   const schema = yup.object({
//     email: yup
//       .string()
//       .email("Please enter a valid email")
//       .required("Email is required"),
//     password: yup.string().min(8).required("Please enter your password"),
//   });
//   const { values, handleSubmit, handleChange, handleBlur, errors, touched } =
//     useFormik({
//       initialValues,
//       validationSchema: schema,
//       onSubmit: async (payload, actions) => {
//         LoginAction(payload)
//           .then((res) => {
//             if (res.status === 200) {
//               console.log(resp);
//               toast.success(response.data.message);
//               actions.resetForm();
//               router.push("/dashboard");
//             } else {
//               toast.warn("Something went wrong, please try again!!!");
//             }
//           })
//           .catch((error) => {
//             console.log(error);
//             toast.warn(error.response.data.message);
//           });
//       },
//     });
//   const toggleVisibility = () => {
//     setHidePassword((prev) => !prev);
//   };
//   return (
//     <>
//       <ToastContainer closeButton={false} />
//       <div className={Classes.innerContainer}>
//         <div className={Classes.auth}>
//           <Image src='/hack-logo.png' alt="icon"  width={164.204} height={36}  />

//           <div className={Classes.authText}>
//             <h5>Welcome back!</h5>
//             <p>
//               We are happy to have you back. Provide the correct information
//             </p>
//           </div>
//           <div className={Classes.google}>
//             <Image src="google.svg" alt="icon" width={20} height={20} />
//             <p>Login with Google</p>
//           </div>
//           <div className={Classes.line}>
//             <hr></hr>
//             <p>or</p>
//             <hr></hr>
//           </div>
//           <form onSubmit={handleSubmit}>
//             <div className={Classes.form}>
//               <h4>Email Address</h4>
//               <div className={Classes.input}>
//                 <input
//                   placeholder="Email Address"
//                   type="email"
//                   name="email"
//                   value={values.email}
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                 />
//               </div>
//               <div className={Classes.errorMsg}>
//                 {errors.email && touched.email && <p>{errors.email}</p>}
//               </div>
//             </div>
//             <div className={Classes.form}>
//               <div className={Classes.labelFlex}>
//                 <h4>Password</h4>
//                 <a href="forgotPassword">
//                   <p>Forgot Password</p>
//                 </a>
//               </div>
//               <div className={Classes.input}>
//                 <input
//                   placeholder="Enter Password"
//                   type={hidePassword ? "password" : "text"}
//                   name="password"
//                   value={values.password}
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                 />
//                 <div onClick={toggleVisibility}>
//                   {hidePassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
//                 </div>
//               </div>
//               <div className={Classes.errorMsg}>
//                 {errors.password && touched.password && (
//                   <p>{errors.password}</p>
//                 )}
//               </div>
//             </div>
//             <button className={Classes.btn} type="submit">
//               Login
//             </button>
//           </form>
//           <p className={Classes.create}>
//             Don’t have an account ?&nbsp; <a href="signup"> Create account</a>{" "}
//           </p>
//         </div>
//         <div className={Classes.innerContainer2}>
//           <AuthSide />
//         </div>
//       </div>
//     </>
//   );
// };

// export default Login;



'use client'
import React, {useState} from 'react'
import { FcGoogle } from "react-icons/fc";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import AuthSide from '@/components/authSide/page';
import Image from 'next/image';
import { loginAction, googleLogin } from '@/api/authentication/auth';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from 'next/navigation'
import Link from 'next/link';



const initialValues = {
    email: '',
    password: '',
}



const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const router =  useRouter()
    const toggleVisibility = () => {
        setShowPassword(prev => !prev)
    }
    const schema = yup.object({
        email: yup.string().email('Please enter a valid email').required('Email is required'),
        password: yup.string().required('Password is required').min(6),
      });

      const onSubmit = async (values, actions) => {
        console.log('values',values)
       loginAction(values)
        .then((res) => {

          console.log(res.data.data.data.message)
          if(res) {
              toast.success(res.data.data.data.message)
              sessionStorage.setItem(
                "user_details",
                JSON.stringify({
                  token: res.data.data.data.token,
                  id: res.data.data.data.token
                })
              )
                // router.push('/')
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

      const googleLoginHandler = () => {
        googleLogin()
        .then(res => {
            console.log(res);
        })
    }
    //   const closeModal = () => {
    //     router.push('/')
    //   }
  return (
    <div className='min-h-screen bg-[#EFF6FF] xm:bg-[#fff]'>
        <ToastContainer closeButton={false} />
    <div >
            <div className='bg-[#fff] border-b-[1px] xm:border-b-[0px] border-b-[#1453FF]'>
                <Link href='/'><Image src='/hack-logo.png' alt='hackthejobs logo' width={180} height={52} className='cursor-pointer mx-auto xm:m-[0px] py-[20px] xm:pb-[0px] xm:px-4'/></Link>
            </div>
        <section className='font-whyte py-[65px] xm:py-[0px]'>
        {/* <section className='font-whyte flex justify-center items-center h-full'> */}
            <div className='w-[616px] md:w-[90%] xm:w-[100%] bg-[#fff] p-[32px] sm:p-[16px] rounded-[8px] mx-auto'>
                <h1 className='text-[32px] font-medium leading-[41.6px] text-[#2A2A2A] mb-2 xm:mt-6 text-center xm:text-start'>Welcome back!</h1>
                <p className='font-regular text-[16px] leading-[20.8px] text-[#828282] mb-[32px] text-center sm:text-start'>We are happy to have you back. Provide the correct information</p>
                <a href='https://hackthejobs-staging-staging.up.railway.app/auth/google'><div className='flex justify-center items-center w-[100%] text-[#2A2A2A] text-[16px] leading-[19.36px] font-medium rounded-[8px] border-[1px] border-[#EAEAEA] h-[47px]'><FcGoogle className='mr-[0.5px] text-[20px]'/> Login with Google</div></a>
                <div className='flex items-center py-7 '>
                    <hr className='bg-[#3e3e3e] w-[45%] border-[#EAEAEA]'/>
                    <p className='text-[14px] text-[#828282] leading-[16.94px] font-regular px-[10px] '>Or</p>
                    <hr className='bg-[#3e3e3e] w-[48%] border-[#EAEAEA]'/>
                </div>
                <form className='text-[#333] font-regular' onSubmit={handleSubmit}>
                    <div className='mb-8 sm:mb-6'>
                        <label htmlFor='email' className={(errors.email && touched.email) ? 'text-[#fc8181] block mb-2':'block mb-2 '}>{errors.email && touched.email ?`${errors.email}`:'Email Address'}</label>
                        <input type='text' id='email' placeholder='Enter email address' value={values.email} onChange={handleChange} onBlur={handleBlur} className='block text-[#828282] border-[1px] border-[#EAEAEA] h-[48px] w-[100%] rounded-[8px] p-[15px] outline-none'/>
                    </div>
                    <div className='relative mb-[48px]'>
                        <div className='flex justify-between'>
                          <label htmlFor='password' className={(errors.password && touched.password) ? 'text-[#fc8181] block mb-2':'block mb-2 '}>{errors.password && touched.password ?`${errors.password}`:'Password'}</label>
                          <Link href='/forgotPassword'><p className='font-medium text-[14px] leading-[16.94px] text-[#FF5959] block'>Forgot Password</p></Link>
                        </div>
                        <input type={showPassword?'text':'password'} id='password' placeholder='Enter Password' value={values.password} onChange={handleChange} onBlur={handleBlur} className='block text-[#828282] border-[1px] border-[#EAEAEA] h-[48px] w-[100%] rounded-[8px] p-[15px] outline-none'/>
                        <div className='absolute right-[10px] top-[60%] cursor-pointer' onClick={toggleVisibility}>{showPassword?<AiOutlineEye />:<AiOutlineEyeInvisible />}</div>
                        
                    </div>
                    <button type='submit' disabled={isSubmitting} className='disabled:opacity-[35%] font-medium bg-[#1453FF] rounded-[4px] py-3 w-[100%] border-[0.3px] border-[#654DE4] text-[#fff] text-[16px] tracking-[3%] leading-[24px]'>Login</button>
                    <p className='font-regular leading-[20.8px] text-4 text-[#828282] text-center mt-4 '>Don’t have an account ? <Link href='/signup'><span className='text-[#1453FF] cursor-pointer'>Create account</span></Link></p>
                </form>
            </div>
        </section>
    </div>
    </div>
  )
}

export default Login
