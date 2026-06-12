import { ExtensionTogglerStyled } from "./styles/ExtensionToggler.styled";
import { useExtensions } from "../hooks/useExtensions";

interface ExtensionTogglerProps {
  name: string;
  isActive: boolean;
  extId: string;
}

const ExtensionToggler = ({ name, isActive, extId }: ExtensionTogglerProps) => {
  const { setExtensions } = useExtensions();

  const handleClick = () =>
    setExtensions((prevExtensions) =>
      prevExtensions.map((ext) =>
        ext.id === extId ? { ...ext, isActive: !isActive } : ext,
      ),
    );

  return (
    <ExtensionTogglerStyled
      onClick={handleClick}
      $isActive={isActive}
      role="switch"
      aria-label={`${name} state`}
      aria-checked={isActive}
    />
  );
};

export default ExtensionToggler;
