import { createStyles, makeStyles } from "@material-ui/core/styles";

const useOtherPhotosStyles = makeStyles(theme =>
  createStyles({
    root: {
      marginBottom: theme.spacing(8)
    },
    photos: {
      width: "100%",
      display: "grid",
      gap: 46,
      columnGap: 50,
      gridTemplateColumns: "repeat(4,1fr)",
      margin: theme.spacing(3, 0)
    }
  })
);

export default useOtherPhotosStyles;
