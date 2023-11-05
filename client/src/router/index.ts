import { createRouter, createWebHistory } from 'vue-router';
import { isInvoiceIdCorrect } from '@/utils/helpers';

import InvoicesView from '@/views/InvoicesView.vue';
import InvoiceDetailsView from '@/views/InvoiceDetailsView.vue';

/** Check invoice id before enter to the route */
const checkInvoiceId = (to: any, from: any, next: any) => {
  if (isInvoiceIdCorrect(to.params.invoiceId)) {
    next()
  } else {
    next({ name: 'homepage' });
  }
};

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: InvoicesView,
    },
    {
      path: '/invoices',
      name: 'invoices',
      redirect: { name: 'homepage' },
    },
    {
      path: '/invoices/:invoiceId',
      name: 'details',
      component: InvoiceDetailsView,
      beforeEnter: [checkInvoiceId],
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      redirect: { name: 'homepage' },
    },
  ],
});

export default router;
