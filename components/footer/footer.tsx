"use client";

import Button from "@/components/button";
import useSettingsStore from "@/store/settings";
import { servicesDatabase } from "@/database/services";
import Link from "next/link";
import Logo from "@/components/logo";
import { socialMedia } from "@/database/database";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { useTranslation } from "react-i18next";

const darkRoutes = ["/artificial-intelligence"];

const Footer = () => {
  const { t } = useTranslation();
  const { toggleChat } = useSettingsStore();
  const pathname = usePathname();
  const isInDarkRoutes = darkRoutes.includes(pathname);
  return (
    <footer className={clsx(isInDarkRoutes ? "bg-black" : "bg-white")}>
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="max-w-4xl pt-14 text-center px-6 md:py-24 pb-14 lg:px-8">
            <p
              className={clsx(
                "mb-2 text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-center",
                isInDarkRoutes ? "text-white" : "text-black"
              )}
            >
              {t("Pull the trigger!")}
            </p>
            <h2
              className={clsx(
                "text-center font-extrabold text-[43px] leading-none lg:text-6xl xl:text-7xl 2xl:text-8xl lg:tracking-[-4px] tracking-[-2px] pb-2 2xl:pb-[11px] lg:mb-4 mb-1",
                isInDarkRoutes ? "text-white" : "text-black"
              )}
            >
              {t("Let’s bring your vision to life")}
            </h2>
            <Button
              rounded
              size="large"
              onClick={toggleChat}
              color={isInDarkRoutes ? "primary" : "black"}
            >
              {t("Get Started")}
            </Button>
          </div>
        </div>
      </div>
      <div className="bg-black">
        <div className="container">
          <div className="grid lg:grid-cols-4 grid-cols-2 justify-between pt-14 md:pt-24 lg:pt-20 pb-10">
            {servicesDatabase.map((service) => (
              <div key={service.id}>
                <div className="flex items-center gap-2 md:mb-4 mt-2">
                  <div className="bg-primary w-2 h-2 rounded-full" />
                  <p className="font-medium leading-6 text-neutral-500 flex items-center text-sm lg:text-base">
                    {t(service.title)}
                  </p>
                </div>
                <div className="flex flex-col gap-1.5">
                  {service.children.map((child) => (
                    <Link
                      href={`/${child.link}`}
                      key={child.id}
                      className="text-sm md:text-lg lg:text-xl xl:text-2xl font-medium text-white leading-7 md:leading-12 hover:text-primary"
                    >
                      {t(child.title)}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="w-full h-[1px] bg-gray-dark" />
          <div className="flex justify-between items-end pt-14 md:pt-24 lg:pt-20 pb-10">
            <div>
              <div className="flex items-center gap-2 md:mb-4 mt-2">
                <div className="bg-primary w-2 h-2 rounded-full" />
                <p className="font-medium leading-6 text-neutral-500 flex items-center text-sm lg:text-base">
                  {t("Contact")}
                </p>
              </div>
              <div className="flex flex-col gap-1.5">
                <Link
                  href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
                  className="text-sm md:text-lg lg:text-xl xl:text-2xl font-medium text-white leading-7 md:leading-12 hover:text-primary"
                >
                  {process.env.NEXT_PUBLIC_EMAIL}
                </Link>
                <Link
                  href={`tel:${process.env.NEXT_PUBLIC_PHONE}`}
                  className="text-sm md:text-lg lg:text-xl xl:text-2xl font-medium text-white leading-7 md:leading-12 hover:text-primary"
                >
                  {process.env.NEXT_PUBLIC_PHONE}
                </Link>
              </div>
            </div>
            <div className="sm:flex hidden flex-col items-center gap-3">
              <Link href="/" aria-label={process.env.NEXT_PUBLIC_WEBSITE_NAME}>
                <Logo color="white" />
              </Link>
              <p className="text-neutral-500 text-center text-xs lg:text-sm">
                © {new Date().getFullYear()} {process.env.NEXT_PUBLIC_WEBSITE_NAME}.{" "}
                {t("All Rights Reserved")}
              </p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-3">
                {socialMedia.map((social) => (
                  <Link
                    href={social.link}
                    key={social.id}
                    className="text-white hover:text-primary"
                    aria-label={social.id}
                    target="_blank"
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
              <div className="flex gap-x-1.5 items-center">
                <Link
                  href="/privacy-policy"
                  className="text-neutral-500 hover:text-primary text-xs lg:text-sm"
                >
                  {t("Privacy Policy")}
                </Link>
                <div className="h-3 w-[1px] bg-neutral-500" />
                <Link
                  href="/terms-of-use"
                  className="text-neutral-500 hover:text-primary text-xs lg:text-sm"
                >
                  {t("Terms & Conditions")}
                </Link>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-dark py-10">
            <div className="sm:hidden flex flex-col items-center gap-3">
              <Link href="/" aria-label={process.env.NEXT_PUBLIC_WEBSITE_NAME}>
                <Logo color="white" />
              </Link>
              <p className="text-neutral-500 text-center text-xs lg:text-sm">
                © {new Date().getFullYear()} {process.env.NEXT_PUBLIC_WEBSITE_NAME}.{" "}
                {t("All Rights Reserved")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
