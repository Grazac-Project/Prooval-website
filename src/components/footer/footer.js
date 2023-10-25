import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='bg-[#0A1A2A]'>
        <div className='flex xxl:gap-[40px] xl:gap-[10px] justify-between sm:justify-center xm:justify-start sm:flex-wrap sm:flex-col-reverse bg-[#0A1A2A] px-[120px] xl:px-[80px] lg:pl-[60px] md:pl-[25px] lg:pr-[30px] pt-[86px] xl:pt-[66px] md:pt-[40px] mb-[168px] sm:mb-[29px] text-[#fff]'>
            <div className=''>
                <Link href='/'>
                    <p className='w-[188px] h-[48px] font-grotesk font-bold text-[32px] leading-[48px] text-[#fff]'>
                        Hack<span className='font-medium text-[#005F70]'>the</span>Jobs
                    </p>
                </Link>
                <p className='h-8 flex gap-4 mt-[10px]'>
                    <Image src='/gmail.png' width={32} height={32} alt='gmail logo' className='cursor-pointer'  />
                    <Image src='/instagram.png' width={32} height={32} alt='instagram logo' className='cursor-pointer' />
                    <Image src='/youtube.png' width={32} height={32} alt='youtube logo' className='cursor-pointer' />
                    <Image src='/twitter.png' width={32} height={32} alt='twitter logo' className='cursor-pointer' />
                </p>
                <div className='flex gap-[10px] pt-[64px] sm:pt-[32px] sm:gap-[111px] xm:gap-[50px] '>
                    <ul>
                        <Link href='/aboutUs'><li className='font-mont text-base xl:text-sm font-medium xl:font-normal w-max cursor-pointer'>About us</li></Link>
                        <li className='font-mont text-base xl:text-sm font-medium xl:font-normal w-max my-[16px] cursor-pointer'>How it works</li>
                        <li className='font-mont text-base xl:text-sm font-medium xl:font-normal w-max mb-[16px] cursor-pointer'>Privacy Policy</li>
                        <li className='font-mont text-base xl:text-sm font-medium xl:font-normal w-max cursor-pointer'>Jobs</li>
                    </ul>
                    <ul className=''>
                        <li className='font-mont text-base xl:text-sm font-medium xl:font-normal w-max cursor-pointer'>Terms & Conditions</li>
                        <li className='font-mont text-base xl:text-sm font-medium xl:font-normal w-max my-[16px] cursor-pointer'>Contact us</li>
                        <li className='font-mont text-base xl:text-sm font-medium xl:font-normal w-max mb-[16px] cursor-pointer'>FAQs</li>
                        <li className='font-mont text-base xl:text-sm font-medium xl:font-normal w-max cursor-pointer'>Testimonies</li>
                    </ul>
                </div>
                <p className='hidden sm:block sm:mt-[32px] font-mont md:font-normal text-[14px] font-medium leading-[21px]'>Manage privacy settings</p>
            </div>
            <div className='w-[750px] xl:w-[600px] lg:w-[500px] md:w-[350px] xm:w-[100%]'>
                <h5 className='font-grotesk text-[48px] xl:text-[40px] lg:text-[30px] md:text-[24px] leading-[72px] xl:leading-[50px] lg:leading-[40px] md:leading-[36px]'>Take your skills to the next level by joining us</h5>
                <Link href='/waitList'><button className='bg-[#005F70] hover:bg-white font-mont text-[18px] leading-[21.94px] font-medium text-[#fff] hover:text-[#005F70] p-[10px] w-[277px] xm:w-[100%] h-[56px] lg:h-[48px] rounded-lg mt-6 mb-[64px] lg:mb-[20px] sm:mb-[64px]  '>Start now</button></Link>
                <p className='block sm:hidden font-mont md:font-normal text-[14px] font-medium leading-[21px]'>Manage privacy settings</p>
            </div>
        </div>
        <hr className='w-[83.3%] mx-auto mb-[19px]'/>
        <p className='font-mont text-base md:text-xs font-medium text-[#fff] opacity-80 text-center pb-[41px] px-[120px] xl:px-[80px]'>
            &copy; Copyright 2023, All Rights Reserved by HacktheJobs
        </p>
        
    </footer>
  )
}

export default Footer