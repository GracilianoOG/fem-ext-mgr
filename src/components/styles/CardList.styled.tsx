import styled from "styled-components";
import { mediaQueries } from "../../utils/mediaQueries";

export const CardListStyled = styled.ul`
  display: grid;
  gap: 12px;
  grid-template-columns: 1fr;

  ${mediaQueries.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${mediaQueries.laptop} {
    grid-template-columns: repeat(3, 1fr);
  }
`;
