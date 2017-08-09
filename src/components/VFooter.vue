<template>
    <footer class="footer">
        <div class="container">
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
    </footer>
</template>
<script>
    export default {};
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
    .container{
        background: none;
    }
</style>