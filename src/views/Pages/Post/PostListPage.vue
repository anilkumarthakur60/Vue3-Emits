<template>
  <div class="container">
    <div class="card">
      <div class="card-body">

        <div v-if="loading">
          <h1>Loading...</h1>
        </div>

        <div class="row my-5">
          <div class="col-4">
            <label for="exampleFormControlInput1" class="form-label">Name</label>
            <input type="text" v-model="filters.queryFilter"  v-on:keyup.enter="fetchData" class="form-control-sm" id="exampleFormControlInput1" placeholder="name@example.com">
          </div>
          <div class="col-4">
            <label for="exampleFormControlInput12" class="form-label">Email</label>
            <input type="text" v-model="filters.email" class="form-control-sm" id="exampleFormControlInput12" placeholder="name@example.com">
          </div>
          <div class="col-4">
            <label for="exampleFormControlInput122" class="form-label">Phone</label>
            <input type="text" v-model="filters.phone"  class="form-control-sm" id="exampleFormControlInput122" placeholder="name@example.com">
          </div>

        </div>

        <table class="table table-hover table-responsive" v-if="!loading">
          <thead class="table-light">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="user in displayedTableData" :key="user.id">
            <td scope="row">{{ user.id }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.slug }}</td>
          </tr>
          </tbody>
        </table>
        <div v-if="totalPages > 1">
          <ul class="list-unstyled d-flex ">
            <li v-for="page in pages" :key="page" class="mx-1 ">
              <button :class="{ active: page === currentPage }" class="rounded-1 btn btn-sm btn-success"
                      @click="goToPage(page)">
                {{ page }}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref, reactive, computed, watchEffect} from 'vue';


const tableData = reactive({
  data: [],
  total: 0,
  per_page: 10,
  current_page: 1,
  last_page: 1,
  from: 0,
  to: 0
});
const  filters=ref({})



const loading = ref(false);

const fetchData = async () => {
  loading.value = true;

  setTimeout(async () => {
  const response = await fetch(`http://localhost:8000/api/posts?per_page=${tableData.per_page}&page=${tableData.current_page}&filters=${JSON.stringify(filters.value)}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
  });
  const data = await response.json();
  tableData.data = data.data;
  tableData.total = data.total;
  tableData.per_page = data.meta.per_page;
  tableData.current_page = data.meta.current_page;
  tableData.last_page = data.meta.last_page;
  tableData.from = data.meta.from;
  tableData.to = data.meta.to;
  loading.value = false;

  }, 300);
};

// watch(tableData, fetchData, {immediate: true});

watchEffect(() => {
  fetchData();
}, {immediate: true});




const displayedTableData = computed(() => tableData.data);

const totalPages = computed(() => tableData.last_page);

const currentPage = computed({
  get: () => tableData.current_page,
  set: (value) => {
    tableData.current_page = value;
  }
});

const perPage = computed({
  get: () => tableData.per_page,
  set: (value) => {
    tableData.per_page = value;
  }
});

const pages = computed(() => {
  const startPage = Math.max(1, currentPage.value - 2);
  const endPage = Math.min(totalPages.value, currentPage.value + 2);
  const pagesArray = [];
  for (let i = startPage; i <= endPage; i++) {
    pagesArray.push(i);
  }
  return pagesArray;
});

const goToPage = (page) => {
  currentPage.value = page;
};

</script>
