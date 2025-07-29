// components/skeleton/MentorSkeletonCard.tsx
import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Loading = () => {
  return (
    <div className=" mx-auto mt-10 p-6 space-y-8 bg-[white] rounded-2xl">
          {/* Header */}
          <div className="flex items-center text-sm leading-[150%] font-medium text-[#292D32] ">
            <Skeleton width={40} height={40} borderRadius={8} />
            <Skeleton width={100} height={24} className="ml-4" />
          </div>
    
          <>
              <Skeleton height={32} width={"90%"} />
              <Skeleton height={80} width={"90%"} style={{ margin: "20px 0" }} />
              <Skeleton count={3} width={"90%"} />
              <Skeleton height={50} width={"90%"} style={{ marginTop: 20 }} />
              <Skeleton height={50} width={"90%"} style={{ marginLeft: 16 }} />
            </>
          <div>
            <Skeleton height={24} width={150} className="my-4" />
            <div className="grid md:grid-cols-1 grid-cols-2 gap-6">
              {[1, 2].map((_, idx) => (
                <div key={idx} className="border border-[#EDEDED] border-t-4 py-7 px-4 space-y-2">
                  <Skeleton height={22} width={90} borderRadius={32} />
                  <Skeleton height={20} width={80} />
                  <Skeleton height={16} width={`90%`} />
                  <Skeleton count={2} height={12} />
                  <Skeleton height={16} width={`50%`} />
                </div>
              ))}
            </div>
          </div>
        </div>
  );
};

export default Loading;
