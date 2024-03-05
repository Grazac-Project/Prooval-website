'use client'
import React, {useState} from 'react'
import { FcGoogle } from "react-icons/fc";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import AuthSide from '@/components/authSide/page';
import Image from 'next/image';
import { signupAction, googleLogin } from '@/api/authentication/auth';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from 'next/navigation'
import Link from 'next/link';



const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    checkbox: false
}



const Signup = () => {
    const [showPassword, setShowPassword] = useState(false);
    const router =  useRouter()
    const toggleVisibility = () => {
        setShowPassword(prev => !prev)
    }
    const schema = yup.object({
        email: yup.string().email('Please enter a valid email').required('Email is required'),
        firstName: yup.string().required('First name is required'),
        lastName: yup.string().required('Last name is required'),
        password: yup.string().required('Password is required').min(6),
        checkbox: yup.boolean().oneOf([true], "Please accept the terms").required()
      });

      const onSubmit = async (values, actions) => {
        const data = {}
        data.firstName = values.firstName
        data.lastName = values.lastName
        data.email = values.email
        data.password = values.password
        console.log('values',values)
        console.log('data', data)
        await signupAction(data)
        .then((res) => {
            if(res.status == 201) {
                toast.success(res.data.message)
                router.push('/verification-code')
            }
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
        actions.resetForm()
    }

    const googleLoginHandler = () => {
        googleLogin()
        .then(res => {
            console.log(res);
        })
    }
      
      const {values, handleSubmit, handleChange,handleBlur,isSubmitting, errors, touched} = useFormik({
        initialValues,
        validationSchema: schema,
        onSubmit
      })
    //   const closeModal = () => {
    //     router.push('/')
    //   }
  return (
    <>
        <ToastContainer closeButton={false} />
        <section className='font-whyte px-10 xxl:px-5 md:px-[100px] xm:px-[30px] py-9 xxl:py-7 flex gap-[80px] xxl:gap-[40px]'>
            <div className='w-[552px] md:w-[100%]'>
                <Image src='/hack-logo.png' width={180} height={52} className='cursor-pointer'/>
                <h1 className='text-[32px] font-medium leading-[41.6px] text-[#2A2A2A] mb-2 mt-[84px] xm:mt-8'>Create an Account</h1>
                <p className='font-regular text-4 leading-[20.8px] text-[#828282] mb-12'>We are happy to have you back. Provide the correct information</p>
                <button onClick={googleLoginHandler} className='flex justify-center items-center w-[100%] text-[#2A2A2A] text-[16px] leading-[19.36px] font-medium border-[1px] h-[47px]'><FcGoogle className='mr-[0.5px] text-[20px]'/> Signup with Google</button>
                <div className='flex items-center py-10 '>
                    <hr className='bg-[#3e3e3e] w-[45%]'/>
                    <p className='text-[14px] leading-[16.94px] font-regular px-[10px] '>or</p>
                    <hr className='bg-[#3e3e3e] w-[48%]'/>
                </div>
                <form className='text-[#333]' onSubmit={handleSubmit}>
                    <div className='flex md:block gap-3 mb-8 sm:mb-6'>
                        <div className='md:mb-8 sm:mb-6'>
                            <label htmlFor='firstName' className={(errors.firstName && touched.firstName) ? 'text-[#fc8181] block mb-2':'block mb-2 '}>{errors.firstName && touched.firstName ?`${errors.firstName}`:'First name'}</label>
                            <input type='text' id='firstName' placeholder='Enter firstname' value={values.firstName} onChange={handleChange} onBlur={handleBlur} className='block text-[#828282] border-[1px] h-[48px] w-[270px] md:w-[100%] rounded-[8px] p-[15px] outline-none '/>
                        </div>
                        <div>
                            <label htmlFor='lastName' className={(errors.lastName && touched.lastName) ? 'text-[#fc8181] block mb-2':'block mb-2 '}>{(errors.lastName && touched.lastName) ?`${errors.lastName}`:'Last name'}</label>
                            <input type='text' id='lastName' placeholder='Enter lastname' value={values.lastName} onChange={handleChange} onBlur={handleBlur} className='block text-[#828282] border-[1px] h-[48px] w-[270px] md:w-[100%] rounded-[8px] p-[15px] outline-none'/>
                        </div>
                    </div>
                    <div className='mb-8 sm:mb-6'>
                        <label htmlFor='email' className={(errors.email && touched.email) ? 'text-[#fc8181] block mb-2':'block mb-2 '}>{errors.email && touched.email ?`${errors.email}`:'Email Address'}</label>
                        <input type='text' id='email' placeholder='Enter email address' value={values.email} onChange={handleChange} onBlur={handleBlur} className='block text-[#828282] border-[1px] h-[48px] w-[100%] rounded-[8px] p-[15px] outline-none'/>
                    </div>
                    <div className='relative'>
                        <label htmlFor='password' className={(errors.password && touched.password) ? 'text-[#fc8181] block mb-2':'block mb-2 '}>{errors.password && touched.password ?`${errors.password}`:'Password'}</label>
                        <input type={showPassword?'text':'password'} id='password' placeholder='Enter Password' value={values.password} onChange={handleChange} onBlur={handleBlur} className='block text-[#828282] border-[1px] h-[48px] w-[100%] rounded-[8px] p-[15px] outline-none'/>
                        <div className='absolute right-[10px] top-[60%] cursor-pointer' onClick={toggleVisibility}>{showPassword?<AiOutlineEye />:<AiOutlineEyeInvisible />}</div>
                        
                    </div>
                    <div className='mb-12'>
                        <div className='mb-2 mt-3 flex items-center gap-[3px]'>
                            <input type='checkbox' id='checkbox' value={values.checkbox} onChange={handleChange} onBlur={handleBlur} className='block'/>
                            {errors.checkbox && touched.checkbox ? <label htmlFor='checkbox' className='text-[#fc8181] block text-[14px] xm:text-[12px] font-regular leading-[16.8px] xm:leading-[18px]'>{errors.checkbox}</label>:<label htmlFor='checkbox' className='text-[14px] xm:text-[12px] font-regular leading-[16.8px] xm:leading-[18px] block '>Accept all<span className='text-[#1453FF] cursor-pointer'> Terms of Service</span> and <span className='text-[#1453FF] cursor-pointer'>Privacy Policy</span></label>}
                        </div>
                        {/* <p className={(errors.checkbox && touched.checkbox) ? 'text-[#fc8181] block mb-2':'block mb-2 '}>{errors.checkbox && touched.checkbox ?`${errors.checkbox}`:''}</p> */}
                    </div>
                    <button type='submit' disabled={isSubmitting} className='disabled:opacity-[35%] bg-[#1453FF] rounded-[4px] py-3 w-[100%] text-[#fff]'>Create account</button>
                    <p className='font-medium leading-[20.8px] text-4 text-[#828282] text-center mt-4 '>Already have an account ? <Link href='/login'><span className='text-[#1453FF] cursor-pointer'>Login</span></Link></p>
                </form>
            </div>
            <div className='w-[728px] md:hidden'>
                <AuthSide />
            </div>
        </section>
    </>
  )
}

export default Signup