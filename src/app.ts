import express from 'express';
import { exampleRoute, enginesRoute } from './routes';
import errorHandler from './middlewares/error-handler';

const app = express();

app.use(express.json());

app.use('/', exampleRoute);
app.use('/engines', enginesRoute);

app.use(errorHandler);

export default app;