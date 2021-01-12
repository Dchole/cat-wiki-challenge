import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#E3E1DC"
    },
    secondary: {
      main: "#544439"
    },
    background: {
      default: "white"
    },
    text: {
      primary: "#291507",
      secondary: "rgba(0, 0, 0, 0.87)"
    }
  },
  typography: {
    fontFamily: "'Montserrat', monospace",
    h3: {
      fontWeight: "bold"
    },
    subtitle1: {
      fontSize: "1.125rem"
    },
    body1: {
      fontSize: "1.125rem"
    },
    allVariants: {
      fontWeight: 500
    }
  },
  overrides: {
    MuiLink: {
      root: {
        display: "flex",
        gap: 9,
        alignItems: "center",
        color: "rgb(98 87 79)",

        "& span": {
          width: "max-content",
          fontWeight: "bold",
          fontSize: "0.875rem",
          textTransform: "uppercase"
        }
      }
    }
  }
});

export default theme;
