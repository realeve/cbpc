<template>
  <footer class="footer">
    <div class="container">
      <div class="logo">
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
    width: 100%;
    background: url(/static/img/cbpc_reverse.svg) top center no-repeat;
    background-size: auto;
    max-width: 190px;
    height:60px;
  }

  .container {
    background: none;
    display:flex;
    flex-direction:row;
  }

  .footer-col-copy{
      padding-left:20px;
  }
</style>
