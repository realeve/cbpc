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
      <input value="提交发布" class="pf-submit">
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
          <a class="thumb-selector j-thumb" href="javascript:;">设置缩略图片</a>
          <p class="pf-notice">文章缩略图会显示在文章列表，建议设置一下缩略图</p>
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

  export default {
    components: {
      VEdit,
      VArticleHead,
      VTag
    },
    data() {
      return {
        formItem: {
          title: '',
          summary: ''
        },
        catList: [{
            value: 0,
            label: '新闻在线'
          },
          {
            value: 1,
            label: '文苑飞歌'
          },
          {
            value: 2,
            label: '学习研究'
          },
        ],
        category: '',
        tags: [],
        newTag: '',
        content: '',
        quill:{}
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
        let category = this.category == '' ? '' : this.catList[this.category]['label'];
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
          category,
          "dpt": "信息技术部",
          tags,
          "readNum": 2332,
          "zan": 25,
          "content": this.content
        };
      }
    },
    methods: {
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
      }
    },
    mounted(){
      // console.log(this.quill);
    }
  }

</script>
<style scoped lang="less">
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
    }
  }

</style>
