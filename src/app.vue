<template>
  <div class="app">
    <v-header></v-header>
    <router-view class="v-content"></router-view>
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
</style>
