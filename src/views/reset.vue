<template>
    <div class="wrap">
        <div class="main container" style="margin-bottom:20px;">
            <article class="page type-page status-publish hentry">
                <div class="entry">
                    <div class="entry-head">
                        <h1 class="entry-title">重设密码</h1>
                    </div>
                    <div class="filed-block">
                        如果需要重置密码，请输入电子邮箱或用户名
                    </div>
                    
                    <div class="account-main clearfix">
                        <div>
                            <label>用户名</label>
                            <input autocomplete="off" class="input" type="text" />
                        </div>
                        <div>
                            <label>邮箱</label>
                            <input autocomplete="off" class="input" type="text" />
                        </div>
                        <div>
                            <label>新密码</label>
                            <input autocomplete="off" class="input" type="password" />
                        </div>
                        <div class="submit">
                            <a href="javascript:;" class="v-button-info">重置密码</a>
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