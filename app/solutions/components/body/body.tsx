"use client";

import { useTranslation } from "react-i18next";

interface SolutionsBodyProps {
  text1: string;
  text2: string;
  text3: string;
  listTitle: string;
  list: { id: number; text: string }[];
}

export const SolutionsBody = ({ text1, text2, text3, listTitle, list }: SolutionsBodyProps) => {
  const { t } = useTranslation();

  return (
    <>
      <p className="text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl mb-28">{t(text1)}</p>
      <h3 className="font-bold text-4xl xl:text-5xl 2xl:text-6xl tracking-[-2px] xl:!leading-[55px] 2xl:!leading-[65px] mb-5">
        {t(listTitle)}
      </h3>
      <div className="flex flex-col gap-y-4">
        {list.map((item) => (
          <div key={item.id} className="flex items-center gap-x-3">
            <div className="w-1.5 h-1.5 rounded-full bg-black" />
            <p className="text-md lg:text-lg xl:text-xl">{t(item.text)}</p>
          </div>
        ))}
      </div>
      <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl my-28">{t(text2)}</p>
      <p className="text-3xl xl:text-4xl 2xl:text-5xl font-bold  text-center">{t(text3)}</p>
    </>
  );
};
