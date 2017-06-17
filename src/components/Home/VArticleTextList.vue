<template>
    <div class="sec-panel-body">
        <ul class="post-list">
            <li v-for="(item,i) of article" class="list-item" :key="item">
                <span class="date pull-right">{{item.date}}</span>
                <a :href="item.url.article">{{i+1}}.{{item.title}}</a>
            </li>
        </ul>
    </div>

</template>
<script>
    export default {
        props: ['article']
    };
</script>

<style scoped lang="less">
    .list-item{
        font-size: 14px;
    }
</style>