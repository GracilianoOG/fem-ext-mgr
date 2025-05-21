import moonIcon from "../assets/images/icons/icon-moon.svg";
import sunIcon from "../assets/images/icons/icon-sun.svg";
import { HeaderStyled } from "./styles/Header.styled";
import { ThemeTogglerStyled } from "./styles/ThemeToggler.styled";
import Logo from "./Logo";

interface HeaderProps {
  theme: string;
  toggleTheme: () => void;
}

const Header = ({ theme, toggleTheme }: HeaderProps) => {
  return (
    <HeaderStyled>
      <Logo theme={theme} />
      <ThemeTogglerStyled onClick={toggleTheme}>
        <img src={theme === "light" ? moonIcon : sunIcon} alt="" />
      </ThemeTogglerStyled>
    </HeaderStyled>
  );
};

export default Header;
