<template>
  <h1 class="text-[2em] text-center font-spartan">
    <template v-for="message in messages" :key="message.id">
      {{ message.msg }}<br>
    </template>
  </h1>
</template>

<script setup lang="ts">
import { ref, type Ref, onMounted } from 'vue';
import { getExampleMessages } from '@/services/exampleService';
import type { Example } from '@/types/Example';

/** Example messages data */
const messages: Ref<Example[]> = ref([]);

onMounted(async (): Promise<void> => {
  try {
    messages.value = await getExampleMessages();
  } catch (e) {
    console.log(e);
  }
});
</script>
