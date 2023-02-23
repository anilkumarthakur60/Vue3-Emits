<template>

  <div class="">

    <pre>
      {{formData}}
    </pre>
  <Modal v-model="formData.images" ></Modal>
  </div>

</template>

<script setup>
import {onMounted, ref} from "vue";
import Modal from "@/views/Pages/Media/Modal.vue";


const  formData=ref({
  images:[1,2,3]
})

onMounted(() => {

})


</script>