import { popIn } from "../styles/animations";
import { BorderButtonStyled, DangerButtonStyled } from "./styles/Button.styled";
import styled from "styled-components";

const ConfirmModalStyled = styled.div`
  align-items: center;
  background-color: rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  inset: 0;
  justify-content: center;
  position: fixed;
  z-index: 999;

  h2 {
    color: ${({ theme }) => theme.colors.cardTitleColor};
    line-height: 2;
    margin-bottom: 0.5rem;
  }

  p {
    color: ${({ theme }) => theme.colors.cardDescColor};
    line-height: 1.5;
    margin-bottom: 2rem;
  }

  & > div {
    animation: ${popIn} 0.35s forwards ease;
    box-shadow: ${({ theme }) => theme.boxShadow};
    background-color: ${({ theme }) => theme.colors.cardBgColor};
    border-radius: 1.25rem;
    padding: 1.25rem;
    width: min(100%, 20rem);
  }
`;

const ConfirmModalButtonsStyled = styled.div`
  align-items: center;
  justify-content: flex-end;
  display: flex;
  gap: 8px;
`;

interface ConfirmModalProps {
  isVisible: boolean;
  title: string;
  description: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export const ConfirmModal = ({
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
