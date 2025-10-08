
import localFont from "next/font/local";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Script from "next/script";
import GoogleAnalytics from "@/components/googleAnalytics";
import RouteTracker from "@/components/RouteTracker";
import Error from "./error";

const satoshi = localFont({
  src: [
    {
      path: "../../public/fonts/Satoshi/Satoshi-Light.woff2",
      weight: "300",
    },
    {
      path: "../../public/fonts/Satoshi/Satoshi-Regular.woff2",
      weight: "400",
    },
    {
      path: "../../public/fonts/Satoshi/Satoshi-Medium.woff2",
      weight: "500",
    },
    {
      path: "../../public/fonts/Satoshi/Satoshi-Bold.woff2",
      weight: "700",
    },
    {
      path: "../../public/fonts/Satoshi/Satoshi-Black.woff2",
      weight: "900",
    },
  ],
  display: 'swap',
  variable: "--font-satoshi",
});

export const metadata = {
  title: "Hackthejobs | Scale your tech career with mentorship and experience",
  description:
    "Bridge the gap between the completion of your Bootcamp and landing your dream tech role by getting relevant working experience through Hackthejobs",
  icons: {
    icon: "/favicon.png",
  },
  verification: {
    other: {
      "facebook-domain-verification": "x1lptb6rqnck8sunf3ww6vhl2njnhw",
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${satoshi.variable}`}
      >
        {/* <Script
          id="tawk-to"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
              (function(){
                var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                s1.async=true;
                s1.src='https://embed.tawk.to/66ceed2eea492f34bc0aec5a/1i6c4svqj';
                s1.charset='UTF-8';
                s1.setAttribute('crossorigin','*');
                s0.parentNode.insertBefore(s1,s0);
              })();
            `,
          }}
        /> */}
         <Script
          src="https://unpkg.com/@fincra-engineering/checkout@2.2.0/dist/inline.min.js"
          strategy="afterInteractive"
        />
        <RouteTracker />
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
