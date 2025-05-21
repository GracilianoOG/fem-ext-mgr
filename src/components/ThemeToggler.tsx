import moonIcon from "../assets/images/icons/icon-moon.svg";
import sunIcon from "../assets/images/icons/icon-sun.svg";
import { ThemeTogglerStyled } from "./styles/ThemeToggler.styled";

interface ThemeTogglerProps {
  theme: string;
  toggleTheme: () => void;
}

const ThemeToggler = ({ theme, toggleTheme }: ThemeTogglerProps) => {
  return (
    <ThemeTogglerStyled onClick={toggleTheme}>
      <img src={theme === "light" ? moonIcon : sunIcon} alt="" />
    </ThemeTogglerStyled>
  );
};

export default ThemeToggler;
