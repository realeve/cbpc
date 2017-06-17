<template>
    <article class="post type-post status-publish format-standard has-post-thumbnail hentry">
        <div class="entry">
            <v-article-head :article="article"></v-article-head>
            <div class="entry-content clearfix" v-html="article.content"> </div>
            <v-tag :tags="article.tags" :zan="article.zan"></v-tag>
            <v-recommend></v-recommend>
        </div>
        <!-- .comments-area -->
        </div>
    </article>
</template>
<script>
    import VArticleHead from './VArticleHead';
    import VRecommend from './VRecommend';
    import VTag from './VTag';

    export default {
        props:['article'],
        components: {
            VRecommend,
            VArticleHead,
            VTag
        },
    };
</script>

<style scoped lang="less">

</style>