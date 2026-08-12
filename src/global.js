import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  :root {
    --surface: ${({ theme }) =>
      theme.mode === "dark"
        ? "rgba(255,255,255,.055)"
        : "rgba(255,255,255,.76)"};
    --surface-soft: ${({ theme }) =>
      theme.mode === "dark"
        ? "rgba(255,255,255,.025)"
        : "rgba(238,246,252,.82)"};
    --border: ${({ theme }) =>
      theme.mode === "dark" ? "rgba(255,255,255,.09)" : "rgba(16,34,56,.11)"};
    --header-bg: ${({ theme }) =>
      theme.mode === "dark" ? "rgba(7,17,31,.72)" : "rgba(255,255,255,.78)"};
    --hero-start: ${({ theme }) =>
      theme.mode === "dark" ? "#ffffff" : "#102238"};
    --grid-line: ${({ theme }) =>
      theme.mode === "dark" ? "rgba(255,255,255,.018)" : "rgba(16,34,56,.035)"};
    --shadow: ${({ theme }) =>
      theme.mode === "dark" ? "rgba(0,0,0,.24)" : "rgba(38,73,105,.14)"};
  }

  body {
    min-height: 100vh;
    background:
      radial-gradient(circle at 8% 8%, rgba(35, 213, 232, .12), transparent 28rem),
      radial-gradient(circle at 92% 18%, rgba(108, 124, 255, .11), transparent 32rem),
      ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    display: block;
    // flex-direction: column;
    // justify-content: center;
    // height: 100vh;
    // margin: 0;
    // padding: 0;
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    font-family: "Google Sans Regular", BlinkMacSystemFont, -apple-system, 'Segoe UI', sans-serif;
    transition: background 0.25s linear;
  }`;
