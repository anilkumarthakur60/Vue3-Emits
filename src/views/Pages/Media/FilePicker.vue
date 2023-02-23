<template>

  <div class="">

    <pre>
      {{formData}}
    </pre>
  <Modal v-model="formData.images"></Modal>
  </div>

</template>

<script setup>
import {onMounted, ref} from "vue";
import {useImages} from "../../../Composables/useImages";
import Modal from "@/views/Pages/Media/Modal.vue";

const {searchImages} = useImages()
const imageCheckbox = ref([])
const images = ref([]);
const myModal = ref(null);

const  formData=ref({
})

onMounted(() => {
  images.value = searchImages({
    termSearch: 'cat',
    page: 2
  }).then((res) => {
    images.value = res.data?.data
  })


})

function  submitForm() {
  console.log('---------data logging--------', imageCheckbox.value);


}

</script>