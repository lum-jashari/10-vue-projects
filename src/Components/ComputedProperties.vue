<script setup>
import { ref, computed } from "vue";

const counter = ref(0);

const squaredCounter = computed(() => counter.value ** 2);

const incrementCounter = () => {
  counter.value++;
};
</script>

<template>
  <h1>counter: {{ counter }}</h1>
  <p>squared counter: {{ squaredCounter }}</p>
  <button @click="incrementCounter">add</button>
</template>

<style lang="scss" scoped></style>
