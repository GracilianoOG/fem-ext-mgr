import logo from "/logos/logo.svg";
import moonIcon from "../assets/images/icons/icon-moon.svg";
import sunIcon from "../assets/images/icons/icon-sun.svg";
import { HeaderStyled } from "./styles/Header.styled";

interface HeaderProps {
  theme: string;
  toggleTheme: () => void;
}

const Header = ({ theme, toggleTheme }: HeaderProps) => {
  return (
    <HeaderStyled>
      <img src={logo} alt="Extensions" />
      <button onClick={toggleTheme}>
        <img src={theme === "light" ? moonIcon : sunIcon} alt="" />
      </button>
    </HeaderStyled>
  );
};

export default Header;
