<template>
  <h1 :class="myClasses['m-class']">
    using module CSS with $ syntax (kebab case)
  </h1>
  <h1 :class="myClasses.anotherClass">
    Using module CSS with $ syntax (camel case)
  </h1>
</template>

<style module="myClasses">
/* kebab case */
.m-class {
  background: firebrick;
  color: white;
}

.anotherClass {
  background: seagreen;
  color: white;
}
</style>
