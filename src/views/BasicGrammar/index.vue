<style>
section {
  margin: 20px;
}

.row {
  display: flex;
  margin: 20px 0;
}

.row span {
  width: 100px;
}

.row input {
  height: 30px;
}
</style>
<template>
  <div class="BasicGrammar">
    <h3>推荐方式：</h3>
    <section>
      <div class="row">
        <span>用户名</span>
        <input type="text" v-model="datas.username">
      </div>
      <div class="row">
        <span>地址</span>
        <input type="text" v-model="datas.addredd">
      </div>
      <div class="row">
        <span>email</span>
        <input type="text" v-model="datas.email">
      </div>
      <div>
        <button :disabled="cmpDisable" @click="onClickBtn">提交</button>
      </div>
    </section>

  </div>
</template>
<script setup>
import { ref, reactive, computed } from "vue"

// 用于演示数据绑定
var datas = reactive({
  username: "",
  addredd: "",
  email: "",
})

// 演示 computed 的用法； 如何表单没有填写， 则禁用按钮；
var cmpDisable = computed(() => {
  return !datas.username || !datas.addredd || !datas.email;
})

// 演示按钮的点击事件
function onClickBtn() {
  console.log(datas);
}


</script>