import CatsAPI from "../datasources/cats-api";
import PopularBreeds from "../datasources/popular-breeds";

export type TContext = {
  dataSources: {
    catsAPI: CatsAPI;
    popularBreeds: PopularBreeds;
  };
};
