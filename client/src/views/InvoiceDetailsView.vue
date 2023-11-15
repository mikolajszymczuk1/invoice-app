<template>
  <ViewContainer>
    <RouterLink :to="{ name: 'homepage' }" class="flex items-center gap-x-[24px]">
      <DropDownArrowIcon class=" rotate-90" />
      <span class="text-[.75rem] font-spartan text-blue-dark font-bold">
        Go back
      </span>
    </RouterLink>

    <template v-if="isDataLoaded">
      <div
        class="flex items-center justify-between p-[24px] mt-[32px] bg-trueWhite shadow-[0px_10px_10px_-10px_rgba(72,84,159,0.10)]
          rounded-[8px] md:py-[20px] md:px-[32px]"
      >
        <p class="font-spartan text-[.75rem] text-blue-light font-medium md:mr-[16px]">Status</p>
        <InvoiceStatus :status="store.currentInvoice.status" />

        <div
          class="flex justify-center gap-x-[8px] fixed left-0 bottom-0 py-[22px] w-full bg-trueWhite shadow-[0px_10px_10px_-10px_rgba(72,84,159,0.10)]
            md:static md:flex-1 md:justify-end md:py-0 md:w-auto md:shadow-none"
        >
          <ActionButton btn-color="light">Edit</ActionButton>
          <ActionButton btn-color="red">Delete</ActionButton>

          <ActionButton
            btn-color="purple"
            @click-action="handleChangeInvoiceStatus(newStatus)"
          >
            Mark as {{ newStatus[0].toUpperCase() + newStatus.slice(1) }}
          </ActionButton>
        </div>
      </div>

      <div
        class="p-[24px] mt-[16px] mb-[42px] bg-trueWhite rounded-[8px] shadow-[0px_10px_10px_-10px_rgba(72,84,159,0.10)]
          text-blue-light text-[.75rem] font-spartan font-medium md:p-[32px] md:mt-[24px] md:mb-0 lg:p-[48px]"
      >
        <div class="flex flex-col gap-y-[30px] md:flex-row md:justify-between">
          <div>
            <p class="font-bold md:text-[1rem] md:mb-[8px]">
              #<span class="text-blue-dark">{{ store.currentInvoice.invoiceId }}</span>
            </p>
            <p>{{ store.currentInvoice.projectDescription }}</p>
          </div>

          <div class="md:text-right">
            <p>{{ store.currentInvoice.streetAddressFrom }}</p>
            <p>{{ store.currentInvoice.cityFrom }}</p>
            <p>{{ store.currentInvoice.postCodeFrom }}</p>
            <p>{{ store.currentInvoice.countryFrom }}</p>
          </div>
        </div>

        <div class="mt-[31px] md:flex md:mt-[21px]">
          <div class="flex gap-x-[41px] md:gap-x-[98px]">
            <div>
              <p class="mb-[12px]">Invoice Data</p>
              <p class="mb-[32px] text-blue-dark font-bold text-[.9375rem]">{{ invoiceDate }}</p>

              <p class="mb-[12px]">Payment Due</p>
              <p class="text-blue-dark font-bold text-[.9375rem]">{{ paymentDue }}</p>
            </div>

            <div>
              <p class="mb-[12px]">Bill to</p>
              <p class="mb-[8px] font-bold text-[.9375rem] text-blue-dark">
                {{ store.currentInvoice.clientName }}
              </p>

              <p>{{ store.currentInvoice.streetAddressTo }}</p>
              <p>{{ store.currentInvoice.cityTo }}</p>
              <p>{{ store.currentInvoice.postCodeTo }}</p>
              <p>{{ store.currentInvoice.countryTo }}</p>
            </div>
          </div>

          <div class="mt-[32px] md:mt-0 md:ml-[110px] md:w-[100px]">
            <p>Sent to</p>
            <p class="mt-[12px] text-blue-dark font-bold text-[.9375rem]">
              {{ store.currentInvoice.clientEmail }}
            </p>
          </div>
        </div>

        <div class="mt-[40px] rounded-[8px] overflow-hidden md:mt-[48px]">
          <div class="p-[24px] bg-blue-itemsPrev md:px-[32px] md:pt-[32px] md:pb-[40px]">
            <div class="hidden md:grid md:grid-cols-[55%_5%_20%_20%] md:mb-[32px]">
              <p>Item Name</p>
              <p class="justify-self-center">QTY.</p>
              <p class="md:justify-self-end">Price</p>
              <p class="md:justify-self-end">Total</p>
            </div>

            <div
              class="flex justify-between items-center mb-[24px] last:mb-0 md:grid md:grid-cols-[55%_5%_20%_20%] md:mb-[32px]"
              v-for="item in store.currentInvoice.items"
              :key="item.itemName"
            >
              <div>
                <p class="mb-[4px] text-blue-dark font-bold md:mb-0">{{ item.itemName }}</p>
                <p class="font-bold md:hidden">{{ item.qty }} x £ {{ item.price }}</p>
              </div>
              <div class="hidden md:block md:justify-self-center font-bold">{{ item.qty }}</div>
              <div class="hidden md:block md:justify-self-end font-bold">£ {{ item.price }}</div>
              <div class="text-blue-dark font-bold md:justify-self-end">£ {{ item.price * item.qty }}</div>
            </div>
          </div>

          <div class="flex justify-between items-center p-[24px] bg-blue-navLight text-trueWhite md:px-[32px]">
            Grand Total <span class="text-[1.25rem] font-bold md:text-[1.5rem]">£ {{ store.currentInvoice.totalCost }}</span>
          </div>
        </div>
      </div>
    </template>

    <DataLoader class="mt-[50px]" v-else>Loading invoice data ...</DataLoader>
  </ViewContainer>
