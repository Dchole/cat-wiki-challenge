import type { TContext } from "../types/context";
import type { MutationResolvers } from "../types/generated/server";

const Mutation: MutationResolvers<TContext> = {
  insertBreeds: async (_, __, { dataSources: { catsAPI, popularBreeds } }) => {
    const breeds = await catsAPI.getAllBreeds();
    return popularBreeds.storeBreeds(breeds) as any;
  },
  incrementSearchCount: async (
    _,
    { name },
    { dataSources: { popularBreeds } }
  ) => {
    await popularBreeds.updateSearchCount(name);
    return "incremented";
  }
};

export default Mutation;
