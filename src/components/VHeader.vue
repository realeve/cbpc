<template>
  <header class="header">
    <div class="container clearfix">
      <div class="navbar-header">
        <a class="logo" href="#">CBPC LOGO</a>
      </div>
      <Row class="collapse navbar-collapse">
        <Col :md="10">
        <Menu mode="horizontal" :active-name="activeName">
          <Menu-item name="">
            <router-link to="/" tag="p">首页</router-link>
          </Menu-item>
          <Submenu name="list">
            <template slot="title">
              文章分类
            </template>
            <Menu-item v-for="i in 5" :key="i" :name="'list/'+i">
              <router-link :to="'/list/'+i" tag="p">栏目{{i}}</router-link>
            </Menu-item>
          </Submenu>
          <Menu-item name="special">
            <router-link to="/special" tag="p">专题列表</router-link>
          </Menu-item>
        </Menu>
        </Col>
        <Col :md="9" justify="end">
        <div class="navbar-action pull-right">
          <div class="navbar-search" :class="{active}">
            <input ref="search" type="text" class="navbar-search-input" autocomplete="off" placeholder="输入关键词搜索..." v-model="keyWord"
              @keyup.enter="search" @blur="showSearchPanel(false)">
            <a class="navbar-search-icon j-navbar-search" href="javascript:;" @mouseenter="showSearchPanel(true)"></a>
          </div>
          <div class="j-user-wrap">
            <a class="login cur" href="#login">登录</a>--&gt;
            <a class="login cur" href="#register">注册</a>
          </div>
          <a class="publish" href="#">投稿</a>
        </div>
        </Col>
      </Row>
    </div>
  </header>
</template>
<script>
  export default {
    data() {
      return {
        active: false,
        keyWord: '',
        activeName: 1
      };
    },
    methods: {
      showSearchPanel(val) {
        this.active = val;
        if (val) {
          this.$refs.search.focus();
        }
      },
      search() {
        if (this.keyWord != '') {
          this.$router.push(`/search/${this.keyWord}`);
        }
      }
    },
    mounted() {
      let url = window.location.href.split('#/')[1];
      this.activeName = url;
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
    font-weight: 100;
  }

  .header {
    background: rgba(255, 255, 255, 0.97);
  }

  .ivu-menu-item,
  .ivu-menu-submenu {
    font-size: 15px;
  }

  .ivu-menu-horizontal.ivu-menu-light:after {
    display: none;
  }

</style>
