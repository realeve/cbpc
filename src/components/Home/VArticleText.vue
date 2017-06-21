<template>
  <div class="sec-panel main-list">
    <div class="sec-panel-head">
      <Tabs value="name1">
        <Tab-pane v-for="tabname of tabList" :label="tabname" :name="tabname" :key="tabname">
          <ul class="post-list">
            <li v-for="(item,i) of articleList" class="list-item" :key="item">
              <span class="date pull-right">{{item.date}}</span>
              <a :href="item.url.article">[{{tabname}}]{{item.title}}</a>
            </li>
          </ul>
        </Tab-pane>
      </Tabs>
    </div>
  </div>
</template>
<script>
  import VArticleTextList from './VArticleTextList.vue';
  export default {
    props:['tabList'],
    components: {
      VArticleTextList
    },
    data() {
      return {
        articleList: [],
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
          date: '6月9日',
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
  .list-item {
    padding-left:10px;
    a {
      width: 80%;
    }
  }

</style>
