import { createRouter, createWebHistory } from 'vue-router'
import MainComponent from "@/views/Pages/Components1/MainComponent.vue";
import MainComponent1 from "@/views/Pages/Components2/MainComponent.vue";
import CloneDiv from "@/views/CloneDiv.vue";
import FilePicker from "@/views/Pages/Media/FilePicker.vue";
import PostListPage from "@/views/Pages/Post/PostListPage.vue";
import DatatableMain from "@/views/Pages/Datatable/DatatableMain.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: MainComponent
    },
    {
      path: '/about',
      name: 'About',
    component:MainComponent1
    },
    {
      path: '/clone',
      name: 'Clone',
      component:CloneDiv
    },
    {
      path: '/file',
      name: 'FilePicker',
      component:FilePicker
    },
    {
      path: '/posts',
      name: 'PostListPage',
      component:PostListPage
    },
    {
      path: '/datatable',
      name: 'DataTable',
      component:DatatableMain
    }
  ]
})

export default router
