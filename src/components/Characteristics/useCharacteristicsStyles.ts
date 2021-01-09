import { createStyles, makeStyles } from "@material-ui/core/styles";

const useCharacteristicsStyles = makeStyles(theme =>
  createStyles({
    root: {
      marginRight: "5%",

      "& > div": {
        margin: theme.spacing(2, 0)
      },

      "& > .with-bars": {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",

        "& .bars": {
          display: "flex",

          "& > .bar": {
            width: 60,
            height: 12,
            marginRight: 9,
            borderRadius: 8,
            backgroundColor: theme.palette.primary.main
          },

          "& > .fill": {
            backgroundColor: theme.palette.text.primary
          }
        }
      }
    }
  })
);

export default useCharacteristicsStyles;
