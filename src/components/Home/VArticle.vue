<template>
    <div class="sec-panel main-list">
        <div class="sec-panel-head">
            <ul class="list tabs">
                <li class="tab active"><a href="javascript:;">最新文章</a></li>
                <li class="tab"><a href="javascript:;">产品设计</a></li>
                <li class="tab"><a href="javascript:;">创业分享</a></li>
                <li class="tab"><a href="javascript:;">行业动态</a></li>
                <li class="tab"><a href="javascript:;">用户体验</a></li>
            </ul>
        </div>
        <v-article-list :loadMore="true" :article="articleList"></v-article-list>     
    </div>
</template>
<script>
    import VArticleList from './VArticleList.vue';
    export default {
        components:{
            VArticleList
        },
        data(){
            return{
                articleList:[]
            };
        },
        methods:{
            getArticleList(){
                let data = {
                    category:'行业动态',
                    url:{
                        category:'#',
                        author:'#',
                        article:'#detail/1',
                        dpt:'#',
                    },
                    img:'/static/img/news.jpg',
                    title:'京东无人机可把一吨货物送到偏远农村，未来要覆盖中国10个省份',
                    desc:'京东目前正在研发6种不同的送货无人机，电池的续航能力依然是困扰发展的重要因素',
                    dpt:'技术质量部',
                    author:'倪震',
                    date:'2017年6月9日',
                    readNum:'82'
                };
                for(let i=0;i<8;i++){
                    this.articleList.push(data);
                }
            }
        },
        created(){
            this.getArticleList();
        }
    };
</script>

<style scoped lang="less">

</style>