<template>
    <ul class="image-list clearfix">
        <li v-for="(item,i) in article" :key="i" class="col-xs-6 col-md-4 col-sm-6 p-item">
            <div class="p-item-wrap">
                <a class="thumb" :href="item.url.article" target="_blank">
            <img :src="item.img" width="480" height="300" style="display: inline;"></a>
                <h2 class="title">
                    <a :href="item.url.article" target="_blank">{{item.title}}</a>
                </h2>
            </div>
        </li>
    </ul>
</template>
<script>
    export default {
        props: ['article']
    };
</script>

<style scoped lang="less">

</style>