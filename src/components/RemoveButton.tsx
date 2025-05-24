import { useExtensions } from "../hooks/useExtensions";
import { RemoveButtonStyled } from "./styles/Button.styled";

const RemoveButton = ({ name, extId }: { name: string; extId: string }) => {
  const { setExtensions } = useExtensions();

  const handleClick = () =>
    setExtensions(prevExtensions =>
      prevExtensions.filter(ext => ext.id !== extId)
    );

  return (
    <RemoveButtonStyled onClick={handleClick} aria-label={`Remove ${name}`}>
      <span aria-hidden="true">Remove</span>
    </RemoveButtonStyled>
  );
};

export default RemoveButton;
