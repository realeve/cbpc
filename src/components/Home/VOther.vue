<template>
    <div class="container hidden-xs j-partner">
        <div class="sec-panel topic-recommend">
            <div class="sec-panel-head">
                <h2>友商<small>兄弟单位啦</small> <a href="#" target="_blank" class="more">联系我们</a></h2>
            </div>
            <div class="sec-panel-body">
                <ul class="list list-partner">
                    <li v-for="i in 8"><img style="width:152px" src="/static/image/logo.png"></li>
                </ul>
            </div>
            <div class="sec-panel-head">
                <h2>常用系统 <a href="#" target="_blank" class="more">申请加入</a></h2>
            </div>
            <div class="sec-panel-body">
                <div class="list list-links">
                    <a v-for="i in 8" target="_blank" href="#">OA系统</a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {

    };
</script>

<style scoped lang="less">

</style>