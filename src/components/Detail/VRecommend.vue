<template>
    <div>
        <h3 class="entry-related-title">相关推荐</h3>
        <Row class="entry-related-img p-list">
            <Col v-for="i in 6" :xs="12" :md="8" :sm="12" class="p-item" :key="i">
                <div class="p-item-wrap"><a class="thumb" href="#detail/1">
                    <img class="thumb" src="/static/img/s1.jpg" width="480" height="300"></a>
                    <h2 class="title">
                        <a href="#detail/1">大众要投资建设覆盖全美的充电站网络，特斯拉也没闲着</a>
                    </h2>
                </div>
            </Col>
        </Row>
    </div>
</template>
<script>
    export default {

    };
</script>

<style scoped lang="less">
    .thumb{
        display: inline;
    }
</style>