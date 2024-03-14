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
                router.push('/verify')
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
    <div className='min-h-screen  bg-[#EFF6FF]'>
        <ToastContainer closeButton={false} />
            <div className='bg-[#fff] border-b-[1px] xm:border-b-[0px] border-b-[#1453FF]'>
                <Link href='/'><Image src='/hack-logo.png' width={180} height={52} className='cursor-pointer mx-auto xm:m-[0px] py-[20px] xm:pb-[0px] xm:px-4'/></Link>
            </div>
        <section className='font-whyte py-[30px] xm:py-[0px]'>
            <div className='w-[616px] md:w-[90%] xm:w-[100%] bg-[#fff] p-[32px] sm:p-[16px] rounded-[8px] mx-auto py-5'>
                <h1 className='text-[32px] font-medium leading-[41.6px] text-[#2A2A2A] mb-2 xm:mt-8 text-center xm:text-start'>Create an Account</h1>
                <p className='font-regular text-[16px] leading-[20.8px] text-[#828282] mb-[32px] text-center sm:text-start'>We are happy to have you back. Provide the correct information</p>
                <a href='https://hackthejobs-staging-staging.up.railway.app/auth/google'><div className='flex justify-center items-center w-[100%] text-[#2A2A2A] text-[16px] leading-[19.36px] font-medium rounded-[8px] border-[1px] border-[#EAEAEA] h-[47px]'><FcGoogle className='mr-[0.5px] text-[20px]'/> Signup with Google</div></a>
                <div className='flex items-center py-7 '>
                    <hr className='bg-[#3e3e3e] w-[45%] border-[#EAEAEA]'/>
                    <p className='text-[14px] text-[#828282] leading-[16.94px] font-regular px-[10px] '>Or</p>
                    <hr className='bg-[#3e3e3e] w-[48%] border-[#EAEAEA]'/>
                </div>
                <form className='text-[#333] font-regular' onSubmit={handleSubmit}>
                    <div className='flex md:block gap-3 mb-4 sm:mb-6'>
                        <div className='md:mb-8 sm:mb-6'>
                            <label htmlFor='firstName' className={(errors.firstName && touched.firstName) ? 'text-[#fc8181] block mb-2':'block mb-2'}>{errors.firstName && touched.firstName ?`${errors.firstName}`:'First name'}</label>
                            <input type='text' id='firstName' placeholder='Enter firstname' value={values.firstName} onChange={handleChange} onBlur={handleBlur} className='block text-[#828282] border-[1px] border-[#EAEAEA] h-[48px] w-[270px] md:w-[100%] rounded-[8px] p-[15px] outline-none '/>
                        </div>
                        <div>
                            <label htmlFor='lastName' className={(errors.lastName && touched.lastName) ? 'text-[#fc8181] block mb-2':'block mb-2 '}>{(errors.lastName && touched.lastName) ?`${errors.lastName}`:'Last name'}</label>
                            <input type='text' id='lastName' placeholder='Enter lastname' value={values.lastName} onChange={handleChange} onBlur={handleBlur} className='block text-[#828282] border-[1px] border-[#EAEAEA] h-[48px] w-[270px] md:w-[100%] rounded-[8px] p-[15px] outline-none'/>
                        </div>
                    </div>
                    <div className='mb-4 sm:mb-6'>
                        <label htmlFor='email' className={(errors.email && touched.email) ? 'text-[#fc8181] block mb-2':'block mb-2 '}>{errors.email && touched.email ?`${errors.email}`:'Email Address'}</label>
                        <input type='text' id='email' placeholder='Enter email address' value={values.email} onChange={handleChange} onBlur={handleBlur} className='block text-[#828282] border-[1px] border-[#EAEAEA] h-[48px] w-[100%] rounded-[8px] p-[15px] outline-none'/>
                    </div>
                    <div className='relative'>
                        <label htmlFor='password' className={(errors.password && touched.password) ? 'text-[#fc8181] block mb-2':'block mb-2 '}>{errors.password && touched.password ?`${errors.password}`:'Password'}</label>
                        <input type={showPassword?'text':'password'} id='password' placeholder='Enter Password' value={values.password} onChange={handleChange} onBlur={handleBlur} className='block text-[#828282] border-[1px] border-[#EAEAEA] h-[48px] w-[100%] rounded-[8px] p-[15px] outline-none'/>
                        <div className='absolute right-[10px] top-[60%] cursor-pointer' onClick={toggleVisibility}>{showPassword?<AiOutlineEye />:<AiOutlineEyeInvisible />}</div>
                        
                    </div>
                    <div className='mb-[32px]'>
                        <div className='mb-2 mt-3 flex items-center gap-[3px]'>
                            <input type='checkbox' id='checkbox' value={values.checkbox} onChange={handleChange} onBlur={handleBlur} className='block'/>
                            {errors.checkbox && touched.checkbox ? <label htmlFor='checkbox' className='text-[#fc8181] block text-[14px] xm:text-[12px] font-regular leading-[16.8px] xm:leading-[18px]'>{errors.checkbox}</label>:<label htmlFor='checkbox' className='text-[14px] xm:text-[12px] font-regular leading-[16.8px] xm:leading-[18px] block '>Accept all<span className='text-[#1453FF] cursor-pointer'> Terms of Service</span> and <span className='text-[#1453FF] cursor-pointer'>Privacy Policy</span></label>}
                        </div>
                        {/* <p className={(errors.checkbox && touched.checkbox) ? 'text-[#fc8181] block mb-2':'block mb-2 '}>{errors.checkbox && touched.checkbox ?`${errors.checkbox}`:''}</p> */}
                    </div>
                    <button type='submit' disabled={isSubmitting} className='disabled:opacity-[35%] font-medium bg-[#1453FF] rounded-[4px] py-3 w-[100%] border-[0.3px] border-[#654DE4] text-[#fff] text-[16px] tracking-[3%] leading-[24px]'>Create account</button>
                    <p className='font-regular leading-[20.8px] text-4 text-[#828282] text-center mt-4 '>Already have an account ? <Link href='/login'><span className='text-[#1453FF] cursor-pointer'>Login</span></Link></p>
                </form>
            </div>
        </section>
    </div>
  )
}

export default Signup