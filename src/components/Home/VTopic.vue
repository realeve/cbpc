<template>
    <div class="sec-panel topic-recommend">
        <div class="sec-panel-head">
            <h2>专题介绍 <small>专题模块标题旁边的描述文字</small> <a href="#" target="_blank" class="more">全部专题</a></h2>
        </div>
        <div class="sec-panel-body">
            <ul class="list topic-list">
                <li v-for="i in 4" class="topic">
                    <a class="topic-wrap" href="#" target="_blank">
                        <div class="cover-container">
                            <img src="/static/image/topic.png">
                        </div>
                        <span>专题{{i}}</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {

    };
</script>

<style scoped lang="less">

</style>