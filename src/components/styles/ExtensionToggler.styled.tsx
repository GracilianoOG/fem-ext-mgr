import styled, { css } from "styled-components";

export const ExtensionTogglerStyled = styled.button<{ $isActive: boolean }>`
  --toggle-width: 36px;
  --toggle-height: 20px;
  --toggle-radius: 20px;
  --knob-size: 16px;
  --knob-offset: 2px;
  --knob-active: calc(
    var(--toggle-width) - var(--knob-size) - var(--knob-offset) * 2
  );

  border: none;
  border-radius: var(--toggle-radius);
  background-color: var(--neutral-300);
  cursor: pointer;
  height: var(--toggle-height);
  position: relative;
  transition: background-color 0.2s;
  width: var(--toggle-width);

  ${({ $isActive }) =>
    $isActive &&
    css`
      background-color: var(--red-700);

      &:hover {
        background-color: var(--red-500);
      }
    `}

  &::before {
    border-radius: 50%;
    background-color: var(--neutral-0);
    content: "";
    height: var(--knob-size);
    inset: 0;
    left: var(--knob-offset);
    position: absolute;
    top: var(--knob-offset);
    transition: transform 0.2s;
    width: var(--knob-size);

    ${({ $isActive }) =>
      $isActive &&
      css`
        transform: translateX(var(--knob-active));
      `}
  }
`;
