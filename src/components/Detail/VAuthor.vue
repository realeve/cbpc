<template>
  <div class="widget widget_profile" :class="{large}">
    <!--img src="/static/img/user_bg.jpg" alt=""-->
    <div class="avatar-bg"></div>
    <div class="avatar-wrap">
      <a href="#author/王狗蛋" class="avatar-link"><img src="/static/img/avatar.jpg" class="func-um_user gravatar avatar avatar-120 um-avatar um-avatar-uploaded" width="120"
          height="120" alt="Lomu"></a>
    </div>
    <div class="profile-info">
      <p><span class="author-name">王狗蛋</span><span class="author-title">信息技术部</span></p>
      <p class="author-description">王狗蛋同志，信息技术部XX工程师，先后就职于企业文化部、企管信息部，目前主要负责XX工作。</p>
    </div>
    <div class="profile-posts">
      <h3 class="widget-title"><span>最近文章</span></h3>
      <ul>
        <li v-for="i in 8">
          <a href="#/detail/2">京东无人机可把一吨货物送到偏远农村，未来要覆盖中国10个省份</a>
        </li>
      </ul>
      <div class="load-more-wrap">
        <div v-if="large" class="page">
          <Page :total="100" show-elevator></Page>
        </div>
        <a v-else class="load-more" href="#article/user/王狗蛋">点击查看更多</a>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      large: {
        default: false
      }
    }
  };

</script>

<style lang="less">
  @font-size: 15px;
  @avatar-size: 100px;

  .avatar-bg {
    background: url('/static/img/user_bg.jpg') no-repeat center top;
    background-size: 100%;
    height: 200px;
  }

  .avatar-link {
    width: @avatar-size;
    height: @avatar-size;
  }

  .profile-info {
    font-size: @font-size;
  }

  .avatar-wrap {
    margin-top: -@avatar-size/2;
  }

  .large {
    .avatar-bg {
      height: 300px;
    }
    .avatar-link {
      width: @avatar-size*2;
      height: @avatar-size*2;
    }
    .avatar-wrap {
      margin-top: -@avatar-size;
    }
    .author-name {
      font-size: @font-size*1.5;
    }
    .author-title,
    .author-description {
      font-size: @font-size;
    }
    .profile-posts {
      padding: 20px 40px;
      li {
        font-size: @font-size;
      }
    }
  }

  .load-more-wrap {
    padding: 10px 0!important;
    li {
      position: inherit!important;
      padding: 0!important;
    }
    .ivu-page-item-active a{
      color: #fff!important;
    }
  }

</style>
