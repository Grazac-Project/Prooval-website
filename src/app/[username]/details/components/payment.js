// "use client";
// import {
//   fincraDigitalCheckoutData,
//   getSingleDigitalProduct,
//   initializeDigitalProductPayment,
// } from "@/api/authentication/auth";
// import useFincraPayment from "@/lib/fincraCheckout";
// import { formatPrice } from "@/Utils/price-formater";
// import Cookies from "js-cookie";
// import Image from "next/image";
// import { useSearchParams } from "next/navigation";
// import React, { useEffect, useState } from "react";
// import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const Payment = ({
//   onClick,
//   productId,
//   productType,
//   productPrice,
//   productCurrency,
//   productThumbnail,
//   productTitle,
//   category,
//   productDescription,
// }) => {
//   const [loading, setLoading] = useState("Access Product");
//   const [mentorData, setMentorData] = useState([]);
//   const [error, setError] = useState("");
//   const [freeMode, setFreeMode] = useState(false);
//   const [isSuccess, setIsSuccess] = useState(false);
//   const { startPayment } = useFincraPayment();
//   const { ref, setRef } = useState("");
//   // const [buttonText, setButtonText] = useState("Make Payment");

//   // make sure this file has: 'use client';
//   const [token, setToken] = useState("");

//   useEffect(() => {
//     try {
//       const raw = Cookies.get("user_details");
//       console.log("user_details cookie (raw):", raw); // <-- see if it's undefined

//       if (!raw) {
//         console.warn(
//           "No user_details cookie found. Check domain/secure/HttpOnly."
//         );
//         return;
//       }

//       const parsed = JSON.parse(raw);
//       console.log("user_details parsed:", parsed);

//       // Adjust path if needed:
//       const t =
//         parsed?.token ?? parsed?.access_token ?? parsed?.data?.token ?? "";

//       setToken(t);
//       console.log("Token (from cookie):", t);
//     } catch (err) {
//       console.error("Failed to read/parse user_details cookie", err);
//     }
//   }, []);

//   // 2) Set button label based on productType
//   useEffect(() => {
//     if (productType === "paid") setLoading("Make Payment");
//     else setLoading("Access Product");
//   }, [productType]);

//   const handleAccessProduct = () => {
//     console.log("Token at payment time:", token); // will be "" if cookie wasn’t readable
//     setLoading("Initiating access ...");

//     if (!token) {
//       console.error("Missing token; cannot init access");
//       setLoading("Access Product");
//       return;
//     }

//     const data = { productId };

//     initializeDigitalProductPayment(data, token)
//       .then((res) => {
//         console.log(res);
//         setFreeMode(true);
//         setIsSuccess(true);
//       })
//       .catch((err) => {
//         toast.error(err.response?.data?.message || err);
//         setLoading("Access Product");
//       });
//   };

//   const handlePayment = async () => {
//   // optional: prevent double clicks
//   // if (loading === true || loading === "Initiating payment ...") return;

//   try {
//     setLoading("Initiating payment ...");

//     if (!token) {
//       toast.error("Session expired. Please sign in again.");
//       return;
//     }

//     const payload = { productId, currency: productCurrency };

//     // 1) Get checkout reference from your backend
//     const res = await fincraDigitalCheckoutData(payload, token);
//     const reference =
//       res?.data?.data?.data?.reference ?? res?.data?.data?.reference;

//     if (!reference) throw new Error("Missing payment reference from server");

//     const url = new URL(window.location.href);
//     url.searchParams.set("ref", reference);
//     window.history.replaceState({}, "", url.toString());

//     const result = await startPayment({
//       price: Number(productPrice),
//       currency: String(productCurrency || "NGN").toUpperCase(),

//       reference,
//       ref: reference,
//       onSuccess: () => {
//         setIsSuccess(true);
//        setLoading("Make Payment");
//       },
//       onClose: () => {
//         setLoading("Make Payment");
//         toast.error("Transaction was not completed, window closed.");
//       },
//     });

//     console.log("Payment resolved:", result);
//   } catch (err) {
//     const msg = err?.response?.data?.message || err?.message || "Payment failed";
//     toast.error(msg);
//     setLoading("Make Payment");
//     console.error(err);
//   } finally {
//     setLoading("Make Payment"); // keep this consistent with how you render the button
//   }
// };

