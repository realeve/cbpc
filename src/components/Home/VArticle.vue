<template>
  <div class="sec-panel main-list">
    <div class="sec-panel-head">
      <Tabs value="name1">
        <Tab-pane :label="label" name="name1">
          <v-article-list :loadMore="true" :article="articleList"></v-article-list>
        </Tab-pane>
        <Tab-pane label="新闻在线" name="name2">
          <v-article-list :loadMore="true" :article="articleList"></v-article-list>
        </Tab-pane>
        <Tab-pane label="企业文化" name="name3">
          <v-article-list :loadMore="true" :article="articleList"></v-article-list>
        </Tab-pane>
        <Tab-pane label="学习研究" name="name4">
          <v-article-list :loadMore="true" :article="articleList"></v-article-list>
        </Tab-pane>
      </Tabs>
    </div>
  </div>
</template>
<script>
  import VArticleList from './VArticleList.vue';
  export default {
    components: {
      VArticleList
    },
    data() {
      return {
        articleList: [],
        label: (h) => {
          return h('div', [
            h('span', '最新文章'),
            h('Badge', {
              props: {
                count: 8
              }
            })
          ])
        }
      };
    },
    methods: {
      getArticleList() {
        let data = {
          category: '行业动态',
          url: {
            category: '#',
            author: '#',
            article: '#detail/1',
            dpt: '#',
          },
          img: '/static/img/news.jpg',
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
      }
    },
    created() {
      this.getArticleList();
    }
  };

</script>

<style lang="less">

</style>
