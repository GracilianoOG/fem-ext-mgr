import styled, { css } from "styled-components";

export const ExtensionTogglerStyled = styled.button<{ $isActive: boolean }>`
  --toggle-width: 2.25rem;
  --toggle-height: 1.25rem;
  --toggle-radius: 1.25rem;
  --knob-size: 1rem;
  --knob-offset: 0.125rem;
  --knob-active: calc(
    var(--toggle-width) - var(--knob-size) - var(--knob-offset) * 2
  );

  border: none;
  border-radius: var(--toggle-radius);
  background-color: ${({ theme }) => theme.colors.togglerBgColor};
  cursor: pointer;
  height: var(--toggle-height);
  position: relative;
  transition: background-color 0.2s;
  width: var(--toggle-width);

  ${({ $isActive }) =>
    $isActive &&
    css`
      background-color: ${({ theme }) => theme.colors.togglerActiveBgColor};

      &:hover {
        background-color: ${({ theme }) =>
          theme.colors.togglerActiveBgColorHover};
      }
    `}

  &::before {
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.togglerKnobBgColor};
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
