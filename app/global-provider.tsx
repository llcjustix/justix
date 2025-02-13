"use client";

import useSettingsStore from "@/store/settings";
import dynamic from "next/dynamic";
import React from "react";
import Drawer from "@/components/drawer";

const Chat = dynamic(() => import("@/components/chat"));
const Sidebar = dynamic(() => import("@/components/sidebar"));

interface GlobalProviderProps extends React.PropsWithChildren {}

const GlobalProvider = ({ children }: GlobalProviderProps) => {
  const { isChatOpen, isSidebarOpen, toggleChat, toggleSidebar } = useSettingsStore();
  return (
    <>
      {children}
      <Drawer open={isChatOpen} onClose={toggleChat} color="black">
        <Chat />
      </Drawer>
      <Drawer open={isSidebarOpen} onClose={toggleSidebar} color="black" withLogo size="small">
        <Sidebar />
      </Drawer>
    </>
  );
};

export default GlobalProvider;
