import express from 'express';
import {
  getAllInvoicesAction,
  getSingleInvoiceAction,
  changeInvoiceStatusAction,
  deleteInvoiceAction,
} from '@/controller/invoiceController';

const api = express.Router();

api.get('/invoices', getAllInvoicesAction);

api.get('/invoices/:invoiceId', getSingleInvoiceAction);

api.put('/invoices/:invoiceId', changeInvoiceStatusAction);

api.delete('/invoices/:invoiceId', deleteInvoiceAction);

export default api;
