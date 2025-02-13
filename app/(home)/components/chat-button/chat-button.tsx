"use client";

import useSettingsStore from "@/store/settings";
import { RiArrowRightUpLine } from "@remixicon/react";
import { useMediaQuery } from "@/hooks/use-media-query";
import Button from "@/components/button";

export const ChatButton = () => {
  const { toggleChat } = useSettingsStore();
  const isTablet = useMediaQuery("(max-width: 1024px)");
  if (isTablet) {
    return (
      <button
        type="button"
        className="w-[176px] h-[176px] rounded-full flex items-center justify-center flex-col gap-2 text-xl hover:bg-primary bg-black shadow-2xl hover:brightness-95 shadow-black hover:shadow-primary transition ease-in-out duration-200 text-white
          p-2 active:translate-y-px absolute -bottom-36 -right-36"
        onClick={toggleChat}
      >
        <RiArrowRightUpLine size={36} />
        Let's Discuss Your Idea
      </button>
    );
  }
  return <Button color="primary">Let's Discuss</Button>;
};
