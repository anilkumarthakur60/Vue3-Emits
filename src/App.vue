<script setup>
import {RouterView} from 'vue-router'
import Navbar from "@/views/Pages/CommonComponents/Navbar.vue";
</script>

<template>
  <div>
    <Navbar/>
    <RouterView/>
  </div>
</template>
