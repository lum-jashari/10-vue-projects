<script setup>
const props = defineProps(["name", "surname"]);
console.log(props);
</script>

<template>
  <div>
    <h1>{{ props.name }}</h1>
    <h1>{{ props.surname }}</h1>
  </div>
</template>

<style scoped></style>
