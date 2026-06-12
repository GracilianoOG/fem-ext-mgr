import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export const useThemes = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useThemes must be used within a ThemeProvider!");
  }

  return context;
};
