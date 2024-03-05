import Image from "next/image";
import Link from "next/link";
import Classes from "./footer.module.css";

const Footer = () => {
  return (
    // <footer className={Classes.footer}>
    //   <div className={Classes.innerContainer}>
    //     <div className={Classes.flex1}>
    //       <p>Copyright@ 2024</p>
    //       <p>hackthejobs.com</p>
    //       <p>Terms of Service</p>
    //       <p>All rights reserved.</p>
    //     </div>
    //     <div className={Classes.social}>
    //       <Image src="./twitter.svg" width="24" height="24" alt="icon" />
    //       <Image src="./instagram.svg" width="24" height="24" alt="icon" />
    //       <Image src="./linkledn.svg" width="24" height="24" alt="icon" />
    //       <Image src="./mail.svg" width="24" height="24" alt="icon" />
    //     </div>
    //   </div>
    // </footer>
    <footer className='font-whyte px-[592.5px] 2xl:px-[80px] xl:px-[25px] xm:px-[16px]'>
      <div className="flex sm:flex-col justify-between sm:gap-[32px]">
        <div className="pb-[64px] xm:pb-[24px] sm:order-3">
          <Image src='/footer-logo.png' width={165} height={36} alt="hackthejobs logo" />
          <ul className="flex xm:flex-col gap-[32px] xm:gap-[16px] pt-[32px]">
            <li className="font-regular text-[16px] leading-[20.8px] text-[#4F4F4F]">Home</li>
            <li className="font-regular text-[16px] leading-[20.8px] text-[#4F4F4F]">About</li>
            <li className="font-regular text-[16px] leading-[20.8px] text-[#4F4F4F]">FAQ</li>
          </ul>
        </div>
        <div className="order-1">
          <h5 className="font-medium text-[14px] text-[#101828] leading-[19.6px] tracking-[2%] pb-[16px] xm:pb-[8px]">
            Stay updated
          </h5>
          <form className="flex xm:block gap-[6px] ">
            <input type="text" placeholder="Enter your email" className="w-[208px] xm:w-[100%] xm:mb-[8px] h-[44px] px-[14px] py-[10px] font-regular text-[16px] leading-[20.8px] text-[rgba(102, 112, 133, 1)] rounded-[8px] border-[1px] border-[#D0D5DD] shadow-footerInput" />
            <button type="submit" className="w-[135.93px] xm:w-[100%] h-[44px] rounded-[6.29px] px-[31.43px] py-[15.71px] bg-[#1453FF] text-[#fff] font-medium tracking-[3%] leading-[18.86px] text-center">Subscribe</button>
          </form>
        </div>
      </div>
      <h6 className="font-regular text-[16px] leading-[20.8px] text-center xm:text-start text-[#333333] border-[#EAECF0] border-t-[1px] pt-[32px] pb-[48px] ">
        &copy; 2024 Hackthejobs. All rights reserved.
      </h6>
    </footer>
  );
};

export default Footer;
