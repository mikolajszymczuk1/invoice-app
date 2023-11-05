import { ref, type Ref } from 'vue';
import { defineStore } from 'pinia';

export const useInvoiceStore = defineStore('invoiceStore', () => {
  /** Number of fetched invoices */
  const invoicesCount: Ref<number> = ref(0);

  /** Filter invoices by (`paid`, `draft`, `pending`) */
  const filterBy: Ref<string[]> = ref([]);

  return { invoicesCount, filterBy };
});
