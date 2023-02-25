<template>
  <div>
    <vue3-easy-datatable
        :columns="columns"
        :rows="rows"
        :filterable="true"
        :pagination="true"
        :pageSize="10"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Vue3EasyDataTable from 'vue3-easy-data-table';

export default defineComponent({
  name: 'MyComponent',
  components: {
    Vue3EasyDataTable,
  },
  data() {
    return {
      columns: [
        { name: 'ID', key: 'id' },
        { name: 'Name', key: 'name' },
        { name: 'Email', key: 'email' },
      ],
      rows: [
        { id: 1, name: 'John', email: 'john@example.com' },
        { id: 2, name: 'Jane', email: 'jane@example.com' },
        { id: 3, name: 'Bob', email: 'bob@example.com' },
        { id: 4, name: 'Alice', email: 'alice@example.com' },
        // more rows...
      ],
    };
  },
});
</script>
