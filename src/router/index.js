import { createRouter, createWebHistory } from 'vue-router'
import MainComponent from "@/views/Pages/Components1/MainComponent.vue";
import MainComponent1 from "@/views/Pages/Components2/MainComponent.vue";
import CloneDiv from "@/views/CloneDiv.vue";
import FilePicker from "@/views/Pages/Media/FilePicker.vue";
import PostListPage from "@/views/Pages/Post/PostListPage.vue";

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
    },
    {
      path: '/clone',
      name: 'about',
      component:CloneDiv
    },
    {
      path: '/file',
      name: 'about',
      component:FilePicker
    },
    {
      path: '/posts',
      name: 'posts',
      component:PostListPage
    }
  ]
})

export default router
