import type React from "react";
import "@/app/globals.css";
import { Inter } from "next/font/google";
import localFont from "next/font/local";

const inter = Inter({ subsets: ["latin"] });

const basisGrotesque = localFont({
  src: [
    {
      path: "./fonts/BasisGrotesqueArabicPro-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/BasisGrotesqueArabicPro-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/BasisGrotesqueArabicPro-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/BasisGrotesqueArabicPro-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata = {
  title: "Fremy Rosso | Entrepreneur & Real Estate Strategist",
  description:
    "Entrepreneur, real estate strategist, and founder of multiple ventures focused on reshaping the way people invest, travel, and connect with opportunity.",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${basisGrotesque.className} antialiased bg-black`}>
        {children}
      </body>
    </html>
  );
}
