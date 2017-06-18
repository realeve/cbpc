<template>
    <div class="wrap">
        <v-topbg :type="type"></v-topbg>
        <div class="main container">

        <div class="special-wrap">
            <div class="special-list clearfix">
                <div v-for="i in 8" class="col-md-6 col-xs-12 special-item-wrap" :key="i">
                   <v-card></v-card>                     
                </div>
            </div>
        </div>
        </div>
    </div>
</template>
<script>
    import '../assets/css/main.css';
    import VTopbg from '../components/List/VTopbg.vue';
    import VCard from '../components/List/VCard.vue';
    

    export default {
        components: {
            VTopbg,
            VCard
        },
        data() {
            return {
                type: 'text',
                articleList: []
            };
        },
        methods: {
            getArticleList() {
                let data = {
                    category: '行业动态',
                    img: '/static/img/news.jpg',
                    url: {
                        category: '#',
                        author: '#',
                        article: '#',
                        dpt: '#',
                    },
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
        mounted() {
            this.getArticleList();
        }
    };
</script>
<style scoped>
    .page {
        display: block;
        text-align: center;
        margin-top: 10px;
        padding-bottom: 20px;
        display: flex;
        justify-content: center;
    }
</style>