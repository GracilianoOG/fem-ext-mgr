import { HeaderStyled } from "./styles/Header.styled";
import Logo from "./Logo";
import ThemeToggler from "./ThemeToggler";

interface HeaderProps {
  theme: string;
  toggleTheme: () => void;
}

const Header = ({ theme, toggleTheme }: HeaderProps) => {
  return (
    <HeaderStyled>
      <Logo theme={theme} />
      <ThemeToggler theme={theme} toggleTheme={toggleTheme} />
    </HeaderStyled>
  );
};

export default Header;
