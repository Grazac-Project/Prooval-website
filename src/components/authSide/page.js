import React from 'react'
import Image from 'next/image'

const AuthSide = () => {
  return (
    <section className='font-whyte pl-[52px] pr-[68px] text-[#fff] bg-[#1453FF] h-[100vh] relative'>
        <Image src='/pattern.svg' width={768} height={952} className='absolute'/>
        <Image src='/star.svg' width={80} height={80} className='absolute top-[260px] left-[52px]'/>
        <h2 className='w-[100%] text-[60px] leading-[72px] font-medium pb-[24px] pt-[388px] z-100'>
            Skill Up, Connect, and Hack Your Success!
        </h2>
        <p className='text-[20px] w-[618px] leading-[28px] font-regular'>
            Embark on a transformative journey with Hackthejobs, where you can unlock your full potential through curated learning paths.
        </p>
    </section>
  )
}

export default AuthSide