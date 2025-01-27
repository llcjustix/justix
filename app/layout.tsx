import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import React from "react";
import clsx from "clsx";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
});

export const generateMetadata = async (): Promise<Metadata> => ({
  metadataBase: new URL(process.env.NEXT_PUBLIC_WEBSITE_URL as string),
  title: {
    template: `%s | ${process.env.NEXT_PUBLIC_WEBSITE_NAME}`,
    default: process.env.NEXT_PUBLIC_WEBSITE_NAME as string,
  },
  icons: process.env.NEXT_PUBLIC_FAVICON,
  description: "Experts in IT services for business",
  openGraph: {
    images: [
      {
        url: process.env.NEXT_PUBLIC_LOGO as string,
        width: 200,
        height: 200,
      },
    ],
    title: process.env.NEXT_PUBLIC_WEBSITE_NAME,
    description: "Experts in IT services for business",
    siteName: process.env.NEXT_PUBLIC_WEBSITE_NAME,
  },
});

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <html lang="en">
    <body className={clsx(manrope.className)}>{children}</body>
  </html>
);

export default RootLayout;
