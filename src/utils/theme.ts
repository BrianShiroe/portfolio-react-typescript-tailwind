// src/utils/theme.ts
// Utility functions and type definitions for managing light/dark theme in the application.

export type Theme = 'light' | 'dark';

/**
 * Determines the initial theme preference.
 * Checks localStorage, falls back to system preference, or defaults to 'light'.
 */
export const getInitialTheme = (): Theme => {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('theme');
    if (stored === 'light' || stored === 'dark') return stored;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDark ? 'dark' : 'light';
  }
  return 'light';
};

/**
 * Applies the given theme to the document and stores the preference.
 */
export const applyTheme = (theme: Theme) => {
  if (typeof document !== 'undefined') {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }
};

/**
 * Toggles between light and dark theme values.
 */
export const toggleThemeValue = (current: Theme): Theme =>
  current === 'light' ? 'dark' : 'light';
