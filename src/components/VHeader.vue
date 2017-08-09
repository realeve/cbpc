<template>
  <div>
    <div class="advbanner" :style="{backgroundImage:headBg}"></div>
    <!-- <img src="/static/img/banner/advbanner_bg_01.png" width="100%" min-height="300px"/> -->
    <Affix>
      <div class="header" :style="{background:menuBg}">
        <Row class="container fullwidth">
          <div class="logo"></div>
          <div class="collapse navbar-collapse">
            <Col :md="13">
            <Menu mode="horizontal" :active-name="activeName">
              <Menu-item name="">
                <router-link to="/" tag="p">首页</router-link>
              </Menu-item>
              <Submenu name="list">
                <template slot="title">
                  栏目导航
                </template>
                <Menu-item v-for="i in 5" :key="i" :name="'list/'+i">
                  <router-link :to="'/list/'+i" tag="p">栏目{{i}}</router-link>
                </Menu-item>
              </Submenu>
              <Menu-item name="special">
                <router-link to="/special" tag="p">专题列表</router-link>
              </Menu-item>
              <Menu-item name="about">
                <router-link to="/about" tag="p">关于我们</router-link>
              </Menu-item>
            </Menu>
            </Col>
            <Col :md="11">
            <div class="navbar-action">
              <div class="navbar-search" :class="{active}">
                <input ref="search" type="text" class="navbar-search-input" autocomplete="off" placeholder="输入关键词搜索..." v-model="keyWord"
                  @keyup.enter="search" @blur="showSearchPanel(false)">
                <div class="j-navbar-search" href="javascript:;" @mouseenter="showSearchPanel(true)">
                  <Icon class="search-icon" type="ios-search" :size="20"></Icon>
                </div>
              </div>
              <div class="j-user-wrap">
                <div v-if="user.isLogin" class="profile">
                  <Dropdown style="margin-left: 20px" placement="bottom-end">
                    <div @click="redirect(user.url)">
                      <img :src="user.img" :alt="user.name"> {{user.name}}
                      <Icon type="arrow-down-b"></Icon>
                    </div>
                    <Dropdown-menu slot="list">
                      <Dropdown-item>
                        <p @click="userCenter">个人中心</p>
                      </Dropdown-item>
                      <Dropdown-item>媒体库</Dropdown-item>
                      <Dropdown-item>帐号设置</Dropdown-item>
                      <Dropdown-item>
                        <p @click="logOut">退出登录</p>
                      </Dropdown-item>
                    </Dropdown-menu>
                  </Dropdown>
                </div>
                <template v-else>
                  <a class="login cur" href="#login">登录</a>--&gt;
                  <a class="login cur" href="#register">注册</a>
                </template>
                <a class="publish" href="#publish">投稿</a>
              </div>
            </div>
            </Col>
          </div>
          <ul class="theme">
            <li>
              <a class="btn" @click="nextTheme(1)">顶图</a>
            </li>
            <li>
              <a class="btn" @click="nextTheme(2)">菜单</a>
            </li>
            <li>
              <a class="btn" @click="nextTheme(3)">背景</a>
            </li>
          </ul>
        </Row>
      </div>
    </Affix>
  </div>
</template>
<script>
  import {
    mapState,
    mapMutations
  } from 'vuex';

  export default {
    data() {
      return {
        active: false,
        keyWord: '',
        activeName: 1
      };
    },
    computed: {
      ...mapState(['user']),
      headBg() {
        return `url(/static/img/banner/advbanner_bg_0${this.curIdx.header+1}.png)`
      },
      menuBg() {
        let bgList = ['rgba(255, 255, 255, 0.97)', 'url(/static/img/banner/m1.png)'];
        return bgList[this.curIdx.menu];
      },
      curIdx() {
        return this.$store.state.app.themeIdx;
      }
    },
    methods: {
      ...mapMutations(['loginStatus']),
      redirect(path) {
        this.$router.push(path.replace('#', ''));
      },
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
      logOut() {
        this.loginStatus(false);
        // this.$router.push('/login');
      },
      userCenter() {
        this.$router.push('/author/' + this.user.name)
      },
      nextTheme(idx) {
        switch (idx) {
          case 1:
            this.$store.commit('setThemeHeader', (this.curIdx.header + 1) % 8);
            break;
          case 2:
            this.$store.commit('setThemeMenu', (this.curIdx.menu + 1) % 2);
            break;
          case 3:
            this.$store.commit('setThemeMain', (this.curIdx.main_bg + 1) % 3);
            break;
        }
      }
    },
    mounted() {
      let url = window.location.href.split('#/')[1];
      this.activeName = url;
      // let _now = Date.now();
      // var x = setInterval(()=>{
      //     let _time=Date.now()-_now;
      //     this.btnTitle = _time;
      //     if(_time >= this.displayWindow){
      //       this.show = false;
      //       clearInterval(x);
      //     }
      //   },500);
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

  .container {
    background: none;
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
    display: inline-block;
    margin: 0 auto;
    width: 100%;
    justify-content: center;
  }

  .ivu-menu-item,
  .ivu-menu-submenu {
    font-size: 15px;
  }

  .ivu-menu-horizontal.ivu-menu-light:after {
    display: none;
  }

  .ivu-menu-light {
    background: none;
  }

  .navbar-collapse {
    padding: 0 0 0 10px;
    width: 100%;
    display: flex;
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

  .ivu-tooltip-arrow {
    position: absolute;
    left: 15px;
    top: 51px;
    width: 0;
    height: 0;
    line-height: 0;
    border: 7px solid transparent;
    border-bottom: 7px solid #fff;
    content: '';
  } // .advbanner_advblur {
  //   width: 100%;
  //   height: 0px;
  //   background-color: #666;
  //   /*position: absolute;*/
  //   /*top:-195px;*/
  //   background: url('../../static/img/banner/advbanner_bg_01.png') top center no-repeat;
  //   /*background-position: center -238px;*/
  //   -moz-filter: blur(5px);
  //   -webkit-filter: blur(5px);
  //   -o-filter: blur(5px);
  //   -ms-filter: blur(5px);
  //   filter: blur(5px);
  // }
  // .advbanner-transition {
  //   transition: height 1s;
  // }
  // .advbanner-enter-active, .advbanner-leave-active {
  //   transition: height .5s
  // }
  // .advbanner-enter, .advbanner-leave-to /* .fade-leave-active in below version 2.1.8 */ {
  //   height: 30px
  // }
  .fullwidth {
    max-width: 1200px;
    margin: 0 auto;
    padding-top: 15px;
    display: flex;
    flex-direction: row;
  }

  .advbanner {
    width: 100%; // background: url(/static/img/banner/advbanner_bg_01.png) top center no-repeat;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 300px;
  }

  .logo {
    width: 100%;
    background: url(/static/img/cbpc.svg) top center no-repeat;
    background-size: auto;
    max-width: 190px;
  }

  .theme {
    display: flex;
    li {
      padding: 0 10px;
    }
    align-items: center;
  }

</style>
