<script setup>
import { reactive } from "vue";

let initialState = reactive({ value: { count: 0 }, user: ["lum", "jashari"] });

const changeUser = () => {
  initialState.user[0] = "michael";
  initialState.user[1] = "philip";
};
</script>

<template>
  <h1>current count: {{ initialState.value.count }}</h1>
  <h1>current user: {{ initialState.user }}</h1>
  <button @click="initialState.value.count += 10">add 10</button>
  <button @click="changeUser">change user</button>
  <button @click="initialState.user.push('john doe')">add one more user</button>
  <!-- <button @click="initialState.count++">+</button>
  <button @click="initialState.count--">-</button> -->
</template>

<style lang="scss" scoped></style>
