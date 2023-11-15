import express from 'express';
import { getAllInvoicesAction, getSingleInvoiceAction, changeInvoiceStatusAction } from '@/controller/invoiceController';

const api = express.Router();

api.get('/invoices', getAllInvoicesAction);

api.get('/invoices/:invoiceId', getSingleInvoiceAction);

api.put('/invoices/:invoiceId', changeInvoiceStatusAction);

export default api;
