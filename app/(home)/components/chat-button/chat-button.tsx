"use client";

import useSettingsStore from "@/store/settings";
import { RiArrowRightUpLine } from "@remixicon/react";
import Button from "@/components/button";
import { Translate } from "@/components/translate";

export const ChatButton = () => {
  const { toggleChat } = useSettingsStore();
  return (
    <>
      <button
        type="button"
        className="w-[176px] h-[176px] rounded-full hidden lg:flex items-center justify-center flex-col gap-2 text-xl hover:bg-primary bg-black shadow-2xl hover:brightness-95 shadow-black hover:shadow-primary transition ease-in-out duration-200 text-white
          p-2 active:translate-y-px absolute -bottom-36 -right-36"
        onClick={toggleChat}
      >
        <RiArrowRightUpLine size={36} />
        <Translate value="Let's Discuss Your Idea" />
      </button>
      <Button
        color="primary"
        rounded
        icon={<RiArrowRightUpLine size={24} />}
        onClick={toggleChat}
        size="large"
        className="lg:hidden"
      >
        <Translate value="Let's Discuss" />
      </Button>
    </>
  );
};
