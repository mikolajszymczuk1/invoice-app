<template>
  <div
    class="flex gap-x-[8px] justify-center items-center w-[104px] h-[40px] rounded-[6px] text-[.75rem] font-bold"
    :class="statusButtonClass"
  >
    <span
      class="w-[8px] h-[8px] rounded-full"
      :class="statusButtonDotClass"
    ></span>

    <span class="capitalize">{{ status }}</span>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { InvoiceStatusEnum } from '@/enums/InvoiceStatusEnum';

const props = defineProps({
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
