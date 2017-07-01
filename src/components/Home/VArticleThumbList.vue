<template>
    <Row class="sec-panel-body image-list">
        <Col v-for="(item,i) in article" :key="i" :xs="12" :md="8" :sm="12"  class="p-item">
            <div class="p-item-wrap">
                <a class="thumb" :href="item.url.article" target="_blank"  rel="nofollow me noopener noreferrer">
                    <img :alt="item.title" :src="item.img" width="480" height="300" style="display: inline;">
                </a>
                <h2 class="title">
                    <a :href="item.url.article" target="_blank"  rel="nofollow me noopener noreferrer">{{item.title}}</a>
                </h2>
            </div>
        </Col>
    </Row>
</template>
<script>
    export default {
        props: ['article']
    };
</script>

<style scoped lang="less">

</style>