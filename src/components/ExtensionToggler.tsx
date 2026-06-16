import { ExtensionTogglerStyled } from "./styles/ExtensionToggler.styled";
import { useExtensions } from "../hooks/useExtensions";
import { useRef, useState } from "react";

interface ExtensionTogglerProps {
  name: string;
  isActive: boolean;
  extId: string;
}

const ExtensionToggler = ({ name, isActive, extId }: ExtensionTogglerProps) => {
  const { setExtensions } = useExtensions();
  const [isToggled, setIsToggled] = useState(isActive);
  const clicked = useRef(false);

  const handleAnimationEnd = () => {
    if (!clicked.current) return;

    setExtensions((prevExtensions) =>
      prevExtensions.map((ext) =>
        ext.id === extId ? { ...ext, isActive: !isActive } : ext,
      ),
    );
  };

  return (
    <ExtensionTogglerStyled
      onClick={() => {
        setIsToggled(!isToggled);
        clicked.current = true;
      }}
      onAnimationEnd={handleAnimationEnd}
      $isActive={isToggled}
      role="switch"
      aria-label={`${name} state`}
      aria-checked={isActive}
    />
  );
};

export default ExtensionToggler;
