<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">

      <RouterLink :to="{name:'Home'}" class="navbar-brand">Navbar</RouterLink>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">


          <li class="nav-item" v-for="(item,index) in routesName" :key="item.name">
            <RouterLink :to="{name:item.name,params:item.params}" class="nav-link" :class="index===0?'active':''" aria-current="page">
              {{ item.label }}
            </RouterLink>
          </li>
        </ul>

      </div>
    </div>
  </nav>

</template>

<script setup>
import {RouterLink} from 'vue-router'

const routesName = [
  {
    path: '/',
    name: 'Home',
    label: 'Home',
    params: {}
  },
  {
    path: '/about',
    name: 'About',
    label: 'About',
    params: {}
  },
  {
    path: '/clone',
    name: 'Clone',
    label: 'Clone',
    params: {}
  },
  {
    path: '/file',
    name: 'FilePicker',
    label: 'FilePicker',
    params: {}
  },
  {
    path: '/posts',
    name: 'PostListPage',
    label: 'PostListPage',
    params: {}
  }
]


</script>