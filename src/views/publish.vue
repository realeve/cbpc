<template>
 <div class="wrap">
    <div class="main container">
      <div class="content">
        <v-publish></v-publish>
      </div>
    </div>
  </div>
</template>
<script>
  import '../assets/css/main.css';
  import VPublish from '../components/Publish';

  import {
    mapActions,
    mapState
  } from 'vuex';

  export default {
    components: {
      VPublish
    },
    computed: {
      ...mapState(['home'])
    },
  };

</script>
<style scoped>


</style>
