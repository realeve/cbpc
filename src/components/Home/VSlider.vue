<template>
    <div class="slider-wrap clearfix">
        <div class="main-slider flexslider pull-left">
            <Carousel autoplay v-model="curIdx">
                <Carousel-item v-for="item of slideData" :key="item">
                    <div class="slide-item">
                        <a :href="item.url">
                            <img :src="item.img">
                        </a>
                        <h3 class="slide-title">
                            <a :href="item.url">{{item.title}}</a>
                        </h3>
                    </div>
                </Carousel-item>
            </Carousel>
        </div>

        <ul class="feature-post pull-right">
            <li v-for="i in 3">
                <a href="#special">
                    <img src="/static/img/ux-1.png">
                </a>
                <span>要闻{{i}}</span>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                curIdx:0,
                slideData:[{
                    title:'这是头条标题1',
                    img:'/static/img/s1.jpg',
                    url:'#detail/1'
                },{
                    title:'这是头条标题2',
                    img:'/static/img/s2.jpg',
                    url:'#detail/2'
                },{
                    title:'这是头条标题3',
                    img:'/static/img/s3.jpg',
                    url:'#detail/3'
                }]
            };
        }
    };
</script>

<style scoped lang="less">
    .slide-item {
        img {
            width: 100%;
        }
        .slide-title{
            background:rgba(0,0,0,0.6);
        }
    }
    // .slider-wrap{
    //     display:flex;
    //     flex-direction: row;
    // }
</style>