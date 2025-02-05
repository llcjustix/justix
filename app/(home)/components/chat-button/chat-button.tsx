"use client";

import useSettingsStore from "@/store/settings";
import { RiArrowRightUpLine } from "@remixicon/react";

export const ChatButton = () => {
  const { toggleChat } = useSettingsStore();
  return (
    <button
      type="button"
      className="w-[176px] h-[176px] rounded-full flex items-center justify-center flex-col gap-2 text-xl hover:bg-gray-dark bg-black shadow-2xl hover:brightness-95 shadow-black transition ease-in-out duration-150 text-white
          p-2 active:translate-y-px absolute -bottom-36 -right-36"
      onClick={toggleChat}
    >
      <RiArrowRightUpLine size={36} />
      Let's Discuss Your Idea
    </button>
  );
};
