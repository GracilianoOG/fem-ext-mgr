import { ExtensionTogglerStyled } from "./styles/ExtensionToggler.styled";
import { useExtensions } from "../hooks/useExtensions";

interface ExtensionTogglerProps {
  isActive: boolean;
  extId: string;
}

const ExtensionToggler = ({ isActive, extId }: ExtensionTogglerProps) => {
  const { setExtensions } = useExtensions();

  const handleClick = () =>
    setExtensions(prevExtensions =>
      prevExtensions.map(ext => {
        if (ext.id === extId) {
          return { ...ext, isActive: !isActive };
        } else {
          return ext;
        }
      })
    );

  return <ExtensionTogglerStyled onClick={handleClick} $isActive={isActive} />;
};

export default ExtensionToggler;
