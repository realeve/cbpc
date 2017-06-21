<template>
  <div class="sec-panel main-list">
    <div class="sec-panel-head">
      <tab-text :data="data"></tab-text>
    </div>
  </div>
</template>
<script>
  import VArticleTextList from './VArticleTextList.vue';
  import TabText from '../Widget/TabText.vue';
  export default {
    props:['data'],
    components: {
      VArticleTextList,
      TabText
    }
  };

</script>

