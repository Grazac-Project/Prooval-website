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
    
          <Skeleton height={36} width={250} />
    
          {/* Digital Products */}
          <div>
            <Skeleton height={24} width={150} className="mb-4" />
            <div className="grid md:grid-cols-1 grid-cols-3 gap-6">
              {[1, 2].map((_, i) => (
                <div key={i} className="border p-4 border-[#EDEDED] rounded-lg shadow-sm">
                  <Skeleton height={144} borderRadius={12} />
                  <div className="py-4 space-y-2">
                    <Skeleton height={24} width={80} />
                    <Skeleton height={20} width={100} />
                    <Skeleton height={16} width={`60%`} />
                  </div>
                </div>
              ))}
            </div>
          </div>
    
          {/* 1-on-1 Sessions */}
          <div>
            <Skeleton height={24} width={150} className="mb-4" />
            <div className="grid md:grid-cols-1 grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="border border-[#EDEDED] rounded-lg shadow-sm py-7 px-4 space-y-2"
                >
                  <div className="flex justify-between mb-[10px]">
                    <Skeleton height={22} width={70} borderRadius={9999} />
                    <Skeleton height={20} width={60} />
                  </div>
                  <Skeleton height={16} width={`80%`} />
                  <Skeleton count={2} height={12} />
                  <Skeleton height={16} width={`50%`} />
                </div>
              ))}
            </div>
          </div>
    
          {/* Group Packages */}
          <div>
            <Skeleton height={24} width={150} className="mb-4" />
            <div className="grid md:grid-cols-1 grid-cols-2 gap-6">
              {[1, 2].map((_, idx) => (
                <div key={idx} className="border border-[#EDEDED] border-t-4 py-7 px-4 space-y-2">
                  <Skeleton height={22} width={90} borderRadius={32} />
                  <Skeleton height={20} width={80} />
                  <Skeleton height={16} width={`80%`} />
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
