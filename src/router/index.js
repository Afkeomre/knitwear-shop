import { createWebHistory, createRouter } from 'vue-router';

import HomePage from '@/pages/HomePage.vue';
import ManShop from '@/pages/ManShop.vue';
import WomanShop from '@/pages/WomanShop.vue';
import CartPage from '@/pages/CartPage.vue';

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/man', name: 'Man', component: ManShop },
  { path: '/woman', name: 'Woman', component: WomanShop },
  { path: '/cart', name: 'Cart', component: CartPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
