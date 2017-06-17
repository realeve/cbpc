<template>
    <div class="wrap">
        <v-topbg :type="type"></v-topbg>
        <div class="main container">
            <div class="content sec-panel">
                <v-article-list :loadMore="false" :article="articleList"></v-article-list>
                <div class="page clearfix">
                    <Page :total="100" show-elevator></Page>
                </div>
            </div>
            <aside class="sidebar">
                <w-image></w-image>
                <w-text></w-text>
                <w-thumb></w-thumb>
            </aside>
        </div>
    </div>
</template>
<script>
    import '../assets/css/main.css';
    import VTopbg from '../components/List/VTopbg.vue';

    import VArticleList from '../components/Home/VArticleList.vue';

    import WImage from '../components/Widget/WImage.vue';
    import WText from '../components/Widget/WText.vue';
    import WThumb from '../components/Widget/WThumb.vue';

    export default {
        components: {
            VTopbg,
            VArticleList,

            WImage,
            WText,
            WThumb
        },
        data(){
            return{
                type:'text',
                articleList:[]
            };
        },
        methods:{
            getArticleList(){
                let data = {
                    category:'行业动态',
                    img:'/static/image/news.jpg',
                    url:{
                        category:'#',
                        author:'#',
                        article:'#',
                        dpt:'#',
                    },
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
            },
            getListType(){
               let type = this.$route.params.type;
               this.type = (type=='1')? 'text':'image';
               console.log(this.type);
            }
        },
        mounted(){
            this.getArticleList();
            this.getListType();
        }
    };
</script>
<style scoped>
    .page {
        display: block;
        text-align: center;
        margin-top: 10px;
        padding-bottom: 20px;
        display:flex;
        justify-content: center;
    }
</style>