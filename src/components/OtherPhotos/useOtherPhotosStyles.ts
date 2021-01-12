import { createStyles, makeStyles } from "@material-ui/core/styles";

const useOtherPhotosStyles = makeStyles(theme =>
  createStyles({
    root: {
      marginBottom: theme.spacing(8)
    },
    photos: {
      width: "100%",
      display: "grid",
      gap: 12,
      gridTemplateColumns: "repeat(2, 1fr)",
      margin: theme.spacing(3, 0),

      [theme.breakpoints.between("sm", "md")]: {
        gap: 24,
        gridTemplateColumns: "repeat(3, 1fr)"
      },

      [theme.breakpoints.up("md")]: {
        gap: 45,
        columnGap: 50,
        gridTemplateColumns: "repeat(4, 1fr)"
      }
    }
  })
);

export default useOtherPhotosStyles;
