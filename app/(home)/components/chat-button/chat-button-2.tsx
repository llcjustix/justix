"use client";

import useSettingsStore from "@/store/settings";
import Button from "@/components/button";

export const ChatButton2 = () => {
  const { toggleChat } = useSettingsStore();
  return (
    <div className="px-6 lg:px-8 w-full bg-gray-light border border-gray-200 lg:rounded-full rounded-2xl py-8 flex lg:flex-row flex-col justify-between gap-x-8 gap-y-4">
      <h4 className="text-black font-bold text-2xl xl:text-3xl 2xl:text-4xl tracking-[0px] md:w-[70%] lg:w-[75%] xl:w-[80%]">
        Create a software development Team with us
      </h4>
      <div>
        <Button onClick={toggleChat} color="black" rounded size="large">
          Get a Quote
        </Button>
      </div>
    </div>
  );
};
