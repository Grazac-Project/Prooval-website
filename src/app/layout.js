// import { Space_Grotesk, Montserrat, Inter } from 'next/font/google'

import localFont from "next/font/local";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
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
  title: "Hack the Jobs",
  description:
    "HacktheJobs - Gain real life working Experience Bridge the gap between the completion of your Bootcamp and landing your dream tech role by getting relevant working experience through HacktheJobs",
  icons: {
    icon: '/favicon.png'

  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </head>
      <body
        className={` ${myFont.variable} ${spaceGrotesk.variable} ${inter.variable} ${whyte.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
