<template>
  <div class="entry-head">
    <h1 class="entry-title">{{article.title}}</h1>
    <div class="entry-info">
      <div class="author-wrapper">
        <div v-for="author in article.author" :key="author" class="author">
          <a class="nickname dpt" :href="'#search/'+author.dpt">{{author.dpt}}</a>
          <span class="dot">•</span>
          <a class="nickname" :href="'#search/'+author.name">{{author.name}}</a>
        </div>
      </div>
      <span>{{article.date}}</span>
      <span class="dot">•</span>
      <a :href="'#search/'+article.category" rel="category tag">{{article.category}}</a> <span class="dot">•</span>
      <span>阅读 {{article.readNum}}</span>
    </div>
  </div>
</template>
<script>
  export default {
    props: ['article']
  };

</script>

<style scoped lang="less">
  .thumb {
    display: inline;
  }

  .author-wrapper {
    display: flex;
    flex-direction: row;
    .dot {
      margin: 0 1px;
    }
    .author:nth-child(even) {
      padding-left: 20px;
    }
  }

</style>
