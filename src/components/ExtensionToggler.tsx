import { useState } from "react";
import { ExtensionTogglerStyled } from "./styles/ExtensionToggler.styled";

const ExtensionToggler = ({ isActive }: { isActive: boolean }) => {
  const [isToggled, setIsToggled] = useState(isActive);

  const handleClick = () => setIsToggled(prevIsToggled => !prevIsToggled);

  return <ExtensionTogglerStyled onClick={handleClick} $isActive={isToggled} />;
};

export default ExtensionToggler;
