<template>
  <div class="hidden-xs">
    <div class="sec-panel topic-recommend">
      <!--div class="sec-panel-head">
        <h2>友商 <a href="#about" target="_blank"  rel="nofollow me noopener noreferrer" class="more">联系我们</a></h2>
      </div>
      <div class="sec-panel-body">
        <ul class="list list-partner">
          <li v-for="item in home.parternerData" :key="item.url">
            <img style="width:152px" :src="item.url">
          </li>
        </ul>
      </div-->
      <div class="sec-panel-head">
        <h2>常用系统 <a href="#about" class="more">申请加入</a></h2>
      </div>
      <div class="sec-panel-body">
        <div class="list list-links">
          <a v-for="item of home.linkData" target="_blank"  rel="nofollow me noopener noreferrer" :href="item.url" :key="item.url">{{item.name}}</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {
    mapState,
    mapActions
  } from 'vuex';
  export default {
    computed: {
      ...mapState(['home'])
    },
    methods:{
      ...mapActions(['getParterner','getLink']),
    },
    mounted(){
      this.getParterner();
      this.getLink();
    }
  };

</script>

<style scoped lang="less">
  @media (max-width: 767px) {
    .hidden-xs {
      display: none !important;
    }
  }

</style>
