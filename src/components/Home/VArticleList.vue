<template>
  <ul class="article-list">
    <li v-for="(item,i) in article" class="item" :key="i">
      <div class="item-img">
        <a :href="item.url.article">
                    <img :alt="item.title" :src="item.img" width="480" height="300" style="display: inline;">
                    </a>
        <a class="item-category" :href="item.url.category" target="_blank" rel="nofollow me noopener noreferrer">{{item.category}}</a>
      </div>
      <div class="item-content">
        <h2 class="item-title"><a :href="item.url.article">{{i+1}}.{{item.title}}</a></h2>
        <div class="item-excerpt">
          <p>{{item.desc}}</p>
        </div>
        <div class="item-meta">
          <div class="item-meta-li author">
            <a data-user="1" target="_blank" rel="nofollow me noopener noreferrer" :href="'#search/'+item.dpt">
                            {{item.dpt}}
                        </a>
            <a class="nickname" :href="'#search/'+item.author" target="_blank" rel="nofollow me noopener noreferrer">{{item.author}}</a>
          </div>
          <span class="item-meta-li date">{{item.date}}</span>
          <span class="item-meta-li views" title="阅读数"><icon name="eye"></icon> <span class="data">{{item.readNum}}</span></span>
        </div>
      </div>
    </li>
    <li v-if="loadMore" class="load-more-wrap load-more">
      <a :href="loadMore">点击查看更多</a>
    </li>
  </ul>
</template>
<script>
  // 需要在此对组件增加选择项：载入更多或是分页
  export default {
    props: ['loadMore', 'article']
  };

</script>

<style scoped lang="less">
  .article-list {
    padding: 0;
  }

  .item-excerpt {
    color: #444;
  }

  .article-list .item-meta a {
    color: #666;
  }

</style>
