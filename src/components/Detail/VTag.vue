<template>
  <div class="entry-footer">
    <div class="wrapper">
      <div class="entry-tag">
        <a v-for="item in article.tags" :key="item.title" :href="item.url" rel="tag">{{item.title}}</a>
      </div>
    </div>
    <div class="wrapper">
      <div class="entry-tag">
      </div>
      <div class="editor">
        <div class="author">
          <div class="title">
            <p>编辑：</p>
            <p>审核：</p>
            <p>责任编辑：</p>
            <p class="title">合作者：</p>
          </div>
          <div class="detail">
            <p>{{editor}}</p>
            <p>{{verify}}</p>
            <p>{{exec_editor}}</p>
            <p v-for="item of article.collaborator">{{`${item.name}(${item.dpt})`}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="entry-action">
      <div class="btn-zan" :class="{liked}" @click="praise">
        <icon name="thumbs-up"></icon> 赞 <span class="entry-action-num">({{article.zan}})</span>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: ['article'],
    data() {
      return {
        liked: false
      };
    },
    computed: {
      editor() {
        if (this.article.editor) {
          return this.article.editor.join('、');
        }
      },
      verify() {
        if (this.article.verify) {
          return this.article.verify.join('、');
        }
      },
      exec_editor() {
        if (this.article.exec_editor) {
          return this.article.exec_editor.join('、');
        }
      }
    },
    methods: {
      praise() {
        if (this.liked) {
          this.article.zan--;
        } else {
          this.article.zan++;
        }
        this.liked = !this.liked;
      }
    }
  };

</script>

<style scoped lang="less">
  .wrapper {
    display: flex;
    justify-content: space-between;

    .dot {
      margin: 0 1px;
    }
    .author {
      display: flex;
      flex-direction: row;
    }
    .title {
      text-align: right;
    }
  }

</style>
