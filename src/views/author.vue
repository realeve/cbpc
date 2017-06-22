<template>
 <div class="wrap">
    <div class="main container">
      <div class="content">
        <v-author></v-author>
      </div>
      <aside class="sidebar">
        <w-image></w-image>
        <w-tab-text :data="home.noticeData"/>
        <w-thumb :data="home.popularData"/>
      </aside>
    </div>
  </div>
</template>
<script>
  import '../assets/css/main.css';
  import VAuthor from '../components/Author';

  import WTabText from '../components/Widget/WTabText.vue';

  import WImage from '../components/Widget/WImage.vue';
  import WThumb from '../components/Widget/WThumb.vue';

  import {
    mapActions,
    mapState
  } from 'vuex';

  export default {
    components: {
      VAuthor,
      WImage,
      WThumb,
      WTabText
    },
    computed: {
      ...mapState(['home'])
    },
  };

</script>
<style scoped>


</style>
