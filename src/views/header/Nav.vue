<template>
  <nav class="nav">
    <ul class="nav-list">
      <li class="nav-item" @click="scrollIntoView(index)" v-for="(nav, index) in navigation" :key="index">{{nav}}</li>
    </ul>
  </nav>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['navigation'])
  },
  methods: {
    scrollIntoView (index = 0) {
      document.getElementById(`box-${index + 1}`).scrollIntoView()
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
  @import "../../assets/style/var";
  .nav{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
    height: $nav-height;
    background: #132e39;
    .nav-list{
      display: flex;
      height: 100%;
      margin: 0 240px;
      .nav-item{
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 15px;
        color: #fefefe;
        cursor: pointer;
      transition: all .5s ease-out;
        &:hover{
          color: $color-primary;
        }
      }
    }
  }
</style>
