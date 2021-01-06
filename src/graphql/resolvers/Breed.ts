import { TContext } from "@graphql/types/context";
import { BreedResolvers } from "@graphql/types/__generated__";

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
