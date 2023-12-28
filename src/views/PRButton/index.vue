
<template>
  <div>

    <hr>
    <h3>基础用法</h3>
    <MyButton text="Aaa" :click="click1" />

    <hr>
    <h3>带有参数</h3>
    <div>与@的绑定方式不同， 这里函数无法携带参数， 但是可以通过透传 Attributes 传给函数；</div>
    <MyButton text="bbbbbb" :item="11" :click="click2" />

    <hr>
    <MyButton text="ccccc" />

    <hr>
    <hr>
    <hr>
    <h2>异步按钮的优缺点：</h2>
    <div>优点：可以不需要关心按钮的Loading状态，自带锁； </div>
    <div>缺点：无法在函数上携带参数， 需要把参数绑定到attr；</div>
    <ul>
      <li></li>
    </ul>

  </div>
</template>

<script setup>
import MyButton from "@/components/Button/index.vue"
import Loading from "@/components/Loading/index.vue"

function click1() {
  console.log("click1")
}

function click2() {
  // 得到绑定到 当前组件的参数和props；
  console.log(arguments)
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 2000)
  })
}



</script>