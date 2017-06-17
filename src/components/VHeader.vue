<template>
    <header class="header">
        <div class="container clearfix">
            <div class="navbar-header">
                <a class="logo" href="#">CBPC LOGO</a>
            </div>
            <div class="collapse navbar-collapse">
                <nav class="navbar-left primary-menu">
                    <ul class="nav navbar-nav">
                        <li class="menu-item"><a href="#">首页</a></li>
                        <li class="menu-item"><a href="#/list/1" target="_blank">栏目1</a></li>
                        <li class="menu-item"><a href="#/list/2" target="_blank">栏目2</a></li>
                        <li class="menu-item"><a href="#special">专题列表</a></li>
                    </ul>
                </nav>
                <div class="navbar-action pull-right">

                    <form class="navbar-search">
                        <input type="text" name="s" class="navbar-search-input" autocomplete="off" placeholder="输入关键词搜索..." value="">
                        <a class="navbar-search-icon j-navbar-search" href="javascript:;"></a>
                    </form>
                    <div class="j-user-wrap">
                        <a class="login cur" href="#">登录</a>--&gt;
                        <a class="login cur" href="#">注册</a>
                    </div>
                    <a class="publish" href="#">投稿</a> </div>
            </div>
        </div>
    </header>
</template>
<script>
    export default {
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
        font-weight: 100;
    }

</style>