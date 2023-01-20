const dotenv = require('dotenv');
const fs = require('fs');
dotenv.config({ debug: true });

db = connect(process.env.MONGODB_URL);

const engines = JSON.parse(fs.readFileSync('./database/data/engines.JSON'));

db.engines.insertMany(engines);