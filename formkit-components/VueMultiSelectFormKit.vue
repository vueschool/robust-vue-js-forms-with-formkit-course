<script setup>
import MultiSelect from "vue-multiselect";
const props = defineProps({
  context: Object,
});
</script>

<template>
  <MultiSelect
    :model-value="context._value"
    v-bind="context.attrs"
    @update:model-value="context.node.input($event)"
    :id="context.id"
    :name="context.node.name"
    @blur="context.handlers.blur"
    :disabled="context.disabled"
    :class="context.classes.input"
  ></MultiSelect>
</template>
<style src="vue-multiselect/dist/vue-multiselect.css"></style>
<style>
.formkit-input.multiselect {
  padding: 0;
}
</style>
