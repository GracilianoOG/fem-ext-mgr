import styled from "styled-components";

export const CardItemStyled = styled.li`
  box-shadow: ${({ theme }) => theme.boxShadow};
  background-color: ${({ theme }) => theme.colors.cardBgColor};
  border-radius: 1.25rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  list-style: none;
  min-height: 12.5rem;
  padding: 1.25rem;
  width: 100%;
`;

export const CardItemInfoStyled = styled.div`
  display: flex;
  gap: 1rem;

  img {
    display: block;
  }

  p {
    color: ${({ theme }) => theme.colors.cardDescColor};
    font-size: 0.938rem;
    line-height: 1.5;
  }
`;

export const CardItemPanelStyled = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

export const CardItemTitleStyled = styled.h3`
  color: ${({ theme }) => theme.colors.cardTitleColor};
  font-size: 1.25rem;
  margin-bottom: 0.313rem;
`;
