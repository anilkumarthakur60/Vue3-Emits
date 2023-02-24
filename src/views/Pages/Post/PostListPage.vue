<template>
  <div>
    <div v-if="loading">
      <!-- Show loading spinner -->
    </div>
    <table v-if="!loading">
      <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="user in displayedTableData" :key="user.id">
        <td>{{ user.id }}</td>
        <td>{{ user.name }}</td>
        <td>{{ user.email }}</td>
      </tr>
      </tbody>
    </table>
    <div v-if="totalPages > 1">
      <ul>
        <li v-for="page in pages" :key="page">
          <button :class="{ active: page === currentPage }" @click="goToPage(page)">
            {{ page }}
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { ref, reactive, watch,computed } from 'vue';

export default {
  setup() {
    const tableData = reactive({
      data: [],
      total: 0,
      per_page: 10,
      current_page: 1,
      last_page: 1,
      from: 0,
      to: 0
    });

    const loading = ref(false);

    const fetchData = async () => {
      loading.value = true;
      console.log('---------data logging------tableData.per_page--',tableData.per_page);
      const response = await fetch(`http://localhost:8000/api/posts?per_page=${tableData.per_page}&page=${tableData.current_page}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
      });
      const data = await response.json();
      tableData.data = data.data;
      tableData.total = data.total;
      tableData.per_page = data.per_page;
      tableData.current_page = data.current_page;
      tableData.last_page = data.last_page;
      tableData.from = data.from;
      tableData.to = data.to;
      loading.value = false;
    };

    watch(tableData, fetchData, { immediate: true });

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

    return {
      loading,
      displayedTableData,
      totalPages,
      currentPage,
      perPage,
      pages,
      goToPage
    };
  }
};
</script>
