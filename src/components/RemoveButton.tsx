import { useExtensions } from "../hooks/useExtensions";
import { RemoveButtonStyled } from "./styles/Button.styled";

const RemoveButton = ({ extId }: { extId: string }) => {
  const { setExtensions } = useExtensions();

  const handleClick = () =>
    setExtensions(prevExtensions =>
      prevExtensions.filter(ext => ext.id !== extId)
    );

  return <RemoveButtonStyled onClick={handleClick}>Remove</RemoveButtonStyled>;
};

export default RemoveButton;
