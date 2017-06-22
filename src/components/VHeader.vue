<template>
  <header class="header">
    <Row class="container">
      <Col :md="4">
      <div class="navbar-header">
        <a class="logo" href="#">CBPC</a>
      </div>
      </Col>
      <div class="collapse navbar-collapse">
        <Col :md="11">
        <Menu mode="horizontal" :active-name="activeName">
          <Menu-item name="">
            <router-link to="/" tag="p">首页</router-link>
          </Menu-item>
          <sub-menu name="list">
            <template slot="title">
              栏目导航
            </template>
            <Menu-item v-for="i in 5" :key="i" :name="'list/'+i">
              <router-link :to="'/list/'+i" tag="p">栏目{{i}}</router-link>
            </Menu-item>
          </sub-menu>
          <Menu-item name="special">
            <router-link to="/special" tag="p">专题列表</router-link>
          </Menu-item>
          <Menu-item name="about">
            <router-link to="/about" tag="p">关于我们</router-link>
          </Menu-item>
        </Menu>
        </Col>
        <Col :md="9">
        <div class="navbar-action pull-right">
          <div class="navbar-search" :class="{active}">
            <input ref="search" type="text" class="navbar-search-input" autocomplete="off" placeholder="输入关键词搜索..." v-model="keyWord"
              @keyup.enter="search" @blur="showSearchPanel(false)">
            <a class="j-navbar-search" href="javascript:;" @mouseenter="showSearchPanel(true)">
              <Icon class="search-icon" type="ios-search" :size="20"></Icon>
            </a>
          </div>
          <div class="j-user-wrap">
            <ul v-if="user.isLogin" class="profile">
              <Dropdown style="margin-left: 20px" placement="bottom-end">
                <a :href="user.url">
                  <img :src="user.img"> {{user.name}}
                  <Icon type="arrow-down-b"></Icon>
                </a>
                <Dropdown-menu slot="list">
                  <Dropdown-item><p @click="userCenter">个人中心</p></Dropdown-item>
                  <Dropdown-item>媒体库</Dropdown-item>
                  <Dropdown-item>帐号设置</Dropdown-item>
                  <Dropdown-item><p @click="logOut">退出登录</p></Dropdown-item>
                </Dropdown-menu>
              </Dropdown>
            </ul>
            <template v-else>
              <a class="login cur" href="#login">登录</a>--&gt;
              <a class="login cur" href="#register">注册</a>
            </template>
            <a class="publish" href="#publish">投稿</a>
          </div>
        </div>
        </Col>
      </div>
    </Row>
  </header>
</template>
<script>
  import SubMenu from './Home/submenu.vue';

  import {
    mapState,
    mapMutations
  } from 'vuex';

  export default {
    components: {
      SubMenu
    },
    computed: {
      ...mapState(['user'])
    },
    data() {
      return {
        active: false,
        keyWord: '',
        activeName: 1
      };
    },
    methods: {
      ...mapMutations(['loginStatus']),
      showSearchPanel(val) {
        this.active = val;
        if (val) {
          this.$refs.search.focus();
        }
      },
      search() {
        if (this.keyWord != '') {
          this.$router.push(`/search/${this.keyWord}`);
          this.keyword = '';
        }
      },
      logOut(){
        this.loginStatus(false);
        // this.$router.push('/login');
      },
      userCenter(){
        this.$router.push('/author/'+this.user.name)
      }
    },
    mounted() {
      let url = window.location.href.split('#/')[1];
      this.activeName = url;
    }
  };

</script>

<style scoped lang="less">
  .search-icon {
    position: absolute;
    top: 6px;
    right: 14px;
    text-align: center;
    color: #ccc;
  }

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
    display: flex;
    justify-content: center;
  }

  .ivu-menu-item,
  .ivu-menu-submenu {
    font-size: 15px;
  }

  .ivu-menu-horizontal.ivu-menu-light:after {
    display: none;
  }

  .navbar-collapse {
    padding: 0;
  }

  .login {
    margin-left: 10px;
  }

  .login-menu-show {
    display: block;
  }

  .navbar-action .profile a {
    display: flex;
    align-items: center;
  }

  .navbar-action .profile img {
    width: 35px;
    height: 35px;
  }

</style>
