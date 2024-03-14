<script setup></script>

<template>
  <div class="nav">
    <input type="checkbox" id="nav-check" />
    <div class="nav-header">
      <router-link to="/" class="nav-title">Vue 10 Projects</router-link>
    </div>
    <div class="nav-btn">
      <label for="nav-check">
        <span></span>
        <span></span>
        <span></span>
      </label>
    </div>

    <div class="nav-links">
      <router-link to="/todo">P1</router-link>
      <router-link to="/accordion">P2</router-link>
      <router-link to="/calculator">P3</router-link>
      <router-link to="/jokes">P4</router-link>
      <router-link to="/form">P5</router-link>
      <router-link to="/github">P6</router-link>
      <router-link to="/password">P7</router-link>
      <router-link to="/tabs">P8</router-link>
      <router-link to="/quotes">P9</router-link>
      <router-link to="/wiki">P10</router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
}

body {
  margin: 0px;
  font-family: "segoe ui";
}

.nav {
  height: 50px;
  width: 100%;
  background-color: #0056fa;
  position: relative;
}

.nav > .nav-header {
  display: inline;
}

.nav > .nav-header > .nav-title {
  display: inline-block;
  font-size: 22px;
  color: #fff;
  padding: 10px 10px 10px 10px;
  text-decoration: none;
}

.nav > .nav-header > .nav-title:hover {
  background-color: rgba(0, 0, 0, 0.3);
}

.nav > .nav-btn {
  display: none;
}

.nav > .nav-links {
  display: inline;
  float: right;
  font-size: 18px;
}

.nav > .nav-links > a {
  display: inline-block;
  padding: 13px 10px 13px 10px;
  text-decoration: none;
  color: #efefef;
}

.nav > .nav-links > a:hover {
  background-color: rgba(0, 0, 0, 0.3);
}

.nav > #nav-check {
  display: none;
}

@media (max-width: 600px) {
  .nav > .nav-btn {
    display: inline-block;
    position: absolute;
    right: 0px;
    top: 0px;
  }
  .nav > .nav-btn > label {
    display: inline-block;
    width: 50px;
    height: 50px;
    padding: 13px;
  }
  .nav > .nav-btn > label:hover,
  .nav #nav-check:checked ~ .nav-btn > label {
    background-color: rgba(0, 0, 0, 0.3);
  }
  .nav > .nav-btn > label > span {
    display: block;
    width: 25px;
    height: 10px;
    border-top: 2px solid #eee;
  }
  .nav > .nav-links {
    position: absolute;
    display: block;
    width: 100%;
    background-color: #333;
    height: 0px;
    transition: all 0.3s ease-in;
    overflow-y: hidden;
    top: 50px;
    left: 0px;
  }
  .nav > .nav-links > a {
    display: block;
    width: 100%;
  }
  .nav > #nav-check:not(:checked) ~ .nav-links {
    height: 0px;
  }
  .nav > #nav-check:checked ~ .nav-links {
    height: calc(100vh - 50px);
    overflow-y: auto;
  }
}
</style>
