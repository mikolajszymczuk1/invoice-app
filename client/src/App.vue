<template>
  <NavigationBar />

  <main>
    <RouterView />
  </main>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';

import NavigationBar from '@/components/NavigationBar.vue';
</script>
