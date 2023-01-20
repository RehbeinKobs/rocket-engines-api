const dotenv = require('dotenv');
dotenv.config({ debug: true });

db = connect(process.env.MONGODB_URL);

db.engines.drop();