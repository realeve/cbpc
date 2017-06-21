<template>
  <div class="widget widget_lastest_products">
    <h3 class="widget-title">{{data.category}}</h3>
    <Row class="p-list clearfix">
      <Col v-for="item of data.data" :xs="24" :md="12" class="p-item" :key="item.url">
      <div class="p-item-wrap">
        <a class="thumb" :href="item.url">
          <img :src="item.img" width="480" height="300" style="display: inline;"> </a>
        <h4 class="title">
          <a :href="item.url">{{item.title}}</a>
        </h4>
      </div>
      </Col>
    </Row>
    <div>
      <a class="load-more" :href="data.url">点击查看更多</a>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['data']
  };

</script>

<style lang="less" scoped>
  .load-more {
    text-align: center;
    padding: 6px 12px;
  }

</style>
