import { createStyles, makeStyles } from "@material-ui/core/styles";

const useHeaderStyles = makeStyles(() =>
  createStyles({
    toolbar: {
      paddingLeft: 0,
      paddingRight: 0
    }
  })
);

export default useHeaderStyles;
