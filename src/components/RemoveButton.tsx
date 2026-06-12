import type { ButtonHTMLAttributes } from "react";
import { RemoveButtonStyled } from "./styles/Button.styled";

interface RemoveButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  name: string;
}

const RemoveButton = ({ name, ...props }: RemoveButtonProps) => {
  return (
    <RemoveButtonStyled {...props} aria-label={`Remove ${name}`}>
      <span aria-hidden="true">Remove</span>
    </RemoveButtonStyled>
  );
};

export default RemoveButton;
