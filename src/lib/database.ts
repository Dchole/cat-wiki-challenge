import { Db, MongoClient } from "mongodb";

export default async function database(): Promise<Db> {
  let db: Db;

  if (!db) {
    try {
      const dbClient = new MongoClient(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });

      if (!dbClient.isConnected()) await dbClient.connect();
      db = dbClient.db();
    } catch (error) {
      console.log(error);
    }
  }

  return db;
}
