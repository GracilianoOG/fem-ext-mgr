import styled from "styled-components";
import { mediaQueries } from "@/utils/mediaQueries";

export const TitleStyled = styled.h1`
  color: ${({ theme }) => theme.colors.titleColor};
  font-size: 2rem;
  text-align: center;
`;

export const FiltersContainerStyled = styled.ul`
  display: flex;
  gap: 0.75rem;
  justify-content: center;
  list-style: none;
`;

export const ExtensionsFiltersStyled = styled.section`
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
