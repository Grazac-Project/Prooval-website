'use client'
import React, {useState} from 'react'
import AuthSide from '@/components/authSide/page'
import Image from 'next/image'

const Expertise = () => {
    const [selectedItemIndex, setSelectedItemIndex] = useState(null);
    const flexData = [
        {img: '/coding.png', text: 'Back-end Developer'},
        {img: '/coding.png', text: 'Mobile App Developer'},
        {img: '/coding.png', text: 'Front end Developer'},
        {img: '/design.png', text: 'UI/UX Developer'},
        {img: '/coding.png', text: 'Product Manager'},
    ]
  return (
    // <section className='px-10 xxl:px-5 xl:px-2 md:px-20 sm:px-[100px] xm:px-[16px] py-[36px] xxl:py-[30px] xl:py-[20px] flex gap-[79px] xxl:gap-[40px] xl:gap-[20px] md:justify-around'>
    //     <div className='w-[553px] xxl:w-[100%] xl:px-6'>
    //         <Image src='/hack-logo.png' width={180} height={52} className='cursor-pointer mb-[94px] xl:mb-[25px]'/>
    //         <h1 className='font-medium text-8 leading-[41.6px] text-[#2A2A2A] mb-2'>Choose expertise</h1>
    //         <p className='font-regular text-4 leading-[20.8px] text-[#828282] mb-[69px] xl:mb-[36px]'>We will like you to choose your niche to help us team you up with like minds. </p>
    //         <div className='flex flex-wrap gap-3'>
    //             {
    //                 flexData.map((item, index) => {
    //                     return(<div key={index} className='w-[259px] sm:w-[165.5px] xxm:w-[100%] h-[112px] rounded-[5.17px] bg-[#fcfcfc] border-[1px] pl-3 cursor-pointer'>
    //                                 <Image src={`${item.img}`} width={20} height={20} alt='' className='mt-[23.5px] mb-[24px]'/>
    //                                 <p className='mb-[23.5px] font-regular text-[14px] leading-[16.8px] text-[#333333]'>{item.text}</p>
    //                             </div>)
    //                 })
    //             }
    //         </div>
    //         <button className='w-[100%] h-[48px] bg-[#1453FF] text-[#ffffff] font-medium text-[16px] mt-[87px] lg:mt-[50px]'>Get started</button>
    //     </div>
    //     <div className='w-[728px] md:hidden'>
    //         <AuthSide />
    //     </div>
    // </section>
    <div className='min-h-screen  bg-[#EFF6FF] xm:bg-[#fff]'>
            <div className='bg-[#fff] border-b-[1px] xm:border-b-[0px] border-b-[#1453FF]'>
                <Image src='/hack-logo.png' width={180} height={52} className='cursor-pointer mx-auto xm:m-[0px] py-[20px] xm:pb-[0px] xm:px-4'/>
            </div>
        <section className='font-whyte py-[55px] xm:py-[0px] h-full'>
            <div className='w-[603px] md:w-[90%] xm:w-[100%] bg-[#fff] p-[32px] sm:p-[16px] xm:py-[32px] rounded-[8px] mx-auto'>
                <h1 className='text-[32px] font-medium leading-[41.6px] text-[#2A2A2A] mb-2 xm:mt-0 text-center xm:text-start'>Choose expertise</h1>
                <p className='font-regular text-[16px] leading-[20.8px] text-[#828282] mb-[32px] text-center sm:text-start'>We will like you to choose your niche to help us team you up with like minds.</p>
                    <div className=' flex flex-wrap gap-3'>
                        {
                            flexData.map((item, index) => {
                                return(<div key={index} style={{border: selectedItemIndex === index?'1px solid #1453FF':'1px solid #EAEAEA'}} className={`w-[259px] sm:w-[165.5px] sxm:w-[100%] h-[112px] rounded-[5.17px] bg-[#fcfcfc] pl-3 cursor-pointer`} onClick={() => setSelectedItemIndex(index)}>
                                            <Image src={`${item.img}`} width={20} height={20} alt='' className='mt-[23.5px] mb-[24px]'/>
                                            <p className='mb-[23.5px] font-regular text-[14px] leading-[16.8px] text-[#333333]'>{item.text}</p>
                                        </div>)
                            })
                        }
                    </div>
                    <button className='w-[100%] h-[48px] bg-[#1453FF] text-[#ffffff] font-medium text-[16px] mt-[40px] lg:mt-[50px] xm:mt-[123px]'>Get started</button>
            </div>
        </section>
    </div>
  )
}

export default Expertise