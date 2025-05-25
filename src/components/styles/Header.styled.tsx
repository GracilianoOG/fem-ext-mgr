import styled from "styled-components";
import { mediaQueries } from "../../utils/mediaQueries";

export const HeaderStyled = styled.header`
  align-items: center;
  border-radius: 0.5rem;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  background-color: ${({ theme }) => theme.colors.headerBgColor};
  display: flex;
  justify-content: space-between;
  margin-bottom: 2.375rem;
  padding: 0.438rem 0.688rem;

  ${mediaQueries.laptop} {
    border-radius: 1.125rem;
    padding: 0.625rem 1rem;
    margin-bottom: 4.25rem;
  }
`;
