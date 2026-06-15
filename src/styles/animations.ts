import { keyframes } from "styled-components";

export const popIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(0);
  }

  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

export const popOut = keyframes`
  0% {
    opacity: 1;
    transform: scale(1);
  }

  100% {
    opacity: 0;
    transform: scale(0);
  }
`;

export const slideLeft = (from: string) => keyframes`
  0% {
    transform: translateX(${from}) scale(1);
  }  

  100% {
    transform: translateX(0) scale(0.85);
  }
`;

export const slideRight = (to: string) => keyframes`
  0% {
    transform: scale(0.75);
  }

  10% {
    transform: translateX(0) scale(0.85);
  }

  100% {
    transform: translateX(${to}) scale(1);
  }
`;
