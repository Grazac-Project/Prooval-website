// components/skeleton/MentorSkeletonCard.tsx
import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Loading = () => {
  return (
    <div className="font-onest p-2 ">
      <Skeleton height={296} />
      <h4 className="mt-[24px] mb-[4px]">
        <Skeleton width={120} height={20} />
      </h4>
      <h5 className="mb-[16px]">
        <Skeleton width={100} height={18} />
      </h5>
      <div className="flex items-center gap-2 mb-[16px]">
        <Skeleton circle  height={24} />
        <Skeleton  />
      </div>
      <Skeleton  height={18} />
      <Skeleton height={296} />
    </div>
  );
};

export default Loading;
