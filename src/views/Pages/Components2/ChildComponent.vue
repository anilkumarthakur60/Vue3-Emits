<template>
  <div class="card ">
    <div class="card-body">
      <form @submit.prevent="submitFormData">
                    <pre>
                            {{ formData }}
                    </pre>
        <div class="row  ">

          <div class="mb-3 col-12">
            <label for="exampleFormControlInput1" class="form-label">First Name</label>
            <input type="text" class="form-control" v-model="formData.name" id="exampleFormControlInput1"/>
          </div>
          <div class="mb-3 col-12">
            <label for="exampleFormControlInput13" class="form-label">Last Name</label>
            <input type="text" class="form-control" v-model="formData.lastname"
                   id="exampleFormControlInput13"/>
          </div>


          <div class="mb-3 col-12">
            <label for="exampleFormControlInput12" class="form-label">Email </label>
            <input type="text" class="form-control" v-model="formData.email"
                   id="exampleFormControlInput12"/>
          </div>

          <div class="mb-3 col-12">
            <label for="exampleFormControlInput14" class="form-label">Phone</label>
            <input type="text" class="form-control" v-model="formData.phonenumber"
                   id="exampleFormControlInput14"/>
          </div>
          <div class="mb-3 col-12">
            <Input v-model="formData.address" class-name="form-control" label="Address"/>
          </div>
          <div class="">
            <button type="submit" class="btn btn-sm btn-danger">Submit</button>
          </div>

        </div>
      </form>
    </div>

  </div>


</template>
<script setup>

import {ref} from 'vue'
import {useCommonJs} from "../../../Composables/useCommonJs"
import InputLabel from "@/views/Pages/CommonComponents/InputLabel.vue";
import Input from "@/views/Pages/CommonComponents/Input.vue";

const formData = ref({})

const {emit} = useCommonJs()

function submitFormData() {

  emit('eventA')
  emit('eventB', formData.value)

}

</script>
