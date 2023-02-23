<template>
  <div class="">
    <div class="">
      <h4>Home Page</h4>
      <div class="">
        <pre>
          {{ eventAData }}
        </pre>
      </div>
    </div>
    <ChildComponent @eventA="getEventAData" @eventB="getEventAData1"></ChildComponent>
  </div>
</template>
<script setup>
import ChildComponent from "@/views/Pages/Components1/ChildComponent.vue";
import {ref} from "vue";

const eventAData = ref({})
const getEventAData = () => {
  console.log('---------data logging----eventA  logging ----');
}
const getEventAData1 = (data) => {
  eventAData.value = data
}
</script>