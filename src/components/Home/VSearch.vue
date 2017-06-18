<template>
    <div class="sec-panel main-list">
        <div class="sec-panel-head">
            <h1>搜索：{{keyword}}</h1>
        </div>
        <template>
            <div v-if="nodata" class="article-list">
                <p class="nodata">抱歉，你搜索的内容未找到，请尝试使用其他关键词搜索。</p>
            </div>
            <v-article-list v-else :loadMore="false" :article="articleList"></v-article-list>
        </template>
        <div v-if="!nodata && keyword!=''" class="page clearfix">
            <Page :total="100" show-elevator></Page>
        </div>
    </div>
</template>
<script>
    import VArticleList from './VArticleList.vue';
    export default {
        components: {
            VArticleList
        },
        data() {
            return {
                articleList: []
            };
        },
        computed: {
            keyword() {
                let params = this.$route.params;
                if (Reflect.get(params, 'key')) {
                    return params.key;
                }
                return '';
            },
            nodata(){
                return this.articleList.length == 0;
            }
        },
        methods: {
            getArticleList() {
                // 随机出现搜索不到结果
                if(Math.random()<0.5){
                    this.articleList = [];
                    return;
                }

                let data = {
                    category: '行业动态',
                    url: {
                        category: '#',
                        author: '#',
                        article: '#detail/1',
                        dpt: '#',
                    },
                    img: '/static/img/news.jpg',
                    title: '京东无人机可把一吨货物送到偏远农村，未来要覆盖中国10个省份',
                    desc: '京东目前正在研发6种不同的送货无人机，电池的续航能力依然是困扰发展的重要因素',
                    dpt: '技术质量部',
                    author: '倪震',
                    date: '2017年6月9日',
                    readNum: '82'
                };
                for (let i = 0; i < 8; i++) {
                    this.articleList.push(data);
                }
            }
        },
        created() {
            this.getArticleList();
        }
    };
</script>

<style scoped lang="less">
    .page {
        display: block;
        text-align: center;
        margin-top: 10px;
        padding-bottom: 20px;
        display: flex;
        justify-content: center;
    }
    .nodata{
        padding: 20px 0 30px;
        font-size: 14px;
    }
</style>