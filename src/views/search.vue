<template>
  <div class="wrap">
    <div class="main container">
      <div class="content">
        <v-search></v-search>
      </div>
      <aside class="sidebar">
        <w-image></w-image>
        <w-thumb :data="home.popularData" />
        <Affix :offset-top="62">
          <w-text :data="home.quickData"></w-text>
        </Affix>
      </aside>
    </div>
  </div>
</template>
<script>
  import '../assets/css/main.css';
  import VSearch from '../components/Home/VSearch.vue';
  import WImage from '../components/Widget/WImage.vue';
  import WText from '../components/Widget/WText.vue';
  import WThumb from '../components/Widget/WThumb.vue';

  // import qs from 'querystring';
  // console.log(qs.parse(window.location.href.split('?')[1]));

  import {
    mapState
  } from 'vuex';

  export default {
    components: {
      VSearch,
      WImage,
      WText,
      WThumb
    },
    computed: {
      ...mapState(['home'])
    }
  };

</script>
