import styled from "styled-components";

export const ExtensionsFiltersStyled = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  margin-bottom: 42px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;
