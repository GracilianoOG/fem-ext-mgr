import styled, { css, keyframes } from "styled-components";

const popIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(0);
  }

  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

const popOut = keyframes`
  0% {
    opacity: 1;
    transform: scale(1);
  }

  100% {
    opacity: 0;
    transform: scale(0);
  }
`;

export const CardItemStyled = styled.li<{ $isRemoved: boolean }>`
  animation: ${popIn} 0.35s forwards ease;
  box-shadow: ${({ theme }) => theme.boxShadow};
  background-color: ${({ theme }) => theme.colors.cardBgColor};
  border-radius: 1.25rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  list-style: none;
  min-height: 12.5rem;
  opacity: 0;
  padding: 1.25rem;
  width: 100%;

  ${({ $isRemoved }) =>
    $isRemoved &&
    css`
      animation: ${popOut} 0.35s forwards ease;
    `}
`;

export const CardItemInfoStyled = styled.div`
  display: flex;
  gap: 1rem;

  img {
    display: block;
  }

  p {
    color: ${({ theme }) => theme.colors.cardDescColor};
    font-size: 0.938rem;
    line-height: 1.5;
  }
`;

export const CardItemPanelStyled = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

export const CardItemTitleStyled = styled.h3`
  color: ${({ theme }) => theme.colors.cardTitleColor};
  font-size: 1.25rem;
  margin-bottom: 0.313rem;
`;
