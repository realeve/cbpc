<template>
    <div class="wrap">
        <div class="main container" style="margin-bottom:20px;">
            <article class="page type-page status-publish hentry">
                <div class="entry">
                    <div class="entry-head">
                        <h1 class="entry-title">登录</h1>
                    </div>
                    <div class="account-main clearfix">
                        <div>
                            <label>用户名或邮箱</label>
                            <input autocomplete="off" class="input" type="text" />
                        </div>
                        <div>
                            <label>密码</label>
                            <input autocomplete="off" class="input" type="password" />
                        </div>
                        <div class="submit">
                            <a href="javascript:;" class="v-button-info">登录</a>
                            <a href="#register" class="v-button">注册</a>
                        </div>
                        <div class="link-alt">
                            <a href="#reset">忘记密码？</a>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    </div>
</template>
<script>
    export default {
        components: {

        },
        data() {
            return {

            };
        },

        mounted() {

        }
    };
</script>

<style scoped lang="less">
  @import '../assets/less/login.less';
</style>