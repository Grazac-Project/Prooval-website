'use client' // Error boundaries must be Client Components
 
import Image from 'next/image';
import { useEffect } from 'react'
 
export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  

  return (
    <div className="min-h-screen  bg-[#EFF6FF] xm:bg-[#fff]">
      <div className=" ">
        <a href="/">
          <Image
            src="/hack-logo.png"
            alt="hack the jobs logo"
            width={180}
            height={52}
            className="cursor-pointer mx-auto xm:m-[0px] py-[20px] xm:pb-[0px] xm:px-4"
          />
        </a>
      </div>

      <div className="font-whyte modal w-[447px] sm:w-[343px] xm:w-[90%]  md:w-[90%] h-fit-screen p-[24px] mt-[32px] mx-auto bg-[#fff] rounded-[16px] border-solid border-[1px] border-[#fff] z-5 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col justify-center items-center gap-[2px] mb-[8px]">
          
          <h4 className="font-medium text-[32px] leading-[130%] text-center text-[#121927] mb-[8px]">
            Opps! 
          </h4>
          <p className="font-regular text-[16px] leading-[20.8px] sm:leading-[24.8px] text-[#555555] text-center mb-[40px]">
           Something went wrong.
          </p>
          <button
            className="w-[275px] xm:w-[90%]  h-[46px]  font-whyte text-[16px] text-[#fff] font-medium bg-[#1453FF] leading-[150%] tracking-[3%] rounded-[8px]"
            onClick={
              // Attempt to recover by trying to re-render the segment
              () => reset()
            }
          >
            Try Again
          </button>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};


