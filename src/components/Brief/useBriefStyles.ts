import { createStyles, makeStyles } from "@material-ui/core";

const useBriefStyles = makeStyles(theme =>
  createStyles({
    root: {},
    brief: {
      display: "flex",
      flexDirection: "column",
      maxWidth: "50%",
      alignItems: "flex-start",
      gap: 45,

      "& h2": {
        position: "relative",

        "&::before": {
          content: "''",
          position: "absolute",
          top: -16,
          left: 0,
          height: "100%",
          width: 60,
          borderTop: `3px solid ${theme.palette.text.primary}`
        }
      }
    },
    images: {
      display: "grid",
      gap: 25,
      gridTemplateAreas: `". a a c"
                          ". . b c"
                          ". . b ."`,

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
