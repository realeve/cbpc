<template>
  <div class="app">
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

  export default {
    components: {
      VHeader,
      VFooter
    },
    data() {
      return {

      };
    },
    mounted() {

    },
    beforeDestroy() {

    },
    methods: {

    }
  };

</script>

<style>
  .app {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }
  .v-content{
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
