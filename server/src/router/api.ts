import express, { Request, Response } from 'express';
const api = express.Router();

api.get('/example', (req: Request, res: Response) => {
  res.json({ msg: 'Hello From Backend !' });
});

export default api;
