import moonIcon from "../assets/images/icons/icon-moon.svg";
import sunIcon from "../assets/images/icons/icon-sun.svg";
import { ThemeTogglerStyled } from "./styles/ThemeToggler.styled";

interface ThemeTogglerProps {
  theme: string;
  toggleTheme: () => void;
}

const ThemeToggler = ({ theme, toggleTheme }: ThemeTogglerProps) => {
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
