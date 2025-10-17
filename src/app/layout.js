
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
  title: "Prooval empowers professionals to monetize their knowledge",
  description:
    "Join Prooval to turn your professional expertise into income. Offer consultations, sell digital products, host webinars, and grow your brand from anywhere. ",
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
    <html lang="en" className="scroll-smooth">
      <body
        className={`${satoshi.variable}`}
      >
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
