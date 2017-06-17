<template>
    <div class="slider-wrap clearfix">
        <div class="main-slider flexslider pull-left">
            <div class="flex-viewport" style="overflow: hidden; position: relative;">
                <ul class="slides" style="width: 1000%; margin-left: -670px;">
                    <li v-for="i in 3" class="slide-item clone" aria-hidden="true" style="width: 670px; float: left; display: block;">
                        <a href="#" target="_blank">
                            <img src="/static/image/slide.jpg">
                        </a>
                        <h3 class="slide-title">
                            <a href="#" target="_blank">这是幻灯滑块的标题{{i}}</a>
                        </h3>
                    </li>
                </ul>
            </div>
            <ol class="flex-control-nav flex-control-paging">
                <li><a class="flex-active">1</a></li>
                <li><a class="">2</a></li>
                <li><a class="">3</a></li>
            </ol>
            <ul class="flex-direction-nav">
                <li class="flex-nav-prev"><a class="flex-prev" href="#">Previous</a></li>
                <li class="flex-nav-next"><a class="flex-next" href="#">Next</a></li>
            </ul>
        </div>

        <ul class="feature-post pull-right">
            <li v-for="i in 3">
                <a href="#" target="_blank">
                                    <img src="/static/image/ux-1.png">
                                </a>
                <span>前端用户中心</span>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {

    };
</script>

<style scoped lang="less">

</style>