import { ref, type Ref } from 'vue';
import { defineStore } from 'pinia';
import Invoice from '@/models/Invoice';

export const useInvoiceStore = defineStore('invoiceStore', () => {
  /** Number of fetched invoices */
  const invoicesCount: Ref<number> = ref(0);

  /** Filter invoices by (`paid`, `draft`, `pending`) */
  const filterBy: Ref<string[]> = ref([]);

  /** Current loaded invoice to preview, edit, delete */
  const currentInvoice: Ref<Invoice> = ref(new Invoice('', '', '', '', '', '', '', '', '', '','', '', 0, 0));

  return { invoicesCount, filterBy, currentInvoice };
});
