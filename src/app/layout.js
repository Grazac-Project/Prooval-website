// import { Space_Grotesk, Montserrat, Inter } from 'next/font/google'

import localFont from "next/font/local";
import { Onest } from "next/font/google";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Script from "next/script";
import GoogleAnalytics from "@/components/googleAnalytics";
import RouteTracker from "@/components/RouteTracker";
import Error from "./error";

// const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const onest = Onest({
  subsets: ["latin"],
  variable: "--font-onest",
  display: "swap",
});

const whyte = localFont({
  src: [
    {
      path: "../../public/fonts/Whyte/Whyte-Regular.ttf",
      weight: "400",
    },
    {
      path: "../../public/fonts/Whyte/Whyte-Medium.ttf",
      weight: "500",
    },
    {
      path: "../../public/fonts/Whyte/Whyte-Bold.ttf",
      weight: "700",
    },
  ],
  variable: "--font-whyte",
});
const inter = localFont({
  src: [
    {
      path: "../../public/fonts/Inter/Inter-Regular.ttf",
      weight: "400",
    },
    {
      path: "../../public/fonts/Inter/Inter-Medium.ttf",
      weight: "500",
    },
    {
      path: "../../public/fonts/Inter/Inter-SemiBold.ttf",
      weight: "600",
    },
    {
      path: "../../public/fonts/Inter/Inter-Bold.ttf",
      weight: "700",
    },
    {
      path: "../../public/fonts/Inter/Inter-ExtraBold.ttf",
      weight: "800",
    },
  ],
  variable: "--font-inter",
});
const myFont = localFont({
  src: [
    {
      path: "../../public/fonts/Montserrat/Montserrat-Regular.ttf",
      weight: "400",
    },
    {
      path: "../../public/fonts/Montserrat/Montserrat-Medium.ttf",
      weight: "500",
    },
    {
      path: "../../public/fonts/Montserrat/Montserrat-SemiBold.ttf",
      weight: "600",
    },
    {
      path: "../../public/fonts/Montserrat/Montserrat-Bold.ttf",
      weight: "700",
    },
    {
      path: "../../public/fonts/Montserrat/Montserrat-ExtraBold.ttf",
      weight: "800",
    },
  ],
  variable: "--font-montserrat",
});
const spaceGrotesk = localFont({
  src: [
    {
      path: "../../public/fonts/Space_Grotesk/SpaceGrotesk-Light.ttf",
      weight: "300",
    },
    {
      path: "../../public/fonts/Space_Grotesk/SpaceGrotesk-Regular.ttf",
      weight: "400",
    },
    {
      path: "../../public/fonts/Space_Grotesk/SpaceGrotesk-Medium.ttf",
      weight: "500",
    },
    {
      path: "../../public/fonts/Space_Grotesk/SpaceGrotesk-SemiBold.ttf",
      weight: "600",
    },
    {
      path: "../../public/fonts/Space_Grotesk/SpaceGrotesk-Bold.ttf",
      weight: "700",
    },
  ],
  variable: "--font-space-grotesk",
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
        className={` ${myFont.variable} ${spaceGrotesk.variable} ${inter.variable} ${whyte.variable} ${onest.variable}`}
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
