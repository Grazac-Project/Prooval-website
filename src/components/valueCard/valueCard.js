import Image from 'next/image'

const ValueCard = () => {
  return (
    <div className='flex flex-wrap gap-[24px] justify-around'>
      <div className='w-[829px] xxl:w-[650px] lgx:w-[523px] lg:w-[100%] rounded-[8px] px-[15px] pt-[48px] bg-[#070B14] hover:bg-[#1453FF] relative'>
        <Image src='/card1.png' width={56} height={57} alt='gvh' />
        <h4 className='font-medium text-[24px] leading-[36px] text-[#FBFCFD] pt-8 pb-4 '>
          Frequent Assessment
        </h4>
        <p className='font-regular text-[16px] text-[#D1D1D1] leading-[24px] pb-[80px]'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. 
          Duis cursus, mi quis viverra ornaretum  
        </p>
        <Image src='/value1.png' width={324} height={131} alt='background image' className='absolute top-0 right-0 sm:hidden'/>
        <Image src='/value-mobile.png' width={202} height={101} alt='background image' className='absolute top-0 right-0 hidden sm:block'/>
      </div>
      <div className='w-[427px] lg:w-[100%] rounded-[8px] px-[15px] pt-[48px] bg-[#070B14] hover:bg-[#1453FF] relative'>
        <Image src='/card2.png' width={56} height={57} alt='gvh' />
        <h4 className='font-medium text-[24px] leading-[36px] text-[#FBFCFD] pt-8 pb-4 '>
          Frequent Assessment
        </h4>
        <p className='font-regular text-[16px] text-[#D1D1D1] leading-[24px] pb-[56px]'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. 
          Duis cursus, mi quis viverra ornaretum . 
        </p>
        <Image src='/value2.png' width={220} height={140} alt='background image' className='absolute top-0 right-0 sm:hidden'/>
        <Image src='/value-mobile.png' width={202} height={101} alt='background image' className='absolute top-0 right-0 hidden sm:block'/>
      </div>
      <div className='w-[427px] lg:w-[100%] rounded-[8px] px-[15px] pt-[48px] bg-[#070B14] hover:bg-[#1453FF] relative'>
        <Image src='/card3.png' width={56} height={57} alt='gvh' />
        <h4 className='font-medium text-[24px] leading-[36px] text-[#FBFCFD] pt-8 pb-4 '>
          Frequent Assessment
        </h4>
        <p className='font-regular text-[16px] text-[#D1D1D1] leading-[24px] pb-[51px]'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. 
          Duis cursus, mi quis viverra ornare. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare. 
        </p>
        <Image src='/value2.png' width={220} height={140} alt='background image' className='absolute top-0 right-0 sm:hidden'/>
        <Image src='/value-mobile.png' width={202} height={101} alt='background image' className='absolute top-0 right-0 hidden sm:block'/>
      </div>
      <div className='w-[829px] xxl:w-[650px] lgx:w-[523px] lg:w-[100%] rounded-[8px] px-[15px] pt-[48px] bg-[#070B14] hover:bg-[#1453FF] relative'>
        <Image src='/card4.png' width={56} height={57} alt='gvh' />
        <h4 className='font-medium text-[24px] leading-[36px] text-[#FBFCFD] pt-8 pb-4 '>
          Frequent Assessment
        </h4>
        <p className='font-regular text-[16px] text-[#D1D1D1] leading-[24px] pb-[80px]'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. 
          Duis cursus, mi quis viverra ornare. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare. 
        </p>
        <Image src='/value1.png' width={324} height={131} alt='background image' className='absolute top-0 right-0 sm:hidden'/>
        <Image src='/value-mobile.png' width={202} height={101} alt='background image' className='absolute top-0 right-0 hidden sm:block'/>
      </div>
    </div>
    
  )
}

export default ValueCard