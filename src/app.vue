<template>
  <div id="app">
    <v-header></v-header>
    <router-view class="v-content"></router-view>
    <Back-top></Back-top>
    <v-footer></v-footer>
  </div>
</template>
<script>
  import './assets/css/reset.css';
  import './assets/css/navbar.css';
  import VHeader from './components/VHeader';
  import VFooter from './components/VFooter';

  import {
    mapActions
  } from 'vuex';

  export default {
    components: {
      VHeader,
      VFooter
    },
    data() {
      return {

      };
    },
    methods: {
      ...mapActions(['getSlider', 'getSpecial', 'getTopic', 'getArticle', 'getArticleText', 'getNotice', 'getPopular',
        'getQuick'
      ]),
      init() {
        this.getSlider();
        this.getSpecial();
        this.getTopic();
        this.getArticle();
        this.getArticleText();
        this.getNotice();
        this.getPopular();
        this.getQuick();
      }
    },
    mounted() {
      this.init();
    }
  };

</script>

<style>
  #app {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .v-content {
    flex: 1;
  }

  .ivu-tabs-bar {
    margin-bottom: 0px;
  }

  .ivu-tabs-tab:not(.ivu-badge) {
    font-size: .16rem;
    color: #666;
    line-height: 36px;
    font-weight: 400;
  }

  .ivu-tabs-nav .ivu-tabs-tab {
    padding: 8px !important;
  }

  .sec-panel-head,
  .widget {
    padding: 5px 15px;
  }

</style>
