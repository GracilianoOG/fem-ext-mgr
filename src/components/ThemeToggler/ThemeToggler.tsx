import moonIcon from "@/assets/images/icons/icon-moon.svg";
import sunIcon from "@/assets/images/icons/icon-sun.svg";
import { useThemes } from "@/hooks/useThemes";
import { ThemeTogglerStyled } from "./ThemeToggler.styled";

const ThemeToggler = () => {
  const { theme, toggleTheme } = useThemes();

  return (
    <ThemeTogglerStyled
      onClick={toggleTheme}
      aria-checked={theme === "dark"}
      aria-label="Dark mode"
      role="switch"
    >
      <img
        src={theme === "light" ? moonIcon : sunIcon}
        alt=""
        aria-hidden="true"
      />
    </ThemeTogglerStyled>
  );
};

export default ThemeToggler;
