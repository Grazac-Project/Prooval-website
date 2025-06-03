"use client";
import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import * as gtag from "@/lib/gtag";

const RouteTracker = () => {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window.gtag !== "undefined") {
      gtag.pageview(pathname);
    }
  }, [pathname]);

  return null;
};

export default RouteTracker;
