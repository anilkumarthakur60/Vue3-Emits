<template>


  <div class="col-12">
    <div class="border-1 border-indigo-100 q-pa-lg">
      <div class="row items-center q-col-gutter-lg">
        <div class="col-12 col-md-6">
          <div class="text-lg">Attachments</div>
          <pre>
            {{ form }}
          </pre>

        </div>

        <div class="col-12 col-md-6">
          <div class="text-right q-mb-md">

            <button @click="addAttachments" class=" btn btn-sm btn-success">Add New</button>
          </div>
        </div>
      </div>

      <div class="row q-col-gutter-md position-relative q-my-lg" v-for="(r, i) in attachments" :key="i">

        <div class="col-12 d-flex my-3">

          <input
              v-model="attachments[i].id"
              type="text"
              class="form-control "
          />
          <button
              class="btn btn-sm btn-danger ml-2"
              @click="removeAttachments(i)">
            Remove
          </button>
        </div>


      </div>
    </div>
  </div>
</template>
<script setup>


import {ref, watch} from "vue";

const attachments = ref([]);

const form = ref({})

const addAttachments = () => {
  attachments.value.push({id: null}
  )
}


function removeAttachments(index) {

  attachments.value.splice(index, 1)
  attachments.value = attachments.value.filter((item, index) => item.id !== null)
}

watch(
    attachments,
    (newValue) => {
      form.value.attachments = newValue
    },
    {
      deep: true,
    }
);

</script>