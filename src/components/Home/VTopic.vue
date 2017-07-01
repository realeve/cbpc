<template>
  <div class="sec-panel topic-recommend">
    <div class="sec-panel-head">
      <h2>专题介绍<a href="#special" class="more">全部专题</a></h2>
    </div>
    <div class="sec-panel-body">
      <ul class="list topic-list">
        <li v-for="item of data" class="topic" :key="item.url">
          <div class="topic-wrap" @click="redirect(item.url)">
            <div class="cover-container">
              <img :alt="item.title" :src="item.img">
            </div>
            <span>{{item.title}}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    props: ['data'],
    methods: {
      redirect(path) {
        this.$router.push(path.replace('#', ''));
      }
    }
  };

</script>

<style scoped lang="less">


</style>
