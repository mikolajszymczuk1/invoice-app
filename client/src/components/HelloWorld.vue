<template>
  <h1 class="text-[2em] text-center">
    {{ msg }}
  </h1>
</template>

<script setup lang="ts">
import { ref, type Ref, onMounted } from 'vue';
import { getExampleMessage } from '@/services/exampleService';

const msg: Ref<string> = ref('Hello Wrold !');

onMounted(async (): Promise<void> => {
    msg.value = await getExampleMessage();
});

</script>
