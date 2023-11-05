<template>
  <div class="flex items-center justify-between">
    <div class="font-spartan">
      <h1 class="mb-[4px] text-blue-dark font-bold text-[1.25rem] md:mb-[8px] md:text-[2rem]">Invoices</h1>
      <p class="text-gray-medium font-medium text-[.75rem]">
        <span v-if="store.invoicesCount > 0">
          <span class="hidden md:inline">There are </span>{{ store.invoicesCount }}
          <span class="hidden md:inline"> total</span> invoices
        </span>

        <span v-else>No invoices</span>
      </p>
    </div>

    <div class="flex items-center">
      <details class="dropdown mr-[18px] font-spartan md:mr-[40px]">
        <summary
          class="btn gap-x-[12px] p-0 min-h-[auto] h-[auto] bg-transparent hover:bg-transparent border-none
            text-[.75rem] normal-case text-blue-dark md:gap-x-[16px]"
          @click="toggleDropdown()"
        >
          <span>Filter <span class="hidden md:inline"> by status</span></span>
          <DropDownArrowIcon class="transition-transform" :class="dropdownActive ? 'rotate-[180deg]' : ''" />
        </summary>

        <ul
          class="gap-y-[16px] mt-[23px] p-[24px] w-[192px] shadow-xl menu right-[50%] top-full translate-x-[50%] bg-trueWhite dropdown-content
            z-[1] rounded-[8px]"
        >
          <li v-for="option in filterOptions" :key="option">
            <label class="label justify-start gap-x-[13px] p-0 cursor-pointer hover:bg-transparent focus:!bg-transparent active:!bg-transparent">
              <input
                type="checkbox"
                :value="option.toLowerCase()"
                v-model="store.filterBy"
                style="box-shadow: none;"
                class="w-[16px] h-[16px] rounded-[2px] bg-gray-light border-none checked:bg-purple-medium checked:hover:bg-purple-medium
                  checked:focus:bg-purple-medium transition-colors hover:border-[1px] hover:border-solid hover:border-purple-medium"
              />

              <span class="label-text font-spartan text-blue-dark text-[.75rem] font-bold">{{ option }}</span>
            </label>
          </li>
        </ul>
      </details>

      <ActionButton class="!h-[44px] md:!h-[48px]">
        <span>New <span class="hidden md:inline"> Invoice</span></span>
      </ActionButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, type Ref } from 'vue';
import { useInvoiceStore } from '@/stores/invoiceStore';

import ActionButton from '@/components/buttons/ActionButton.vue';
import DropDownArrowIcon from '@/components/icons/DropDownArrowIcon.vue';

const store = useInvoiceStore();

/** Dropdown active status */
const dropdownActive: Ref<boolean> = ref(false);

/** Filter options */
const filterOptions: string[] = ['Draft', 'Pending', 'Paid'];

/** Activate / deactivate dropdown */
const toggleDropdown = (): void => { dropdownActive.value = !dropdownActive.value; };
</script>
