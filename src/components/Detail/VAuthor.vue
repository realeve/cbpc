<template>
    <div class="widget widget_profile"><img src="/static/img/s3.jpg" alt="">
        <div class="avatar-wrap">
            <a target="_blank" href="#" class="avatar-link"><img src="/static/img/user.jpg" class="func-um_user gravatar avatar avatar-120 um-avatar um-avatar-uploaded" width="120" height="120" alt="Lomu"></a></div>
        <div class="profile-info">
            <p><span class="author-name">倪震</span><span class="author-title">技术质量部</span></p>
            <p class="author-description">XX工程师，先后就职于企业文化部、企管信息部，目前主要负责XX工作。</p>
        </div>
        <div class="profile-posts">
            <h3 class="widget-title"><span>最近文章</span></h3>
            <ul>
                <li v-for="i in 5"><a href="#/detail/2">京东无人机可把一吨货物送到偏远农村，未来要覆盖中国10个省份</a></li>
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