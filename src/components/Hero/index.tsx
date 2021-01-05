import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import useHeroStyles from "./useHeroStyles";

const Hero = () => {
  const classes = useHeroStyles();

  return (
    <Box
      component="section"
      display="flex"
      gridGap={24}
      color="white"
      flexDirection="column"
      justifyContent="center"
      alignItems="flex-start"
      p={[2, 5, 10]}
      className={classes.hero}
    >
      <div className={classes.flexbox} aria-labelledby="heading">
        <Typography id="heading" variant="h1" className={classes.heading}>
          CatWiki
        </Typography>
        <img src="/cat.svg" alt="cat" height="64" width="64" />
      </div>
      <Typography className={classes.subheading}>
        Get to know more about your cat breed
      </Typography>
      <InputBase
        id="search"
        className={classes.search}
        placeholder="Enter your breed"
        endAdornment={<SearchIcon fontSize="small" />}
        inputProps={{ "aria-label": "Search for cat breed" }}
      />
    </Box>
  );
};

export default Hero;
