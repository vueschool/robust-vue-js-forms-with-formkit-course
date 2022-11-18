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
    <FormKit type="form" :value="formData" @submit="handleSubmit">
      <h1>Login</h1>
      <FormKit type="text" label="Username" name="username" />
      <FormKit type="password" label="Password" name="password" />
    </FormKit>
  </div>
</template>
