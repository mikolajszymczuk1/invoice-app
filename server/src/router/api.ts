import express from 'express';
import { getAllMessagesAction } from '../controller/exampleController';
import { getAllInvoicesAction, getSingleInvoiceAction } from '../controller/invoiceController';

const api = express.Router();

api.get('/example', getAllMessagesAction);

api.get('/invoices', getAllInvoicesAction);

api.get('/invoices/:invoiceId', getSingleInvoiceAction);

export default api;
