<template>
  <ViewContainer>
    <FilterSection />

    <div v-if="false" class="flex flex-col items-center mt-[102px] text-center font-spartan md:mt-[210px]">
      <NothingIllustration class="md:w-[241px] md:h-auto" />
      <h2 class="mt-[40px] mb-[24px] text-blue-dark text-[1.25rem] font-bold md:mt-[64px]">There is nothing here</h2>
      <h3 class="text-gray-medium text-[.75rem]">
        Create an invoice by clicking the <br>
        <b>New</b> button and get started
      </h3>
    </div>

    <div v-if="true" class="flex flex-col gap-y-[16px] mt-[32px] md:mt-[56px] lg:gap-y-[12px] lg:mt-[65px]">
      <InvoiceElement
        invoice-id="XY1080"
        client-name="Person 1"
        :payment-due="1698493681658"
        :total-cost="11052.25"
        :status="InvoiceStatusEnum.PAID"
      />

      <InvoiceElement
        invoice-id="RY3087"
        client-name="Person 2"
        :payment-due="1698493681658"
        :total-cost="1800.90"
        :status="InvoiceStatusEnum.PENDING"
      />

      <InvoiceElement
        invoice-id="RW0770"
        client-name="Person 3"
        :payment-due="1698493681658"
        :total-cost="357.86"
        :status="InvoiceStatusEnum.DRAFT"
      />
    </div>
  </ViewContainer>
</template>

<script setup lang="ts">
import { InvoiceStatusEnum } from '@/enums/InvoiceStatusEnum';

import FilterSection from '@/widgets/FilterSection.vue';
import ViewContainer from '@/components/ViewContainer.vue';
import NothingIllustration from '@/components/illustrations/NothingIllustration.vue';
import InvoiceElement from '@/components/InvoiceElement.vue';
</script>
