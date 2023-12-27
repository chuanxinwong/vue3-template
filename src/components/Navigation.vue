<style>
.Navigation {
  background-color: #ddd;
  height: 50px;
  display: flex;
  align-items: center;
}
.Navigation a {
  margin: 0 20px;
}
</style>
<template>
  <div class="Navigation">
    <router-link to="/">page1</router-link>
    <router-link to="/page2">page2</router-link>
    <router-link to="/page3">page3</router-link>
  </div>
</template>