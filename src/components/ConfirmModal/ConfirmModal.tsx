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
  if (!isVisible) return null;

  return (
    <ConfirmModalStyled>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
        <ConfirmModalButtonsStyled>
          <BorderButtonStyled onClick={onCancel}>Cancel</BorderButtonStyled>
          <DangerButtonStyled onClick={onConfirm}>Remove</DangerButtonStyled>
        </ConfirmModalButtonsStyled>
      </div>
    </ConfirmModalStyled>
  );
};

export default ConfirmModal;
