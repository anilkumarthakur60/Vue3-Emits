<template>
  <div class="row">
      <pre>{{ restApiUrl }}</pre>
    <div class="col-6">
      <pre>{{ serverOptions }}</pre>
      <pre>{{ serverItemsLength }}</pre>
      <pre>{{ items }}</pre>

    </div>

    <div class="col-6">

      <Vue3EasyDataTable

          v-model:server-options="serverOptions"
          :headers="headers"
          :items="items"
          :server-items-length="serverItemsLength"
          :loading="loading"
          buttons-pagination
          must-sort



      >
        <template #header-name="header">
          <div class="filter-column">
            {{ header.text }}
            <div class="filter-menu" v-if="showNameFilter">
              <input v-model="nameCriteria"/>
            </div>
          </div>
        </template>
        <template #header-age="header">
          <div class="filter-column">
            {{ header.text }}
            <div class="filter-menu filter-age-menu" v-if="showAgeFilter">
              <!--          <Slider v-model="ageCriteria" class="slider"/>-->
            </div>
          </div>
        </template>
        <template #header-favouriteSport="header">
          <div class="filter-column">
            {{ header.text }}
            <div class="filter-menu filter-sport-menu" v-if="showFavouriteSportFilter">
              <select
                  class="favouriteSport-selector "
                  v-model="favouriteSportCriteria"
                  name="favouriteSport"
              >
                <option value="swimming">
                  swimming
                </option>
                <option value="basketball">
                  basketball
                </option>
                <option value="running">
                  running
                </option>
                <option value="football">
                  football
                </option>
                <option value="all">
                  all
                </option>
              </select>
            </div>
          </div>
        </template>
      </Vue3EasyDataTable>
    </div>


  </div>
</template>

<script lang="ts" setup>
import {ref, onMounted, watch, computed} from "vue";
import Vue3EasyDataTable from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';
import { ServerOptions} from "vue3-easy-data-table";
import axios from "axios";

const headers = ref([
  {text: "Name", value: "name", sortable: true},
  {text: "Slug", value: "slug", sortable: true},
]);


const items = ref([]);

const serverItemsLength = ref(0);
const  showFavouriteSportFilter = ref(true);
const serverOptions = ref<ServerOptions>({
  page: 1,
  rowsPerPage: 5,
  sortBy: "name",
  sortType: 'asc',
});



async  function  callApi(){
  const response =axios.get(restApiUrl.value).then((response) => {
    console.log(response.data.data)
    items.value = response.data.data;
    serverItemsLength.value = response.data.meta.total;
  }).catch((error) => {
    console.log(error)
  })
}


const restApiUrl = computed(() => {


  const {page, rowsPerPage, sortBy, sortType} = serverOptions.value;
  if (sortBy && sortType) {
    return `http://localhost:8000/api/posts?page=${page}&per_page=${rowsPerPage}&sortBy=${sortBy}&sortType=${sortType}`;
  } else {
    return `http://localhost:8000/api/posts?page=${page}&per_page=${rowsPerPage}`;
  }
});




const loading = ref(false);

onMounted(() => {
  callApi();
});

watch(
    serverOptions,
    (value) => {
      callApi();
    },
    {deep: true}
);
</script>
