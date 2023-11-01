<template>
  <ViewContainer>
    <FilterSection />

    <div
      v-if="invoices.length === 0"
      class="flex flex-col items-center mt-[102px] text-center font-spartan md:mt-[210px]"
    >
      <div
        v-if="!isDataLoaded"
        class="flex flex-col items-center text-purple-medium"
      >
        <div class="loading loading-ring loading-lg mb-[20px]"></div>
        <span class="text-[0.85rem]">Searching invoices ...</span>
      </div>

      <template v-else>
        <NothingIllustration class="md:w-[241px] md:h-auto" />
        <h2 class="mt-[40px] mb-[24px] text-blue-dark text-[1.25rem] font-bold md:mt-[64px]">
          There is nothing here
        </h2>
        <h3 class="text-gray-medium text-[.75rem]">
          Create an invoice by clicking the <br>
          <b>New</b> button and get started
        </h3>
      </template>
    </div>

    <div v-else class="flex flex-col gap-y-[16px] mt-[32px] md:mt-[56px] lg:gap-y-[12px] lg:mt-[65px]">
      <InvoiceElement
        v-for="invoice in invoices"
        :key="invoice.invoiceId"
        :invoice-id="invoice.invoiceId"
        :client-name="invoice.clientName"
        :payment-due="invoice.paymentDue"
        :total-cost="invoice.totalCost"
        :status="invoice.status"
      />
    </div>
  </ViewContainer>
</template>

<script setup lang="ts">
import { onMounted, ref, type Ref } from 'vue';
import { getInvoices } from '@/services/invoiceService';
import type Invoice from '@/models/Invoice';

import FilterSection from '@/widgets/FilterSection.vue';
import ViewContainer from '@/components/ViewContainer.vue';
import NothingIllustration from '@/components/illustrations/NothingIllustration.vue';
import InvoiceElement from '@/components/InvoiceElement.vue';

/** Array of invoices */
const invoices: Ref<Invoice[]> = ref([]);

/** Data loaded status */
const isDataLoaded: Ref<boolean> = ref(false);

onMounted(async () => {
  try {
    invoices.value = await getInvoices();
  } catch (e) {
    console.warn(e);
  } finally {
    isDataLoaded.value = true;
  }
});
</script>
