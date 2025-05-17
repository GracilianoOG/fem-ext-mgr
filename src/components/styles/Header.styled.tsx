import styled from "styled-components";
import { mediaQueries } from "../../utils/mediaQueries";

export const HeaderStyled = styled.header`
  align-items: center;
  border-radius: 0.5rem;
  background-color: var(--neutral-0);
  display: flex;
  justify-content: space-between;
  margin-bottom: 2.375rem;
  padding: 0.438rem 0.688rem;

  button {
    --size: 3.125rem;
    background-color: var(--neutral-100);
    border: none;
    border-radius: 0.75rem;
    cursor: pointer;
    height: var(--size);
    width: var(--size);

    & img {
      display: block;
      margin: auto;
    }
  }

  ${mediaQueries.laptop} {
    border-radius: 1.125rem;
    padding: 0.625rem 1rem;
    margin-bottom: 4.25rem;
  }
`;
