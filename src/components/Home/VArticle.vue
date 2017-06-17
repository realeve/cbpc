<template>
    <div class="sec-panel main-list">
        <div class="sec-panel-head">
            <ul class="list tabs">
                <li class="tab active"><a href="javascript:;">最新文章</a></li>
                <li class="tab"><a href="javascript:;">产品设计</a></li>
                <li class="tab"><a href="javascript:;">创业分享</a></li>
                <li class="tab"><a href="javascript:;">行业动态</a></li>
                <li class="tab"><a href="javascript:;">用户体验</a></li>
            </ul>
        </div>
        <ul class="article-list tab-list active">
            <li v-for="i in 5" class="item">
                <div class="item-img">
                    <a href="#" target="_blank">
                        <img class="j-lazy" src="/static/image/news.jpg" width="480" height="300" style="display: inline;">
                    </a>
                    <a class="item-category" href="#" target="_blank">行业动态</a>
                </div>
                <div class="item-content">
                    <h2 class="item-title"><a href="#" target="_blank">京东无人机可把一吨货物送到偏远农村，未来要覆盖中国10个省份</a></h2>
                    <div class="item-excerpt">
                        <p>京东目前正在研发6种不同的送货无人机，电池的续航能力依然是困扰发展的重要因素</p>
                    </div>
                    <div class="item-meta">
                        <div class="item-meta-li author">
                            <a data-user="1" target="_blank" href="#" class="avatar">
                                            <img src="/static/image/user.jpg" class="func-um_user gravatar avatar avatar-60 um-avatar um-avatar-uploaded" width="60" height="60"></a>
                            <a class="nickname" href="#" target="_blank">作者姓名</a>
                        </div>
                        <span class="item-meta-li date">2017年6月9日</span>
                        <span class="item-meta-li views" title="阅读数"><icon name="eye"></icon><i class="fa fa-eye"></i> <span class="data">82</span></span>
                    </div>
                </div>
            </li>
            <li class="load-more-wrap">
                <a class="load-more" href="javascript:;">点击查看更多</a>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {

    };
</script>

<style scoped lang="less">

</style>