<template>
  <div class="wrap">
    <div class="main container">
      <div class="content">
        <v-slider></v-slider>
        <v-topic></v-topic>
        <v-article></v-article>
        <Row :gutter="20">
          <Col :span="12">
          <v-article-text :tabList="textList1"></v-article-text>
          </Col>
          <Col :span="12">
          <v-article-text :tabList="textList2"></v-article-text>
          </Col>
        </Row>
        <Row :gutter="20">
          <Col :span="18">
          <v-topic></v-topic>
          </Col>
          <Col :span="6">
          <div class="e-paper">
            <a>电子报</a>
          </div>
          </Col>
        </Row>
        <v-other></v-other>
      </div>
      <aside class="sidebar">
        <w-image></w-image>
        <w-tab-text></w-tab-text>
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
  import VSlider from '../components/Home/VSlider.vue';
  import VTopic from '../components/Home/VTopic.vue';
  import VArticle from '../components/Home/VArticle.vue';
  import VArticleText from '../components/Home/VArticleText.vue';
  import VOther from '../components/Home/VOther.vue';

  import WImage from '../components/Widget/WImage.vue';
  import WTabText from '../components/Widget/WTabText.vue';
  import WText from '../components/Widget/WText.vue';
  import WThumb from '../components/Widget/WThumb.vue';

  import SubMenu from '../components/Home/submenu.vue';

  export default {
    components: {
      SubMenu,
      VSlider,
      VTopic,
      VArticle,
      VArticleText,
      VOther,

      WImage,
      WTabText,
      WText,
      WThumb
    },
    data() {
      return {
        textList1: ['党建', '工会', '团委'],
        textList2: ['前沿', '安全', '质量', '成本', '职教'],
      }
    }
  };

</script>

<style scoped lang="less">
  .e-paper {
    width: 100%;
    height: 200px;
    background: #4285F4;
    text-decoration: none;
    font-size: 15pt;
    font-weight: 100;
    display: flex;
    align-items: center;
    justify-content: center;
    a {
      color: #fff;
    }
  }

</style>
