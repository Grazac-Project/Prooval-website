
'use client';
// components/useAnalytics.js
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const useAnalytics = (GA_TRACKING_ID) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      if (typeof window.gtag !== 'undefined') {
        window.gtag('config', GA_TRACKING_ID, {
          page_path: url,
        });
      }
    };

    // Listen to the 'push' and 'replace' methods which trigger navigation
    const handlePushOrReplace = (methodName) => {
      const originalMethod = router[methodName];
      router[methodName] = async (...args) => {
        const [url] = args;
        handleRouteChange(url);
        return originalMethod.apply(router, args);
      };
    };

    handlePushOrReplace('push');
    handlePushOrReplace('replace');

    return () => {
      // Cleanup: restore the original methods
      ['push', 'replace'].forEach((methodName) => {
        router[methodName] = router[methodName].bind(router);
      });
    };
  }, [GA_TRACKING_ID, router]);

  return null;
};

export default useAnalytics;

