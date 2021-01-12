import Image from "next/image";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import ArrowRightIcon from "@material-ui/icons/ArrowRightAlt";
import Link from "@/components/Link";
import useDiscoverStyles from "./useDiscoverStyles";
import slugify from "@/utils/slugify";
import { Sort, useGetBreedsQuery } from "@/apollo/types/generated/client";

const Discover = () => {
  const classes = useDiscoverStyles();
  const { data } = useGetBreedsQuery({
    variables: { limit: 4, sortBy: Sort["Popular"] }
  });

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
        <Typography component="h2" variant="h5">
          66+ Breeds For you to discover
        </Typography>
        <Hidden xsDown>
          <Link href="/popular">
            <span>See more</span> <ArrowRightIcon />
          </Link>
        </Hidden>
      </Grid>
      <section className={classes.cats}>
        {data?.breeds.map(breed => (
          <Link href={`/breeds/${slugify(breed.name)}`} key={breed.id} naked>
            <Image
              src={breed.image}
              alt={breed.name}
              width="220"
              height="220"
              objectFit="cover"
            />
            <span>{breed.name}</span>
          </Link>
        ))}
      </section>
      <Hidden smUp>
        <Link href="/popular">
          <span>See more</span> <ArrowRightIcon />
        </Link>
      </Hidden>
    </Box>
  );
};

export default Discover;
