import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body {
    font-family: ${theme.font.family.default};
  }

  a {
    text-decoration: none;
  }


  /* Alert dialog */
  .AlertDialogOverlay {
      background-color: rgba(34, 34, 34, 0.8);
      position: fixed;
      inset: 0;
      animation: overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
    }
    .AlertDialogContent {
      background-color: ${theme.colors.darkWhite};
      border-radius: 6px;
      box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
        hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 90vw;
      max-width: 500px;
      max-height: 85vh;
      padding: 25px;
      text-align: center;
      animation: contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
    }
    .AlertDialogContent:focus {
      outline: none;
    }

    .AlertDialogTitle {
      text-align: center;
      margin-bottom: 1rem;
      color: red;
    }

    .AlertDialogDescription {
      margin-bottom: 20px;
      color: ${theme.colors.black};
      font-size: ${theme.font.sizes.medium};
      font-weight: 700;
      line-height: 1.5;
    }

    .Button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: 0.8rem;
      padding: 0 3.5rem;
      font-size: ${theme.font.sizes.medium};
      line-height: 1;
      font-weight: 700;
      color: ${theme.colors.darkWhite};
      height: 4rem;
      cursor: pointer;
      border: none;
    }

    .Button.red {
      background-color: ${theme.colors.redPrimary};
    }

    .Button.mauve {
      background-color: ${theme.colors.primary};
    }

    @keyframes overlayShow {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    @keyframes contentShow {
      from {
        opacity: 0;
        transform: translate(-50%, -48%) scale(0.96);
      }
      to {
        opacity: 1;
        transform: translate(-50%, -50%) scale(1);
      }
    }

`;
