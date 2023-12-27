<style>
@import url("./styles/public.css");
</style>
<template>
  <!-- Navigation 是公共组件 -->
  <Navigation />
  <router-view />
</template>
<script setup>
import Navigation from "./components/Navigation.vue"
</script>