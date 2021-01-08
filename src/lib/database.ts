import { MongoClient } from "mongodb";

export const client = new MongoClient(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

export default function db() {
  if (!client.isConnected())
    client
      .connect()
      .then(() => console.log("Connected to DB!"))
      .catch(err => console.log(err));
}
