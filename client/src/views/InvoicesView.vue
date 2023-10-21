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

    <div>
      <InvoiceElement />
      <InvoiceElement />
      <InvoiceElement />
      <InvoiceElement />
      <InvoiceElement />
    </div>
  </ViewContainer>

</template>

<script setup lang="ts">
import FilterSection from '@/widgets/FilterSection.vue';
import ViewContainer from '@/components/ViewContainer.vue';
import NothingIllustration from '@/components/illustrations/NothingIllustration.vue';
import InvoiceElement from '@/components/InvoiceElement.vue';
</script>
