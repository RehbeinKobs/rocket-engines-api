import { connect } from 'mongoose';
import * as dotenv from 'dotenv';
import app from './app';

dotenv.config({ debug: true });

const { API_PORT, DB_URL } = process.env;

connect(MONGODB_URL as string).then(() => {
  app.listen(API_PORT, () => console.log(`running on port ${ API_PORT }`));
}).catch((error) => {
  console.log(`server failed with error: ${error.message}`);
});
