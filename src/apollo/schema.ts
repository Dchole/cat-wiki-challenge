import resolvers from "./resolvers";
import {
  addResolversToSchema,
  GraphQLFileLoader,
  loadSchemaSync,
  makeExecutableSchema
} from "graphql-tools";
import typeDefs from "./type-defs";

// const schema = loadSchemaSync("./src/apollo/schema.gql", {
//   loaders: [new GraphQLFileLoader()]
// });

const schemaWithResolvers = makeExecutableSchema({
  typeDefs,
  resolvers
});

export default schemaWithResolvers;
