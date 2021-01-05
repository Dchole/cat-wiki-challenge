import Image from "next/image";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import ArrowRightIcon from "@material-ui/icons/ArrowRightAlt";
import Link from "@components/Link";
import useDiscoverStyles from "./useDiscoverStyles";

const Discover = () => {
  const classes = useDiscoverStyles();

  return (
    <Box
      component="section"
      px={[2, 5, 10]}
      py={[2, 3, 5]}
      pb={[3, 5, 10]}
      className={classes.root}
    >
      <Typography component="p" color="textPrimary" variant="subtitle1">
        Most Searched Breeds
      </Typography>
      <Grid
        justify="space-between"
        wrap="nowrap"
        className={classes.header}
        container
      >
        <Typography component="h2" variant="h3">
          66+ Breeds For you to discover
        </Typography>
        <Link href="/more">
          <span>See more</span> <ArrowRightIcon />
        </Link>
      </Grid>
      <section className={classes.cats}>
        {[1, 2, 3, 4].map(cat => (
          <div key={cat}>
            <Image
              src="/image 1.png"
              alt="breed name"
              width="220"
              height="220"
            />
            <span>breed name</span>
          </div>
        ))}
      </section>
    </Box>
  );
};

export default Discover;
