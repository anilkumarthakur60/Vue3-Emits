<template>
  <div class="">
    <div class="">
      <h4>About Page</h4>
      <div class="">
        <pre>
          {{ message }}
        </pre>
      </div>
    </div>
    <ChildComponent />
  </div>
</template>
<script setup>


import ChildComponent from "@/views/Pages/Components2/ChildComponent.vue";

import {ref} from "vue";
import {useCommonJs} from "../../../Composables/useCommonJs"

const message = ref({})
const {on} = useCommonJs()

on('eventB', (data) => {
  message.value = data
})
</script>