import Image from "next/image";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import slugify from "@/utils/slugify";
import usePopularBreedsStyles from "./usePopularBreedsStyles";
import Link from "../Link";
import {
  Sort,
  useGetPopularBreedsQuery
} from "@/apollo/types/generated/client";
import shorten from "@/utils/shorten";

const PopularBreeds = () => {
  const classes = usePopularBreedsStyles();
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));

  const { data } = useGetPopularBreedsQuery({
    variables: { limit: 10, sortBy: Sort["Popular"] }
  });

  return (
    <section id="most-searched-breeds" className={classes.root}>
      <List>
        {data?.breeds.map((breed, i) => (
          <li key={breed.id}>
            <ListItem
              component={Link}
              aria-label={breed.name}
              href={`/breeds/${slugify(breed.name)}`}
              className={classes.item}
            >
              <ListItemAvatar className={classes.avatar}>
                <Image
                  src={breed.image}
                  alt={breed.name}
                  width="170"
                  height="170"
                  objectFit="cover"
                />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Typography component="h2" variant="h5">
                    {i + 1}. {breed.name}
                  </Typography>
                }
                secondary={
                  <Typography variant="body2">
                    {mobile ? shorten(breed.description) : breed.description}
                  </Typography>
                }
              />
            </ListItem>
          </li>
        ))}
      </List>
    </section>
  );
};

export default PopularBreeds;
