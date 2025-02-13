import { create } from "zustand";
import { persist } from "zustand/middleware";

interface SettingsStoreState {
  isChatOpen: boolean;
  isSidebarOpen: boolean;
  toggleChat: () => void;
  toggleSidebar: () => void;
}

const useSettingsStore = create<SettingsStoreState>()(
  persist(
    (set) => ({
      isChatOpen: false,
      isSidebarOpen: false,
      toggleChat: () => set((oldState) => ({ isChatOpen: !oldState.isChatOpen })),
      toggleSidebar: () => set((oldState) => ({ isSidebarOpen: !oldState.isSidebarOpen })),
    }),
    { name: "settings" }
  )
);

export default useSettingsStore;
