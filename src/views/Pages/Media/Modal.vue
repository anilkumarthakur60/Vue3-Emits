<template>
  <div class="" ref="modalRef">
    <button type="button" class="btn btn-sm btn-outline-success" @click="callApi" data-bs-toggle="modal"
            data-bs-target="#exampleModal">
      Pick File
    </button>

    <div class="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
         aria-hidden="true">
      <div class="modal-dialog modal-dialog-scrollable modal-fullscreen  ">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">File Manager</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-md-4 col-12">

                <div class="form-group">
                  <input type="text" class="form-control" placeholder="Search">
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
                  <input type="file" class="form-control" multiple @change="handleFileChange">
                </div>
              </div>
            </div>
            <div class="row mt-4 g-1">
              <div class="col-lg-2 col-md-3 col-sm-4  my-2 " v-for="item in serverImageList" :key="item.id">
                <div class="form-check form-check-inline border shadow d-flex flex-column ">
                  <input class="ms-auto p-3" type="checkbox" v-model="loopImageCheckBox" :value="item" :id="item.id"/>
                  <label :for="item.id">
                    <img :src="item.path" :alt="item.id" class="img-fluid"/>
                  </label>

                </div>
              </div>

              <div class="col-12">
                <nav aria-label="Page navigation example">
                  <ul class="pagination justify-content-end">

                    <li v-if="meta.current_page > 1" class="page-item">
                      <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
                    </li>
                    <li v-else class="page-item disabled">
                      <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
                    </li>

                    <li v-for="link in meta.links" class="page-item" :key="link.url">
                      <RouterLink class="page-link" :to="link.path">1</RouterLink>
                    </li>

                    <li class="page-item">
                      <a class="page-link" href="#">Next</a>
                    </li>
                  </ul>
                </nav>

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

      <div class="row mt-4 g-1">
        <div class="col-lg-2 col-md-3 col-sm-4  my-2 " v-for="item in loopImageCheckBox" :key="item.id">
          <div class="form-check form-check-inline border shadow d-flex flex-column ">

            <input class="ms-auto me-1 mt-1 " type="checkbox" v-model="loopImageCheckBox"
                   :value="item" :id="item.id"/>
            <label :for="item.id">
              <img :src="item.path" :alt="item.id" class="img-fluid"/>
            </label>
          </div>
        </div>
      </div>
    </div>

  </div>

</template>

<script setup>
import {onMounted, ref, watch, defineProps} from "vue";
import {useImages} from "../../../Composables/useImages";
import axios from "axios";
import {RouterLink} from 'vue-router'


const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: "",
  },
  oldFile: {
    type: [Array],
    default: [],
  },
});

const {searchImages} = useImages()
const loopImageCheckBox = ref([])
const serverImageList = ref([]);
const computedLoopImage = ref([]);
const modalRef = ref(null)

const imageSelectedAndModalClosed = ref(false)

const selectedFileForUpload = ref([]);


const emit = defineEmits(['update:modelValue'])
onMounted(() => {
  if (props.oldFile?.length > 0) {
    imageSelectedAndModalClosed.value = true
    loopImageCheckBox.value = props.oldFile
  }
  callApi()
})

watch(loopImageCheckBox, (val) => {
  computedLoopImage.value = val.map((item) => item.id)
  emit('update:modelValue', computedLoopImage.value)
}, {deep: true, immediate: true})


const meta = ref({})

function callApi() {
  searchImages({
    termSearch: 'cat',
    page: 2
  }).then((res) => {
    serverImageList.value = res.data?.data
  }).catch((err) => {
    console.log(err);
  }).finally(() => {
  })
}

function submitForm() {
  imageSelectedAndModalClosed.value = true
}


const handleFileChange = (event) => {
  selectedFileForUpload.value = Array.from(event.target.files);
  uploadFiles()
}
async function uploadFiles() {
  for (const file of selectedFileForUpload.value) {
    const formData = new FormData()
    formData.append('file', file)
    await axios.post('http://localhost:8000/api/medias', formData)
  }
  selectedFileForUpload.value = []
  callApi()
}

</script>