// const handleForeignPayment = () => {
//     console.log(token);
//     setLoading("Initiating payment ...");
//     const data = {
//       productId: productId,
//     };

//     initializeDigitalProductPayment(data, token)
//       .then((res) => {
//         console.log(res);
//         const url = res.data.data.redirectUrl;
//         console.log(url);
//         window.location.href = url; // Redirect to payment page
//       })
//       .catch((err) => {
//         // toast.error(err.response?.data?.error || "Something went wrong");
//         setLoading("Make Payment");
//       });
//   };

//   const handleClick = () => {
//     if (productType === "paid" && productCurrency === "NGN") {
//       handlePayment();
//     } else if (productType === "paid" && productCurrency !== "NGN") {
//       handleForeignPayment();
//     } else {
//       handleAccessProduct();
//       handleAccessProduct();
//     }
//   };

//   const handleClose = () => {
//     const isProduction = process.env.NEXT_PUBLIC_DOMAIN_DEV;

//     window.location.href =
//       isProduction === "development"
//         ? `${process.env.NEXT_PUBLIC_STAGING_DASH_URL}/digital-products`
//         : `${process.env.NEXT_PUBLIC_DASH_URL}/digital-products`;
//   };

//   return (
//     <div>
//       <div
//         className="bg-[#344054] opacity-[0.7] w-[100%] h-full fixed z-50 top-0 left-[0]"
//         onClick={onClick}
//       ></div>
//             <ToastContainer />
//       {isSuccess ? (
//         <div className="bg-[#fff] w-[447px] h-[291px]  md:max-w-full p-8 sm:p-6 pb-[277px] sm:pb-[41px] flex flex-col items-center text-center rounded-[8px] fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
//           <Image src="/sucess.svg" width={57} height={57} alt="success" />
//           <h3 className="font-medium  text-[24px] text-[#121927] leading-[11.71px] py-[16px]">
//             {freeMode ? "You’re all set!" : " Purchase successful"}
//           </h3>
//           <p className="font-regular text-[16px] text-[#555555] leading-[24px] mb-[20px]">
//             {freeMode
//               ? `${productTitle} has been added to your dashboard. You can access it anytime`
//               : "You can now access your purchase"}
//           </p>
//           <button
//             className="min-w-[76px] h-[44px] rounded-[8px] border-[1px] px-[20px] py-[12px] font-medium bg-[#1453FF] text-[14px] text-[#fff] leading-[19.6px] tracking-[2%] mx-auto"
//             onClick={handleClose}
//           >
//             View Product
//           </button>
//         </div>
//       ) : (
//         <div className="max-w-[52rem] h-[90%] mx-auto mt-10 sm:p-4 p-14 space-y-8 bg-[white] rounded-2xl fixed inset-0 z-50 overflow-y-auto ">
//           <div className=" flex items-center text-sm leading-[150%] font-medium text-[#292D32] ">
//             <button
//               className="border-[1px] border-[#EAEAEA] rounded-[8px] p-[10px] cursor-pointer"
//               onClick={onClick}
//             >
//               <IoIosArrowRoundBack className="text-[16px] text-[#292D32]" />
//             </button>
//             <span className="text-2xl font-semibold ml-4">Back</span>
//           </div>

