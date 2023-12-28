<style lang="less">
.Button {
  position: relative;
  display: inline-flex;
  align-items: center;
  font-size: var(--fontcur);
  padding: 0 var(--fontcur);
  height: calc(var(--fontcur) * 2);
  border: 1px solid var(--themecur);
  color: var(--black1);
  border-radius: var(--radius1);
  transition-duration: var(--dur);
  margin: var(--radius1);
  cursor: pointer;

  .loadin {
    position: absolute;
    background-color: rgba(255, 255, 255, 0.5);
    cursor: wait;
  }

  &:hover {
    box-shadow: 0 0 var(--radius1) var(--themecur);
  }

  &:active {
    opacity: 0.7;
  }
}
</style>
<template>
  <div class="Button" @click="click">
    <span>{{ props.text }}</span>
    <div class="loadin ful" v-if="datas.loading">
      <Loading />
    </div>
  </div>
</template>
<script>
export default { name: "Button" }
</script>
<script setup>
import { reactive, useAttrs } from "vue"
import defPubProps from "../defPubProps.js"
import defProps from './defProps.js';
import Loading from "../Loading/index.vue"

var attrs = useAttrs()
var props = defineProps({ ...defPubProps, ...defProps });
var datas = reactive({
  loading: false,
})

function click() {
  // 禁用
  if (props.gdisabled || props.disabled) {
    return;
  }
  // 有正在进行的异步函数
  if (datas.loading) {
    return;
  }
  // 参数不是函数；
  if (typeof props.click != "function") {
    console.warn("click Handler not a function");
    return;
  }

  let proms = props.click(attrs, props);
  // 不是 Promise
  if (!(proms instanceof Promise)) {
    return;
  }

  datas.loading = true;
  proms
    .catch((err) => {
      // 防止函数没有捕捉错误；
      console.log(err);
    })
    .finally(() => {
      datas.loading = false;
    });

}


</script>