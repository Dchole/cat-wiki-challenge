import { createStyles, makeStyles } from "@material-ui/core/styles";

const useDiscoverStyles = makeStyles(theme =>
  createStyles({
    root: {
      backgroundColor: theme.palette.primary.main,
      borderBottomLeftRadius: 42,
      borderBottomRightRadius: 42,

      "& h2": {
        width: "100%",
        fontWeight: "bold"
      },

      [theme.breakpoints.up("sm")]: {
        borderBottomLeftRadius: 60,
        borderBottomRightRadius: 60,

        "& h2": {
          width: "50%",
          fontSize: theme.typography.h3.fontSize
        }
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
      marginTop: 36,

      "& a": {
        "& span": {
          [theme.breakpoints.up("sm")]: {
            fontSize: theme.typography.body1.fontSize
          }
        }
      }
    },
    cats: {
      margin: theme.spacing(3.6, 0, 3),
      display: "grid",
      gap: 14,
      gridTemplateColumns: "1fr 1fr",

      [theme.breakpoints.up("sm")]: {
        display: "flex",
        alignItems: "center",
        marginTop: 45,
        gap: 50
      },

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

      "& span": {
        fontWeight: 600,
        fontSize: "0.875rem",
        fontFamily: theme.typography.fontFamily,

        [theme.breakpoints.up("sm")]: {
          fontSize: "1.125rem"
        }
      }
    },
    more: {
      justifyContent: "flex-end"
    }
  })
);

export default useDiscoverStyles;
