import express from 'express';
import { getAllMessagesAction } from '../controller/exampleController';
import { getAllInvoicesAction, getSingleInvoiceAction, changeInvoiceStatusAction } from '../controller/invoiceController';

const api = express.Router();

api.get('/example', getAllMessagesAction);

api.get('/invoices', getAllInvoicesAction);

api.get('/invoices/:invoiceId', getSingleInvoiceAction);

api.put('/invoices/:invoiceId', changeInvoiceStatusAction);

export default api;
