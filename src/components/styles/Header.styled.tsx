import styled from "styled-components";

export const HeaderStyled = styled.header`
  border-radius: 0.5rem;
  background-color: var(--neutral-0);
  padding: 0.438rem 0.688rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

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
`;
