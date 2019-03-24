<template>
  <div class="carousel">
    <div ref="carousel-list" class="carousel-list">
      <template v-for="(image, $index) in images">
        <div :key="$index" :class="['carousel-item', {'showItem': $index === 0}]"
             @mouseover="handleMouseover"
             @mouseout="handleMouseout">
          <img :src="image" alt="">
        </div>
      </template>
    </div>
    <div ref="carousel-indicators" class="carousel-indicators">
      <template v-for="(image, $index) in images">
        <div :key="$index" :class="['carousel-indicator', {active: $index === 0}]"
             :tabIndex="$index" @click="handleClickIndicator"></div>
      </template>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Carousel',
    data() {
      return {
        timer: null,
        currentIndex: 0
      }
    },
    props: {
      images: {
        type: Array,
        default () {
          return []
        }
      }
    },
    mounted() {
      this.autoPlay()
    },
    methods: {
      handleClickIndicator(e) {
        e.preventDefault()
        this.stopAutoPlay()
        this.currentIndex = e.target.tabIndex
        this.play()
      },
      handleMouseover(e) {
        e.preventDefault()
        this.stopAutoPlay()
      },
      handleMouseout(e) {
        e.preventDefault()
        this.autoPlay()
      },
      play() {
        let _this = this
        let carouselItems = document.getElementsByClassName('carousel-item')
        let carouselIndicators = document.getElementsByClassName('carousel-indicator')
        Object.keys(carouselItems).forEach((key) => {
          if (_this.currentIndex === parseInt(key)) {
            carouselItems[key].classList.add('showItem')
            carouselIndicators[key].classList.add('active')
          } else {
            carouselItems[key].classList.remove('showItem')
            carouselIndicators[key].classList.remove('active')
          }
        })
        if(this.currentIndex === 2){
          this.currentIndex = 0
        } else {
          this.currentIndex++
        }
      },
      autoPlay() {
        this.timer = setInterval(() => {
          this.play()
        }, 2000)
      },
      stopAutoPlay() {
        clearInterval(this.timer)
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss">
  .carousel {
    position: relative;
    width: 100%;
    height: 100%;
    .carousel-list {
      position: relative;
      width: 100%;
      height: 100%;
      .carousel-item {
        position: absolute;
        display: none;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        animation: animationItem .6s linear;
        &.showItem {
          display: list-item;
          opacity: 1;
        }
        img {
          width: 100%;
          height: 100%;
          vertical-align: middle;
        }
      }
    }
    .carousel-indicators {
      position: absolute;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      .carousel-indicator {
        display: inline-block;
        margin: 0 5px;
        width: 20px;
        height: 6px;
        border: 1px solid #eee;
        border-radius: 3px;
        background: transparent;
        outline: none;
        &:hover, &.active {
          background: #eeeeee;
          outline: none;
        }
      }
    }
  }

  @-webkit-keyframes animationItem {
    0% {
      opacity: .6;
    }
    100% {
      opacity: 1;
    }
  }
</style>