import styled, { css } from "styled-components";
import { shadow } from "./common.styled";

export const ButtonStyled = styled.button<{ $selected?: boolean }>`
  border-radius: 22px;
  background-color: ${({ theme }) => theme.colors.btnBgColor};
  color: ${({ theme }) => theme.colors.btnColor};
  text-transform: capitalize;
`;

export const FilterButtonStyled = styled(ButtonStyled)`
  ${shadow};
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
      background-color: ${({ theme }) => theme.colors.filterBtnBgColorSel};
      color: ${({ theme }) => theme.colors.filterBtnColorSel};

      &:hover {
        background-color: ${({ theme }) => theme.colors.filterBtnColorSelHover};
        opacity: 1;
      }
    `}
`;

export const RemoveButtonStyled = styled(ButtonStyled)`
  border: 1px solid ${({ theme }) => theme.colors.removeBtnBorderColor};
  font-size: 15px;
  font-weight: 500;
  padding: 8px 16px;
  transition: background-color 0.2s, border-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.removeBtnBgColorHover};
    border-color: ${({ theme }) => theme.colors.removeBtnBorderColorHover};
    color: ${({ theme }) => theme.colors.removeBtnColorHover};
  }
`;
