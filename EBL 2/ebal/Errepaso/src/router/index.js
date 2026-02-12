import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ReceiptView from "../views/ReceiptView.vue";
import DetailView from "../views/DetailView.vue";
import AboutView from "../views/AboutView.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/list", component: ReceiptView },
  { path: '/details/:id', component: DetailView },
  { path: "/about", component: AboutView }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;