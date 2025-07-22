import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import React from "react";
import clsx from "clsx";
import { cookies } from "next/headers";
import NextTopLoader from "nextjs-toploader";
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
  description: "Experts in IT services for business",
  keywords: [
    "IT services",
    "business technology",
    "custom software development",
    "DevOps",
    "AI solutions",
    "product management",
    "digital transformation",
    "technology consulting",
    "justix",
    "AI",
    "DevOps услуги",
    "Разработка ИИ",
    "AI для бизнеса",
    "Big Data решения",
    "Веб-разработка",
    "Разработка мобильных приложений",
    "Backend для стартапа",
    "Облачные решения",
    "Настройка CI/CD",
    "Программирование под заказ",
    "Искусственный интеллект для компаний",
    process.env.NEXT_PUBLIC_WEBSITE_NAME as string,
  ],
  authors: [{ name: process.env.NEXT_PUBLIC_WEBSITE_NAME }],
  creator: process.env.NEXT_PUBLIC_WEBSITE_NAME,
  publisher: process.env.NEXT_PUBLIC_WEBSITE_NAME,
  robots: "index, follow",
  icons: process.env.NEXT_PUBLIC_FAVICON,
  openGraph: {
    type: "website",
    url: process.env.NEXT_PUBLIC_WEBSITE_URL,
    title: process.env.NEXT_PUBLIC_WEBSITE_NAME,
    description: "Experts in IT services for business",
    siteName: process.env.NEXT_PUBLIC_WEBSITE_NAME,
    locale: "en_US",
    images: [
      {
        url: process.env.NEXT_PUBLIC_LOGO as string,
        width: 200,
        height: 200,
        alt: `${process.env.NEXT_PUBLIC_WEBSITE_NAME} Logo`,
      },
    ],
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
        alt: `${process.env.NEXT_PUBLIC_WEBSITE_NAME} Logo`,
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
        <NextTopLoader color="#2ed06e" showSpinner={false} />
        <GlobalProvider>{children}</GlobalProvider>
      </body>
    </html>
  );
};
