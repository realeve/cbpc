<template>
    <div class="sec-panel topic-recommend">
        <div class="sec-panel-head">
            <h2>专题介绍<a href="#special" class="more">全部专题</a></h2>
        </div>
        <div class="sec-panel-body">
            <ul class="list topic-list">
                <li v-for="item of data" class="topic" :key="item.url">
                    <a class="topic-wrap" :href="item.url">
                        <div class="cover-container">
                            <img :alt="item.title" :src="item.img">
                        </div>
                        <span>{{item.title}}</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
        props:['data']
    };
</script>

<style scoped lang="less">

</style>