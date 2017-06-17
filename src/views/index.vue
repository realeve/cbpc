<template>
    <div class="home blog">
        <header class="header">
            <div class="container clearfix">
                <div class="navbar-header">
                    <a class="logo" href="#">CBPC LOGO</a>
                </div>
                <div class="collapse navbar-collapse">
                    <nav class="navbar-left primary-menu">
                        <ul id="menu-justnews-menu" class="nav navbar-nav">
                            <li class="menu-item"><a href="/justnews">首页</a></li>
                            <li class="menu-item dropdown"><a href="#" class="dropdown-toggle">文章分类</a>
                                <ul role="menu" class=" dropdown-menu" style="display: none;">
                                    <li class="menu-item"><a href="#">创业分享</a></li>
                                    <li class="menu-item"><a href="#">用户体验</a></li>
                                    <li class="menu-item"><a href="#">产品设计</a></li>
                                    <li class="menu-item"><a href="#">行业动态</a></li>
                                </ul>
                            </li>
                            <li class="menu-item"><a href="#special">专题列表</a></li>
                            <li class="menu-item"><a href="#members">用户列表</a></li>
                        </ul>
                    </nav>
                    <div class="navbar-action pull-right">

                        <form class="navbar-search">
                            <input type="text" name="s" class="navbar-search-input" autocomplete="off" placeholder="输入关键词搜索..." value="">
                            <a class="navbar-search-icon j-navbar-search" href="javascript:;"></a>
                        </form>
                        <div id="j-user-wrap">
                            <a class="login cur" href="#">登录</a>--&gt;
                            <a class="login cur" href="#">注册</a>
                        </div>
                        <a class="publish" href="#">投稿</a> </div>
                </div>
            </div>
        </header>
        <!--<Row type="flex" justify="center" align="middle">
            <Col span="24">

            </Col>
        </Row>-->

        <div id="wrap">

            <div class="main container">


                <div class="content">
                    <div class="slider-wrap clearfix">
                        <div class="main-slider flexslider pull-left">

                            <div class="flex-viewport" style="overflow: hidden; position: relative;">
                                <ul class="slides" style="width: 1000%; margin-left: -670px;">
                                    <li v-for="i in 3" class="slide-item clone" aria-hidden="true" style="width: 670px; float: left; display: block;">
                                        <a href="#" target="_blank">
                                            <img src="/static/image/slide.jpg">
                                        </a>
                                        <h3 class="slide-title">
                                            <a href="#" target="_blank">
                                                    这是幻灯滑块的标题{{i}}                                                </a>
                                        </h3>
                                    </li>
                                </ul>
                            </div>
                            <ol class="flex-control-nav flex-control-paging">
                                <li><a class="flex-active">1</a></li>
                                <li><a class="">2</a></li>
                                <li><a class="">3</a></li>
                            </ol>
                            <ul class="flex-direction-nav">
                                <li class="flex-nav-prev"><a class="flex-prev" href="#">Previous</a></li>
                                <li class="flex-nav-next"><a class="flex-next" href="#">Next</a></li>
                            </ul>
                        </div>

                        <ul class="feature-post pull-right">
                            <li v-for="i in 3">
                                <a href="#" target="_blank">
                                    <img src="/static/image/ux-1.png">
                                </a>
                                <span>前端用户中心</span>
                            </li>
                        </ul>
                    </div>

                    <div class="sec-panel topic-recommend">
                        <div class="sec-panel-head">
                            <h2>专题介绍 <small>专题模块标题旁边的描述文字</small> <a href="#" target="_blank" class="more">全部专题</a></h2>
                        </div>
                        <div class="sec-panel-body">
                            <ul class="list topic-list">
                                <li v-for="i in 4" class="topic">
                                    <a class="topic-wrap" href="#" target="_blank">
                                        <div class="cover-container">
                                            <img src="/static/image/topic.png">
                                        </div>
                                        <span>专题{{i}}</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="sec-panel main-list">
                        <div class="sec-panel-head">
                            <ul class="list tabs" id="j-newslist">
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
                                        <span class="item-meta-li views" title="阅读数"><i class="fa fa-eye"></i> <span class="data">82</span></span>
                                    </div>
                                </div>
                            </li>
                            <li class="load-more-wrap">
                                <a class="load-more" href="javascript:;" @click="handleStart">点击查看更多</a>
                            </li>
                        </ul>
                    </div>

                </div>


                <aside class="sidebar">

                    <div class="widget widget_image_ad">
                        <a href="#" target="_blank">
                        广告位招租
                    </a>
                    </div>

                    <div class="widget widget_views">
                        <h3 class="widget-title">热门阅读</h3>
                        <ul>
                            <li v-for="i in 10"><a href="#">下一个万亿风口？阿里，京东，苏宁开始竞逐这个市场！</a></li>
                        </ul>
                    </div>

                    <div class="widget widget_lastest_products">
                        <h3 class="widget-title">产品设计</h3>
                        <ul class="p-list clearfix">
                            <li v-for="i in 8" class="col-xs-12 col-md-6 p-item">
                                <div class="p-item-wrap">
                                    <a class="thumb" href="#">
                                <img class="j-lazy" src="/static/image/prod_design.png" width="480" height="300" style="display: inline;"> </a>
                                    <h4 class="title">
                                        <a href="#">第一次负责从0到1的产品时要注意哪几点？</a>
                                    </h4>
                                </div>
                            </li>
                        </ul>
                    </div>

                </aside>
            </div>

            <div class="container hidden-xs j-partner">
                <div class="sec-panel topic-recommend">
                    <div class="sec-panel-head">
                        <h2>友商 <small>兄弟单位啦</small> <a href="http://demo.wpcom.cn/justnews/contact.html" target="_blank" class="more">联系我们</a></h2>
                    </div>
                    <div class="sec-panel-body">
                        <ul class="list list-partner">
                            <li v-for="i in 8"><img style="width:152px" src="/static/image/logo.png"></li>
                        </ul>
                    </div>
                    <div class="sec-panel-head">
                        <h2>友情链接 <small>常用的一些系统</small> <a href="#" target="_blank" class="more">申请友链</a></h2>
                    </div>
                    <div class="sec-panel-body">
                        <div class="list list-links">
                            <a v-for="i in 8" target="_blank" href="#">OA系统</a>
                        </div>
                    </div>
                </div>
            </div>

            <footer class="footer">
                <div class="container">
                    <div class="clearfix">
                        <div class="footer-col footer-col-logo">
                            CBPC LOGO
                        </div>
                        <div class="footer-col footer-col-copy">
                            <ul class="footer-nav hidden-xs">
                                <li v-for="i in 6" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="#">底部菜单{{i}}</a></li>
                            </ul>
                            <div class="copyright">Copyright © 2017 CBPC 版权所有</div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>

    </div>
</template>
<script>
    import '../assets/css/style.css';

    export default {
        methods: {
            handleStart() {
                this.$Modal.info({
                    title: 'hi',
                    content: '加载更多的消息.'
                });
            }
        }
    };
</script>

<style scoped lang="less">
    .thinner {
        font-weight: 100;
    }

    .logo {
        .thinner;
        letter-spacing: 3pt;
        font-size: 20pt;
        text-decoration: none;
    }

    .footer-col-logo {
        .logo;
        margin-right: 1em;
        color: #3ca5f6;
    }

    .widget_image_ad a {
        width: 300px;
        height: 200px;
        background: #4285F4;
        color: #fff;
        text-decoration: none;
        font-size: 20pt;
        .thinner;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>