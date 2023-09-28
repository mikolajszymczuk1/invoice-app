import axios from 'axios';

/** Get example message from server */
export const getExampleMessage = async (): Promise<string> => {
  const response = await axios.get('/api/example');
  const data = response.data;
  return data.msg as string;
};
