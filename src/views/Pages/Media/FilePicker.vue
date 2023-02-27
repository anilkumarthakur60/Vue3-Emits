<template>

  <div class="">
    <Modal v-model="formData.images" :old-file="oldImage"/>
  </div>

</template>

<script setup>
import { ref} from "vue";
import Modal from "@/views/Pages/Media/Modal.vue";


const formData = ref({
  images: []
})
const oldImage = ref([])
</script>
