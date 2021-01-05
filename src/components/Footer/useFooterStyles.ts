import { createStyles, makeStyles } from "@material-ui/core/styles";

const useFooterStyles = makeStyles(theme =>
  createStyles({
    footer: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: theme.spacing(4, 12),
      backgroundColor: theme.palette.getContrastText("#fff"),
      borderTopRightRadius: 60,
      borderTopLeftRadius: 60,
      color: "white"
    }
  })
);

export default useFooterStyles;
