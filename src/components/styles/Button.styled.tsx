import styled, { css } from "styled-components";

export const ButtonStyled = styled.button<{ $selected?: boolean }>`
  border-radius: 22px;
  border: none;
  background-color: var(--neutral-0);
  color: var(--neutral-900);
  font-size: 20px;
  padding: 8px 20px;

  ${({ $selected }) =>
    $selected &&
    css`
      background-color: var(--red-700);
      color: var(--neutral-0);
    `}
`;
