<template>
  <div class="wrap">
    <div class="main container">
      <div class="content">
        <v-article :article="article"></v-article>
      </div>
      <aside class="sidebar">
        <v-author></v-author>
        <Affix offset-top="62">
          <w-thumb></w-thumb>
          <w-text></w-text>
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

  // import axios from 'axios';

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
    created() {
      // axios.get('http://localhost:8080/static/data/article.json').then(res=>{
      //    console.log(res.data);
      //    this.article = res.data;
      // });
      util.ajax.get('/article.json').then(res => {
        this.article = res.data;
      });
    }
  };

</script>
