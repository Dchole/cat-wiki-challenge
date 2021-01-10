import type { Resolvers } from "../types/generated/server";
import Breed from "./Breed";
import Mutation from "./Mutation";
import Query from "./Query";

const resolvers: Resolvers = {
  Query,
  Mutation,
  Breed
};

export default resolvers;
