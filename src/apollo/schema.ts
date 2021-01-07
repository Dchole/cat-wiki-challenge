import resolvers from "apollo/resolvers";
import {
  addResolversToSchema,
  GraphQLFileLoader,
  loadSchemaSync
} from "graphql-tools";

const schema = loadSchemaSync("./src/apollo/schema.gql", {
  loaders: [new GraphQLFileLoader()]
});

const schemaWithResolvers = addResolversToSchema({
  schema,
  resolvers
});

export default schemaWithResolvers;
