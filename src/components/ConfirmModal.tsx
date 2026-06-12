import { useState } from "react";
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

export const ConfirmModal = () => {
  const [isModal, setIsModal] = useState(true);

  if (!isModal) {
    return;
  }

  return (
    <ConfirmModalStyled>
      <div>
        <h2>Confirm Modal</h2>
        <p>Press the confirm button to confirm.</p>
        <ConfirmModalButtonsStyled>
          <BorderButtonStyled onClick={() => setIsModal(false)}>
            Cancel
          </BorderButtonStyled>
          <DangerButtonStyled>Remove</DangerButtonStyled>
        </ConfirmModalButtonsStyled>
      </div>
    </ConfirmModalStyled>
  );
};
