import { ApolloServer } from "apollo-server-micro";
import { Db } from "mongodb";
import CatsAPI from "@/apollo/datasources/cats-api";
import schemaWithResolvers from "@/apollo/schema";
import PopularBreeds from "@/apollo/datasources/popular-breeds";
import database from "@/lib/database";

let db: Db;

export const apolloServer = new ApolloServer({
  schema: schemaWithResolvers,
  context: async () => {
    db = await database();

    return { db };
  },
  dataSources: () => ({
    catsAPI: new CatsAPI(),
    popularBreeds: new PopularBreeds(db.collection("popular_breeds"))
  })
});

export const config = {
  api: {
    bodyParser: false
  }
};

export default apolloServer.createHandler({ path: "/api/graphql" });
