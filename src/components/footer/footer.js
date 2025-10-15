import Image from "next/image";
import Link from "next/link";
import * as yup from "yup";
import { useFormik } from "formik";
import { newsLetterSub } from "@/api/authentication/auth";
import { useState } from "react";
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
    <footer className="font-satoshi bg-[#121927] px-[80px] pt-[48px] pb-[10px] xl:px-[25px] xm:px-[16px] mt-[80px]">
      {open && <Modal close={close} />}
      <div className="flex flex-wrap justify-between pb-[16px] border-b-[1px] border-[#FFFFFF0A]">
        <div className="xm:pb-[24px] md:pb-[40px] lg:mb-[40px]">
          <Link href="/">
            <Image
              src="/proovalLogoWhite.png"
              width={111.6}
              height={40}
              alt="hackthejobs logo"
            />
          </Link>
          <p className="font-[700] text-[12px] text-[#FFFFFFCC] leading-[160%] pt-[12px]">
            Proooval (formally Hackthejobs)
          </p>
          <div className="pt-[12px] font-normal text-[12px] leading-[160%] text-[#FFFFFFCC] pb-[24px] w-[292px] sm:w-full sm:text-[14px]">
            <p>
              Join a global community of professionals and monetize your
              knowledge. Grow your audience and impact all in one place.
            </p>
          </div>
          <div className="flex gap-[8px] items-center">
            {/* Email Button */}
            <a href="#" target="_blank">
              <div
                className="flex items-center text-[#ffffff] 
            bg-[#FFFFFF1A] backdrop-blur-md 
              border border-[white/20] 
              rounded-[24px] gap-[4px] p-[8px] sm:px-[52px] sxm:px-[24px] 
              cursor-pointer transition-all hover:bg-white/20 hover:shadow-lg"
              >
                <img src="/mail.png" />
                <span className="text-[12px] text-[#FFFFFFCC] font-normal font-satoshi leading-[160%]">
                  support@prooval.com
                </span>
              </div>
            </a>

            {/* Instagram Button */}
            <a href="#" target="_blank">
              <div
                className="flex items-center text-[#ffffff] 
              bg-[#FFFFFF1A] backdrop-blur-md 
             border border-white/20 
             rounded-full gap-[4px] p-[8px]
              cursor-pointer transition-all hover:bg-white/20 hover:shadow-lg"
              >
                <img src="/instagram.png" />
              </div>
            </a>

            {/* Twitter Button */}
            <a href="#" target="_blank">
              <div
                className="flex items-center text-[#ffffff] 
               bg-[#FFFFFF1A] backdrop-blur-md 
              border border-white/20 
              rounded-full gap-[4px] p-[8px] 
              cursor-pointer transition-all hover:bg-white/20 hover:shadow-lg"
              >
                <img src="/twitter.png" />
              </div>
            </a>
          </div>
        </div>
        <div className="flex gap-6 sm:flex-col xm:w-full sm-pb-[]">
          <div className="flex gap-6">
            <div className="w-[137px] lgx:w-[100px] ">
              <p className="font-bold text-[14px] leading-[20px] text-[#FFFFFFCC] pb-[30px]">
                Links
              </p>
              <ul className="flex flex-col space-y-[10px]">
                <Link href="/">
                  <li className="font-normal text-[14px] leading-[20.8px] text-[#FFFFFFCC]">
                    Home
                  </li>
                </Link>
                <Link href="/about-us">
                  <li className="font-normal text-[14px] leading-[20.8px] text-[#FFFFFFCC]">
                    About
                  </li>
                </Link>
                <Link href="/faq">
                  <li className="font-normal text-[14px] leading-[20.8px] text-[#FFFFFFCC]">
                    FAQ
                  </li>
                </Link>
                <Link href="/pricing">
                  <li className="font-normal text-[14px] leading-[20.8px] text-[#FFFFFFCC]">
                    Pricing
                  </li>
                </Link>
                <Link href="#">
                  <li className="font-normal text-[14px] leading-[20.8px] text-[#FFFFFFCC]">
                    Contact Us
                  </li>
                </Link>
              </ul>
            </div>
            <div className="w-[117px]">
              <p className="font-bold text-[14px] leading-[20px] text-[#FFFFFFCC] pb-[30px]">
                Explore
              </p>
              <ul className="flex flex-col space-y-[10px]">
                <Link href="#">
                  <li className="font-normal text-[14px] leading-[20.8px] text-[#FFFFFFCC]">
                    Digital Products
                  </li>
                </Link>
                <Link href="#">
                  <li className="font-normal text-[14px] leading-[20.8px] text-[#FFFFFFCC]">
                    Marketplace
                  </li>
                </Link>
                <Link href="#">
                  <li className="font-normal text-[14px] leading-[20.8px] text-[#FFFFFFCC]">
                    Bookings
                  </li>
                </Link>
                <Link href="#">
                  <li className="font-normal text-[14px] leading-[20.8px] text-[#FFFFFFCC]">
                    Webinar
                  </li>
                </Link>
              </ul>
            </div>
          </div>
          <div>
            <h5 className="font-medium text-[12px] text-[#FFFFFF] leading-[140%] tracking-[2%] pb-[16px] xm:pb-[18px]">
              Stay updated with our newsletter
            </h5>
            {errorResponse && <p className="text-[#fc8181]">{errorResponse}</p>}
            <form
              className="flex flex-col xm:block gap-[6px]"
              onSubmit={handleSubmit}
            >
              <div className=" xm:mb-[8px] py-[0px]">
                <input
                  type="text"
                  id="fullName"
                  placeholder="Enter your full name"
                  value={values.fullName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="font-satoshi w-[310px] xm:w-[100%] h-[48px] placeholder:overflow-visible px-[14px] py-[13.5px] font-normal text-[16px] leading-[130px] text-[rgba(102, 112, 133, 1))] rounded-[8px] border-[1px] border-[#D0D5DD]"
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
                  className="font-satoshi overflow-visible w-[310px] xm:w-[100%] h-[48px] placeholder:overflow-visible px-[14px] py-[13.5px] font-normal text-[16px] leading-[130px] text-[rgba(102, 112, 133, 1)] rounded-[8px] border-[1px] border-[#D0D5DD] "
                />
                {errors.email && touched.email && (
                  <p className="text-[#fc8181]">{errors.email}</p>
                )}
              </div>
              <div className="h-[44px]">
                <button
                  type="submit"
                  className="disabled:opacity-[35%] w-[310px] h-[48px] xm:w-[100%] rounded-[6.29px] px-[31.43px] bg-[#1453FF] text-[#fff] font-medium tracking-[3%] leading-[18.86px] text-center"
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
      </div>
      <div className="flex justify-between pt-[20px] pb-[48px]  ">
        <h6 className="font-normal text-[12px] leading-[16px] text-[#FFFFFFCC] sxm:text-[10px]">
          &copy; {new Date().getFullYear()} Proovals
        </h6>
        <div className="flex gap-4 text-[12px] font-satoshi text-[#FFFFFFCC] leading-[16px] font-normal sxm:text-[10px]">
          <Link href="/terms">
            <h1>Terms & condition</h1>
          </Link>
          <Link href="/privacy">
            <h1>Privacy Policy</h1>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
