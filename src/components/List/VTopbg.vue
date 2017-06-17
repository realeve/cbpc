<template>
    <div>
        <div v-if="type!='text'" class="banner banner-white">
            <div class="banner-inner">
                <h1>文苑飞歌</h1>
                <p>该主题的一些描述</p>
            </div>
        </div>
        <div v-else>
            <div class="special-head">
                <h1 class="special-title">文苑飞歌</h1>
                <p>该主题的一些描述</p>
            </div>
        </div>
    </div>

</template>
<script>
    export default {
        props: ['type']
    };
</script>

<style scoped lang="less">
    .banner {
        height: 300px;
        background-image: url('/static/image/topbar.jpg')
    }
</style>