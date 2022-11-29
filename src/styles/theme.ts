export const theme = {
  colors: {
    primary: "#3B3E99",
    secondary: "#292C6E",
    redPrimary: "#FE2E34",
    redTransparent: "rgba(254, 46, 52, 0.5);",
    white: "#FFFFFF",
    darkWhite: "#F0F0F0",
    darkWhite2: "#D9D9D9",
    black: "#7B7B7B",
    darkBlack: "#222222",
  },
  font: {
    family: {
      default: "'Roboto', sans-serif",
    },
    sizes: {
      xsmall: "1.2rem",
      small: "1.6rem",
      medium: "2.0rem",
      large: "2.6rem",
      xlarge: "4.0rem",
      xxlarge: "4.8rem",
      huge: "5.6rem",
      xhuge: "6.4rem",
    },
  },
  media: {
    lteMedium: "(max-width: 768px)",
  },
  spacings: {
    xsmall: "8rem",
    small: "1.6rem",
    medium: "2.4rem",
    large: "3.2rem",
    xlarge: "4.0rem",
    xxlarge: "4.8rem",
    huge: "5.6rem",
    xhuge: "6.4rem",
  },
  shadows: {
    small: "0px 4px 4px rgba(0,0,0,0.25)",
    medium:
      "4px 4px 10px rgba(0, 0, 0, 0.25), -4px -4px 10px rgba(0, 0, 0, 0.25);",
  },
} as const;
