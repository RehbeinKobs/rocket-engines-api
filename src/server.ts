import * as dotenv from 'dotenv';
import app from './app';

dotenv.config({ debug: true });

const { API_PORT } = process.env;

app.listen(API_PORT, () => {
  console.log('rodando');
});