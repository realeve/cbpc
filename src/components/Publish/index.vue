<template>
  <div id="wrap">
    <div class="main container" style="margin-bottom: 20px;">
      <form method="post" class="post-form">
        <div class="post-form-main">
          <div class="pf-item">
            <Form :model="formItem" label-position="right" :label-width="100">
              <Form-item label="标题">
                <Input v-model="formItem.title"></Input>
              </Form-item>
            </Form>
          </div>
          <div class="pf-item">
            <Form :model="formItem" label-position="right" :label-width="100">
              <Form-item label="摘要">
                <Input v-model="formItem.summary" type="textarea" :autosize="{minRows: 4,maxRows: 7}" placeholder="请输入..."></Input>
              </Form-item>
            </Form>
          </div>
          <div class="pf-item clearfix">
            
            <Form :model="formItem" label-position="right" :label-width="100">
              <Form-item label="正文">
                <Input v-model="formItem.summary" type="textarea" :autosize="{minRows: 4,maxRows: 7}" placeholder="富文本编辑器..."></Input>
              </Form-item>
            </Form>
          </div>
        </div>
        <div class="post-form-sidebar">
          <input type="submit" value="提交发布" class="pf-submit">
          <div class="pf-side-item">
            <div class="pf-side-label">
              <h3>分类</h3>
            </div>
            <div class="pf-side-input">
              <Select v-model="model1" style="width:200px">
                <Option v-for="item in catList" :value="item.value" :key="item">{{ item.label }}</Option>
            </Select>
            </div>
          </div>
          <div class="pf-side-item">
            <div class="pf-side-label">
              <h3>标签</h3>
            </div>
            <div class="pf-side-input">
              <ul id="tag-container">
                <Tag type="dot" closable>转型发展</Tag>
                <Tag type="dot" v-for="item in count" :key="item" :name="item" closable @on-close="handleClose2">标签{{ item + 1 }}</Tag>
                <Button icon="ios-plus-empty" type="dashed" size="small" @click="handleAdd">添加标签</Button>
              </ul>
              <p class="pf-notice">即文章关键词，使用回车换行键确定，可选填</p>
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
            <input type="hidden" name="_thumbnail_id" id="_thumbnail_id" value="">
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
  export default {
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
        model1: '',
        count: [0, 1, 2]
      }
    },
    methods: {
      handleAdd() {
        if (this.count.length) {
          this.count.push(this.count[this.count.length - 1] + 1);
        } else {
          this.count.push(0);
        }
      },
      handleClose2(event, name) {
        const index = this.count.indexOf(name);
        this.count.splice(index, 1);
      }
    }
  }

</script>
<style scoped lang="less">


</style>
