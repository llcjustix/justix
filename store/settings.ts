import { create } from "zustand";
import { persist } from "zustand/middleware";

interface SettingsStoreState {
  isChatOpen: boolean;
  toggleChat: () => void;
}

const useSettingsStore = create<SettingsStoreState>()(
  persist(
    (set) => ({
      isChatOpen: false,
      toggleChat: () => set((oldState) => ({ isChatOpen: !oldState.isChatOpen })),
    }),
    { name: "settings" }
  )
);

export default useSettingsStore;
