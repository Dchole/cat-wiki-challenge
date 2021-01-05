import { createStyles, makeStyles } from "@material-ui/core/styles";

const useHeroStyles = makeStyles(theme =>
  createStyles({
    hero: {
      background: "url(/HeroImagemd.png) center center/cover",
      borderTopRightRadius: 60,
      borderTopLeftRadius: 60
    },
    flexbox: {
      display: "flex",
      gap: 24
    },
    heading: {
      fontFamily: "'Mystery Quest', cursive",
      fontSize: "4rem"
    },
    subheading: {
      fontSize: "1.5rem",
      maxWidth: "25ch"
    },
    search: {
      padding: theme.spacing(1.5, 2.5),
      borderRadius: 60,
      backgroundColor: "white"
    }
  })
);

export default useHeroStyles;
