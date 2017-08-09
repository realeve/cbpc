<template>
  <div class="slider-wrap clearfix">
    <div class="main-slider img-content flexslider pull-left">
      <v-carousel autoplay v-model="curIdx">
        <Carousel-item v-for="(item,i) of slider" :key="i">
          <div class="slide-item">
            <img :src="item.img" :alt="item.title" class="img-content" @click="redirect(item.url)">
            <h3 class="slide-title">
              <a :href="item.url">{{item.title}}</a>
            </h3>
          </div>
        </Carousel-item>
      </v-carousel>
    </div>

    <ul class="feature-post pull-right">
      <li v-for="item of special" :key="item.url">
        <img :alt="item.title" :src="item.img" @click="redirect(item.url)">
        <span>{{item.title}}</span>
      </li>
    </ul>
  </div>
</template>
<script>
  // 为解决VCarousel中左右点击的按钮在lighthouse评测中，button未设置文本的问题，MOD官方插件
  import VCarousel from '../carousel';

  export default {
    props: ['slider', 'special'],
    components: {
      VCarousel
    },
    data() {
      return {
        curIdx: 0
      };
    },
    methods: {
      redirect(path) {
        this.$router.push(path.replace('#', ''));
      }
    }
  };

</script>

<style scoped lang="less">
  .slide-item {
    img {
      width: 100%;
    }
    .slide-title {
      background: rgba(0, 0, 0, 0.6);
    }
  }

  @sliderWidth: 43px;
  .img-content {
    width: 670px;
    height: @sliderWidth*10;
  }

  .feature-post {
    img {
        cursor: pointer;
    }
  }

</style>
