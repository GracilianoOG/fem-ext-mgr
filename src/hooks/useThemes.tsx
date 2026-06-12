import { useEffect, useState } from "react";

type ThemeType = "light" | "dark";

export const useThemes = () => {
  const [theme, setTheme] = useState<ThemeType>(() => {
    const storedTheme = localStorage.getItem("theme") as ThemeType;

    if (storedTheme) {
      return storedTheme;
    }

    const prefersDarkTheme = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    return prefersDarkTheme ? "dark" : "light";
  });

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return [theme, toggleTheme];
};
