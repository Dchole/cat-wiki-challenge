import type { TContext } from "../types/context";
import type { BreedResolvers } from "../types/generated/server";

const Breed: BreedResolvers<TContext> = {
  image: async (breed, __, { dataSources: { catsAPI } }) => {
    const images = await catsAPI.getBreedPhotos(breed.id);
    return images[0].url;
  },
  photos: async (breed, __, { dataSources: { catsAPI } }) => {
    return await catsAPI.getBreedPhotos(breed.id);
  }
};

export default Breed;
