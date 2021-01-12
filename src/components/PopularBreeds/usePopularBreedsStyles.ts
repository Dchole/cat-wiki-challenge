import { createStyles, makeStyles } from "@material-ui/core/styles";

const usePopularBreedsStyles = makeStyles(theme =>
  createStyles({
    root: {
      marginTop: 50
    },
    heading: {
      marginTop: theme.spacing(2),
      fontWeight: "bold",

      [theme.breakpoints.up("sm")]: {
        fontSize: theme.typography.h3.fontSize
      }
    },
    item: {
      marginBottom: 55,
      width: "100%",

      "&.MuiLink-root": {
        gap: 16,
        padding: 0
      },

      "&.MuiLink-underlineHover:hover": {
        textDecoration: "none"
      }
    },
    avatar: {
      width: "35%",

      [theme.breakpoints.up("sm")]: {
        width: "initial"
      }
    }
  })
);

export default usePopularBreedsStyles;
