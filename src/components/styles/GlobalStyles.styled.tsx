import { createGlobalStyle, keyframes } from "styled-components";
import nsRegular from "../../assets/fonts/static/NotoSans-Regular.ttf";
import nsMedium from "../../assets/fonts/static/NotoSans-Medium.ttf";
import nsBold from "../../assets/fonts/static/NotoSans-Bold.ttf";
import nsVariable from "../../assets/fonts/NotoSans-VariableFont_wdth,wght.ttf";
import { mediaQueries } from "../../utils/mediaQueries";

const focusAim = keyframes`
  0% {
    outline-offset: 0.375rem;
  }

  100% {
    outline-offset: 0.125rem;
  }
`;

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :root {
    /* Neutral Colors */
    --neutral-900: hsl(227, 75%, 14%);
    --neutral-800: hsl(226, 25%, 17%);
    --neutral-700: hsl(225, 23%, 24%);
    --neutral-600: hsl(226, 11%, 37%);
    --neutral-300: hsl(0, 0%, 78%);
    --neutral-200: hsl(217, 61%, 90%);
    --neutral-100: hsl(0, 0%, 93%);
    --neutral-0: hsl(200, 60%, 99%);

    /* Red Colors */
    --red-400: hsl(3, 86%, 64%);
    --red-500: hsl(3, 71%, 56%);
    --red-700: hsl(3, 77%, 44%);

    /* Gradients */
    --light-gradient: linear-gradient(180deg, #ebf2fc 0%, #eef8f9 100%);
    --dark-gradient: linear-gradient(180deg, #040918 0%, #091540 100%);
  }

  @font-face {
    font-family: "Noto Sans VF";
    src: url("${nsVariable}") format("truetype");
    font-weight: 125 950;
    font-stretch: 75% 125%;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Noto Sans";
    src: url("${nsRegular}") format("truetype");
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Noto Sans";
    src: url("${nsMedium}") format("truetype");
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Noto Sans";
    src: url("${nsBold}") format("truetype");
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  body {
    background-color: ${({ theme }) => theme.colors.bodyColor};
    background-image: ${({ theme }) => theme.colors.bodyGrad};
    padding: 1.25rem 1rem;
    display: flex;
    font-family: "Noto Sans", sans-serif;
    justify-content: center;
    min-height: 100vh;

    ${mediaQueries.laptop} {
      padding: 2.625rem 1rem;
    }
  }

  @supports (font-variation-settings: normal) {
    body {
      font-family: "Noto Sans VF", sans-serif;
    }
  }

  button {
    font-family: inherit;
  }

  a,
  button {
    cursor: pointer;

    &:focus-visible {
      animation: ${focusAim} 0.4s ease-out;
      outline: 0.125rem solid ${({ theme }) => theme.colors.focusColor};
      outline-offset: 0.125rem;
    }
  }

  #root {
    display: flex;
    flex-direction: column;
    max-width: 73.125rem;
    width: 100%;
  }
`;
