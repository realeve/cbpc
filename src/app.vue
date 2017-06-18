<template>
  <div>
    <v-header></v-header>
    <router-view :style="{'min-height':minHeight}"></router-view>
    <v-footer></v-footer>
  </div>
</template>
<script>
  import './assets/css/navbar.css';
  import VHeader from './components/VHeader';
  import VFooter from './components/VFooter';

  export default {
    components: {
      VHeader,
      VFooter
    },
    computed: {
      minHeight() {
        let topHeight = 62;
        let bottomHeight = 124;
        return (window.outerHeight - topHeight - bottomHeight - 4) + 'px';
      }
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
  .wrap {
    padding-top: 62px;
    overflow: hidden;
  }

  .main {
    position: relative;
    padding-top: 20px;
  }

  .container {
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }

  @media (min-width: 768px) {
    .container {
      width: 750px;
    }
  }

  @media (min-width: 992px) {
    .container {
      width: 970px;
    }
  }

  @media (min-width: 1200px) {
    .container {
      width: 1170px;
    }
  }

.clearfix:before,
.clearfix:after{
  display: table;
  content: " ";
}
.clearfix:after {
  clear: both;
}
.pull-right {
  float: right !important;
}
.pull-left {
  float: left !important;
}
</style>
