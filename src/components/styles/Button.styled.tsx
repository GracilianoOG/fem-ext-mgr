import styled, { css } from "styled-components";

export const ButtonStyled = styled.button<{ $selected?: boolean }>`
  border-radius: 22px;
  color: ${({ theme }) => theme.colors.btnColor};
  text-transform: capitalize;
`;

export const FilterButtonStyled = styled(ButtonStyled)`
  box-shadow: ${({ theme }) => theme.boxShadow};
  background-color: ${({ theme }) => theme.colors.filterBtnBgColor};
  border: none;
  font-size: 20px;
  padding: 8px 20px;
  transition: background-color 0.2s, opacity 0.2s;
  &:hover {
    opacity: 0.75;
  }

  ${({ $selected }) =>
    $selected &&
    css`
      box-shadow: none;
      background-color: ${({ theme }) => theme.colors.filterBtnBgColorSel};
      color: ${({ theme }) => theme.colors.filterBtnColorSel};

      &:hover {
        background-color: ${({ theme }) => theme.colors.filterBtnColorSelHover};
        opacity: 1;
      }
    `}
`;

export const RemoveButtonStyled = styled(ButtonStyled)`
  background-color: ${({ theme }) => theme.colors.removeBtnBgColor};
  border: 1px solid ${({ theme }) => theme.colors.removeBtnBorderColor};
  font-size: 15px;
  font-weight: 500;
  padding: 8px 16px;
  transition: background-color 0.2s, border-color 0.2s;

  &:focus-visible {
    background-color: ${({ theme }) => theme.colors.removeBtnColorFocus};
    border-color: ${({ theme }) => theme.colors.removeBtnColorFocus};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.removeBtnBgColorHover};
    border-color: ${({ theme }) => theme.colors.removeBtnBorderColorHover};
    color: ${({ theme }) => theme.colors.removeBtnColorHover};
  }
`;
