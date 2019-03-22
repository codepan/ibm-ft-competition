<template>
  <div class="ft-home">
    <header class="ft-header">
      <Nav></Nav>
      <Banner></Banner>
      <Apply class="apply"></Apply>
    </header>
    <main class="ft-main">
      <Main></Main>
    </main>
    <footer class="ft-footer">
      <Footer></Footer>
    </footer>
  </div>
</template>

<script>
import Banner from '@/views/header/Banner'
import Nav from '@/views/header/Nav'
import Apply from '@/views/header/Apply'
import Main from '@/views/main/Main'
import Footer from '@/views/footer/Footer'
export default {
  name: 'home',
  components: {
    Banner,
    Nav,
    Apply,
    Main,
    Footer
  }
}
</script>
<style lang="scss">
  .ft-home{
    .ft-header{
      .apply{
        position: fixed;
        top: 10px;
        right: 40px;
        z-index: 2;
      }
    }
  }
</style>
