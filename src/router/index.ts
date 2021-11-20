import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';
import authentication from '@/middleware/authentication';

Vue.use(VueRouter)
/**
 * layout: DefaultLayout, BlankLayout, ErrorLayout
 */
const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      middleware: [authentication],
      layout: 'DefaultLayout',
      bodyClass: 'page-home'
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
      layout: 'BlankLayout',
      bodyClass: 'page-about'
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "about" */ '../views/Contact.vue'),
  },
  {
    path: '/*',
    name: 'ErrorLayout',
    meta: {
      layout: 'ErrorLayout',
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
