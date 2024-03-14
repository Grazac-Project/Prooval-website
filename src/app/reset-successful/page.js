// "use client";

// import React from "react";
// import Image from "next/image";
// import Classes from "./sucess.module.css";

// const page = () => {
//   return (
//     <div className={Classes.container}>
//       <div>
//         <Image
//           src="/hack-log.png"
//           alt="icon"
//           width={164.204}
//           height={36}
//           style={{ margin: "40px" }}
//         />
//         <div className={Classes.innerContainer}>
//           <div className={Classes.content}>
//             <Image
//               src="verify.svg"
//               alt="icon"
//               width={100.75}
//               height={100.75}
//               style={{ margin: "auto" }}
//             />
//             <h3>Password reset successful</h3>
//             <p>
//               We are happy to have you back. Provide the correct information
//             </p>
//             <button className={Classes.btn}> Login </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default page;


import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Verify = () => {
  return (
    <div className='h-screen font-whyte bg-[#EFF6FF] xm:bg-[#fff] '>
        <div className='bg-[#fff] border-b-[1px] xm:border-b-[0px] border-b-[#1453FF]'>
            <Link href='/'><Image src='/hack-logo.png' width={180} height={52} className='cursor-pointer mx-auto xm:m-[0px] py-[20px] xm:pb-[0px] xm:px-4'/></Link>
        </div>
        {/* <div className=' flex xm:block justify-center items-center h-full'> */}
        <div className=''>
            <div className='p-[24px] xm:px-[16px] max-w-[614px] min-h-[297px] border-[1px] border-[#fff] bg-[#fff] mx-auto my-[200px] xm:my-[158px] xm:text-center'>
                <Image src='/verify.svg' width={102} height={102} alt='success logo' className='mx-auto mb-[32px]' />
                <h1 className='font-medium text-[32px] leading-[41.6px] text-[#2A2A2A] text-center pb-[12px] xm:pb-[16px]'>Password reset successful</h1>
                <p className='font-regular text-[16px] text-[#828282] leading-[25.44px] text-center pb-[32px]'>We are happy to have you back. Provide the correct information</p>
                <Link href='/login'><button className='w-[100%] h-[48px] rounded-[4%] bg-[#1453FF] border-[0.3px] border-[#654DE4] text-[#fff]'>Login</button></Link>
            </div>
        </div>
    </div>
  )
}

export default Verify
