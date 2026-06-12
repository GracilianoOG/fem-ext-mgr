import { useEffect, useState, type PropsWithChildren } from "react";
import { ThemeContext, type Theme } from "../contexts/ThemeContext";

const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const storedTheme = localStorage.getItem("theme") as Theme;

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

  return <ThemeContext value={{ theme, toggleTheme }}>{children}</ThemeContext>;
};

export default ThemeProvider;
