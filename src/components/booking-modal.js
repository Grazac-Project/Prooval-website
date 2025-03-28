
// import Image from 'next/image';
// import React, { useEffect, useState } from 'react';

// const BookSession = ({ closeModal, mentorId, mentorImage }) => {
//   const [bookingData, setBookingData] = useState({});
//   const [loading, setLoading] = useState(false);

//   return (
//     <div>
//       <div className='font-whyte'>
//         <div
//           className="bg-[#344054B2] opacity-[0.7] w-[100%] h-full fixed top-0 left-[0]"
//           onClick={closeModal}
//         ></div>
//         <div className="bg-[#fff] max-w-[442px] md:max-w-full p-8 sm:p-3 pb-[277px] sm:pb-[41px] flex flex-col fixed z-50">
//             <Image src='/booking-successful.png' width={57} height={57} alt='success' />
//             <h3 className='font-medium font-bold text-[24px] text-[#121927] leading-[11.71px] py-[16px]'>Session Booked</h3>
//             <p className='font-regular text-[16px] text-[#555555] leading-[24px]'>You've successfully booked a {15}-minute session with {'John Foe'} on {'Monday, August 7th, 2024'}, from {'3:00 PM to 3:15 PM'}.</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BookSession;
"use client"

import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const BookingModal = ({ successModal, mentor }) => {
  const [bookingData, setBookingData] = useState({});
  const [loading, setLoading] = useState(false);

  

  return (
    <div className="relative">
      <div
        className="fixed inset-0 bg-[#344054B2] opacity-[0.7] z-40"
        onClick={successModal}
      ></div>
      <div className="fixed inset-0 flex items-center justify-center z-50 p-4 sm:p-6 md:p-8">
        <div className="bg-[#fff] w-[447px] h-[291px]  md:max-w-full p-8 sm:p-6 pb-[277px] sm:pb-[41px] flex flex-col items-center text-center rounded-[8px]">
          <Image src='/sucess.svg' width={57} height={57} alt='success' />
          <h3 className='font-medium font-bold text-[24px] text-[#121927] leading-[11.71px] py-[16px]'>Session Booked</h3>
          <p className='font-regular text-[16px] text-[#555555] leading-[24px] mb-[20px]'>
            Your booking with {mentor.firstName} {mentor.lastName} was successful. A confirmation email has been sent to your inbox.
          </p>
          <button className='w-[76px] h-[44px] rounded-[8px] border-[1px] px-[20px] py-[12px] font-medium bg-[#1453FF] text-[14px] text-[#fff] leading-[19.6px] tracking-[2%] mx-auto' onClick={closeModal}>Done</button>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;

