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
import { FiDownload } from "react-icons/fi";

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
  const handleAccessProduct = (z) => {
    try {
      setLoading("Initiating access ...");
      const data = { productId, ...z };

      initializeDigitalProductPayment(data)
        .then((res) => {
          console.log(res);
          // setCheckout(false)
          // setShowModal(false)
          // setShowMain(true)
          setIsSuccess(true);
          setFreeMode(true);
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
  const handlePayment = async (x) => {
    console.log(x)
    try {
      setLoading("Initiating payment ...");

      const payload = { productId, currency: productCurrency};
      console.log(payload)

      // Get payment reference from backend
      // const res = await fincraDigitalCheckoutData(payload);
      const res = await fincraDigitalCheckoutData(x);
      console.log(res)
      const reference =
        res?.data?.data?.data?.reference ?? res?.data?.data?.reference;

      if (!reference) throw new Error("Missing payment reference from server");

      // Save reference to URL (optional)
      const url = new URL(window.location.href);
      url.searchParams.set("ref", reference);
      window.history.replaceState({}, "", url.toString());

      const fullname = `${x.firstName} ${x.lastName}`
      // Trigger Fincra payment modal
      await startPayment({
        price: Number(productPrice),
        currency: String(productCurrency || "NGN").toUpperCase(),
        ref: reference,
        nameProp: fullname,
        emailProp: x.email,
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
  const handleForeignPayment = (y) => {
    try {
      setLoading("Initiating payment ...");
      const data = { productId, ...y };

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
  const handleClick = (val) => {
    console.log(val)
    if (productType === "paid" && productCurrency === "NGN") {
      handlePayment(val);
    } else if (productType === "paid" && productCurrency !== "NGN") {
      handleForeignPayment(val);
    } else {
      handleAccessProduct(val);
    }
  };

  useEffect(()=>{
    setCheckoutCallback(() => (...args) => handleClick(...args))

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
    <div className="font-satoshi">
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
                  <button className="flex items-center gap-[4.87px] bg-[#3333331A] rounded-[38.96px] py-[5.37px] px-[14.61px] sxm:px-3">
                    <FiDownload/>
                    <p className="font-500 text-xs tex-[#333333]">Downloadable</p>
                    </button>
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
