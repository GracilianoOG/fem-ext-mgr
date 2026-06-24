import { useEffect, useId, useRef } from "react";
import {
  BorderButtonStyled,
  DangerButtonStyled,
} from "../styles/Button.styled";
import {
  ConfirmModalButtonsStyled,
  ConfirmModalStyled,
} from "./ConfirmModal.styled";
import { createPortal } from "react-dom";

interface ConfirmModalProps {
  isVisible: boolean;
  title: string;
  description: string;
  confirmText?: string;
  cancelText?: string;
  closeOnBackdropClick?: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmModal = ({
  isVisible,
  title,
  description,
  confirmText,
  cancelText,
  closeOnBackdropClick = true,
  onConfirm,
  onCancel,
}: ConfirmModalProps) => {
  const titleId = useId();
  const descId = useId();
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const confirmBtnRef = useRef<HTMLButtonElement>(null);

  const handleBackdropClick = () => closeOnBackdropClick && onCancel();

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
      if (e.key === "Escape") {
        onCancel();
      }
    };
    document.addEventListener("keydown", handleKeydown);

    return () => {
      document.removeEventListener("keydown", handleKeydown);
    };
  }, [onCancel]);

  useEffect(() => {
    document.body.style.overflow = isVisible ? "hidden" : "";
  }, [isVisible]);

  return (
    <>
      {isVisible &&
        createPortal(
          <ConfirmModalStyled
            aria-modal="true"
            role="dialog"
            aria-labelledby={titleId}
            aria-describedby={descId}
            onClick={handleBackdropClick}
          >
            <div onClick={(e) => e.stopPropagation()}>
              <h2 id={titleId}>{title}</h2>
              <p id={descId}>{description}</p>
              <ConfirmModalButtonsStyled>
                <BorderButtonStyled
                  ref={closeBtnRef}
                  onClick={onCancel}
                  autoFocus
                >
                  {cancelText ?? "Cancel"}
                </BorderButtonStyled>
                <DangerButtonStyled ref={confirmBtnRef} onClick={onConfirm}>
                  {confirmText ?? "Confirm"}
                </DangerButtonStyled>
              </ConfirmModalButtonsStyled>
            </div>
          </ConfirmModalStyled>,
          document.body,
        )}
    </>
  );
};

export default ConfirmModal;
