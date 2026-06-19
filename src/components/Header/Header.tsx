import { HeaderStyled } from "./Header.styled";
import Logo from "../Logo";
import ThemeToggler from "../ThemeToggler";

const Header = () => {
  return (
    <HeaderStyled>
      <Logo />
      <ThemeToggler />
    </HeaderStyled>
  );
};

export default Header;
