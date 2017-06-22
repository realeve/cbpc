<template>
  <div class="wrap">
    <div class="main container">
      <div class="content">
        <v-article :article="article"></v-article>
      </div>
      <aside class="sidebar">
        <v-author></v-author>
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
  import VArticle from '../components/Detail/VArticleDetail.vue';
  import VAuthor from '../components/Detail/VAuthor.vue';

  import WText from '../components/Widget/WText.vue';
  import WThumb from '../components/Widget/WThumb.vue';
  import util from '../libs/util.js';

  import {
    mapActions,
    mapState
  } from 'vuex';

  export default {
    components: {
      VArticle,
      WText,
      WThumb,
      VAuthor
    },
    data() {
      return {
        article: {
          'title': '',
          'author': '',
          'url': {
            'author': '#',
            'dpt': '#',
            'category': '#'
          },
          'date': '',
          'category': '',
          'dpt': '',
          'tags': [{
            'title': '',
            'url': '#'
          }],
          'readNum': '',
          'zan': '',
          'content': ''
        }
      };
    },
    computed: {
      ...mapState(['home'])
    },
    watch: {
      curType() {
        this.init();
      }
    },
    created() {
      util.ajax.get('/article.json').then(res => {
        this.article = res.data;
      });
    }
  };

</script>
