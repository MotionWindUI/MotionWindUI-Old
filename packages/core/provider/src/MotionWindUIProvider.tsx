import React, { createContext, useContext, useEffect, useRef, useState } from "react";

export type ThemeMode = "light" | "dark";

export interface ThemeContextProps {
  currentTheme: string;
  currentMode: string;
  setCurrentTheme: (theme: string) => void;
  setCurrentMode: (mode: ThemeMode) => void;
}

export const ThemeContext = createContext<ThemeContextProps | null>(null);

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within a MotionWindUIProvider");
  }

  return context;
};

interface MotionWindUIProviderProps {
  children: React.ReactNode;

  /**
   * The theme to set the UI to
   */
  theme?: string;

  /**
   * The light or dark mode of the theme
   */
  mode?: ThemeMode;
}

export const MotionWindUIProvider = ({
  children,
  theme = "default",
}: MotionWindUIProviderProps) => {
  const [currentTheme, setCurrentTheme] = useState<string>(() => {
    const storedTheme = localStorage.getItem("theme");

    return storedTheme || theme;
  });

  const [currentMode, setCurrentMode] = useState<ThemeMode>(() => {
    const storedMode = localStorage.getItem("mode") as ThemeMode;

    if (storedMode) return storedMode;

    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

    return prefersDarkMode ? "dark" : "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", `${currentTheme}-${currentMode}`);
  }, [currentTheme, currentMode]);

  useEffect(() => {
    localStorage.setItem("theme", currentTheme);
  }, [currentTheme]);

  useEffect(() => {
    localStorage.setItem("mode", currentMode);
  }, [currentMode]);

  return (
    <ThemeContext.Provider
      value={{
        currentTheme,
        currentMode,
        setCurrentTheme,
        setCurrentMode,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
