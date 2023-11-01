import axios from 'axios';
import Invoice from '@/models/Invoice';
import InvoiceMapper from '@/mappers/InvoiceMapper';

/** Get Invoices from database */
export const getInvoices = async (): Promise<Invoice[]> => {
  const response = await axios.get('/api/invoices');
  const data = response.data;
  return InvoiceMapper.mapArrayOfObjectsToInvoices(data);
};
