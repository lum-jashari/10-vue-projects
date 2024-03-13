<script setup>
import { ref } from "vue";

let password = ref(0);
</script>

<template>
  <h1 v-if="password.length > 8">strong pass</h1>
  <h1 v-else-if="password.length <= 8">weak pass</h1>
  <h1 v-else>please enter pass</h1>
</template>
