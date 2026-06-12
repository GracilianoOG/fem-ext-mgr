import { useEffect, useState } from "react";

type ThemeType = "light" | "dark";

export const useThemes = () => {
  const [theme, setTheme] = useState<ThemeType>(() => {
    const storedTheme = localStorage.getItem("theme") as ThemeType;

    if (storedTheme) {
      return storedTheme;
    }

    return "light";
  });

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return [theme, toggleTheme];
};
