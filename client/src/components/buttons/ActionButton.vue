<template>
  <button
    class="btn py-0 pl-[6px] pr-[14px] h-[48px] min-h-[auto] gap-x-[8px] bg-purple-medium rounded-full
      hover:opacity-70 hover:bg-purple-medium border-none text-white normal-case font-spartan text-[.75rem]
      md:py-[8px] md:pl-[8px] md:pr-[15px] md:gap-x-[16px]"
  >
    <PlusCircleIcon />
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import PlusCircleIcon from '@/components/icons/PlusCircleIcon.vue';
</script>
