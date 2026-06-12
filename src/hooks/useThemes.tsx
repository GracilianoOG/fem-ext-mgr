import { useEffect, useState } from "react";

type ThemeType = "light" | "dark";

export const useThemes = (): [ThemeType, () => void] => {
  const [theme, setTheme] = useState<ThemeType>(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme === "light" || storedTheme === "dark"
      ? storedTheme
      : "light";
  });

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return [theme, toggleTheme];
};
