<style lang="less">
.Loading {
  @size: 6px;
  @tim: cubic-bezier(0, 0.1, 0.3, 1.0);
  @dur: 1.4s;

  .box {
    width: 50px;
    height: 20px;

    div {
      width: @size;
      height: @size;
      border-radius: 50%;
      background-color: var(--themecur);
    }
  }

  .box>div:first-child {
    transform: translateX(0%);
    animation: ball-left @dur 0s @tim infinite;
  }

  .box>div:last-child {
    transform: translateX(0%);
    animation: ball-right @dur 0s @tim infinite;
  }

  @keyframes ball-left {
    25% {
      transform: translateX(-150%);
      animation-timing-function: ease-in;
    }

    50% {
      transform: translateX(0%);
    }
  }

  @keyframes ball-right {
    50% {
      transform: translateX(0%);
    }

    75% {
      transform: translateX(150%);
      animation-timing-function: ease-in;
    }

    100% {
      transform: translateX(0%);
    }
  }
}
</style>

<template>
  <div class="Loading fcc ful">
    <div class="box fcc">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script>
export default { name: 'Loading' }
</script>

