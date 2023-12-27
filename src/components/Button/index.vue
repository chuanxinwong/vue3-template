<style lang="less">
.Button {
  display: inline-flex;
  align-items: center;
  font-size: var(--fontcur);
  padding: 0 var(--fontcur);
  height: calc(var(--fontcur) * 2);
  border: 1px solid var(--themecur);
  color: var(--black1);
  border-radius: var(--radius1);
  transition-duration: var(--dur);
  cursor: pointer;
  margin: var(--radius1);

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
  </div>
</template>
<script>
export default { name: "Button" }
</script>
<script setup>
import defPubProps from "../defPubProps.js"
import defProps from './defProps.js';

var props = defineProps({ ...defPubProps, ...defProps });

var datas = reaction({
  minTimer: 2000,
})

function click() {
  if (props.gdisabled || props.disabled) {
    return;
  }
  run();
}

function run() {
  var { minTimer } = datas;
  if (typeof props.click === "function") {
    var proms = props.click();
    console.log(proms);
    if (!(proms instanceof Promise)) {
      // datas.flag = true;
      return
    }

    datas.flag = false;
    datas.timer = Date.now();
    proms
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        var now = Date.now();
        var diff = now - datas.timer;
        if (now - datas.timer < minTimer) {
          setTimeout(() => {
            datas.flag = true;
          }, minTimer - diff);
        } else {
          datas.flag = true;
        }
      });

    return;
  }
  console.warn("clickHandler not function");
  // datas.flag = true;
}


</script>