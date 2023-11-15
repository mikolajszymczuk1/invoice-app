import express, { Express } from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
import cors from 'cors';

import api from './router/api';

dotenv.config();

const app: Express = express();

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use('/api', api);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
