"use client";
import {
  getSingleDigitalProduct,
  initializeDigitalProductPayment,
} from "@/api/authentication/auth";
import { formatPrice } from "@/Utils/price-formater";
import Cookies from "js-cookie";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
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
}) => {
  const [loading, setLoading] = useState("Access Product");
  const [mentorData, setMentorData] = useState([]);
  const [error, setError] = useState("");
  const [disabled, setDisabled] = useState(false);
  // const [buttonText, setButtonText] = useState("Make Payment");

  // make sure this file has: 'use client';
  const [token, setToken] = useState("");

  useEffect(() => {
    try {
      const raw = Cookies.get("user_details");
      console.log("user_details cookie (raw):", raw); // <-- see if it's undefined

      if (!raw) {
        console.warn(
          "No user_details cookie found. Check domain/secure/HttpOnly."
        );
        return;
      }

      const parsed = JSON.parse(raw);
      console.log("user_details parsed:", parsed);

      // Adjust path if needed:
      const t =
        parsed?.token ?? parsed?.access_token ?? parsed?.data?.token ?? "";

      setToken(t);
      console.log("Token (from cookie):", t);
    } catch (err) {
      console.error("Failed to read/parse user_details cookie", err);
    }
  }, []);

  // 2) Set button label based on productType
  useEffect(() => {
    if (productType === "paid") setLoading("Make Payment");
    else setLoading("Access Product");
  }, [productType]);

  const handlePayment = () => {
    console.log("Token at payment time:", token); // will be "" if cookie wasn’t readable
    setLoading("Initiating payment ...");

    if (!token) {
      console.error("Missing token; cannot init payment");
      setLoading("Make Payment");
      return;
    }

    const data = { productId };

    initializeDigitalProductPayment(data, token)
      .then((res) => {
        const url = res?.data?.data?.payment?.paymentUrl;
        if (!url) {
          toast.error("Payment URL missing in response:", res);
          setLoading("Make Payment");
          return;
        }
        window.location.href = url;
      })
      .catch((err) => {
        toast.error(err.response?.data?.message || err);
        setLoading("Make Payment");
      });
  };

  const handleclick = () => {
    setLoading(true);

    if (productType === "paid") {
      handlePayment();
      // console.log("Proceed to payment clicked");
    } else {
      setDisabled(true);
    }
  };
  return (
    <div>
      <div
        className="bg-[#344054] opacity-[0.7] w-[100%] h-full fixed z-50 top-0 left-[0]"
        onClick={onClick}
      ></div>

      <div className="max-w-[52rem] h-[90%] mx-auto mt-10 p-14 space-y-8 bg-[white] rounded-2xl fixed inset-0 z-50 overflow-y-auto ">
      <ToastContainer />
        <div className=" flex items-center text-sm leading-[150%] font-medium text-[#292D32] ">
          <button
            className="border-[1px] border-[#EAEAEA] rounded-[8px] p-[10px] cursor-pointer"
            onClick={onClick}
          >
            <IoIosArrowRoundBack className="text-[16px] text-[#292D32]" />
          </button>
          <span className="text-2xl font-semibold ml-4">Back</span>
        </div>

        {/* Digital Products */}
        <div>
          <div className="flex gap-3 items-center mb-[35px] justify-between ">
            <h3 className="text-[28px] font-semibold mb-4 ">
              {productTitle || "Digital Product"}
            </h3>
            <button
              className={`text-sm bg-primary text-[white] px-3 py-4 w-[182px] rounded-[6.29px] font-medium  ${
                productType === "free" ? "opacity-50 cursor-not-allowed" : ""
              }`}
              onClick={handlePayment}
              disabled={productType === "free" ? true : false}
            >
              {loading}
            </button>
          </div>
          <div className="">
            <div className="border p-2 border-[#EDEDED] rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer ">
              <div
                className={`h-64 rounded-lg  bg-cover bg-center `}
                style={{
                  backgroundImage: `url(${productThumbnail})`,
                  // backgroundColor: "#FF353599",
                  // backgroundBlendMode: "multiply",
                }}
              />
            </div>
            <div className="">
              <div className="flex gap-3 items-center my-[35px]">
                <span className="text-xs bg-[#DEA8061A] text-[#DEA806] px-3 py-1 rounded-[32px] font-medium">
                  {category}
                </span>
                {productType === "paid" && (
                  <div className=" text-sm font-semibold font-inter text-primary ">
                    {productCurrency === "NGN" ? "₦" : "$"}
                    {formatPrice(productPrice)}
                  </div>
                )}
              </div>
              <div className="text-sm tracking-[150%] mt-4 text-[#333333] ">
                {productDescription || ""}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
