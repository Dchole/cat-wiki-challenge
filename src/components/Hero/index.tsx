import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import CircularProgress from "@material-ui/core/CircularProgress";
import Autocomplete from "@material-ui/lab/Autocomplete";
import SearchIcon from "@material-ui/icons/Search";
import useHeroStyles from "./useHeroStyles";
import slugify from "@/utils/slugify";
import { useGetBreedNamesLazyQuery } from "@/apollo/types/generated/client";

const Hero = () => {
  const classes = useHeroStyles();
  const { push } = useRouter();
  const [getBreedsNames, { data, loading }] = useGetBreedNamesLazyQuery();
  const [names, setNames] = useState<string[]>([]);
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");

  const handleOpen = () => {
    setOpen(true);
    getBreedsNames();
  };

  const handleSearch = (name: string) => {
    push(`/breeds/${slugify(name)}`);
  };

  const handleInput = (
    _event: React.ChangeEvent<HTMLInputElement>,
    newValue: string
  ) => {
    setInput(newValue);
    handleSearch(newValue);
  };

  useEffect(() => {
    if (data) {
      const names = data.breeds.map(breed => breed.name);
      setNames(names);
    }
  }, [data]);

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
      <Autocomplete
        id="search"
        options={names}
        loading={open && loading}
        open={open}
        onOpen={handleOpen}
        onClose={() => setOpen(false)}
        inputValue={input}
        onInputChange={handleInput}
        className={classes.search}
        renderInput={params => (
          <InputBase
            type="search"
            ref={params.InputProps.ref}
            placeholder="Enter your breed"
            endAdornment={
              <>
                {loading ? (
                  <CircularProgress size={20} color="inherit" />
                ) : null}
                <SearchIcon fontSize="small" className={classes.searchIcon} />
              </>
            }
            inputProps={{
              "aria-label": "Search for cat breed",
              ...params.inputProps
            }}
            fullWidth
          />
        )}
      />
    </Box>
  );
};

export default Hero;
