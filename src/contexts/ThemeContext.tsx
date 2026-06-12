import { createContext } from "react";

export type Theme = "light" | "dark";

interface ThemeContextValues {
  theme: Theme;
  toggleTheme: React.Dispatch<React.SetStateAction<Theme>>;
}

export const ThemeContext = createContext<ThemeContextValues | undefined>(
  undefined,
);
