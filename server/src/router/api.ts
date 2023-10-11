import express from 'express';
import { getAllMessagesAction } from '../controller/exampleController';

const api = express.Router();

api.get('/example', getAllMessagesAction);

export default api;
