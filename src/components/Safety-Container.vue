<template>
  <div class="safety-container">
    <slot></slot>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
  @import "../assets/style/var";
  .safety-container{
    width: $safety-container-width;
    margin: 0 auto;
    height: 100%;
  }
</style>
