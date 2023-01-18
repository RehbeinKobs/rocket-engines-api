import express from 'express';
import exampleRouter from './routes/example.route';

const app = express();

app.use('/example', exampleRouter);

export default app;