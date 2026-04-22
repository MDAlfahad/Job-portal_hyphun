import { create } from "zustand";
import { persist } from "zustand/middleware";

const useThemeStore = create(
  persist(
    (set, get) => ({
      theme: "light",

      toggleTheme: () => {
        const newTheme =
          get().theme === "light" ? "dark" : "light";

        document.documentElement.classList.remove("light", "dark");
        document.documentElement.classList.add(newTheme);

        set({ theme: newTheme });
      },
    }),
    {
      name: "theme-store",
    }
  )
);

export default useThemeStore;