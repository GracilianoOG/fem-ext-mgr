import { useState } from "react";
import { BorderButtonStyled, DangerButtonStyled } from "./styles/Button.styled";

export const ConfirmModal = () => {
  const [isModal, setIsModal] = useState(true);

  if (!isModal) {
    return;
  }

  return (
    <div>
      <div>
        <h2>Confirm Modal</h2>
        <p>Press the confirm button to confirm.</p>
        <div>
          <BorderButtonStyled onClick={() => setIsModal(false)}>
            Cancel
          </BorderButtonStyled>
          <DangerButtonStyled>Remove</DangerButtonStyled>
        </div>
      </div>
    </div>
  );
};
