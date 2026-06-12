import { useEffect, useState, type PropsWithChildren } from "react";
import { ThemeContext, type Theme } from "../contexts/ThemeContext";
import { ThemeProvider as SCThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../utils/themes";

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

  return (
    <ThemeContext value={{ theme, toggleTheme }}>
      <SCThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        {children}
      </SCThemeProvider>
    </ThemeContext>
  );
};

export default ThemeProvider;
