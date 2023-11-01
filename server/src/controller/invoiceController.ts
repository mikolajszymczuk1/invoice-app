import { Request, Response } from 'express';
import { getAllInvoices } from '../db/dbServices';

/**
 * Get all invoices action to get all invoices from database
 * @param { Request } req Request
 * @param { Response } res Response
*/
export const getAllInvoicesAction = async (req: Request, res: Response): Promise<void> => {
  const result = await getAllInvoices();
  res.json(result).status(200);
}
