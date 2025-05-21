import logo from "/logos/logo.svg";
import logoDark from "/logos/logo-dark.svg";

const Logo = ({ theme }: { theme: string }) => {
  return <img src={theme === "light" ? logo : logoDark} alt="Extensions" />;
};

export default Logo;
