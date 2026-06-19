import styled from "styled-components";
import { mediaQueries } from "@/utils/mediaQueries";

export const CardListStyled = styled.ul`
  display: grid;
  gap: 0.75rem;
  grid-template-columns: 1fr;

  ${mediaQueries.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${mediaQueries.laptop} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const EmptyMessageStyled = styled.p`
  color: ${({ theme }) => theme.colors.emptyMsgColor};
  border: 0.125rem dashed currentColor;
  border-radius: 0.75rem;
  font-size: 1.5rem;
  font-weight: 700;
  text-transform: capitalize;
  text-align: center;
  padding: 1.5rem 0;
`;
