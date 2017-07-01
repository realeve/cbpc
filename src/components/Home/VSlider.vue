<template>
    <div class="slider-wrap clearfix">
        <div class="main-slider img-content flexslider pull-left">
            <Carousel autoplay v-model="curIdx">
                <Carousel-item v-for="item of slider" :key="item">
                    <div class="slide-item">
                        <a :href="item.url">
                            <img :src="item.img" :alt="item.title" class="img-content">
                        </a>
                        <h3 class="slide-title">
                            <a :href="item.url">{{item.title}}</a>
                        </h3>
                    </div>
                </Carousel-item>
            </Carousel>
        </div>

        <ul class="feature-post pull-right">
            <li v-for="item of special" :key="item.url">
                <a :href="item.url">
                    <img :alt="item.title" :src="item.img">
                </a>
                <span>{{item.title}}</span>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        props:['slider','special'],
        data() {
            return {
                curIdx:0
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
    @sliderWidth:43px;
    .img-content{
        width:670px;
        height:@sliderWidth*10;
    }
</style>