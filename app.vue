<script setup>
import { FormKitSchema, createInput } from "@formkit/vue";
import VueMultiSelectFormKit from "./formkit-components/VueMultiSelectFormKit.vue";

const ms = createInput(VueMultiSelectFormKit);
const formData = ref({
  username: "danielkelly_io",
  password: "",
});
async function handleSubmit(data) {
  await wait(3000);
  console.log(data);
}
</script>
<template>
  <div>
    <FormKitSchema
      :data="{
        formData,
        attrs: {
          onSubmit: handleSubmit,
        },
      }"
      :schema="[
        {
          $formkit: 'form',
          submitLabel: 'Login',
          value: '$formData',
          bind: '$attrs',
          children: [
            {
              $el: 'h1',
              children: 'Login',
            },
            {
              validation: '(500)username_is_unique',
              $formkit: 'text',
              label: 'Username',
              name: 'username',
              help: 'Please fill out your username',
            },
            {
              $formkit: 'password',
              label: 'Password',
              name: 'password',
              if: '$value.username',
            },
            {
              $formkit: ms,
              label: `Framework`,
              value: 'Vue',
              options: ['Vue', 'React', 'Svelte'],
            },
          ],
        },
      ]"
    />
  </div>
</template>
