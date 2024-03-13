<script setup>
import { ref } from "vue";

const complexGamesObj = ref({
  game1: {
    title: "Space Explorer",
    genre: "Sci-Fi",
    platform: "PC",
    releaseDate: "2023-05-20",
  },
  game2: {
    title: "Fantasy Quest",
    genre: "Fantasy",
    platform: "PlayStation",
    releaseDate: "2023-07-10",
  },
  movie1: {
    title: "Inception",
    director: "Christopher Nolan",
    genre: "Sci-Fi",
    releaseDate: "2010-07-16",
  },
  movie2: {
    title: "The Shawshank Redemption",
    director: "Frank Darabont",
    genre: "Drama",
    releaseDate: "1994-09-23",
  },
  book1: {
    title: "Dune",
    author: "Frank Herbert",
    genre: "Science Fiction",
    publicationYear: 1965,
  },
  book2: {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Fiction",
    publicationYear: 1960,
  },
});
</script>

<template>
  <ul v-for="({ title, author, genre }, index) in complexGamesObj" :key="index">
    <li>{{ title }}</li>
    <li>{{ author }}</li>
    <li>{{ genre }}</li>
    <br />
  </ul>
</template>
