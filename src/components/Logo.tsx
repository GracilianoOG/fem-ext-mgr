import logo from "/logos/logo.svg";
import logoDark from "/logos/logo-dark.svg";

const Logo = ({ theme }: { theme: string }) => {
  return (
    <img
      src={theme === "light" ? logo : logoDark}
      alt="Extensions"
      width={179}
      height={41}
    />
  );
};

export default Logo;
