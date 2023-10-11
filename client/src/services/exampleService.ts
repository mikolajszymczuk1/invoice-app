import axios from 'axios';
import type { Example } from '@/types/Example';

/** Get example messages from server */
export const getExampleMessages = async (): Promise<Example[]> => {
  const response = await axios.get('/api/example');
  const data = response.data as Example[];
  return data;
};
