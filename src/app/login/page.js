'use client'
import React, {useState} from 'react'
import { FcGoogle } from "react-icons/fc";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Login = () => {
    const [hidePassword, setHidePassword] = useState(false)
    const toggleVisibility = () => {
        setHidePassword(prev => !prev)
    }
  return (
    <section className='font-inter px-10 py-9'>
        <div className='w-[552px]'>
            <h1 className='text-[32px] font-medium leading-[32px] text-[#2A2A2A] mb-2'>Create an Account</h1>
            <p className='font-regular text-4 leading-[19.36px] text-[#828282] mb-12'>We are happy to have you back. Provide the correct information</p>
            <button className='flex justify-center items-center w-[100%] text-[#2A2A2A] text-[16px] leading-[19.36px] font-medium border-[1px] h-[47px]'><FcGoogle className='mr-[0.5px] text-[20px]'/> Signup with Google</button>
            <p className='text-[14px] leading-[16.94px] font-regular py-10'>or</p>
            <div className='text-[#333]'>
                <div className='flex gap-3 mb-8'>
                    <div>
                        <label htmlFor='firstName' className='block mb-2'>First name</label>
                        <input type='text' id='firstName' placeholder='Enter firstname' className='block text-[#828282] border-[1px] h-[48px] w-[270px] rounded-[8px] p-[15px] '/>
                    </div>
                    <div>
                        <label htmlFor='lastName' className='block mb-2'>Last name</label>
                        <input type='text' id='lastName' placeholder='Enter lastname' className='block text-[#828282] border-[1px] h-[48px] w-[270px] rounded-[8px] p-[15px]'/>
                    </div>
                </div>
                <div className='mb-8'>
                    <label htmlFor='email' className='block mb-2'>Email Address</label>
                    <input type='text' id='email' placeholder='Enter email address' className='block text-[#828282] border-[1px] h-[48px] w-[100%] rounded-[8px] p-[15px]'/>
                </div>
                <div className='relative'>
                    <label htmlFor='password' className='block mb-2'>Password</label>
                    <input type={hidePassword?'password':'text'} id='password' placeholder='Enter Password' className='block text-[#828282] border-[1px] h-[48px] w-[100%] rounded-[8px] p-[15px]'/>
                    <div className='absolute right-[10px] top-[60%]' onClick={toggleVisibility}>{hidePassword?<AiOutlineEyeInvisible />:<AiOutlineEye />}</div>
                </div>
                <div className='mb-12 mt-3'>
                    <input type='checkbox' id='checkbox'/>
                    <label htmlFor='checkbox' className='text-[14px] font-regular leading-[21px]'>Accept all<span className='text-[#6E4AFF]'> Terms of Service</span> and <span className='text-[#6E4AFF]'>Privacy Policy</span></label>
                </div>
                <button className='bg-[#6E4AFF] rounded-[4px] py-3 w-[100%] text-[#fff]'>Create account</button>
                <p className='font-medium leading-[19.36px] text-4 text-[#828282] text-center mt-4 '>Already have an account ? <span className='text-[#6E4AFF]'>Login</span></p>
            </div>
        </div>
        <div></div>
    </section>
  )
}

export default Login