//           {/* Digital Products */}
//           <div>
//             <div className="flex gap-3 items-center mb-[35px] justify-between ">
//               <h3 className="text-[28px] font-semibold mb-4 truncate ">
//                 {productTitle || "Digital Product"}
//               </h3>
//               <button
//                 className={`text-sm bg-primary text-[white] px-3 py-4 w-[182px] rounded-[6.29px] font-medium truncate  `}
//                 onClick={handleClick}
//                 // disabled={productType === "free" ? true : false}
//               >
//                 {loading}
//               </button>
//             </div>
//             <div className="">
//               <div className="border p-2 border-[#EDEDED] rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer ">
//                 <div
//                   className={`h-64 rounded-lg  bg-cover bg-center `}
//                   style={{
//                     backgroundImage: `url(${productThumbnail})`,
//                     // backgroundColor: "#FF353599",
//                     // backgroundBlendMode: "multiply",
//                   }}
//                 />
//               </div>
//               <div className="">
//                 <div className="flex gap-3 items-center my-[35px]">
//                   <span className="text-xs bg-[#DEA8061A] text-[#DEA806] px-3 py-1 rounded-[32px] font-medium">
//                     {category}
//                   </span>
//                   {productType === "paid" && (
//                     <div className=" text-sm font-semibold font-inter text-primary ">
//                       {productCurrency === "NGN" ? "₦" : "$"}
//                       {formatPrice(productPrice)}
//                     </div>
//                   )}
//                 </div>
//                 <div className="text-sm tracking-[150%] mt-4 text-[#333333] ">
//                   {productDescription || ""}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Payment;

