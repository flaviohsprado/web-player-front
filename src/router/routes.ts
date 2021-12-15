import { RouteConfig } from 'vue-router';

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Index.vue') }],
  },

  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('layouts/dashboard/index.vue'),
    //children: [{ path: '', component: () => import('pages/Index.vue') }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;