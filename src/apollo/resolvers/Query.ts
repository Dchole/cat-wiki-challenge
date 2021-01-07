import { TContext } from "apollo/types/context";
import type { QueryResolvers } from "../types/generated/server";

const Query: QueryResolvers<TContext> = {
  breed: async (_, { name }, { dataSources: { catsAPI } }) => {
    return await catsAPI.getBreed(name);
  },
  breeds: async (_, { limit, page }, { dataSources: { catsAPI } }) => {
    return await catsAPI.getAllBreeds(limit, page);
  }
};

export default Query;
