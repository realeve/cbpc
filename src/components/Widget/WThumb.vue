<template>
    <div class="widget widget_lastest_products">
        <h3 class="widget-title">产品设计</h3>
        <Row class="p-list clearfix">
            <Col v-for="i in 8" :xs="24" :md="12"  class="p-item" :key="i">
                <div class="p-item-wrap">
                    <a class="thumb" href="#">
                                <img class="j-lazy" src="/static/img/prod_design.png" width="480" height="300" style="display: inline;"> </a>
                    <h4 class="title">
                        <a href="#">第一次负责从0到1的产品时要注意哪几点？</a>
                    </h4>
                </div>
            </Col>
        </Row>
    </div>
</template>

<script>
    export default {};
</script>

<style scoped lang="less">

</style>