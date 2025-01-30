"use client";

import useSettingsStore from "@/store/settings";
import dynamic from "next/dynamic";
import React from "react";

const Drawer = dynamic(() => import("@/components/drawer"));
const Chat = dynamic(() => import("@/components/chat"));

interface GlobalProviderProps extends React.PropsWithChildren {}

const GlobalProvider = ({ children }: GlobalProviderProps) => {
  const { isChatOpen, toggleChat } = useSettingsStore();
  return (
    <>
      {children}
      <Drawer open={isChatOpen} onClose={toggleChat} color="black">
        <Chat />
      </Drawer>
    </>
  );
};

export default GlobalProvider;
