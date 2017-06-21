<template>
  <Tabs value="name0">
    <Tab-pane v-for="(tab,i) of data" :label="tab.category" :name="'name'+i" :key="tab.category">
      <ul class="post-list">
        <li v-for="(item,i) of tab.data" class="list-item" :key="item">
          <span class="date pull-right">{{item.date}}</span>
          <a :href="item.url">{{item.title}}</a>
        </li>
        <div>
          <a class="load-more" :href="tab.url">点击查看更多</a>
        </div>
      </ul>
    </Tab-pane>
  </Tabs>
</template>

<script>
  export default {
    props: ['data']
  };

</script>

<style lang="less" scoped>
  .list-item {
    padding-left: 10px;
    a {
      width: 80%;
    }
  }

  .load-more {
    text-align: center;
    padding: 6px 12px;
  }

</style>
