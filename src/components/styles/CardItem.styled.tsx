import styled from "styled-components";
import { shadow } from "./common.styled";

export const CardItemStyled = styled.li`
  ${shadow};
  background-color: ${({ theme }) => theme.colors.cardBgColor};
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
    color: ${({ theme }) => theme.colors.cardTitleColor};
    font-size: 20px;
    margin-bottom: 5px;
  }

  p {
    color: ${({ theme }) => theme.colors.cardDescColor};
    font-size: 15px;
    line-height: 1.5;
  }
`;

export const CardItemPanelStyled = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;
