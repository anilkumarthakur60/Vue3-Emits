import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from "../views/AboutView.vue";
import EmitComponent from "@/views/Pages/Components1/MainComponent.vue";
import EventBusComponent from "@/views/Pages/Components2/MainComponent.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: EmitComponent
    },
    {
      path: '/about',
      name: 'about',
    component:EventBusComponent
    }
  ]
})

export default router
