<template>
  <div>
    <quill-editor ref="vEditor" :options="config" v-model="currentContent" @change="onEditorChange($event)">
    </quill-editor>
    <Modal v-model="modal" :styles="{top: '20px',width:'90%'}" class="center">
      <v-gallery></v-gallery>
      <div slot="footer">
        <Button type="error" size="large" @click="cancel">取消</Button>
        <Button type="primary" size="large" @click="insertImage">确定</Button>
      </div>
    </Modal>
  </div>
</template>
<script>
  import {
    quillEditor
  } from 'vue-quill-editor'
  let _ = require('lodash');

  import config from './config.js';
  import VGallery from '../Gallery/gallery.vue';
  // use
  export default {
    components: {
      quillEditor,
      VGallery
    },
    props: {
      content: String,
      quill: Object
    },
    data() {
      return {
        config: config.option,
        currentContent: this.content,
        modal: false
      }
    },
    computed: {
      editor() {
        return this.$refs.vEditor.quill;
      }
    },
    methods: {
      onEditorChange: _.throttle(function ({
        editor,
        html,
        text
      }) {
        this.$emit('update:content', html);
        window.localStorage.setItem('editor', html);
      }, 2.5 * 1000),
      insertImage() {
        this.modal = false;
        this.$Message.success('图片插入成功');
        // this.editor.insertEmbed(10, 'image', '/static/img/avatar.jpg')
      },
      cancel() {
        this.modal = false;
      },
      initEvents() {
        this.$emit('update:quill', this.editor);

        let showImageUI = () => {
          this.modal = true;
        }

        if (this.editor) {
          let toolbar = this.editor.getModule('toolbar');
          toolbar.addHandler('image', showImageUI);
        }
      }
    },
    mounted() {
      let content = window.localStorage.getItem('editor');
      if (typeof content != 'undefined' && this.content == '') {
        this.currentContent = content;
      }
      this.initEvents();
    }
  }

</script>
<style lang="less" scoped>
  .ql-editor {
    min-height: 200px;
    p {
      font-size: 16pt;
      color: #333;
      font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    }
    blockquote {
      font-size: 16pt;
    }
  }

  .center {
    display: flex;
    justify-content: center;
  }

  .ivu-modal-content {
    min-height: 700px;
  }

  .ivu-modal-footer,
  .ivu-modal-header {
    border: none;
  }

</style>
