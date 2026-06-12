import styled, { css } from "styled-components";

export const ButtonStyled = styled.button<{ $selected?: boolean }>`
  border-radius: 1.375rem;
  color: ${({ theme }) => theme.colors.btnColor};
  text-transform: capitalize;
  transition:
    background-color 0.2s,
    border-color 0.2s,
    opacity 0.2s;
`;

export const FilterButtonStyled = styled(ButtonStyled)`
  box-shadow: ${({ theme }) => theme.boxShadow};
  background-color: ${({ theme }) => theme.colors.filterBtnBgColor};
  border: ${({ theme }) => theme.colors.filterBtnBgColor};
  font-size: 1.25rem;
  padding: 0.5rem 1.25rem;
  &:hover {
    opacity: 0.75;
  }

  ${({ $selected }) =>
    $selected &&
    css`
      box-shadow: none;
      background-color: ${({ theme }) => theme.colors.filterBtnBgColorSel};
      border: ${({ theme }) => theme.colors.filterBtnBgColorSel};
      color: ${({ theme }) => theme.colors.filterBtnColorSel};

      &:hover {
        background-color: ${({ theme }) => theme.colors.filterBtnColorSelHover};
        opacity: 1;
      }
    `}
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
  background-color: ${({ theme }) => theme.colors.filterBtnBgColorSel};
  border: ${({ theme }) => theme.colors.filterBtnBgColorSel};
  color: ${({ theme }) => theme.colors.filterBtnColorSel};

  &:hover {
    background-color: ${({ theme }) => theme.colors.filterBtnColorSelHover};
    opacity: 1;
  }
`;

export const RemoveButtonStyled = styled(BorderButtonStyled)`
  &:hover {
    background-color: ${({ theme }) => theme.colors.removeBtnBgColorHover};
    border-color: ${({ theme }) => theme.colors.removeBtnBorderColorHover};
    color: ${({ theme }) => theme.colors.removeBtnColorHover};
    opacity: 1;
  }
`;
