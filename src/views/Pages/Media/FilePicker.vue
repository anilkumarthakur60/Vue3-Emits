<template>

  <div class="">

    <pre>
      {{formData}}
    </pre>
  <Modal v-model="formData.images" :old-file="oldImage" ></Modal>
  </div>

</template>

<script setup>
import {onMounted, ref} from "vue";
import Modal from "@/views/Pages/Media/Modal.vue";


const  formData=ref({
  images:[
    {
      id: 1,
      path: 'http://localhost:8000/storage/uploads/e50c66a2898535dd4927b42d3ef62303.png',
    },
    {
      id: 2,
      path: 'http://localhost:8000/storage/uploads/bac5e2e43f87d4c85298c0ac64f8178a.png',
    },
    {
      id: 3,
      path: 'http://localhost:8000/storage/uploads/3f39d306aca13462e5eeca4edd443190.png',
    }
  ]
})
const oldImage = ref([
  {
    id: 1,
    path: 'http://localhost:8000/storage/uploads/e50c66a2898535dd4927b42d3ef62303.png',
  },
  {
    id: 2,
    path: 'http://localhost:8000/storage/uploads/bac5e2e43f87d4c85298c0ac64f8178a.png',
  },
  {
    id: 3,
    path: 'http://localhost:8000/storage/uploads/3f39d306aca13462e5eeca4edd443190.png',
  }
])

onMounted(() => {

})


</script>