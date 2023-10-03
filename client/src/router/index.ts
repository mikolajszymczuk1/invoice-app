import { createRouter, createWebHistory } from 'vue-router';
import InvoicesView from '@/views/InvoicesView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'invoices',
      component: InvoicesView,
    },
  ],
});

export default router;
