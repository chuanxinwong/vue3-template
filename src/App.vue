<style>
@import url("./styles/public.css");
@import url("./styles/vars.less");
.main {
  padding: 20px;
}
</style>
<template>
  <!-- Navigation 是公共组件 -->
  <Navigation />
  <div class="main">
    <router-view />
  </div>
</template>
<script setup>
import Navigation from "./components/Navigation.vue"
</script>