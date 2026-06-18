import { ExtensionTogglerStyled } from "./styles/ExtensionToggler.styled";
import { useExtensions } from "../hooks/useExtensions";
import { useRef, useState } from "react";
import { useLiveRegion } from "../hooks/useLiveRegion";

interface ExtensionTogglerProps {
  name: string;
  isActive: boolean;
  extId: string;
}

const ExtensionToggler = ({ name, isActive, extId }: ExtensionTogglerProps) => {
  const { setExtensions } = useExtensions();
  const { updateLiveRegion } = useLiveRegion();
  const [isToggled, setIsToggled] = useState(isActive);
  const clicked = useRef(false);

  const handleAnimationEnd = () => {
    if (!clicked.current) return;

    const nextToggleState = !isActive;

    updateLiveRegion(`Turned ${name} ${nextToggleState ? "on" : "off"}`);
    setExtensions((prevExtensions) =>
      prevExtensions.map((ext) =>
        ext.id !== extId ? ext : { ...ext, isActive: nextToggleState },
      ),
    );
  };

  const handleClick = () => {
    setIsToggled(!isToggled);
    clicked.current = true;
  };

  return (
    <ExtensionTogglerStyled
      onClick={handleClick}
      onAnimationEnd={handleAnimationEnd}
      $isActive={isToggled}
      role="switch"
      aria-label={`${name} state`}
      aria-checked={isActive}
    />
  );
};

export default ExtensionToggler;
