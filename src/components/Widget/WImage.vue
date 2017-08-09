<template>
    <div class="widget widget_image_ad">
        <a href="#" target="_blank"  rel="nofollow me noopener noreferrer">广告位招租</a>
    </div>
</template>

<script>
    export default {
    };
</script>

<style scoped lang="less">
    .thinner {
        font-weight: 100;
    }

    .widget_image_ad {
        width: 100%;
        min-height: 240px;
        background: url('../../../static/img/tmp/adv_special.png') top center no-repeat;
    }

    .widget_image_ad a {
        width: 100%;
        min-height: 240px;
        /*background: #4285F4;*/
        color: #fff;
        text-decoration: none;
        font-size: 20pt;
        .thinner;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>