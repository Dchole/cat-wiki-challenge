import CatsAPI from "apollo/datasource";

export type TContext = {
  dataSources: {
    catsAPI: CatsAPI;
  };
};
