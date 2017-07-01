<template>
  <div class="wrap">
    <div class="main container">
      <div class="content">
        <v-slider :slider="home.sliderData" :special="home.specialData" />
        <v-topic :data="home.topicData" />
        <v-article :data="home.articleData" />
        <Row :gutter="20">
          <Col :md="12" :xs="24">
          <v-article-text :data="home.articleTextData" />
          </Col>
          <Col :md="12" :xs="24">
          <v-article-text :data="home.articleTextData2" />
          </Col>
        </Row>
        <Row :gutter="20">
          <Col :md="18" :xs="24">
          <v-topic :data="home.topicData" />
          </Col>
          <Col :md="6" :xs="24">
          <div class="e-paper">
            <a>电子报</a>
          </div>
          </Col>
        </Row>
        <v-other/>
      </div>
      <aside class="sidebar">
        <w-image></w-image>
        <w-tab-text :data="home.noticeData"/>
        <w-thumb :data="home.popularData"/>
        <Affix :offset-top="62">
          <w-text :data="home.quickData"></w-text>
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

  import {
    mapState
  } from 'vuex';

  export default {
    components: {
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
    computed: {
      ...mapState(['home'])
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

  @media (max-width: 767px) {
    .e-paper {
      display: none !important;
    }
  }

  @media (max-width: 991px) {
    .e-paper {
      margin-bottom: 20px;
    }
  }

</style>
