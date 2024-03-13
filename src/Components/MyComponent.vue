<script setup>
// const amazingImage =
//   "https://images.unsplash.com/photo-1707327956851-30a531b70cda?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

// const altText = "just a random picture";

// const imageWidth = 400;
// const imageHeight = 400;

const imageInfo = {
  src: "https://images.unsplash.com/photo-1707327956851-30a531b70cda?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  alt: "just a random picture",
  width: 400,
  height: 400,
};
</script>

<template>
  <img :="imageInfo" />
</template>

<style lang="scss" scoped></style>
