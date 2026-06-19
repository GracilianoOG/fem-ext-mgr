import styled from "styled-components";

export const ThemeTogglerStyled = styled.button`
  --size: 3.125rem;
  background-color: ${({ theme }) => theme.colors.themeBtnBgColor};
  border: none;
  border-radius: 0.75rem;
  cursor: pointer;
  height: var(--size);
  transition: background-color 0.25s;
  width: var(--size);

  & img {
    display: block;
    margin: auto;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.themeBtnBgColorHover};
  }
`;
