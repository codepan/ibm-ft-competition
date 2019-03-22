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

<style lang="scss">
  @import "../../assets/style/var";
  .nav{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
    height: $nav-height;
    background: #333;
    .nav-list{
      display: flex;
      height: 100%;
      margin: 0 200px;
      .nav-item{
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 16px;
        color: #fff;
        cursor: pointer;
        &:hover{
          background: #333;
        }
      }
    }
  }
</style>
