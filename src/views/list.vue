<template>
  <div class="wrap">
    <v-topbg v-if="type!='content'" :type="type"></v-topbg>
    <div class="main container">
      <div class="content sec-panel">
        <div class="sec-panel-head" v-if="type=='content'">
          <h1>产品设计</h1>
        </div>
        <template v-if="articleType == 'image'">
          <v-article-list :loadMore="false" :article="articleList"></v-article-list>
        </template>
        <div v-else-if="articleType == 'text'">
          <v-article-text-list :article="articleList"></v-article-text-list>
        </div>
        <div v-else>
          <v-article-thumb-list :article="articleList"></v-article-thumb-list>
        </div>
        <div class="page clearfix">
          <Page :total="100" show-elevator></Page>
        </div>
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
  import VTopbg from '../components/List/VTopbg.vue';

  import VArticleList from '../components/Home/VArticleList.vue';
  import VArticleTextList from '../components/Home/VArticleTextList.vue';
  import VArticleThumbList from '../components/Home/VArticleThumbList.vue';
  import WTabText from '../components/Widget/WTabText.vue';

  import WImage from '../components/Widget/WImage.vue';
  import WText from '../components/Widget/WText.vue';
  import WThumb from '../components/Widget/WThumb.vue';

  import {
    mapActions,
    mapState
  } from 'vuex';

  export default {
    components: {
      VTopbg,
      VArticleList,
      VArticleTextList,
      VArticleThumbList,
      WImage,
      WText,
      WThumb,
      WTabText
    },
    data() {
      return {
        type: 'text',
        articleType: 'image',
        articleList: []
      };
    },
    computed: {
      curType() {
        return this.$route.params.type;
      },
      ...mapState(['home'])
    },
    watch: {
      curType() {
        this.init();
      }
    },
    methods: {
      getArticleList() {
        let data = {
          category: '行业动态',
          img: '/static/img/news.jpg',
          url: {
            article: '#detail/1',
            dpt: '#',
          },
          title: '京东无人机可把一吨货物送到偏远农村，未来要覆盖中国10个省份',
          desc: '京东目前正在研发6种不同的送货无人机，电池的续航能力依然是困扰发展的重要因素',
          dpt: '信息技术部',
          author: '王狗蛋',
          date: '2017年6月9日',
          readNum: '82'
        };
        for (let i = 0; i < 8; i++) {
          this.articleList.push(data);
        }
      },
      getListType() {
        switch (this.curType) {
          case '1':
            this.type = 'text';
            this.articleType = 'image';
            break;
          case '2':
            this.type = 'image';
            this.articleType = 'image';
            break;
          case '3':
            this.type = 'image';
            this.articleType = 'text';
            break;
          case '4':
            this.type = 'content';
            this.articleType = 'image';
            break;
          case '5':
            this.type = 'image';
            this.articleType = 'thumb';
            break;
        }
      },
      init() {
        this.getArticleList();
        this.getListType();
      }
    },
    mounted() {
      this.init();
    }
  };

</script>
<style scoped>
  .page {
    display: block;
    text-align: center;
    margin-top: 10px;
    padding-bottom: 20px;
    display: flex;
    justify-content: center;
  }

  .content {
    padding: 0 15px;
  }

  .sec-panel-body {
    padding: 10px 0;
  }

</style>
