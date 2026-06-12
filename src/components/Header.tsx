import { HeaderStyled } from "./styles/Header.styled";
import Logo from "./Logo";
import ThemeToggler from "./ThemeToggler";
import { useThemes } from "../hooks/useThemes";

const Header = () => {
  const { theme, toggleTheme } = useThemes();

  return (
    <HeaderStyled>
      <Logo />
      <ThemeToggler theme={theme} toggleTheme={toggleTheme} />
    </HeaderStyled>
  );
};

export default Header;
