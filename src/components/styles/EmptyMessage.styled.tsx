import styled from "styled-components";

export const EmptyMessageStyled = styled.p`
  color: ${({ theme }) => theme.colors.emptyMsgColor};
  border: 2px dashed currentColor;
  border-radius: 0.75rem;
  font-size: 1.5rem;
  font-weight: 700;
  text-transform: capitalize;
  text-align: center;
  padding: 1.5rem 0;
`;
