import logo from "../assets/images/logos/logo.svg";
import themeIcon from "../assets/images/icons/icon-moon.svg";
import { HeaderStyled } from "./styles/Header.styled";

const Header = () => {
  return (
    <HeaderStyled>
      <img src={logo} alt="Extensions" />
      <button>
        <img src={themeIcon} alt="" />
      </button>
    </HeaderStyled>
  );
};

export default Header;
