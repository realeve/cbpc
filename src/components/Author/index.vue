<template>

  <article class="post-8 page type-page status-publish hentry">
    <div class="entry">
      <div class="entry-content">
        <div class="um-bg">
        </div>
        <div class="um-userinfo">
          <div class="um-header">
            <div class="um-profile-photo">
              <a href="#author/王狗蛋" class="um-profile-photo-img">
                <img src="/static/img/avatar.jpg" class="avatar"></a>
            </div>
          </div>
          <div class="um-profile-meta">
            <h1 class="um-name">王狗蛋  <small>信息技术部</small></h1>
            <div class="um-meta-text">
              <p>王狗蛋同志，信息技术部高级工程师，先后就职于企业文化部、企管信息部，目前主要负责XX工作。</p>
            </div>
          </div>
        </div>
        <div class="profile-posts">
          <h3 class="widget-title"><span>最近文章</span></h3>
          <ul>
            <li v-for="i in 8">
              <a href="#/detail/2">京东无人机可把一吨货物送到偏远农村，未来要覆盖中国10个省份</a>
            </li>
          </ul>
          <div class="load-more-wrap">
            <div class="page">
              <Page :total="100" show-elevator></Page>
            </div>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>
<style scoped lang="less">
  @avatar-size: 100px;

  .um-bg {
    background: url(/static/img/user_bg.jpg) no-repeat center top;
    background-size: 100%;
    height: 300px;
  }

  .um-userinfo {
    margin-top: -@avatar-size;
    margin-bottom: 30px;
    display: flex;
    flex-direction: row;
    .um-profile-photo {
      position: relative;
      display: block;
      width: @avatar-size*2;
      height: @avatar-size*2;
      padding: 8px;
      margin-left: 25px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.3);
    }
    .avatar {
      border-radius: 50%;
      width: 2*@avatar-size;
      height: auto;
      border-radius: 50%;
      transition: all .3s ease-out 0s;
    }

    .um-profile-meta {
      padding-top: @avatar-size*0.9;
      h1{
        line-height:0.5;
        small{
          font-size:11pt;
        }
      }
    }
  }

</style>
