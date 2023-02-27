const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');
const fs = require('fs');
dotenv.config({ debug: true });

url = process.env.DB_URL;

const engines = JSON.parse(fs.readFileSync('./database/data/engines.JSON'));

async function main() {
    const client = await MongoClient.connect(url, { useUnifiedTopology: true });
    await client.db().collection('engines').insertMany(engines);
    await client.close();
}

main().catch(console.error);
