import { TContext } from "@graphql/types/context";
import { QueryResolvers } from "graphql/types/__generated__";

const Query: QueryResolvers<TContext> = {
  breed: async (_, { name }, { dataSources: { catsAPI } }) => {
    return await catsAPI.getBreed(name);
  },
  breeds: async (_, { limit, page }, { dataSources: { catsAPI } }) => {
    return await catsAPI.getAllBreeds(limit, page);
  }
};

export default Query;
