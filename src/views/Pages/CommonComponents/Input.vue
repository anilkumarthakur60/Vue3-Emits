<script setup>
import {onMounted, ref} from 'vue';

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

defineEmits(['update:modelValue']);

const input = ref(null);

onMounted(() => {
  if (input.value.hasAttribute('autofocus')) {
    input.value.focus();
  }
});


defineExpose({focus: () => input.value.focus()});
</script>

<template>

  <div class="mb-3 col-12">
  <label v-if="label" :for="id" class="font-bold block">
    {{ label }}
  </label>
  <input
      :id="id"
      :type="type"
      ref="input"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :class="className"
  />
  </div>
</template>


