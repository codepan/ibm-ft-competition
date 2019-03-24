<template>
  <article class="article">
    <div class="title-wrapper">
      <div class="title-line"></div>
      <div class="title">
        <slot name="title"></slot>
      </div>
      <div class="title-line circle-left"></div>
    </div>
    <div class="content">
      <slot></slot>
    </div>
  </article>
</template>

<script>
  export default {}
</script>

<style rel="stylesheet/scss" lang="scss">
  @import "../assets/style/var";

  .article {
    .title-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 60px;
      .title {
        padding: 0 10px;
        margin: 0 20px;
        color: $color-title;
        font-size: 26px;
        line-height: 0.5;
      }
      .title-line {
        position: relative;
        width: 33%;
        border-bottom: 1px solid $color-title;
        &:after {
          content: '';
          position: absolute;
          top: -5px;
          right: -10px;
          display: inline-block;
          width: 8px;
          height: 8px;
          border-radius: 8px;
          border: 2px solid $color-title;
        }
        &.circle-left:after {
          left: -10px;
        }
      }
    }
    .content {
      margin-top: 50px;
      color: $color-content;
      font-size: 14px;
    }
  }
</style>
