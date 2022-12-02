<script setup>
import MultiSelect from "vue-multiselect";
const props = defineProps({
  context: Object,
});
</script>

<template>
  <MultiSelect
    :model-value="context._value"
    :options="context.attrs.options"
    @update:model-value="context.node.input($event)"
  ></MultiSelect>
</template>
<style src="vue-multiselect/dist/vue-multiselect.css"></style>
