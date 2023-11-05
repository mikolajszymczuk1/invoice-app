<template>
  <nav class="flex justify-between items-center bg-blue-navLight lg:flex-col lg:fixed lg:left-0 lg:top-0 lg:h-full lg:rounded-r-[20px]">
    <div
      class="flex justify-center items-center relative w-[72px] h-[72px] rounded-r-[20px] overflow-hidden bg-purple-medium before:absolute
        before:bottom-0 before:left-0 before:h-[50%] before:w-full before:bg-purple-light before:rounded-tl-[20px] before:z-[1]
        md:w-[80px] md:h-[80px] lg:w-[103px] lg:h-[103px]"
    >
      <LogoIcon class="relative z-[2] md:h-[29px] md:w-auto lg:w-[40px] lg:h-auto" />
    </div>

    <div class="flex items-center h-[72px] md:h-[80px] lg:flex-col lg:h-auto lg:w-[103px]">
      <button @click="toggleDarkMode()">
        <component :is="isDarkModeActive ? SunIcon : MoonIcon"></component>
      </button>

      <div
        class="flex items-center h-full px-[24px] ml-[24px] border-solid border-l-[1px] border-blue-navBorder md:px-[32px] md:ml-[32px]
          lg:justify-center lg:px-0 lg:py-[24px] lg:ml-0 lg:mt-[32px] lg:w-full lg:border-l-0 lg:border-t-[1px]"
      >
        <img
          class="lg:w-[40px]"
          :src="avatarImage"
          alt="Avatar image"
          title="Avatar"
        >
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, type Ref } from 'vue';
import avatarImage from '@/assets/images/Avatar.png';

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
