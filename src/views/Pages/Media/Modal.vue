<template>

  <!-- Button trigger modal -->
  <button type="button" class="btn btn-sm btn-outline-success" @click="callApi" data-bs-toggle="modal" data-bs-target="#exampleModal">
    Pick File
  </button>

  <!-- Modal -->
  <div class="modal fade " ref="myModal" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
       aria-hidden="true">
    <div class="modal-dialog modal-dialog-scrollable  ">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-md-4 col-12">

              <div class="form-group">
                <input type="text" class="form-control"   placeholder="Search">
              </div>
            </div>
            <div class="col-md-4 col-12">

              <div class="form-group">
                <select class="form-select" aria-label="Default select example">
                  <option selected>Type</option>
                  <option value="1">Image</option>
                  <option value="2">Video</option>
                  <option value="3">Attachment</option>
                </select>
              </div>
            </div>
              <div class="col-sm-3 col-12">

                <div class="form-group">
                  <input type="file" class="form-control" @change="handleFileUpload"  >
                </div>
            </div>
          </div>
          <div class="row">

            <pre>
            loop checkbox image  {{loopImageCheckBox}}
            </pre>
            <pre>
             model value: {{modelValue}}
            </pre>

            <div class="col-lg-3 col-md-2 col-sm-4 " v-for="item in serverImageList" :key="item.id">
              <div class="form-check form-check-inline">
                <input class="" type="checkbox" v-model="loopImageCheckBox" :value="item" :id="item.id"/>
                <label :for="item.id"> {{item.id}}
                  <img :src="item.path" :alt="item.id" style="height: 100px; width: 100px"/>
                </label>
              </div>
            </div>

          </div>

        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="submitForm">Save changes
          </button>
        </div>
      </div>
    </div>
  </div>

  <div class="" v-if="imageSelectedAndModalClosed">
    <div class="row">
      <div class="col-lg-1 col-md-2 col-sm-4 " v-for="item in loopImageCheckBox" :key="item.id">
        <input class="" type="checkbox" v-model="loopImageCheckBox"
               :value="item" :id="item.id"/>
        <label :for="item.id">
          <img :src="item.path" :alt="item.id" style="height: 100px; width: 100px"/>
        </label>
      </div>
    </div>
  </div>


</template>

<script setup>
import {computed, onMounted, ref, watch} from "vue";
import {useImages} from "../../../Composables/useImages";
import axios from "axios";


const props=defineProps({
  modelValue: {
    type: [String, Number],
    default: "",
  },
  oldFile:{
    type: Array,
    default: () => [],
  },
});

const {searchImages} = useImages()
const loopImageCheckBox = ref([])
const serverImageList = ref([]);
const computedLoopImage = ref([]);
const myModal = ref(null);

const imageSelectedAndModalClosed = ref(false)

const selectedFileForUpload = ref(null);


const emit = defineEmits(['update:modelValue'])
onMounted(() => {
  if (props.oldFile.length > 0) {
    imageSelectedAndModalClosed.value = true
    loopImageCheckBox.value = props.oldFile
  }
   callApi()
})

//
watch(loopImageCheckBox, (val) => {
  computedLoopImage.value = val.map((item) => item.id)
  emit('update:modelValue', computedLoopImage.value)
}, {deep: true, immediate: true})


// const fileValue = computed({
//   get: () => props.value,
//   set: val => {
//     context.emit('update:value', val)
//   }
// })


function  callApi() {
 searchImages({
    termSearch: 'cat',
    page: 2
  }).then((res) => {
    serverImageList.value = res.data?.data
  })
}

function submitForm() {
  imageSelectedAndModalClosed.value = true

  emit('update:modelValue', computedLoopImage.value)
}


const handleFileUpload = (event) => {
  selectedFileForUpload.value = event.target.files[0];
  uploadFile()
}

async function uploadFile ()  {
  const formData = new FormData();
  formData.append('file', selectedFileForUpload.value);
  await axios.post('http://localhost:8000/api/medias', formData).then((res) => {
    callApi()
  }).catch((err) => {
    console.log(err);
  }).finally(() => {
    console.log('finally');
  })
}
</script>