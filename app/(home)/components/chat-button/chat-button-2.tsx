"use client";

import useSettingsStore from "@/store/settings";
import Button from "@/components/button";

export const ChatButton2 = () => {
  const { toggleChat } = useSettingsStore();
  return (
    <div className="px-6 lg:px-8 w-full bg-gray-light border border-gray-200 rounded-full py-8 flex gap-x-8 gap-y-4 justify-between">
      <h4 className="text-black font-bold text-2xl xl:text-3xl 2xl:text-4xl tracking-[0px] md:w-[70%] lg:w-[75%] xl:w-[80%]">
        Create a software development Team with us
      </h4>
      <Button onClick={toggleChat} color="black" rounded size="large">
        Get a Quote
      </Button>
    </div>
  );
};
