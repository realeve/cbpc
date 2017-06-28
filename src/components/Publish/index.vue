<template>
  <Row :gutter="30">
    <Col :md="18" :xs="24">
    <div class="post-form">
      <div class="pf-item">
        <Form :model="formItem" label-position="left" :label-width="100">
          <Form-item label="标题">
            <Input v-model="formItem.title"></Input>
          </Form-item>
        </Form>
      </div>
      <div class="pf-item">
        <Form :model="formItem" label-position="left" :label-width="100">
          <Form-item label="摘要">
            <Input v-model="formItem.summary" type="textarea" :autosize="{minRows: 4,maxRows: 7}" placeholder="请输入..."></Input>
          </Form-item>
        </Form>
      </div>
      <div class="pf-item">
        <Form :model="formItem" label-position="left" :label-width="100">
          <Form-item label="正文">
            <v-edit :content.sync="content" :quill.sync="quill"></v-edit>
          </Form-item>
        </Form>
      </div>
    </div>
    </Col>
    <Col :md="6" :xs="24">
    <div class="post-form">
      <a class="pf-submit" @click="submit">提交发布</a>
      <div class="pf-side-item">
        <div class="pf-side-label">
          <h3>分类</h3>
        </div>
        <div class="pf-side-input">
          <Select v-model="category" style="width:200px">
            <Option v-for="item in catList" :value="item.value" :key="item">{{ item.label }}</Option>
        </Select>
        </div>
      </div>
      <div class="pf-side-item">
        <div class="pf-side-label">
          <h3>标签 <small>文章关键词，回车确认</small></h3>
        </div>
        <div class="pf-side-input">
          <ul id="tag-container">
            <Tag color="blue" v-for="item in tags" :key="item" :name="item" closable @on-close="handleClose">{{ item }}</Tag>
            <Input v-model="newTag" @on-click="handleAdd" @on-enter="handleAdd" icon="ios-pricetags-outline" class="tag-add"></Input>
          </ul>
        </div>
      </div>
      <div class="pf-side-item">
        <div class="pf-side-label">
          <h3>缩略图</h3>
        </div>
        <div class="pf-side-input">
          <div id="j-thumb-wrap" class="thumb-wrap"></div>
          <a class="thumb-selector j-thumb" href="javascript:;" @click="chooseThumb">设置缩略图片</a>
          <p class="pf-notice">文章缩略图会显示在文章列表，建议设置缩略图</p>
          <thumbnail :showThumb.sync="showThumb" :thumbnail.sync="thumbnail"></thumbnail>
          <img v-if="thumbnail!=''" :src="thumbnail.replace('image/','image/thumb_').replace('webp/','webp/thumb_')" style="width:100%;">
        </div>
      </div>
    </div>
    </Col>
    <Col :span="18">
    <div class="preview-content">
      <Form :model="formItem" label-position="left" :label-width="100" class="preview">
        <Form-item label="预览">
          <v-article-head :article="article" />
          <div v-html="content" class="entry-content"></div>
          <v-tag :article="article"></v-tag>
        </Form-item>
      </Form>
    </div>
    </Col>
  </Row>
</template>
<script>
  import VEdit from './Editor.vue';
  import VArticleHead from '../Detail/VArticleHead';
  import VTag from '../Detail/VTag';
  import Thumbnail from './thumbnail';

  export default {
    components: {
      VEdit,
      VArticleHead,
      VTag,
      Thumbnail
    },
    data() {
      return {
        formItem: {
          title: '',
          summary: ''
        },
        catList: [],
        category: 0,
        tags: [],
        newTag: '',
        content: '',
        quill: {},
        showThumb: false,
        thumbnail: ''
      }
    },
    computed: {
      article() {
        let tags = this.tags.map(item => {
          return {
            title: item,
            url: '#search/' + item
          };
        });
        let category = this.catList[this.category];
        if (typeof category == 'undefined') {
          category = {
            label: '通知'
          };
        }
        return {
          "title": this.formItem.title,
          "author": [{
            "dpt": "信息技术部",
            "name": "王狗蛋"
          }],
          "collaborator": [{
            "dpt": "信息技术部",
            "name": "王狗蛋的表哥"
          }],
          "date": "2017年6月24日",
          category: category.label,
          "dpt": "信息技术部",
          tags,
          "readNum": 2332,
          "zan": 25,
          "content": this.content
        };
      }
    },
    methods: {
      chooseThumb() {
        this.showThumb = true;
      },
      shouldTagAdded(val) {
        if (this.newTag.length == 0) {
          return false;
        }
        return this.tags.filter(item => item == val).length == 0;
      },
      handleAdd() {
        if (this.shouldTagAdded(this.newTag)) {
          this.tags.push(this.newTag);
          this.newTag = '';
        }
      },
      handleClose(event, name) {
        const index = this.tags.indexOf(name);
        this.tags.splice(index, 1);
      },
      getCatList() {
        this.$http.get('/static/data/publish_category.json').then(res => {
          this.catList = res.data;
        })
      },
      submit() {
          this.$Notice.success({
            title: '提交数据',
            desc: 'F12 查看控制台显示所提交数据'
          });
        let params = {
          title: this.formItem.title,
          summary: this.formItem.summary,
          category: this.category,
          tags: this.tags.join(','),
          content: this.content,
          thumbnail: this.thumbnail,
          userId: 0,
          // 作者、合作者
          collaborator: '',
          author: '',
        }
        console.log(params);
      }
    },
    mounted() {
      this.getCatList();
    }
  }

</script>
<style lang="less">
  @tagHeight: 14px;
  .ivu-tag {
    height: @tagHeight*2;
    border-radius: @tagHeight;
    font-size: @tagHeight;
    line-height: @tagHeight;
    padding-top: 7px;
  }

  .tag-add {
    padding-top: 10px;
  }

  .post-form {
    padding: 15px;
  }

  .preview-content {
    margin: 20px 0;
    .preview {
      padding: 15px;
      background: #fff;
    }
    .entry-content {
      padding-top: 20px;
      font-size: .16rem;
      color: #444;
      text-indent: 2em;
      img {
        max-width: 90%!important;
        margin: 0 auto;
        background: rgba(255, 255, 255, 0.12);
        border: 6px solid rgba(255, 255, 255, 0.82);
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
      }
    }
  }

  .pf-submit:hover {
    color: #fff;
  }

</style>
