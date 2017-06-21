<template>
  <div class="widget widget_views">
    <h3 class="widget-title">{{data.category}}</h3>
    <ul>
      <li v-for="item of data.data"><a :href="item.url">{{item.title}}</a></li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: ['data']
  };

</script>

<style scoped lang="less">


</style>
