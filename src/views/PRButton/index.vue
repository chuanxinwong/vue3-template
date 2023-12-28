
<template>
  <div>

    <MyButton text="Aaa" :click="click1" />
    <MyButton text="bbbbbb" :click="click2" />
    <MyButton text="ccccc" />
    <MyButton text="ddddddddd" />

    <Loading />

  </div>
</template>

<script setup>
import MyButton from "@/components/Button/index.vue"
import Loading from "@/components/Loading/index.vue" 

function click1() {
  console.log("click1")
}

function click2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 2000)
  })
}


</script>