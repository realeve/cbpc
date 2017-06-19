<template>
    <div>
        <div v-if="type!='text'" class="banner banner-white">
            <div class="banner-inner">
                <h1>文苑飞歌【banner底图】</h1>
                <p>该主题的一些不可描述</p>
            </div>
        </div>
        <div v-else>
            <div class="special-head">
                <h1 class="special-title">文苑飞歌【没有底图样式】</h1>
                <p>该主题的一些不可描述</p>
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
        background-image: url('/static/img/topbar.jpg')
    }

    .special-head {
        padding: 50px 50px 30px 50px;
    }
</style>