"use client";
import { getSingleDigitalProduct } from "@/api/authentication/auth";
import Cookies from "js-cookie";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

const Payment = ({ onClick }) => {
  const [loading, setLoading] = useState();
  const [mentorData, setMentorData] = useState([]);
  const [error, setError] = useState("");
  const [token, setToken] = useState("");

  const searchParams = useSearchParams();
  const mentorId = searchParams.get("id");
  const getMentorsDetails = (access) => {
    setLoading(true);
    getSingleDigitalProduct(mentorId, access)
    .then((res) => {
      // console.log(res);
      console.log(res.data.data.data);
      setLoading(false);
    })
    .catch((err) => {
      setError(err.response?.data?.message);
      setLoading(false);
      });
  };
 
  useEffect(() => {
    setLoading(true);
    const data = Cookies.get("user_details");
    let access
    try {
      const parsedData = JSON.parse(data);
      
      access = parsedData?.token
      console.log("token id:", token);
    } catch (error) {
      console.error("Failed to parse token:", error);
    }

    if (mentorId && access ) {
      getMentorsDetails(access);
    }
  }, [token, mentorId]);
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
              How to land a remote job in 2025
            </h3>
            <button className="text-sm bg-primary text-[white] px-3 py-4 w-[182px] rounded-[6.29px] font-medium">
              Make Payment
            </button>
          </div>
          <div className="">
            <div className="border p-2 border-[#EDEDED] rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer ">
              <div
                className={`h-64 rounded-lg  bg-cover bg-center `}
                style={{
                  backgroundImage: `url('/about-hero.png')`,
                  backgroundColor: "#FF353599",
                  backgroundBlendMode: "multiply",
                }}
              />
            </div>
            <div className="">
              <div className="flex gap-3 items-center my-[35px]">
                <span className="text-xs bg-[#DEA8061A] text-[#DEA806] px-3 py-1 rounded-[32px] font-medium">
                  eBook
                </span>
                <div className=" text-sm font-semibold font-inter text-primary ">
                  ₦25,000
                </div>
              </div>
              <div className="text-sm tracking- font-medium mt-4 text-[#333333] ">
                How to land a remote job in 2025Lorem ipsum dolor sit amet
                consectetur. Eget egestas nulla aliquet eget sit risus
                ullamcorper. Fermentum egestas aliquet morbi volutpat. Ultricies
                sapien suspendisse facilisi ultrices porta vestibulum.
                Condimentum amet ridiculus a dolor. Convallis tortor venenatis
                elementum amet arcu euismod dis at. At massa etiam morbi donec
                enim euismod. Nec lectus leo montes sit tempor suspendisse odio.
                Adipiscing a nunc ut volutpat sapien pharetra at. In sapien sed
                facilisis nunc sed feugiat eu dignissim. Quam sit velit a massa
                aliquam viverra. Nec tortor in metus faucibus purus molestie
                adipiscing lacus. Ac blandit pulvinar justo neque non pharetra
                elementum morbi fames. Tortor integer consequat orci
                condimentum. Natoque ultricies et amet varius placerat
                tristique. Aenean molestie donec maecenas auctor vel non neque
                leo. Amet adipiscing et proin tempus ac pellentesque vehicula
                cras. Bibendum nibh tellus convallis ultrices eu adipiscing quam
                eget eget. Viverra in elit tellus vel vitae tincidunt egestas.
                Pharetra amet id tempus tellus sed lorem sit nec ut.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
