import Image from "next/image";
import Link from "next/link";
// import Classes from "./footer.module.css";
import * as yup from "yup";
import { useFormik } from "formik";
import { newsLetterSub } from "@/api/authentication/auth";
import { useState } from "react";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import Modal from "../modal/subscribeModal";

const initialValues = {
  fullName: "",
  email: "",
};
const Footer = () => {
  const [loader, setLoader] = useState(false);
  const [errorResponse, setErrorResponse] = useState(null);
  const [open, setOpen] = useState();

  const close = () => {
    setOpen(false);
  };
  const schema = yup.object({
    fullName: yup.string().required("Full name is required"),
    email: yup
      .string()
      .email("Please enter a valid email")
      .required("Email is required"),
  });

  const onSubmit = async (values, actions) => {
    setLoader(true);
    await newsLetterSub(values)
      .then((res) => {
        setLoader(false);
        // console.log(res);
        if (res.status === 201) {
          // console.log(openModal);
          setOpen(!open);
        }
      })
      .catch((err) => {
        setLoader(false);
        // console.log(err?.response?.data?.message?.error);
        setErrorResponse(err?.response?.data?.message?.error);
      });
    actions.resetForm();
  };
  const {
    values,
    handleSubmit,
    handleChange,
    handleBlur,
    isSubmitting,
    errors,
    touched,
  } = useFormik({
    initialValues,
    validationSchema: schema,
    onSubmit,
  });
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
    <footer className="font-onest px-[80px] xl:px-[25px] xm:px-[16px] pt-[80px]">
      {open && <Modal close={close} />}
      <div className="flex md:flex-col justify-between sm:gap-[32px]">
        <div className="pb-[64px] xm:pb-[24px] sm:order-3">
          <Link href="/">
            <Image
              src="/footer-logo.png"
              width={165}
              height={36}
              alt="hackthejobs logo"
            />
          </Link>

          <ul className="flex xm:flex-col gap-[27px] xm:gap-[16px] pt-[32px]">
            {/* <Link href="/">
              <li className="font-normal text-[16px] leading-[20.8px] text-[#4F4F4F]">
                Home
              </li>
            </Link> */}
            {/* <Link href="/about-us"> */}
            <Link href="/about-us">
              <li className="font-normal text-[16px] leading-[20.8px] text-[#4F4F4F]">
                About
              </li>
            </Link>
            <Link href="/faq">
              <li className="font-normal text-[16px] leading-[20.8px] text-[#4F4F4F]">
                FAQ
              </li>
            </Link>
            <Link href="/donation">
              <li className="font-normal text-[16px] leading-[20.8px] text-[#4F4F4F]">
                Donation
              </li>
            </Link>
            <Link href="/mentor">
              <li className="font-normal text-[16px] leading-[20.8px] text-[#4F4F4F]">
                Mentor
              </li>
            </Link>{" "}
            <Link href="/spm">
              <li className="font-normal text-[16px] leading-[20.8px] text-[#4F4F4F]">
                PM
              </li>
            </Link>
            {/* <Link href="/hire">
              <li className="font-normal text-[16px] leading-[20.8px] text-[#4F4F4F]">
            Hire
              </li>
            </Link> */}
            <Link href="/terms">
              <li className="font-normal text-[16px] leading-[20.8px] text-[#4F4F4F]">
                Terms
              </li>
            </Link>
            <Link href="/privacy">
              <li className="font-normal text-[16px] leading-[20.8px] text-[#4F4F4F]">
                Privacy
              </li>
            </Link>
          </ul>
          <ul className="flex gap-[24.5px] mt-[16px]">
            <a href="https://www.linkedin.com/company/hackthejobs">
              <li>
                <FaLinkedin className="text-[24px]" />
              </li>
            </a>
            <a href="http://www.x.com/hackthejobs">
              <li>
                <BsTwitterX className="text-[24px]" />
              </li>
            </a>
            <a href="http://www.instagram.com/hackthejobs">
              <li>
                <FaInstagram className="text-[24px]" />
              </li>
            </a>
          </ul>
        </div>
        <div className="order-1">
          <h5 className="font-medium text-[14px] text-[#101828] leading-[19.6px] tracking-[2%] pb-[16px] xm:pb-[8px]">
            Stay updated
          </h5>
          {/* <form className="flex xm:block gap-[6px]" onSubmit={handleSubmit}>
            <input type="text" id='fullName' placeholder="Enter your full name" value={values.fullName} onChange={handleChange} onBlur={handleBlur} className="w-[208px] md:w-[150px] xm:w-[100%] xm:mb-[8px] px-[14px] py-[10px] md:py-[6px] font-normal text-[16px] leading-[20.8px] text-[rgba(102, 112, 133, 1)] rounded-[8px] border-[1px] border-[#D0D5DD] shadow-footerInput" />
            <input type="text" id='email' placeholder="Enter your email" value={values.email} onChange={handleChange} onBlur={handleBlur} className="w-[208px] md:w-[150px] xm:w-[100%] xm:mb-[8px] px-[14px] py-[10px] md:py-[6px] font-normal text-[16px] leading-[20.8px] text-[rgba(102, 112, 133, 1)] rounded-[8px] border-[1px] border-[#D0D5DD] shadow-[footerInput]" />
            <button type="submit" disabled={isSubmitting} className="disabled:opacity-[35%] w-[135.93px] xm:w-[100%] h-[44px] rounded-[6.29px] px-[31.43px] py-[15.71px] bg-[#1453FF] text-[#fff] font-medium tracking-[3%] leading-[18.86px] text-center">Subscribe</button>
          </form> */}
          {errorResponse && <p className="text-[#fc8181]">{errorResponse}</p>}
          <form
            className="flex flex-wrap xm:block gap-[6px]"
            onSubmit={handleSubmit}
          >
            <div className=" xm:mb-[8px] py-[0px]">
              {/* <input type="text" id='fullName' placeholder="Enter your full name" value={values.fullName} onChange={handleChange} onBlur={handleBlur} className="w-[208px] h-[100%] md:w-[150px] xm:w-[100%] px-[14px] py-[10px] md:py-[6px] font-normal text-[16px] leading-[20.8px] text-[rgba(102, 112, 133, 1)] rounded-[8px] border-[1px] border-[#D0D5DD] shadow-footerInput" /> */}
              <input
                type="text"
                id="fullName"
                placeholder="Enter your full name"
                value={values.fullName}
                onChange={handleChange}
                onBlur={handleBlur}
                className="font-inter w-[208px] h-[44px] placeholder:overflow-visible lg:w-[150px] md:w-[150px] xm:w-[100%] px-[14px] py-[10px] md:py-[6px] font-normal text-[16px] leading-[20.8px] text-[rgba(102, 112, 133, 1)] rounded-[8px] border-[1px] border-[#D0D5DD]"
              />
              {errors.fullName && touched.fullName && (
                <p className="text-[#fc8181]">{errors.fullName}</p>
              )}
            </div>
            <div className="xm:mb-[8px]">
              <input
                type="text"
                id="email"
                placeholder="Enter your email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className="font-inter overflow-visible w-[208px] h-[44px] placeholder:overflow-visible lg:w-[150px] md:w-[150px] xm:w-[100%] p-[14px] font-normal text-[16px] leading-[20.8px] text-[rgba(102, 112, 133, 1)] rounded-[8px] border-[1px] border-[#D0D5DD] "
              />
              {errors.email && touched.email && (
                <p className="text-[#fc8181]">{errors.email}</p>
              )}
            </div>
            <div className="h-[44px]">
              <button
                type="submit"
                className="disabled:opacity-[35%] w-[135.93px] h-[100%] xm:w-[100%] rounded-[6.29px] px-[31.43px] bg-[#1453FF] text-[#fff] font-medium tracking-[3%] leading-[18.86px] text-center"
              >
                {loader ? (
                  <Image
                    src="/loader.gif"
                    width={16}
                    height={16}
                    alt="loader"
                    className="mx-auto"
                    unoptimized={true}
                  />
                ) : (
                  "Subscribe"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
      <h6 className="font-normal text-[16px] leading-[20.8px] text-center xm:text-start text-[#333333] border-[#EAECF0] border-t-[1px] pt-[32px] pb-[48px] md:mt-[40px] sm:mt-[0px]">
        &copy; {new Date().getFullYear()} Hack Thejobs Technologies ltd. All rights reserved.
      </h6>
    </footer>
  );
};

export default Footer;
