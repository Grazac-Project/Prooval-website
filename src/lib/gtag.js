export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || '';

// Track pageviews
// export const pageview = (url) => {
//   if (!GA_ID) return;
//   window.gtag('config', GA_ID, {
//     page_path: url,
//   });
// };


export const pageview = (url) => {
  if (!GA_ID || typeof window === 'undefined' || typeof window.gtag === 'undefined') return;
  try {
    window.gtag('config', GA_ID, {
      page_path: url,
    });
  } catch (error) {
    // Silently handle errors in development
    console.debug('Google Analytics pageview error:', error);
  }
};