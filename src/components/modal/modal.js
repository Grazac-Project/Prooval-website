import Image from 'next/image'

const Modal = ({modalClose}) => {
  return (
    <section className=' relative'>
        <div className='bg-[black] opacity-[60%] h-screen w-100% z-[1000]' onClick={modalClose}></div>
        <div className='w-[720px] lg:w-[600px] md:w-[85%] h-[436px] sm:h-[400px] mx-auto bg-[#fff] rounded-[24px] border-solid border-[1px] border-[#fff] z-[9900] absolute top-[calc(20%)] xl:top-[calc(30%)] lg:top-[calc(20%)] md:top-[calc(20%)] sm:top-[calc(15%)] left-[calc(25%)] xl:left-[calc(17%)] lg:left-[calc(14%)] md:left-[calc(14%)] sm:left-[calc(10%)]'>
            <Image src='/confirm.png' width={120} height={120} alt='confirm' className='mx-auto pt-[98.5px] sm:pt-[50px] pb-[10px]' />
            <h4 className='font-inter font-bold text-[32px] lg:text-[30px] md:text-[28px] leading-[40.83px] lg:leading-[38px] md:leading-[36px] text-[black] text-center'>Registration Confirmed</h4>
            <p className='font-inter font-normal text-base text-center pb-[126.5px] sm:pb-[70px] sm:px-[20px]'>Thank you for joining our waitlist, be sure to check your email for any updates.</p>
        <span className='text-[24px] absolute top-[20px] right-[20px] text-[#373737] z-[10001] cursor-pointer' onClick={modalClose}>&times;</span>
        </div>
        
        
    </section>
  )
}

export default Modal