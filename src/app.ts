import express from 'express';
import { exampleRoute, enginesRoute } from './routes';

const app = express();

app.use(express.json());

app.use('/example', exampleRoute);
app.use('/engines', enginesRoute);

export default app;