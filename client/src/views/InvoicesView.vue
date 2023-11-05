<template>
  <ViewContainer>
    <FilterSection />

    <div
      v-if="invoices.length === 0"
      class="flex flex-col items-center mt-[102px] text-center font-spartan md:mt-[210px]"
    >
      <template v-if="isDataLoaded">
        <NothingIllustration class="md:w-[241px] md:h-auto" />
        <h2 class="mt-[40px] mb-[24px] text-blue-dark text-[1.25rem] font-bold md:mt-[64px]">
          There is nothing here
        </h2>
        <h3 class="text-gray-medium text-[.75rem]">
          Create an invoice by clicking the <br>
          <b>New</b> button and get started
        </h3>
      </template>

      <DataLoader v-else>Searching invoices ...</DataLoader>
    </div>

    <div v-else class="flex flex-col gap-y-[16px] mt-[32px] md:mt-[56px] lg:gap-y-[12px] lg:mt-[65px]">
      <InvoiceElement
        v-for="invoice in filteredInvoices"
        :key="invoice.invoiceId"
        :invoice-id="invoice.invoiceId"
        :client-name="invoice.clientName"
        :payment-due="invoice.paymentDue"
        :total-cost="invoice.totalCost"
        :status="invoice.status"
        @click-action="router.push({ name: 'details', params: { invoiceId: invoice.invoiceId } })"
      />
    </div>
  </ViewContainer>
</template>

<script setup lang="ts">
import { onMounted, ref, type Ref, computed, watch } from 'vue';
import { useRouter } from 'vue-router';
import { getInvoices } from '@/services/invoiceService';
import type Invoice from '@/models/Invoice';
import { useInvoiceStore } from '@/stores/invoiceStore';

import FilterSection from '@/widgets/FilterSection.vue';
import ViewContainer from '@/components/ViewContainer.vue';
import NothingIllustration from '@/components/illustrations/NothingIllustration.vue';
import InvoiceElement from '@/components/InvoiceElement.vue';
import DataLoader from '@/components/loaders/DataLoader.vue';

const store = useInvoiceStore();
const router = useRouter();

/** Array of invoices */
const invoices: Ref<Invoice[]> = ref([]);

/** Data loaded status */
const isDataLoaded: Ref<boolean> = ref(false);

/**
 * Get filtered invoices
 * @returns {Invoice[]} filtered invoices
*/
const filteredInvoices = computed<Invoice[]>(() => {
  if (store.filterBy.length === 0) return invoices.value;
  return invoices.value.filter((invoice: Invoice) => store.filterBy.includes(invoice.status));
});

watch(() => store.filterBy, () => {
  store.invoicesCount = filteredInvoices.value.length;
}, { deep: true });

onMounted(async (): Promise<void> => {
  try {
    invoices.value = await getInvoices();
  } catch (e) {
    console.warn(e);
  } finally {
    isDataLoaded.value = true;
    store.invoicesCount = filteredInvoices.value.length;
  }
});
</script>
