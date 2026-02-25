import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export type LanguageCode = "ko" | "en";

type LanguageState = {
  language: LanguageCode;
  setLanguage: (language: LanguageCode) => void;
};

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      language: "ko",
      setLanguage: (language) => set({ language }),
    }),
    {
      name: "app-language",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

