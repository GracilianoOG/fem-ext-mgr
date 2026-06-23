import { useId } from "react";
import {
  BorderButtonStyled,
  DangerButtonStyled,
} from "../styles/Button.styled";
import {
  ConfirmModalButtonsStyled,
  ConfirmModalStyled,
} from "./ConfirmModal.styled";

interface ConfirmModalProps {
  isVisible: boolean;
  title: string;
  description: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmModal = ({
  isVisible,
  title,
  description,
  onConfirm,
  onCancel,
}: ConfirmModalProps) => {
  const textId = useId();

  if (!isVisible) return null;

  return (
    <ConfirmModalStyled
      aria-modal="true"
      role="dialog"
      aria-labelledby={textId}
    >
      <div>
        <span id={textId}>
          <h2>{title}</h2>
          <p>{description}</p>
        </span>
        <ConfirmModalButtonsStyled>
          <BorderButtonStyled onClick={onCancel} autoFocus>
            Cancel
          </BorderButtonStyled>
          <DangerButtonStyled onClick={onConfirm}>Remove</DangerButtonStyled>
        </ConfirmModalButtonsStyled>
      </div>
    </ConfirmModalStyled>
  );
};

export default ConfirmModal;
