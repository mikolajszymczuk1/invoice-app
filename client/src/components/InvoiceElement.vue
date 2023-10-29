<template>
  <div
    class="grid grid-rows-[repeat(3,auto)] grid-cols-[repeat(2,auto)] p-[24px] bg-trueWhite rounded-[8px]
      shadow-[0_10px_10px_-10px_rgba(71,84,159,0.1)] text-blue-dark font-spartan md:grid-rows-1 md:grid-cols-[87px_1fr_1fr_1fr_auto_auto]
      md:items-center md:justify-between md:py-[16px] lg:grid-cols-[103px_1fr_1fr_1fr_auto_auto] lg:px-[32px]"
  >
    <div class="row-start-1 row-end-2 col-start-1 col-end-2 mb-[24px] text-[.75rem] font-bold md:mb-0">
      <span class="text-blue-light">#</span>{{ invoiceId }}
    </div>

    <div class="row-start-1 row-end-2 col-start-2 col-end-3 justify-self-end text-gray-medium font-medium text-[.75rem]
      md:col-start-3 md:col-end-4 md:justify-self-start"
    >
      {{ clientName }}
    </div>

    <div class="row-start-2 row-end-3 col-start-1 col-end-2 mb-[8px] text-blue-light text-[.75rem] font-medium md:mb-0 md:row-start-1 md:row-end-1 md:col-start-2 md:col-end-3">
      Due {{ paymentDate }}
    </div>

    <div class="row-start-3 row-end-4 col-start-1 col-end-2 text-blue-dark font-bold md:row-start-1 md:row-end-2 md:col-start-4 md:col-end-5 md:mr-[40px] md:justify-self-end">
      £ {{ totalCost }}
    </div>

    <div
      class="flex gap-x-[8px] justify-center items-center row-start-2 row-end-4 col-start-2 col-end-3 justify-self-end self-center w-[104px]
        h-[40px] rounded-[6px] text-[.75rem] font-bold md:row-start-1 md:row-end-2 md:col-start-5 md:col-end-6 md:mr-[20px]"
      :class="statusButtonClass"
    >
      <span
        class="w-[8px] h-[8px] rounded-full"
        :class="statusButtonDotClass"
      ></span>

      <span class="capitalize">{{ status }}</span>
    </div>

    <DropDownArrowIcon class="hidden rotate-[-90deg] md:block" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { InvoiceStatusEnum } from '@/enums/InvoiceStatusEnum';

import DropDownArrowIcon from '@/components/icons/DropDownArrowIcon.vue';

const props = defineProps({
  invoiceId: {
    type: String,
    default: '',
  },
  clientName: {
    type: String,
    default: '',
  },
  paymentDue: {
    type: Number,
    required: true,
  },
  totalCost: {
    type: Number,
    default: 0,
  },
  status: {
    type: String,
    required: true,
    default: InvoiceStatusEnum.DRAFT,
    validator(value: InvoiceStatusEnum) {
        return [InvoiceStatusEnum.PAID, InvoiceStatusEnum.PENDING, InvoiceStatusEnum.DRAFT].includes(value);
    },
  },
});

/**
 * Return payment date
 * @returns {string} formatted payment date
 */
const paymentDate = computed<string>(() => {
  const date = new Date(props.paymentDue);
  const formattedDate = date.toLocaleString('default', { day: 'numeric',  month: 'short', year: 'numeric' });
  const parts = formattedDate.replace(',', '').split(' ');
  return `${parts[1]} ${parts[0]} ${parts[2]}`;
});

/**
 * Return status button classes
 * @returns {string} status button classes
 */
const statusButtonClass = computed<string>(() => {
  switch (props.status) {
    case InvoiceStatusEnum.PAID: return 'bg-invoice-paid/[0.05] text-invoice-paid';
    case InvoiceStatusEnum.PENDING: return 'bg-invoice-pending/[0.05] text-invoice-pending';
    case InvoiceStatusEnum.DRAFT: return 'bg-invoice-draft/[0.05] text-invoice-draft';
    default: return 'bg-invoice-draft/[0.05] text-invoice-draft';
  }
});

/**
 * Return status button dot classes
 * @returns {string} status button dot classes
 */
 const statusButtonDotClass = computed<string>(() => {
  switch (props.status) {
    case InvoiceStatusEnum.PAID: return 'bg-invoice-paid';
    case InvoiceStatusEnum.PENDING: return 'bg-invoice-pending';
    case InvoiceStatusEnum.DRAFT: return 'bg-invoice-draft';
    default: return 'bg-invoice-draft';
  }
});
</script>
