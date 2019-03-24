<template>
  <button class="apply-button" @click="toApply">
    <img class="image" src="../../assets/image/edit.png"/>
    <span class="text">立即报名</span>
  </button>
</template>

<script>
export default {
  methods: {
    toApply () {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss">
  @import "../../assets/style/var";
  .apply-button {
    border: none;
    outline: none;
    background: $color-primary;
    width: 100px;
    height: 40px;
    border-radius: 6px;
    color: #fff;
    text-shadow: 2px 2px 6px rgba(200, 200, 200, .4);
    box-shadow: 1px 1px 2px rgba(240, 240, 240, .4);
    cursor: pointer;
    animation: move 1.5s 0s infinite ease-out;
    @keyframes move {
      0% {
        transform: scale(1);
        box-shadow: 1px 1px 2px rgba(45,183,245, .4);
      }
      50%{
        transform: scale(1.1);
        box-shadow: 2px 2px 4px rgba(45,183,245, .4);
      }
      100% {
        transform: scale(1);
        box-shadow: 1px 1px 2px rgba(45,183,245, .4);
      }
    }
    .image{
      width: 22px;
      height: 22px;
    }
  }
</style>
