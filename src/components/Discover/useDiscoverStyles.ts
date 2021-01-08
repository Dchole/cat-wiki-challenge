import { createStyles, makeStyles } from "@material-ui/core/styles";

const useDiscoverStyles = makeStyles(theme =>
  createStyles({
    root: {
      backgroundColor: theme.palette.primary.main,
      borderBottomLeftRadius: 60,
      borderBottomRightRadius: 60,

      "& h2": {
        width: "50%"
      },

      "& .MuiTypography-subtitle1": {
        position: "relative",

        "&::after": {
          content: "''",
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          width: 60,
          borderBottom: `3px solid ${theme.palette.text.primary}`
        }
      }
    },
    header: {
      marginTop: 36
    },
    cats: {
      display: "flex",
      gap: 50,
      alignItems: "center",
      marginTop: 45,

      "& a": {
        width: "100%",
        color: theme.palette.text.primary,
        textDecoration: "none",

        "&:first-child": {
          position: "relative",

          "& > div::before": {
            content: "''",
            position: "absolute",
            top: "50%",
            left: 0,
            width: "24%",
            height: "80%",
            transform: "translate(-25%, -50%)",
            borderRadius: 14,
            backgroundColor: "#DEC68B"
          }
        }
      },

      "& img": {
        borderRadius: 24
      },

      "& span": {
        fontWeight: 600,
        fontSize: "1.125rem",
        fontFamily: theme.typography.fontFamily
      }
    }
  })
);

export default useDiscoverStyles;
