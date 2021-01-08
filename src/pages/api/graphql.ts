import { ApolloServer } from "apollo-server-micro";
import CatsAPI from "@/apollo/datasources/cats-api";
import schemaWithResolvers from "apollo/schema";
import PopularBreeds from "@/apollo/datasources/popular-breeds";
import db, { client } from "@/lib/database";

db();

export const apolloServer = new ApolloServer({
  schema: schemaWithResolvers,
  dataSources: () => ({
    catsAPI: new CatsAPI(),
    popularBreeds: new PopularBreeds(client.db().collection("popular_breeds"))
  })
});

export const config = {
  api: {
    bodyParser: false
  }
};

export default apolloServer.createHandler({ path: "/api/graphql" });
