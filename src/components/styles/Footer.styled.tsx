import styled from "styled-components";

export const FooterStyled = styled.footer`
  color: ${({ theme }) => theme.colors.footerColor};
  font-size: 0.875rem;
  text-align: center;
  margin-top: 7rem;

  a {
    border-radius: 0.375rem;
    color: ${({ theme }) => theme.colors.footerLinkColor};
  }
`;
