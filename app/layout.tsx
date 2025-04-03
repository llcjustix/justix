import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import React from "react";
import clsx from "clsx";
import { cookies } from "next/headers";
import GlobalProvider from "./global-provider";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
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
  twitter: {
    card: "summary_large_image",
    title: process.env.NEXT_PUBLIC_WEBSITE_NAME,
    description: "Experts in IT services for business",
    images: [
      {
        url: process.env.NEXT_PUBLIC_LOGO as string,
        width: 200,
        height: 200,
      },
    ],
  },
};

export default async ({ children }: { children: React.ReactNode }) => {
  const selectedLanguage =
    (await cookies()).get("lang")?.value || process.env.NEXT_PUBLIC_DEFAULT_LANG;
  return (
    <html lang={selectedLanguage}>
      <body className={clsx(manrope.className)}>
        <GlobalProvider>{children}</GlobalProvider>
      </body>
    </html>
  );
};
