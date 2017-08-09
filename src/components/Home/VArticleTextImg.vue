<template>
  <div class="sec-panel main-list">
    <div class="sec-panel-head">
      <div class="sec-panel-body">
        <Row>
          <Col :md="6">
            <img src="/static/img/s1.jpg" alt="" width="100%" height="210px">
          </Col>
          <Col :md="18">
          <ul class="post-list">
            <li v-for="(item,i) of article.data" class="list-item" :key="item">
              <span class="date pull-right">{{item.date}}</span>
              <a :href="item.url">{{i+1}}.{{item.title}}</a>
            </li>
            <li class="load-more-wrap  load-more">
              <a :href="article.url">点击查看更多</a>
            </li>
          </ul>
          </Col>
        </Row>
      </div>
    </div>
  </div>

</template>
<script>
  export default {
    props: ['article']
  };

</script>

<style scoped lang="less">
  .list-item {
    font-size: 14px;
  }

  .sec-panel-body {
    padding-left: 0;
    padding-right: 0;
    padding-bottom:0;
  }

  .load-more{
    padding:8px;
  }

</style>
