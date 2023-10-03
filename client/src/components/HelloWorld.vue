<template>
  <h1 class="text-[2em] text-center font-spartan">
    {{ msg }}
  </h1>
</template>

<script setup lang="ts">
import { ref, type Ref, onMounted } from 'vue';
import { getExampleMessage } from '@/services/exampleService';

const msg: Ref<string> = ref('Hello World !');

onMounted(async (): Promise<void> => {
  try {
    msg.value = await getExampleMessage();
  } catch (e) {
    console.log(e);
  }
});

</script>
