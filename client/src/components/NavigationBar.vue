<template>
  <nav class="flex justify-between items-center bg-blue-navLight">
    <div
      class="flex justify-center items-center relative w-[72px] h-[72px] rounded-r-[20px] overflow-hidden bg-purple-medium before:absolute
        before:bottom-0 before:left-0 before:h-[50%] before:w-full before:bg-purple-light before:rounded-tl-[20px] before:z-[1]"
    >
      <LogoIcon class="relative z-[2]" />
    </div>

    <div class="flex items-center h-[72px]">
      <button @click="toggleDarkMode()">
        <component :is="isDarkModeActive ? SunIcon : MoonIcon"></component>
      </button>

      <div class="flex items-center h-full px-[24px] ml-[24px] border-solid border-l-[1px] border-blue-navBorder">
        <img src="src/assets/images/Avatar.png" alt="Avatar image" title="Avatar">
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, type Ref } from 'vue';

import LogoIcon from '@/components/icons/LogoIcon.vue';
import SunIcon from '@/components/icons/SunIcon.vue';
import MoonIcon from '@/components/icons/MoonIcon.vue';

/** Dark mode active status */
const isDarkModeActive: Ref<boolean> = ref(false);

/** Toggle dark mode, change status of dark mode  */
const toggleDarkMode = (): void => {
  isDarkModeActive.value = !isDarkModeActive.value;
};
</script>
