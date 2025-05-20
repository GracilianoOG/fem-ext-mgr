import styled from "styled-components";
import { mediaQueries } from "../../utils/mediaQueries";
import { shadow } from "./common.styled";

export const HeaderStyled = styled.header`
  ${shadow};
  align-items: center;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.headerBgColor};
  display: flex;
  justify-content: space-between;
  margin-bottom: 2.375rem;
  padding: 0.438rem 0.688rem;

  button {
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
  }

  ${mediaQueries.laptop} {
    border-radius: 1.125rem;
    padding: 0.625rem 1rem;
    margin-bottom: 4.25rem;
  }
`;
