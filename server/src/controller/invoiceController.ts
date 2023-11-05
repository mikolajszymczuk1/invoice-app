import { Request, Response } from 'express';
import { getAllInvoices, getSingleInvoice } from '../db/dbServices';

/**
 * Get all invoices action to get all invoices from database
 * @param {Request} req Request
 * @param {Response} res Response
*/
export const getAllInvoicesAction = async (req: Request, res: Response): Promise<void> => {
  try {
    const result = await getAllInvoices();
    res.status(200).json(result);
  } catch (e) {
    res.status(404).json({ error: 'Invoices not found !' })
  }
}

/**
 * Get single invoice from database
 * @param {Request} req Request
 * @param {Response} res Response
 */
export const getSingleInvoiceAction = async (req: Request, res: Response): Promise<void> => {
  try {
    const result = await getSingleInvoice(req.params.invoiceId);
    res.status(200).json(result);
  } catch (e) {
    res.status(404).json({ error: 'Invoice not found !' });
  }
};
