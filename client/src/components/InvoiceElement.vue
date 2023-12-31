<template>
  <div
    class="grid grid-rows-[repeat(3,auto)] grid-cols-[repeat(2,auto)] p-[24px] bg-trueWhite rounded-[8px]
      shadow-[0_10px_10px_-10px_rgba(71,84,159,0.1)] text-blue-dark font-spartan md:grid-rows-1 md:grid-cols-[87px_1fr_1fr_1fr_auto_auto]
      md:items-center md:justify-between md:py-[16px] lg:grid-cols-[103px_1fr_1fr_1fr_auto_auto] lg:px-[32px]"
    @click="emit('clickAction')"
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
      Due {{ Invoice.formatDate(paymentDue) }}
    </div>

    <div class="row-start-3 row-end-4 col-start-1 col-end-2 text-blue-dark font-bold md:row-start-1 md:row-end-2 md:col-start-4 md:col-end-5 md:mr-[40px] md:justify-self-end">
      £ {{ totalCost }}
    </div>

    <InvoiceStatus
      class="row-start-2 row-end-4 col-start-2 col-end-3 justify-self-end self-center md:row-start-1 md:row-end-2
        md:col-start-5 md:col-end-6 md:mr-[20px]"
      :status="status"
    />

    <DropDownArrowIcon class="hidden rotate-[-90deg] md:block" />
  </div>
</template>

<script setup lang="ts">
import { InvoiceStatusEnum } from '@/enums/InvoiceStatusEnum';
import Invoice from '@/models/Invoice';

import InvoiceStatus from '@/components/InvoiceStatus.vue';
import DropDownArrowIcon from '@/components/icons/DropDownArrowIcon.vue';

defineProps({
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

const emit = defineEmits<{
  /** Emit event after click invoice */
  (e: 'clickAction'): void
}>();
</script>
