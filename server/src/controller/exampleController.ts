import { Request, Response } from 'express';
import { getAllMessages } from '../db/dbServices';

/**
 * Get all messages action to get all test messages from database
 * @param { Request } req Request
 * @param { Response } res Response
 */
export const getAllMessagesAction = async (req: Request, res: Response) => {
  const result = await getAllMessages();
  res.json(result).status(200);
};
