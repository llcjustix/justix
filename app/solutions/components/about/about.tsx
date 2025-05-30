"use client";

import { useTranslation } from "react-i18next";
import useSettingsStore from "@/store/settings";
import Button from "@/components/button";

interface SolutionsAboutProps {
  mainTitle: string;
  title: string;
}

export const SolutionsAbout = ({ mainTitle, title }: SolutionsAboutProps) => {
  const { t } = useTranslation();
  const { toggleChat } = useSettingsStore();
  return (
    <div className="lg:h-[calc(100vh-68px)] flex lg:flex-row flex-col-reverse lg:justify-between md:items-center gap-8 lg:my-0 my-20">
      <div className="lg:max-w-2xl max-w-lg flex flex-col">
        <h1 className="font-extrabold leading-none text-[43px] lg:text-6xl xl:text-7xl 2xl:text-8xl lg:tracking-[-4px] tracking-[-2px] mb-10">
          <span className="text-primary block">{t(mainTitle)}</span>
          {t(title)}
        </h1>
        <div>
          <Button rounded size="large" onClick={toggleChat}>
            {t("Get in Touch")}
          </Button>
        </div>
      </div>
      {/* <div className="relative w-[600px] h-[350px] rounded-xl overflow-hidden md:block hidden"> */}
      {/*  <Image */}
      {/*    fill */}
      {/*    priority */}
      {/*    src={imagePath} */}
      {/*    alt="solution image" */}
      {/*    className="object-cover object-center" */}
      {/*  /> */}
      {/* </div> */}
    </div>
  );
};
