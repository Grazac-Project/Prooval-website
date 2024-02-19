import Image from 'next/image'
import React from 'react'

const ValueCard = () => {
  return (
    <div className='w-[627px] h-[295px] rounded-[8px] border-[1px] border-[#EAEAEA] bg-[#FBFCFD] px-[22px] py-[32px]'>
        <Image src='/card1.png' width={56} height={56} alt='gvh' />
        <h4 className='font-medium text-[24px] leading-[36px] text-[#121927] pt-8 pb-4 '>
          Frequent Assessment
        </h4>
        <p className='font-regular text-[16px] text-[#4F4F4F] leading-[24px]'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. 
          Duis cursus, mi quis viverra ornare. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare. 
        </p>
    </div>
  )
}

export default ValueCard