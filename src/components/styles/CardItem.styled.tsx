import styled from "styled-components";

export const CardItemStyled = styled.li`
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

export const CardItemInfoStyled = styled.div`
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

export const CardItemPanelStyled = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;
