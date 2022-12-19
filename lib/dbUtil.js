import { MongoClient } from "mongodb";

const connectionString = `mongodb+srv://${process.env.mongodbUsername}:${process.env.mongodbPassword}@${process.env.mongodbClusterName}.agjzgbc.mongodb.net/${process.env.mongodbDatabase}?retryWrites=true&w=majority`;

export async function connectDatabase() {
  const client = await MongoClient.connect(connectionString);

  return client;
}

export async function insertDocument(client, collection, document) {
  const db = client.db();

  const result = await db.collection(collection).insertOne(document);

  return result;
}
