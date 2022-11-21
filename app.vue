<script setup>
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
    <FormKit
      type="form"
      submit-label="Login"
      :value="formData"
      @submit="handleSubmit"
    >
      <template #default="{ state }">
        <h1>Login</h1>
        <FormKit
          :validation="[['required'], ['url'], ['length', 16, 20]]"
          type="text"
          label="Username"
          name="username"
        />
        <FormKit type="password" label="Password" name="password" />
      </template>
    </FormKit>
  </div>
</template>
