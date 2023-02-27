const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');
dotenv.config({ debug: true });

const db = process.env.DB_URL;

async function dropDatabase() {
  const client = await MongoClient.connect(db, { useUnifiedTopology: true });
  await client.db().dropDatabase();
  await client.close();
}

dropDatabase().catch(console.error);
