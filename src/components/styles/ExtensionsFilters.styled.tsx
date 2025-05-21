import styled from "styled-components";
import { mediaQueries } from "../../utils/mediaQueries";

export const ExtensionsFiltersStyled = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  justify-content: center;
  margin-bottom: 2.625rem;

  ${mediaQueries.tablet} {
    flex-direction: row;
    justify-content: space-between;
  }

  ${mediaQueries.laptop} {
    margin-bottom: 2rem;
  }
`;
