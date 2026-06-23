import { useEffect, useId, useRef } from "react";
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
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const confirmBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === "Tab") {
        if (document.activeElement === closeBtnRef.current) {
          e.preventDefault();
          confirmBtnRef.current?.focus();
        } else if (document.activeElement === confirmBtnRef.current) {
          e.preventDefault();
          closeBtnRef.current?.focus();
        }
      }
    };
    document.addEventListener("keydown", handleKeydown);

    return () => {
      document.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isVisible ? "hidden" : "";
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <ConfirmModalStyled
      aria-modal="true"
      role="dialog"
      aria-labelledby={textId}
      onClick={onCancel}
    >
      <div onClick={(e) => e.stopPropagation()}>
        <span id={textId}>
          <h2>{title}</h2>
          <p>{description}</p>
        </span>
        <ConfirmModalButtonsStyled>
          <BorderButtonStyled ref={closeBtnRef} onClick={onCancel} autoFocus>
            Cancel
          </BorderButtonStyled>
          <DangerButtonStyled ref={confirmBtnRef} onClick={onConfirm}>
            Remove
          </DangerButtonStyled>
        </ConfirmModalButtonsStyled>
      </div>
    </ConfirmModalStyled>
  );
};

export default ConfirmModal;
