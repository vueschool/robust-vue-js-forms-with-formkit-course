<script setup>
import '@formkit/themes/genesis'

function logForm(values){
  console.log("values", values);
}
</script>
<template>
  <div>
    <FormKit type="form" submit-label="Login" @submit="logForm">
      <FormKit
          :classes="{
        outer: 'mb-5',
        label: 'block mb-1 font-bold text-sm',
        inner:
          'max-w-md border border-gray-400 rounded-lg mb-1 overflow-hidden focus-within:border-blue-500',
        input:
          'w-full h-10 px-3 border-none text-base text-gray-700 placeholder-gray-400',
        help: 'text-xs text-gray-500',
      }"
          type="text"
          label="Name"
          name="name"
      />
      <FormKit
          :classes="{
        outer: 'mb-5',
        label: 'block mb-1 font-bold text-sm',
        inner:
          'max-w-md border border-gray-400 rounded-lg mb-1 overflow-hidden focus-within:border-blue-500',
        input:
          'w-full h-10 px-3 border-none text-base text-gray-700 placeholder-gray-400',
        help: 'text-xs text-gray-500',
      }"
          type="password"
          validation="required"
          label="Password"
          name="password"
      />
    </FormKit>
  </div>
</template>


