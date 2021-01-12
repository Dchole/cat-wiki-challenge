import { createStyles, makeStyles } from "@material-ui/core/styles";

const useFooterStyles = makeStyles(theme =>
  createStyles({
    footer: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      flexDirection: "column",
      backgroundColor: theme.palette.getContrastText("#fff"),
      borderTopRightRadius: 30,
      borderTopLeftRadius: 30,
      color: "white",

      "& img": {
        width: 100,
        margin: 4
      },

      "& span": {
        width: "100%",
        marginBottom: 8
      },

      [theme.breakpoints.up("sm")]: {
        borderTopRightRadius: 60,
        borderTopLeftRadius: 60,
        flexDirection: "row",
        alignItems: "center",
        padding: theme.spacing(3, 10),

        "& span": {
          width: "initial",
          fontSize: theme.typography.body1.fontSize
        }
      }
    }
  })
);

export default useFooterStyles;
