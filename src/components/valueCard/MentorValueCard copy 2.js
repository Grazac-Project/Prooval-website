import Image from 'next/image'
import { useState } from 'react'

const ValueCard = () => {
  const [changeHover, setChangeHover] = useState(false)
  const [changeHover1, setChangeHover1] = useState(false)
  const [changeHover2, setChangeHover2] = useState(false)
  const [changeHover3, setChangeHover3] = useState(false)

  const handleHover = () => {
    setChangeHover(true)
  }
  const handleHoverOut = () => {
    setChangeHover(false)
  }
  const handleHover1 = () => {
    setChangeHover1(true)
  }
  const handleHoverOut1 = () => {
    setChangeHover1(false)
  }
  const handleHover2 = () => {
    setChangeHover2(true)
  }
  const handleHoverOut2 = () => {
    setChangeHover2(false)
  }
  const handleHover3 = () => {
    setChangeHover3(true)
  }
  const handleHoverOut3 = () => {
    setChangeHover3(false)
  }
  return (
    <div className='w-[100%] flex flex-wrap justify-center gap-[24px] xl:gap-[14px]'>
     {/* <div className='flex flex-wrap gap-[24px]  '> */}
      <div className=' w-[63.77%] xxl:w-[60%] lg:w-[48%] sm:w-[100%] rounded-[8px] px-[15px] pt-[48px] bg-[#070B14] hover:bg-[#1453FF] relative' onMouseOver={handleHover} onMouseOut={handleHoverOut}>
        <Image src='mentor-icon1.svg' width={56} height={57} alt='gvh' />
        <h4 className='font-medium text-[24px] leading-[36px] text-[#FBFCFD] pt-8 pb-4 '>
        Make Your Mark in the Tech Industry
        </h4>
        <p className='font-regular text-[16px] text-[#D1D1D1] leading-[24px] pb-[80px]'>
        As a Senior Product Manager, you’ll have the chance to leave a lasting legacy on the future of tech talent development in the continent. 
        </p>
        <Image style={{filter: changeHover ? 'none' : 'grayscale(100%)'}} src='/value1.png' width={324} height={131} alt='background image' className='absolute top-0 right-0 sm:hidden filter grayscale opacity-[0.3]'/>
        <Image style={{filter: changeHover ? 'none' : 'grayscale(100%)'}} src='/value-mobile.png' width={202} height={101} alt='background image' className='absolute top-0 right-0 hidden sm:block filter grayscale opacity-[0.3]' />
      </div>
      <div className=' w-[33.36%] xxl:w-[36%] lg:w-[48%] sm:w-[100%] rounded-[8px] px-[15px] pt-[48px] bg-[#070B14] hover:bg-[#1453FF] relative' onMouseOver={handleHover1} onMouseOut={handleHoverOut1}>
        <Image src='mentor-icon2.svg' width={56} height={57} alt='gvh' />
        <h4 className='font-medium text-[24px] leading-[36px] text-[#FBFCFD] pt-8 pb-4 '>
        Drive Social Impact
        </h4>
        <p className='font-regular text-[16px] text-[#D1D1D1] leading-[24px] pb-[56px]'>
        Your work will directly contribute to creating opportunities for bootcamp graduates, helping them gain experience and skills needed to land a job in the tech industry.
        </p>
        <Image style={{filter: changeHover1 ? 'none' : 'grayscale(100%)'}} src='/value2.png' width={220} height={140} alt='background image' className='absolute top-0 right-0 sm:hidden filter grayscale opacity-[0.3]'/>
        <Image style={{filter: changeHover1 ? 'none' : 'grayscale(100%)'}} src='/value-mobile.png' width={202} height={101} alt='background image' className='absolute top-0 right-0 hidden sm:block filter grayscale opacity-[0.3]'/>
      </div>
      <div className='w-[33.36%] xxl:w-[36%] lg:w-[48%] sm:w-[100%] rounded-[8px] px-[15px] pt-[48px] bg-[#070B14] hover:bg-[#1453FF] relative' onMouseOver={handleHover2} onMouseOut={handleHoverOut2}>
        <Image src='mentor-icon3.svg' width={56} height={57} alt='gvh' />
        <h4 className='font-medium text-[24px] leading-[36px] text-[#FBFCFD] pt-8 pb-4 '>
        Collaborate with Passionate Professionals
        </h4>
        <p className='font-regular text-[16px] text-[#D1D1D1] leading-[24px] pb-[51px]'>
          Be part of a team of like-minded individuals who are passionate about education, technology, and making a difference.
        </p>
        <Image style={{filter: changeHover2 ? 'none' : 'grayscale(100%)'}} src='/value2.png' width={236} height={155} alt='background image' className='absolute top-0 right-0 sm:hidden filter grayscale opacity-[0.3]'/>
        <Image style={{filter: changeHover2 ? 'none' : 'grayscale(100%)'}} src='/value-mobile.png' width={202} height={101} alt='background image' className='absolute top-0 right-0 hidden sm:block filter grayscale opacity-[0.3]'/>
      </div>
      <div className='w-[63.77%] xxl:w-[60%] lg:w-[48%] sm:w-[100%] rounded-[8px] px-[15px] pt-[48px] bg-[#070B14] hover:bg-[#1453FF] relative' onMouseOver={handleHover3} onMouseOut={handleHoverOut3}>
        <Image src='mentor-icon4.svg' width={56} height={57} alt='gvh' />
        <h4 className='font-medium text-[24px] leading-[36px] text-[#FBFCFD] pt-8 pb-4 '>
        Shape the Future of Workforce Development
        </h4>
        <p className='font-regular text-[16px] text-[#D1D1D1] leading-[24px] pb-[80px]'>
        You’ll be part of those developing innovative solutions that address the challenges faced by entry-level talents in Africa.

        </p>
        <Image style={{filter: changeHover3 ? 'none' : 'grayscale(100%)'}} src='/value1.png' width={324} height={130} alt='background image' className='absolute top-0 right-0 sm:hidden filter grayscale opacity-[0.3]'/>
        <Image style={{filter: changeHover3 ? 'none' : 'grayscale(100%)'}} src='/value-mobile.png' width={202} height={101} alt='background image' className='absolute top-0 right-0 hidden sm:block filter grayscale opacity-[0.3]'/>
      </div>
    </div>
    
  )
}

export default ValueCard