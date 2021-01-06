import CatsAPI from "@graphql/datasource";

export type TContext = {
  dataSources: {
    catsAPI: CatsAPI;
  };
};
