import styled from "styled-components";

export const CardListStyled = styled.ul`
  display: grid;
  gap: 12px;
  grid-template-columns: 1fr;
`;

export const CardListItemStyled = styled.li`
  background-color: white;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  list-style: none;
  min-height: 200px;
  padding: 20px;
  width: 100%;
`;

export const CardListContentStyled = styled.div`
  display: flex;
  gap: 1rem;

  img {
    display: block;
  }

  h2 {
    color: var(--neutral-900);
    font-size: 20px;
    margin-bottom: 5px;
  }

  p {
    color: var(--neutral-700);
    font-size: 15px;
    line-height: 1.5;
  }
`;
