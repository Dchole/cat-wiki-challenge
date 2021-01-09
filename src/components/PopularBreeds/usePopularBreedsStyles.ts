import { createStyles, makeStyles } from "@material-ui/core/styles";

const usePopularBreedsStyles = makeStyles(theme =>
  createStyles({
    root: {
      marginTop: 50
    },
    item: {
      marginBottom: 55,

      "&.MuiLink-root": {
        gap: 50
      },

      "&.MuiLink-underlineHover:hover": {
        textDecoration: "none"
      }
    }
  })
);

export default usePopularBreedsStyles;