"use client";
import {
  fincraDigitalCheckoutData,
  getSingleDigitalProduct,
  initializeDigitalProductPayment,
} from "@/api/authentication/auth";
import useFincraPayment from "@/lib/fincraCheckout";
import { formatPrice } from "@/Utils/price-formater";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Payment = ({
  onClick,
  productId,
  productType,
  productPrice,
  productCurrency,
  productThumbnail,
  productTitle,
  category,
  productDescription,
  setShowModal,
  setCheckout,
  setShowMain,
  setCheckoutCallback
}) => {
  const [loading, setLoading] = useState("Access Product");
  const [freeMode, setFreeMode] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { startPayment } = useFincraPayment();
  const [showCheckout, setShowCheckout] = useState(false);

  // Set button label based on product type
  useEffect(() => {
    if (productType === "paid") setLoading("Make Payment");
    else setLoading("Access Product");
  }, [productType]);

  // Handle free product access
  const handleAccessProduct = () => {
    try {
      setLoading("Initiating access ...");
      const data = { productId };

      initializeDigitalProductPayment(data)
        .then((res) => {
          console.log(res);
          setFreeMode(true);
          setIsSuccess(true);
        })
        .catch((err) => {
          toast.error(err.response?.data?.message || "Something went wrong");
          setLoading("Access Product");
        });
    } catch (err) {
      console.error(err);
      setLoading("Access Product");
    }
  };
console.log(setCheckoutCallback)
console.log(productType)
  // Handle local (NGN) payment
  const handlePayment = async () => {
    try {
      setLoading("Initiating payment ...");

      const payload = { productId, currency: productCurrency};
      console.log(payload)

      // Get payment reference from backend
      const res = await fincraDigitalCheckoutData(payload);
      const reference =
        res?.data?.data?.data?.reference ?? res?.data?.data?.reference;

      if (!reference) throw new Error("Missing payment reference from server");

      // Save reference to URL (optional)
      const url = new URL(window.location.href);
      url.searchParams.set("ref", reference);
      window.history.replaceState({}, "", url.toString());

      // Trigger Fincra payment modal
      await startPayment({
        price: Number(productPrice),
        currency: String(productCurrency || "NGN").toUpperCase(),
        reference,
        ref: reference,
        onSuccess: () => {
          setIsSuccess(true);
          setLoading("Make Payment");
        },
        onClose: () => {
          setLoading("Make Payment");
          toast.error("Transaction was not completed, window closed.");
        },
      });
    } catch (err) {
      const msg =
        err?.response?.data?.message || err?.message || "Payment failed";
      toast.error(msg);
      console.error(err);
    } finally {
      setLoading("Make Payment");
    }
  };

  // Handle international payment (non-NGN)
  const handleForeignPayment = () => {
    try {
      setLoading("Initiating payment ...");
      const data = { productId };

      initializeDigitalProductPayment(data)
        .then((res) => {
          const url = res.data.data.redirectUrl;
          if (url) window.location.href = url;
          else throw new Error("No redirect URL found");
        })
        .catch((err) => {
          toast.error(err.response?.data?.error || "Something went wrong");
          setLoading("Make Payment");
        });
    } catch (err) {
      console.error(err);
      setLoading("Make Payment");
    }
  };

  const handleShowCheckout = () => {
    setShowMain(false)
    setShowModal(false)
    setCheckout(true)
  }
  // Handle all click types
  const handleClick = () => {
    console.log(productType)
    if (productType === "paid" && productCurrency === "NGN") {
      handlePayment();
    } else if (productType === "paid" && productCurrency !== "NGN") {
      handleForeignPayment();
    } else {
      handleAccessProduct();
    }
  };

  useEffect(()=>{
    setCheckoutCallback(()=> handleClick())

  }, [])
  // Redirect to dashboard after success
  const handleClose = () => {
    const isProduction = process.env.NEXT_PUBLIC_DOMAIN_DEV;

    window.location.href =
      isProduction === "development"
        ? `${process.env.NEXT_PUBLIC_STAGING_DASH_URL}/digital-products`
        : `${process.env.NEXT_PUBLIC_DASH_URL}/digital-products`;
  };

  return (
    <div>
      {/* Overlay background */}
      <div
        className="bg-[#344054] opacity-[0.7] w-[100%] h-full fixed z-50 top-0 left-[0]"
        onClick={onClick}
      ></div>

      <ToastContainer />

      {isSuccess ? (
        // ✅ Success Modal
        <div className="bg-[#fff] w-[447px] h-[291px] md:max-w-full p-8 sm:p-6 pb-[277px] sm:pb-[41px] flex flex-col items-center text-center rounded-[8px] fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
          <Image src="/sucess.svg" width={57} height={57} alt="success" />
          <h3 className="font-medium text-[24px] text-[#121927] leading-[11.71px] py-[16px]">
            {freeMode ? "You’re all set!" : "Purchase successful"}
          </h3>
          <p className="font-regular text-[16px] text-[#555555] leading-[24px] mb-[20px]">
            {freeMode
              ? `${productTitle} has been added to your dashboard. You can access it anytime`
              : "You can now access your purchase"}
          </p>
          <button
            className="min-w-[76px] h-[44px] rounded-[8px] border-[1px] px-[20px] py-[12px] font-medium bg-[#1453FF] text-[14px] text-[#fff] leading-[19.6px] tracking-[2%] mx-auto"
            onClick={handleClose}
          >
            View Product
          </button>
        </div>
      ) : (
        // 💳 Payment Modal
        <div className="max-w-[52rem] h-[90%] mx-auto mt-10 sm:p-4 p-14 space-y-8 bg-[white] rounded-2xl fixed inset-0 z-50 overflow-y-auto ">
          <div className="flex items-center text-sm leading-[150%] font-medium text-[#292D32]">
            <button
              className="border-[1px] border-[#EAEAEA] rounded-[8px] p-[10px] cursor-pointer"
              onClick={onClick}
            >
              <IoIosArrowRoundBack className="text-[16px] text-[#292D32]" />
            </button>
            <span className="text-2xl font-semibold ml-4">Back</span>
          </div>

          {/* Product Details */}
          <div>
            <div className="flex gap-3 items-center mb-[35px] justify-between">
              <h3 className="text-[28px] font-semibold mb-4 truncate">
                {productTitle || "Digital Product"}
              </h3>
              <button
                className="text-sm text-[#fff] bg-primary text-white px-3 py-4 w-[182px] rounded-[6.29px] font-medium truncate"
                // onClick={handleClick}
                onClick={handleShowCheckout}
              >
                {loading}
              </button>
            </div>

            <div>
              <div className="border p-2 border-[#EDEDED] rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer">
                <div
                  className="h-64 rounded-lg bg-cover bg-center"
                  style={{ backgroundImage: `url(${productThumbnail})` }}
                />
              </div>

              <div>
                <div className="flex gap-3 items-center my-[35px]">
                  <span className="text-xs bg-[#DEA8061A] text-[#DEA806] px-3 py-1 rounded-[32px] font-medium">
                    {category}
                  </span>
                  {productType === "paid" && (
                    <div className="text-sm font-semibold text-primary">
                      {productCurrency === "NGN" ? "₦" : "$"}
                      {formatPrice(productPrice)}
                    </div>
                  )}
                </div>
                <div className="text-sm tracking-[150%] mt-4 text-[#333333]">
                  {productDescription || ""}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Payment;
