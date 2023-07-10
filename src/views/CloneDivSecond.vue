<template>
  <div class="">
    <pre>
  {{ formData }}
</pre>

    <button @click="addMore">Add</button>
    <div class="" v-for="(item, i) in formData.multiples" :key="i">
      <input v-model="item.id" placeholder="id" />
      <input v-model="item.name" placeholder="name" />
      <input v-model="item.email" placeholder="email" />
      <button @click="remove(i)" style="margin-lef: 10px">-</button>
    </div>
    <div class="">
      <input v-model="formData.username" placeholder="username" />
    </div>
  </div>
</template>
<script setup>
import { ref, watch } from 'vue'

const formData = ref({
  multiples: []
})

const remove = (i) => {
  formData.value.multiples.splice(i, 1)
}
const addMore = () => {
  formData.value.multiples.push({})
}
</script>
