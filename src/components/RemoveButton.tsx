import type { ButtonHTMLAttributes } from "react";
import { BorderButtonStyled } from "./styles/Button.styled";

interface RemoveButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  name: string;
}

const RemoveButton = ({ name, ...props }: RemoveButtonProps) => {
  return (
    <BorderButtonStyled {...props} aria-label={`Remove ${name}`}>
      <span aria-hidden="true">Remove</span>
    </BorderButtonStyled>
  );
};

export default RemoveButton;
