<template>

  <!-- Button trigger modal -->
  <button type="button" class="btn btn-sm btn-outline-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
    Pick File
  </button>

  <!-- Modal -->
  <div class="modal fade " ref="myModal" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-scrollable modal-fullscreen ">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          {{ imageCheckbox }}
          <div class="row">

            <div class="col-lg-1 col-md-2 col-sm-4 " v-for="item in images" :key="item.id">

              <div class="form-check form-check-inline">

                <input class="" type="checkbox" v-model="imageCheckbox" :value="item" :id="item.id"/>
                <label :for="item.id">
                  <img :src="item.path" :alt="item.id" style="height: 100px; width: 100px"/>
                </label>
              </div>
            </div>


          </div>

        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" data-bs-dismiss="modal"  @click="submitForm" >Save changes</button>
        </div>
      </div>
    </div>
  </div>

  <div class=""  v-if="imageSelectedAndModalClosed">
    <div class="row">
      <div class="col-lg-1 col-md-2 col-sm-4 " v-for="item in selectedImageList" :key="item.id">
        <img :src="item.path" :alt="item.id" style="height: 100px; width: 100px"/>
      </div>
    </div>
  </div>



</template>

<script setup>
import {onMounted, ref, watch} from "vue";
import {useImages} from "../../../Composables/useImages";


defineProps({
  className:{
    type: String,
    default: "",
  },
  id: {
    type: String,
    default: "exampleFormControlInput14",

  },
  label: {
    type: String,
    default: "Form Label",
  },
  modelValue: {
    type: [String, Number],
    default: "",
  },
  type: {
    type: String,
    default: "text",
  },
});

const {searchImages} = useImages()
const imageCheckbox = ref([])
const images = ref([]);
const myModal = ref(null);

const  selectedImageList=ref([])
const  imageSelectedAndModalClosed=ref(false)

const emit = defineEmits(['update:modelValue'])
onMounted(() => {
  images.value = searchImages({
    termSearch: 'cat',
    page: 2
  }).then((res) => {
    images.value = res.data?.data
  })
})

function  submitForm() {
  imageSelectedAndModalClosed.value=true
  emit('update:modelValue', selectedImageList.value.map((item)=>item.id))
}

watch(imageCheckbox, (val) => {
  console.log('---------data logging--------', val);
  selectedImageList.value = val
})

</script>