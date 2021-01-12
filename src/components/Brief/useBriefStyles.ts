import { createStyles, makeStyles } from "@material-ui/core";

const useBriefStyles = makeStyles(theme =>
  createStyles({
    root: {
      [theme.breakpoints.up("sm")]: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 50
      }
    },
    brief: {
      "& h2": {
        position: "relative",
        fontWeight: "bold",
        marginBottom: theme.spacing(2),

        "&::before": {
          content: "''",
          position: "absolute",
          top: -16,
          left: 0,
          height: "100%",
          width: 60,
          borderTop: `3px solid ${theme.palette.text.primary}`
        }
      },

      "& p": {
        marginBottom: theme.spacing(2)
      },

      [theme.breakpoints.up("sm")]: {
        width: "50%",

        "& p": {
          fontSize: theme.typography.body1.fontSize
        },

        "& a span": {
          fontSize: "1rem"
        }
      }
    },
    images: {
      display: "grid",
      gap: 12,
      margin: theme.spacing(3, "auto", 2),
      gridTemplateAreas: `". a a a c c"
                          ". . b b c c"
                          ". . b b . ."`,

      [theme.breakpoints.up("sm")]: {
        gap: 25,
        gridTemplateAreas: `". a a c"
                            ". . b c"
                            ". . b ."`
      },

      "& > div:first-child": {
        gridArea: "a"
      },

      "& > div:nth-child(2)": {
        gridArea: "b"
      },

      "& > div:last-child": {
        gridArea: "c"
      }
    }
  })
);

export default useBriefStyles;
