import axios from 'axios';
import Invoice from '@/models/Invoice';
import InvoiceMapper from '@/mappers/InvoiceMapper';

/** Get Invoices from database */
export const getInvoices = async (): Promise<Invoice[]> => {
  const response = await axios.get('/api/invoices');
  const data = response.data;
  return InvoiceMapper.mapArrayOfObjectsToInvoices(data);
};

/**
 * Fetch Invoice from database
 * @param {string} invoiceId invoice id
 * @returns {Invoice} Single invoice
 */
export const getSingleInvoice = async (invoiceId: string): Promise<Invoice> => {
  const response = await axios.get(`/api/invoices/${invoiceId}`);
  const data = response.data;
  return InvoiceMapper.mapObjectToInvoice(data);
};

/**
 * Change invoice status
 * @param {string} invoiceId invoice id
 * @param {string} newStatus new status to set
 * @returns {number} updated invoice
 */
export const changeInvoiceStatus = async (invoiceId: string, newStatus: string): Promise<Invoice> => {
  const response = await axios.put(`/api/invoices/${invoiceId}`, { newStatus });
  const data = response.data;
  return InvoiceMapper.mapObjectToInvoice(data);
};

/**
 * Delete invoice
 * @param {string} invoiceId invoice id to delete
 * @returns {Invoice} deleted invoice object
 */
export const deleteInvoice = async (invoiceId: string): Promise<Invoice> => {
  const response = await axios.delete(`/api/invoices/${invoiceId}`);
  const data = response.data;
  return InvoiceMapper.mapObjectToInvoice(data);
};
