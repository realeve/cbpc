<template>
    <div class="entry-head">
        <h1 class="entry-title">{{article.title}}</h1>
        <div class="entry-info">
            <a class="nickname" :href="article.url.dpt">{{article.dpt}}</a>
            <span class="dot">•</span>
            <a class="nickname" :href="article.url.author">{{article.author}}</a>
            <span class="dot">•</span>
            <span>{{article.date}}</span>
            <span class="dot">•</span>
            <a :href="article.url.category" rel="category tag">{{article.category}}</a> <span class="dot">•</span>
            <span>阅读 {{article.readNum}}</span>
        </div>
    </div>
</template>
<script>
    export default {
        props:['article']
    };
</script>

<style scoped lang="less">
    .thumb {
        display: inline;
    }
</style>