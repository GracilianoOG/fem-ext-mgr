import styled from "styled-components";
import { ButtonStyled } from "../styles/Button.styled";

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
      ${dangerStyle}
    `}
`;
