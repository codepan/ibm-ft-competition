<template>
  <article class="article">
    <div class="title-wrapper">
      <div class="title">
        <slot name="title"></slot>
      </div>
    </div>
    <div class="content">
      <slot></slot>
    </div>
  </article>
</template>

<script>
export default {
}
</script>

<style lang="scss">
  @import "../assets/style/var";
  .article{
    .title-wrapper{
      display: flex;
      justify-content: center;
      align-items: center;
      .title{
        margin-top: 20px;
        padding: 0 10px;
        color: $color-primary;
        font-size: 34px;
        border-left: 2px solid $color-primary;
        border-right: 2px solid $color-primary;
        line-height: 0.5;
      }
    }
    .content {
      margin-top: 50px;
      color: $color-content;
    }
  }
</style>
