import { ref, type Ref } from 'vue';

/**
 * Convert timestamp to user friendly string
 * @param {number} timestamp timestamp to convert
 * @returns {Object} user friendly string
 */
export const useFormatDate = (timestamp: number): { stringDate: Ref<string> } => {
  const stringDate: Ref<string> = ref('');
  const date = new Date(timestamp);
  const formattedDate = date.toLocaleString('default', { day: 'numeric',  month: 'short', year: 'numeric' });
  const parts = formattedDate.replace(',', '').split(' ');
  stringDate.value = `${parts[1]} ${parts[0]} ${parts[2]}`;
  return { stringDate };
};
