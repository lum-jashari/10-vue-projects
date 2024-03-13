<script setup>
import { onMounted, ref } from "vue";

const thisRef = ref("");

onMounted(() => {
  console.log(thisRef.value);
  thisRef.value.focus();
});
</script>

<template>
  <div>
    <input type="text" placeholder="enter name" ref="thisRef" />
  </div>
</template>

<style scoped></style>
