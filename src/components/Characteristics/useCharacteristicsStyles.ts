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
            width: 20,
            height: 6,
            marginRight: 9,
            borderRadius: 8,
            backgroundColor: theme.palette.primary.main,

            [theme.breakpoints.between("sm", "md")]: {
              width: 30,
              height: 8
            },

            [theme.breakpoints.up("md")]: {
              width: 60,
              height: 12
            }
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
