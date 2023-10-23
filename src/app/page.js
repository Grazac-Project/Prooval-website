import Footer from '@/components/footer/footer'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="">
      <section className='relative bg-[#091A29] flex justify-between sm:justify-center sm:flex-wrap pl-[120px] xl:pl-[80px] lg:pl-[50px] md:pl-[25px] sm:pl-[16px] sm:pr-[16px] pb-[120px] sm:pb-[31px] sm:block sm:text-center '>
        <div className=''>
          <h1 className='font-grotesk w-[558px] xl:w-[458px] sm:w-[80%] xm:w-[90%] sm:m-auto sm:mb-[24px] text-[48px] xl:text-[40px] lg:text-[36px] xm:text-[30px] text-[#fff] pt-[137.5px] xl:pt-[47.5px] lg:pt-[27px] pb-6 xl:p-2 leading-[61.25px] md:leading-[40.83px] sm:text-center'>
            You Can Gain Real-Life Experience on Exciting Projects as a Newbie!
          </h1>
          <p className='font-mont w-[558px] xl:w-[408px] sm:w-[80%] xm:w-[90%] sm:m-auto sm:mb-[24px] text-[20px] lg:text-[18px] font-normal leading-[30px] md:leading-[24px] text-[#fff] opacity-80 mb-20 xl:mb-[24px] mt-6 xl:mt-2 sm:text-center'>
            With HacktheJob, you can now walk to a potential employer with 100% confidence
          </p>
          <button className='bg-[#005F70] font-mont text-[18px] leading-[21.94px] font-medium text-[#fff] p-[10px] w-[277px] h-[56px] rounded-lg lg:mb-[20px]'>Join waitlist</button>
        </div>
        <div>
          <Image src='/landinghero.png' width={685} height={834} alt='a guy reading'/>
        </div>
        {/* <div className='sm:pt-[43px] mx-auto w-[90]'> */}
          <Image src='/floatmobi.png' width={343} height={394} alt='floating image' className='hidden sm:block sm:pt-[43px] mx-auto'/>
          <div className='w-[80%] absolute top-[calc(85%)] left-[calc(8%)]'>
            <Image src='/float.png' width={1200} height={237} alt='floating image' className=''/>
          </div>

        {/* </div> */}
      </section>
      {/* <div className='w-[90%] absolute top-[calc(70%)]'>

      <Image src='/float.png' width={1200} height={237} alt='floating image' className=''/>
      </div> */}
      <section className='bg-white flex justify-between sm:justify-center sm:flex-wrap  px-[120px] xl:px-[80px] lg:px-[50px] pt-[150px] sm:pt-[24px] pb-[52px]  items-center '>
        <div className='sm:pb-[24px]'>
          <Image src='/man.png' width={449.69} height={462.5} alt='man holding fone' />
        </div>
        <div >
          <h2 className='font-grotesk font-normal text-[18px] leading-[27px] text-[#33333399] opacity-60 sm:text-center'>
            WHO ARE WE?
          </h2>
          <h3 className='font-grotesk font-medium text-[48px] xl:text-[38px] lg:text-[32px] leading-[72px] lg:leading-[48px] text-[#333333] pt-4 sm:text-center'>
            What to Know <span className='text-[#005F70]'>About Us</span>
          </h3>
          <div className='xm:hidden py-8 lg:py-5 px-4 rounded-[8px] shadow-abc mb-6 mt-7 w-[697.07px] xl:w-[497px] lg:w-[400px]'>
              <h3 className='font-grotesk font-medium text-[24px] leading-9 text-[#333333]'>
                Our Vision
              </h3>
              <p className='w-[665.07px] xl:w-[100%] font-mont font-normal text-[16px] text-[#333] leading-6'>
                Our vision is to bridge the gap between tech novices and experts by connecting aspiring individuals with valuable internship opportunities. We strive to empower newcomers in the tech industry, fostering growth, learning, and real-world experi...
              </p>
          </div>
          <div className='hidden xm:block py-8 lg:py-5 px-4 rounded-[8px] shadow-abc mb-6 mt-7 w-[305px]'>
              <h3 className='font-grotesk font-medium text-[24px] leading-9 text-[#333333]'>
                Our Vision
              </h3>
              <p className='w-[100%] font-mont font-normal text-[16px] text-[#333] leading-6'>
                Our vision is to bridge the gap between tech novices and experts by connecting aspiring individuals with...
              </p>
          </div>
          <div className='xm:hidden py-8 lg:py-5 px-4 rounded-[8px] shadow-abc mb-7 w-[697.07px] xl:w-[497px] lg:w-[400px]'>
            <h3 className='font-grotesk font-medium text-[24px] leading-9 text-[#333333]'>
              Our Mission
            </h3>
            <p className='w-[665.07px] xl:w-[100%] font-mont font-normal text-[16px] text-[#333] leading-6'>
              Our mission is to create a thriving tech community where every enthusiast has access to mentorship, internship opportunities, and hands-on learning experiences. We aim to be the premier destination for tech newcomers, guiding...
            </p>
          </div>
          <div className='hidden xm:block py-8 lg:py-5 px-4 rounded-[8px] shadow-abc mb-7 w-[305px]'>
            <h3 className='font-grotesk font-medium text-[24px] leading-9 text-[#333333]'>
              Our Mission
            </h3>
            <p className='w-[665.07px] xl:w-[100%] font-mont font-normal text-[16px] text-[#333] leading-6'>
              Our mission is to create a thriving tech community where every enthusiast has access to mentorship, internship...
            </p>
          </div>
          <button className='bg-[#005F70] text-[18px] text-[#fff] font-mont leading-[21.94px] rounded-[8px] w-[277px] sm:w-[100%] h-[56px]'>
            Learn more
          </button>
        </div>
      </section>
      <section className='flex xm:block items-end justify-between sm:justify-center sm:flex-wrap  bg-[#F9F9F9] text-[#333333] pl-[120px] xl:pl-[80px] lg:pl-[50px] md:pl-[25px] pr-[60px] xl:pr-[30px] lg:pr-0'>
        <div className='mb-[67px] md:mb-[10px]'>
          <h3 className='font-grotesk font-normal text-[18px] leading-[27px] opacity-60 mb-4 mt-[78px] xm:mt-[0] xm:pt-4 xm:text-center'>GET STARTED</h3>
          <h4 className='font-grotesk font-medium text-[48px] xl:text-[40px] lg:text-[36px] xm:text-[32px] leading-[72px] xl:leading-[60px] lg:leading-[55px] xm:leading-[48px] mb-6 w-[526px] xl:w-[460px] lg:w-[400px] xm:w-[100%] xm:text-center'>Join us in 3 easy steps</h4>
          <div className='flex gap-6'>
            <div className='w-[41px] flex items-center justify-center flex-col'>
              <p className='font-grotesk font-medium text-[32px] leading-[48px] text-[#005F70] w-10'>01</p>
              <Image src={'/line.png'} width={23} height={151} alt='line' />
            </div>
            <div className='w-[323px] md:w-[300px]'>
              <h4 className='font-grotesk font-bold text-[24px] md:text-[20px] leading-9 md:leading-[30px]'>Click on “Join Waitlist”</h4>
              <p className='font-mont font-normal text-[16px] leading-6'>To join us, all you need to do is fill the waitlist form with the correct information, 
                  watch out for our response and attend our webinar
              </p>
            </div>
          </div>
          <div className='flex gap-6'>
            <div className='w-[41px] flex items-center justify-center flex-col'>
              <p className='font-grotesk font-medium text-[32px] leading-[48px] text-[#005F70] w-10'>02</p>
              <Image src={'/line.png'} width={23} height={151} alt='line' />
            </div>
            <div className='w-[323px] md:w-[300px]'>
              <h4 className='font-grotesk font-bold text-[24px] md:text-[20px] leading-9 md:leading-[30px]'>Fill in the right details</h4>
              <p className='font-mont font-normal text-[16px] leading-6'>
                To join us, all you need to do is fill the waitlist form with the correct information, 
                watch out for our response and attend our webinar
              </p>
            </div>
          </div>
          <div className='flex gap-6'>
            {/* <div className='w-[41px] flex items-center justify-center flex-col'> */}
              <p className='font-grotesk font-medium text-[32px] leading-[48px] text-[#005F70] w-10'>03</p>
              {/* <Image src={'/line.png'} width={23} height={151} alt='line' /> */}
            {/* </div> */}
            <div className='w-[323px] md:w-[300px]'>
              <h4 className='font-grotesk font-bold text-[24px] md:text-[20px] text-[#333] leading-9 md:leading-[30px]'>Join the screening</h4>
              <p className='font-mont font-normal text-[16px] leading-6'>To join us, all you need to do is fill the waitlist form with the correct information, 
                  watch out for our response and attend our webinar
              </p>
            </div>
          </div>
        </div>
        <div className=''>
          <Image src='/iPhone.png' width={979.76} height={725.96} alt='iPhone' className='block sm:hidden'/>
          <Image src='/iPhonesmall.png' width={339} height={387} priority alt='iPhone on mobile screen' className='hidden sm:block sm:mt-5 pb-[50px]'/>
        </div>
      </section>
      <Footer />
    </main>
  )
}
