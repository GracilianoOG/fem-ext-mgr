import styled, { css } from "styled-components";
import { shadow } from "./common.styled";

export const ButtonStyled = styled.button<{ $selected?: boolean }>`
  border-radius: 22px;
  background-color: var(--neutral-0);
  color: var(--neutral-900);
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
      background-color: var(--red-700);
      color: var(--neutral-0);

      &:hover {
        background-color: var(--red-500);
        opacity: 1;
      }
    `}
`;

export const RemoveButtonStyled = styled(ButtonStyled)`
  border: 1px solid var(--neutral-300);
  font-size: 15px;
  font-weight: 500;
  padding: 8px 16px;

  &:hover {
    background-color: var(--red-700);
    border-color: var(--red-700);
    color: var(--neutral-0);
  }
`;
