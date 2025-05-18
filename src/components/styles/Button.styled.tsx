import styled, { css } from "styled-components";

export const ButtonStyled = styled.button<{ $selected?: boolean }>`
  border-radius: 22px;
  border: none;
  background-color: var(--neutral-0);
  color: var(--neutral-900);
  font-size: 20px;
  padding: 8px 20px;
  text-transform: capitalize;

  ${({ $selected }) =>
    $selected &&
    css`
      background-color: var(--red-700);
      color: var(--neutral-0);
    `}
`;

export const RemoveButtonStyled = styled(ButtonStyled)`
  border: 1px solid var(--neutral-300);
  color: var(--neutral-900);
  font-size: 15px;
  font-weight: 500;
  padding: 8px 16px;

  &:hover {
    background-color: var(--red-700);
    border-color: var(--red-700);
    color: var(--neutral-0);
  }
`;
