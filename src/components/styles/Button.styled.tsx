import { dangerStyle } from "@/styles/buttonStyles";
import styled from "styled-components";

export const ButtonStyled = styled.button<{ $selected?: boolean }>`
  border-radius: 1.375rem;
  color: ${({ theme }) => theme.colors.btnColor};
  text-transform: capitalize;
  transition:
    background-color 0.2s,
    border-color 0.2s,
    opacity 0.2s;
`;

export const BorderButtonStyled = styled(ButtonStyled)`
  background-color: transparent;
  border: 0.063rem solid ${({ theme }) => theme.colors.removeBtnBorderColor};
  font-size: 0.938rem;
  font-weight: 500;
  padding: 0.5rem 1rem;

  &:focus-visible {
    background-color: ${({ theme }) => theme.colors.removeBtnColorFocus};
    border-color: ${({ theme }) => theme.colors.removeBtnColorFocus};
  }

  &:hover {
    opacity: 0.75;
  }
`;

export const DangerButtonStyled = styled(BorderButtonStyled)`
  border-color: ${({ theme }) => theme.colors.filterBtnBgColorSel};
  ${dangerStyle}
`;

export const RemoveButtonStyled = styled(BorderButtonStyled)`
  &:hover {
    background-color: ${({ theme }) => theme.colors.removeBtnBgColorHover};
    border-color: ${({ theme }) => theme.colors.removeBtnBorderColorHover};
    color: ${({ theme }) => theme.colors.removeBtnColorHover};
    opacity: 1;
  }
`;
