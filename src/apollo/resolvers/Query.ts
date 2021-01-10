import type { TContext } from "../types/context";
import type { Breed, QueryResolvers } from "../types/generated/server";

const Query: QueryResolvers<TContext> = {
  breed: async (_, { name }, { dataSources: { catsAPI, popularBreeds } }) => {
    const breeds = await catsAPI.getBreed(name);
    popularBreeds.updateSearchCount(name);
    return breeds;
  },
  breeds: async (
    _,
    { limit, page, sortBy },
    { dataSources: { catsAPI, popularBreeds } }
  ) => {
    if (sortBy === "POPULAR") {
      const mostSearchedBreeds = popularBreeds.getPopularBreeds(limit, page);
      const allBreeds = catsAPI.getAllBreeds(null, null);

      const [mostSearched, all] = await Promise.all([
        mostSearchedBreeds,
        allBreeds
      ]);

      const breeds: Breed[] = [];

      await mostSearched.forEach(popularBreed =>
        breeds.push(all.find(breed => breed.name === popularBreed.name))
      );

      return breeds;
    } else {
      return catsAPI.getAllBreeds(limit, page);
    }
  }
};

export default Query;
