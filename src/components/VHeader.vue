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
                        <li class="menu-item"><a href="#/list/3" target="_blank">文字栏目</a></li>
                        <li class="menu-item"><a href="#/list/4" target="_blank">栏目4</a></li>
                        <li class="menu-item"><a href="#/list/5" target="_blank">栏目5</a></li>
                        <li class="menu-item"><a href="#special">专题列表</a></li>
                    </ul>
                </nav>
                <div class="navbar-action pull-right">
                    <div class="navbar-search" :class="{active}">
                        <input type="text" class="navbar-search-input" autocomplete="off" placeholder="输入关键词搜索..." v-model="keyWord" @keyup.enter="search">
                        <a class="navbar-search-icon j-navbar-search" href="javascript:;" @click="showSearchPanel()"></a>
                    </div>
                    <div class="j-user-wrap">
                        <a class="login cur" href="#login">登录</a>--&gt;
                        <a class="login cur" href="#register">注册</a>
                    </div>
                    <a class="publish" href="#">投稿</a> </div>
            </div>
        </div>
    </header>
</template>
<script>
    export default {
        data(){
            return{
                active:false,
                keyWord:''
            };
        },
        computed:{
            isSearchPage(){
                return this.$route.path.includes('/search/');
            }
        },
        methods:{
            showSearchPanel(){                
                this.active = !this.active;
            },
            search(){
                if(this.keyWord!=''){
                    if(this.isSearchPage){
                        this.$router.push(`${this.keyWord}`);
                    }else{
                        this.$router.push(`search/${this.keyWord}`);
                    }                    
                }
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
        font-weight: 100;
    }
    .header{
        background: rgba(255,255,255,0.97);
    }
</style>