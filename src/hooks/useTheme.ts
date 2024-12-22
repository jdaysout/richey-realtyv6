import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Theme = 'light' | 'dark';

interface ThemeState {
  theme: Theme;
  toggleTheme: () => void;
}

export const useTheme = create<ThemeState>()(
  persist(
    (set) => ({
      theme: 'light',
      toggleTheme: () => set((state) => {
        const newTheme = state.theme === 'light' ? 'dark' : 'light';
        document.documentElement.classList.remove(state.theme);
        document.documentElement.classList.add(newTheme);
        return { theme: newTheme };
      }),
    }),
    {
      name: 'theme-storage',
      onRehydrateStorage: () => {
        // Initialize theme on page load
        const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const savedTheme = localStorage.getItem('theme-storage')
          ? JSON.parse(localStorage.getItem('theme-storage')!).state.theme
          : isDark ? 'dark' : 'light';
        
        document.documentElement.classList.add(savedTheme);
        return (state) => {
          state!.theme = savedTheme;
        };
      },
    }
  )
);