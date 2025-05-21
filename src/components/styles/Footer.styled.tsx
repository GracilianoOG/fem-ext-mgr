import styled from "styled-components";

export const FooterStyled = styled.footer`
  color: ${({ theme }) => theme.colors.footerColor};
  font-size: 0.875rem;
  text-align: center;
  margin-top: 7rem;

  a {
    color: ${({ theme }) => theme.colors.footerLinkColor};
  }
`;
