import { ApolloServer } from "apollo-server-micro";
import CatsAPI from "apollo/datasource";
import schemaWithResolvers from "apollo/schema";

export const apolloServer = new ApolloServer({
  schema: schemaWithResolvers,
  dataSources: () => ({ catsAPI: new CatsAPI() })
});

export const config = {
  api: {
    bodyParser: false
  }
};

export default apolloServer.createHandler({ path: "/api/graphql" });
