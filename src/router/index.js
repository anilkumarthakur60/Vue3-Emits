import { createRouter, createWebHistory } from 'vue-router'
import MainComponent from "@/views/Pages/Components1/MainComponent.vue";
import MainComponent1 from "@/views/Pages/Components2/MainComponent.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainComponent
    },
    {
      path: '/about',
      name: 'about',
    component:MainComponent1
    }
  ]
})

export default router