<script setup>
const myMessage = "yellow world";
const myNumber = 100;

function add(x, y) {
  return x + y;
}
</script>

<template>
  <h1>{{ myMessage }}</h1>
  <h2>{{ myNumber }}</h2>
  <h3>2 + 2 = {{ 2 + 2 }}</h3>
  <h1>add two numbers {{ add(2, 10) }}</h1>
</template>

<style lang="scss" scoped></style>
