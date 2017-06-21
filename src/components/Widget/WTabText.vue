<template>
  <div class="widget widget_views">
    <tab-text :data="data"></tab-text>
  </div>
</template>

<script>
  import TabText from './TabText.vue';
  export default {
    components:{
      TabText
    },
    props: ['data']
  };

</script>

<style scoped lang="less">


</style>
