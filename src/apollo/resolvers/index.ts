import type { Resolvers } from "apollo/types/generated/server";
import Breed from "./Breed";
import Query from "./Query";

const resolvers: Resolvers = {
  Query,
  Breed
};

export default resolvers;
