<template>
  <Tabs :value="curTab">
    <Tab-pane v-for="(tab,i) of data" :label="tab.category" :name="'name'+i" :key="tab.category">
      <ul class="post-list">
        <li v-for="(item,i) of tab.data" class="list-item" :key="item">
          <span class="date pull-right">{{item.date}}</span>
          <a :href="item.url">{{item.title}}</a>
        </li>
        <li class="list-item load-more">
          <a :href="tab.url">点击查看更多</a>
        </li>
      </ul>
    </Tab-pane>
  </Tabs>
</template>

<script>
  export default {
    props: ['data'],
    data(){
      return{
        curTab:'name0'
      }
    },
    mounted(){
      let i = 0;
      setInterval(()=>{
        i++;
        if(i == this.data.length){
          i = 0;
        }
        this.curTab = 'name'+i;
      },10*1000);
    }
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
    margin-bottom: 0;
    &:before{
      border:none;
      background:none;
    }
  }
</style>