</template>

<script setup lang="ts">
import { ref, type Ref, onMounted, computed } from 'vue';
import Invoice from '@/models/Invoice';
import { useRoute, useRouter, RouterLink } from 'vue-router';
import { getSingleInvoice, changeInvoiceStatus } from '@/services/invoiceService';
import { useInvoiceStore } from '@/stores/invoiceStore';
import { useFormatDate } from '@/composables/dateFormatting';
import { InvoiceStatusEnum } from '@/enums/InvoiceStatusEnum';

import ViewContainer from '@/components/ViewContainer.vue';
import DataLoader from '@/components/loaders/DataLoader.vue';
import DropDownArrowIcon from '@/components/icons/DropDownArrowIcon.vue';
import InvoiceStatus from '@/components/InvoiceStatus.vue';
import ActionButton from '@/components/buttons/ActionButton.vue';

const route = useRoute();
const router = useRouter();
const store = useInvoiceStore();

/** Invoice data load status */
const isDataLoaded: Ref<boolean> = ref(false);

/** Formatted dates */
const { stringDate: invoiceDate } = useFormatDate(store.currentInvoice.invoiceDate);
const { stringDate: paymentDue } = useFormatDate(store.currentInvoice.paymentDue);

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

/** Return new status based on prop value */
const newStatus = computed<string>(() => store.currentInvoice.status === InvoiceStatusEnum.PAID
  ? InvoiceStatusEnum.DRAFT
  : InvoiceStatusEnum.PAID
);

/**
 * Change current invoice status
 * @param {string} newStatus new status to set
 */
const handleChangeInvoiceStatus = async (newStatus: string): Promise<void> => {
  isDataLoaded.value = false;

  try {
    const invoice: Invoice = await changeInvoiceStatus(store.currentInvoice.invoiceId, newStatus);
    store.currentInvoice.status = invoice.status;
    isDataLoaded.value = true;
  } catch (e) {
    console.warn(e);
    router.go(0); // If there is problem with changing data, refresh page
  }
};
</script>
