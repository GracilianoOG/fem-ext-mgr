import { css } from "styled-components";

export const dangerStyle = css`
  background-color: ${({ theme }) => theme.colors.filterBtnBgColorSel};
  color: ${({ theme }) => theme.colors.filterBtnColorSel};

  &:hover {
    background-color: ${({ theme }) => theme.colors.filterBtnColorSelHover};
    opacity: 1;
  }
`;
