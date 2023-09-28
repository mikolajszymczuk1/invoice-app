import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
import cors from 'cors';

dotenv.config();

const app: Express = express();

app.use(helmet());
app.use(cors());

const port = process.env.PORT || 3000;

app.get('/api/example', (req: Request, res: Response) => {
  res.json({ msg: 'Hello From Backend !' });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
