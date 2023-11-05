<template>
  <ViewContainer>
    <template v-if="isDataLoaded">
      <h1 class="text-purple-light">Invoice Details - {{ store.currentInvoice.clientName }}</h1>
    </template>

    <DataLoader v-else>Loading invoice data ...</DataLoader>
  </ViewContainer>
</template>

<script setup lang="ts">
import { ref, type Ref, onMounted } from 'vue';
import Invoice from '@/models/Invoice';
import { useRoute, useRouter } from 'vue-router';
import { getSingleInvoice } from '@/services/invoiceService';
import { useInvoiceStore } from '@/stores/invoiceStore';

import ViewContainer from '@/components/ViewContainer.vue';
import DataLoader from '@/components/loaders/DataLoader.vue';

const route = useRoute();
const router = useRouter();
const store = useInvoiceStore();

/** Invoice data load status */
const isDataLoaded: Ref<boolean> = ref(false);

onMounted(async (): Promise<void> => {
  try {
    const invoice: Invoice = await getSingleInvoice(route.params.invoiceId.toString());
    isDataLoaded.value = true;
    store.currentInvoice = invoice;
  } catch (e) {
    console.warn(e);
    router.push({ name: 'homepage' });
  }
});
</script>
