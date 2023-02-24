<template>

  <div class="">

    <pre>
     Parent v model value: {{formData?.images?.map((item) => {return item.id}).join(', ')}}
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
      "id": 1,
      "path": "http://localhost:8000/storage/uploads/e50c66a2898535dd4927b42d3ef62303.png",
      "filename": "e50c66a2898535dd4927b42d3ef62303",
      "aggregate_type": "image",
      "variant_name": null,
      "original_media_id": null
    },
    {
      "id": 2,
      "path": "http://localhost:8000/storage/uploads/bac5e2e43f87d4c85298c0ac64f8178a.png",
      "filename": "bac5e2e43f87d4c85298c0ac64f8178a",
      "aggregate_type": "image",
      "variant_name": null,
      "original_media_id": null
    },
    {
      "id": 3,
      "path": "http://localhost:8000/storage/uploads/3f39d306aca13462e5eeca4edd443190.png",
      "filename": "3f39d306aca13462e5eeca4edd443190",
      "aggregate_type": "image",
      "variant_name": null,
      "original_media_id": null
    },
    {
      "id": 4,
      "path": "http://localhost:8000/storage/uploads/524ce8c998b2e69741c7692ebfd8ed54.png",
      "filename": "524ce8c998b2e69741c7692ebfd8ed54",
      "aggregate_type": "image",
      "variant_name": null,
      "original_media_id": null
    },
    {
      "id": 5,
      "path": "http://localhost:8000/storage/uploads/d03393bd77dc7a1d9fc425fac67f2269.png",
      "filename": "d03393bd77dc7a1d9fc425fac67f2269",
      "aggregate_type": "image",
      "variant_name": null,
      "original_media_id": null
    },
  ]
})
const oldImage = ref([
  {
    "id": 1,
    "path": "http://localhost:8000/storage/uploads/e50c66a2898535dd4927b42d3ef62303.png",
    "filename": "e50c66a2898535dd4927b42d3ef62303",
    "aggregate_type": "image",
    "variant_name": null,
    "original_media_id": null
  },
  {
    "id": 2,
    "path": "http://localhost:8000/storage/uploads/bac5e2e43f87d4c85298c0ac64f8178a.png",
    "filename": "bac5e2e43f87d4c85298c0ac64f8178a",
    "aggregate_type": "image",
    "variant_name": null,
    "original_media_id": null
  },
  {
    "id": 3,
    "path": "http://localhost:8000/storage/uploads/3f39d306aca13462e5eeca4edd443190.png",
    "filename": "3f39d306aca13462e5eeca4edd443190",
    "aggregate_type": "image",
    "variant_name": null,
    "original_media_id": null
  },
  {
    "id": 4,
    "path": "http://localhost:8000/storage/uploads/524ce8c998b2e69741c7692ebfd8ed54.png",
    "filename": "524ce8c998b2e69741c7692ebfd8ed54",
    "aggregate_type": "image",
    "variant_name": null,
    "original_media_id": null
  },
  {
    "id": 5,
    "path": "http://localhost:8000/storage/uploads/d03393bd77dc7a1d9fc425fac67f2269.png",
    "filename": "d03393bd77dc7a1d9fc425fac67f2269",
    "aggregate_type": "image",
    "variant_name": null,
    "original_media_id": null
  },
])

onMounted(() => {

})


</script>