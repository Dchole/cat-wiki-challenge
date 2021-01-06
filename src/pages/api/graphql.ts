import {
  addResolversToSchema,
  ApolloServer,
  GraphQLFileLoader,
  loadSchemaSync
} from "apollo-server-micro";
import CatsAPI from "@graphql/datasource";
import Query from "@graphql/resolvers/Query";
import Breed from "@graphql/resolvers/Breed";
import { Resolvers } from "@graphql/types/__generated__";

const schema = loadSchemaSync("./src/graphql/schema.gql", {
  loaders: [new GraphQLFileLoader()]
});

const resolvers: Resolvers = {
  Query,
  Breed
};

const schemaWithResolvers = addResolversToSchema({
  schema,
  resolvers
});

const apolloServer = new ApolloServer({
  schema: schemaWithResolvers,
  dataSources: () => ({ catsAPI: new CatsAPI() })
});

export const config = {
  api: {
    bodyParser: false
  }
};

export default apolloServer.createHandler({ path: "/api/graphql" });
