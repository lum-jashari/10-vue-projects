<script setup>
import { reactive, ref } from "vue";

// let username = ref("");
// let users = ref(["michael", "john", "steve", "mark", "joe", "abraham"]);
// let userInfo = ref({
//   name: "lum",
//   age: 20,
//   location: ["NYC", "IDK"],
//   married: false,
// });

let friend = reactive([ref("jordan"), ref("alex"), ref("lum")]);
</script>

<template>
  <h1>{{ friend[0] }}</h1>
  <h1>{{ friend[1] }}</h1>
  <h1>{{ friend[2] }}</h1>
  <button @click="friend[0] = '🤝🏻'">shake</button>
  <button @click="friend[1] = '🤝🏻'">shake</button>
  <button @click="friend[2] = '🤝🏻'">shake</button>
</template>

<style lang="scss" scoped></style>
