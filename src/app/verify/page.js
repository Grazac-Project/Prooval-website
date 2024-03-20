'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Verify = () => {
  const [firstName, setFirstName] = useState(null)
  const [email, setEmail] = useState(null)
  useEffect(() => {
    let data = sessionStorage.getItem("user_data");
  const name = JSON.parse(data).name;
  const email = JSON.parse(data).email
  setFirstName(name)
  setEmail(email)
  // userId = JSON.parse(details).id;
  console.log('name', name);
  console.log('firstName', firstName);
  console.log('email', email);
  }, [])
  return (
    <div className='min-h-screen font-whyte bg-[#EFF6FF] xm:bg-[#fff] '>
        <div className='bg-[#fff] border-b-[1px] xm:border-b-[0px] border-b-[#1453FF]'>
            <Link href='/'><Image src='/hack-logo.png' width={180} height={52} className='cursor-pointer mx-auto xm:m-[0px] py-[20px] xm:pb-[0px] xm:px-4'/></Link>
        </div>
        {/* <div className=' flex xm:block justify-center items-center h-full'> */}
        <div className='my-[140px] 1xl:my-[100px] xl:my-[80px] lgx:my-[50px] xm:my-[0]'>
            <div className='p-[32px] xm:px-[16px] max-w-[614px] min-h-[297px] border-[1px] border-[#fff] bg-[#fff] mx-auto '>
                <h1 className='font-medium text-[32px] leading-[41.6px] text-[#2A2A2A] text-center xm:text-start pb-[8px] xm:pb-[16px]'>Verify your email</h1>
                <p className='font-regular text-[16px] text-[#828282] leading-[25.44px] text-center xm:text-start pb-[48px] xm:pb-[479px]'>Hi {firstName}! verification link has been sent to <span className='text-[#2A2A2A]'>{email}</span></p>
                <button className='w-[100%] rounded-[4%] bg-[#1453FF] border-[0.3px] border-[#654DE4] text-[#fff] py-[12px]'>Verify email</button>
                <p className='font-regular leading-[20.8px] text-4 text-[#828282] text-center mt-4 '>Already have an account ? <Link href='/login'><span className='text-[#1453FF] cursor-pointer'>Login</span></Link></p>
            </div>
        </div>
    </div>
  )
}

export default Verify