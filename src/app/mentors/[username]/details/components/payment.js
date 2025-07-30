"use client";
import {
  getSingleDigitalProduct,
  initializeDigitalProductPayment,
} from "@/api/authentication/auth";
import Cookies from "js-cookie";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

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
  const [loading, setLoading] = useState("Make Payment");
  const [mentorData, setMentorData] = useState([]);
  const [error, setError] = useState("");
  
let token = "";
  const data = Cookies.get("user_details");
  useEffect(() => {
    try {
      const parsedData = JSON.parse(data);
      console.log(parsedData)
      if (data) {
        token = parsedData.token;
        console.log("Token:", token);
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

 const handlePayment = () => {
  console.log(token);
  setLoading("Initiating payment ...");
 const data = {
  productId : productId
 }

  initializeDigitalProductPayment(data, token)
    .then((res) => {
      console.log(res);
      const url = res.data.data.checkoutUrl;
      console.log({ url });
      window.location.href = url; // Redirect to payment page
    })
    .catch((err) => {
      // toast.error(err.response?.data?.error || "Something went wrong");
      setLoading("Make Payment");
    });
};
  return (
    <div>
      <div
        className="bg-[#344054] opacity-[0.7] w-[100%] h-full fixed z-50 top-0 left-[0]"
        onClick={onClick}
      ></div>

      <div className="max-w-[52rem] h-[90%] mx-auto mt-10 p-14 space-y-8 bg-[white] rounded-2xl fixed inset-0 z-50 overflow-y-auto ">
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
              className="text-sm bg-primary text-[white] px-3 py-4 w-[182px] rounded-[6.29px] font-medium"
              onClick={handlePayment}
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
                    {productPrice}
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
