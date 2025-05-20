import { useEffect, useState } from "react";

type ThemeType = "light" | "dark";

export const useThemes = (): [ThemeType, () => void] => {
  const [theme, setTheme] = useState<ThemeType>(() => {
    const localTheme = localStorage.getItem("theme");
    return localTheme === "light" || localTheme === "dark"
      ? localTheme
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
