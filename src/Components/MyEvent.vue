<script setup>
// import { ref } from "vue";

// let count = ref(0);

// const incrementCounter = () => count.value++;
// const decrementCounter = () => count.value--;

// const submitHandler = () => {
//   alert("valid credentials");
// };

const showMessage = (message) => {
  alert(message);
};
</script>

<template>
  <!-- <h1>count: {{ count }}</h1>
  <button @click="incrementCounter">Increment</button>
  <button @click="decrementCounter">Decrement</button> -->
  <!-- <form @submit.prevent="submitHandler">
    <input type="text" placeholder="please enter your name" />
    <input type="email" placeholder="please enter your email" />
    <button type="submit">submit</button>
  </form> -->
  <button @click="showMessage('this is my message')">show msg</button>
</template>

<style lang="scss" scoped></style>
