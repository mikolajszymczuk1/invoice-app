import express from 'express';
import { getAllMessagesAction } from '../controller/exampleController';
import { getAllInvoicesAction } from '../controller/invoiceController';

const api = express.Router();

api.get('/example', getAllMessagesAction);

api.get('/invoices', getAllInvoicesAction);

export default api;
