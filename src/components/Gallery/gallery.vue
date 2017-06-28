<template>
  <Tabs value="name1" slot="header">
    <Tab-pane label="图片库" name="name1">
      <media-gallery class="gallery" :fileList.sync="fileList" />
    </Tab-pane>
    <Tab-pane label="上传图像" name="name2">
      <div class="upload-list" v-for="item in uploadList">
        <template v-if="item.status === 'finished'">
          <img :src="uploadDir+item.response.url">
          <div class="upload-list-cover">
            <Icon type="ios-eye-outline" @click.native="handleView(item.response.url)"></Icon>
            <Icon type="ios-trash-outline" @click.native="handleRemove(item)"></Icon>
          </div>
        </template>
        <template v-else>
          <Progress v-if="item.showProgress" :percent="item.percentage" hide-info></Progress>
        </template>
      </div>
      <Upload :multiple="multiple" ref="upload" :show-upload-list="false" :action="uploadAPI" :max-size="102400" :on-success="setAttachInfo"
        :format="['jpg','jpeg','png','bmp','gif']" :on-format-error="handleFormatError" :on-exceeded-size="handleMaxSize" type="drag"
        style="display: inline-block;width:232px;">
        <!-- :before-upload="handleBeforeUpload" -->
        <div style="width: 232px;height:116px;line-height: 116px;">
          <Icon type="camera" size="20"></Icon>
        </div>
      </Upload>
      <Modal title="查看图片" v-model="visible" class="thumb-wrap" :width="700">
        <img :src="imgName" v-if="visible" style="width: 100%">
      </Modal>
    </Tab-pane>
  </Tabs>
</template>
<script>
  import settings from '../../libs/settings.js';
  import util from '../../libs/util.js';
  import MediaGallery from './MediaGallery.vue';

  import {
    mapMutations
  } from 'vuex';

  export default {
    components: {
      MediaGallery
    },
    props: {
      fileList: Array,
      multiple:{
        default:true
      }
    },
    data() {
      return {
        uploadAPI: settings.upload.url,
        uploadDir: settings.upload.dir,
        imgName: '',
        visible: false,
        uploadList: []
      }
    },
    computed: {
      maxId: {
        get() {
          return this.$store.state.gallery.maxId;
        },
        set(val) {
          this.setGalleryMaxId(val);
        }
      },
      mediaItem: {
        get() {
          return this.$store.state.gallery.mediaItem;
        },
        set(val) {
          this.setGalleryMediaItem(val);
        }
      }
    },
    methods: {
      ...mapMutations(['setGalleryMediaItem', 'setGalleryMaxId']),
      //添加数据后将附件信息存储至数据库
      setAttachInfo(file, lastFile, fileList) {
        let url = settings.api.insert;
        let params = {
          tblname: 'tbl_attach',
          dbid: 2,
          utf2gbk: ['file_name'],
          user_id: 0,
          file_name: file.name,
          file_type: file.type,
          file_size: file.size,
          width: file.width,
          height: file.height,
          file_url: file.url,
          rec_time: util.getNow(1)
        };
        this.$http.post(url, params, {
          emulateJSON: true
        }).then(res => {
          this.$Notice.warning({
            title: '文件上传成功',
            desc: '文件 ' + file.name + ' 上传成功。'
          });
          this.$emit('update:fileList', fileList);

          // 更新gallery状态
          params.id = res.data.id;
          params.response = {
            url: params.file_url
          };
          this.maxId = params.id;
          this.mediaItem = [params, ...this.mediaItem];
        }).catch(e => {
          console.log(e);
        })
      },
      handleView(name) {
        this.imgName = settings.upload.dir + name;
        this.visible = true;
      },
      handleRemove(file) {
        // 从 upload 实例删除数据
        const fileList = this.$refs.upload.fileList;
        this.$refs.upload.fileList.splice(fileList.indexOf(file), 1);
      },
      handleFormatError(file) {
        this.$Notice.warning({
          title: '文件格式不正确',
          desc: '文件 ' + file.name + ' 格式不正确，请上传 jpg 或 png 格式的图片。'
        });
      },
      handleMaxSize(file) {
        this.$Notice.warning({
          title: '超出文件大小限制',
          desc: '文件 ' + file.name + ' 太大，不能超过 100M。'
        });
      },
      // handleBeforeUpload() {
      //   const check = this.uploadList.length < 5;
      //   if (!check) {
      //     this.$Notice.warning({
      //       title: '每次最多只允许上传 5 张图片。'
      //     });
      //   }
      //   return check;
      // }
    },
    mounted() {
      this.uploadList = this.$refs.upload.fileList;
    }
  }

</script>
<style lang="less">
  @thumb-size: 120px;
  .upload-list {
    display: inline-block;
    width: @thumb-size;
    height: @thumb-size;
    text-align: center;
    line-height: @thumb-size;
    border: 1px solid transparent;
    border-radius: 4px;
    overflow: hidden;
    background: #fff;
    position: relative;
    box-shadow: 0 1px 1px rgba(0, 0, 0, .2);
    margin-right: 4px;
  }

  .upload-list img {
    width: 100%;
    height: 100%;
  }

  .upload-list-cover {
    display: none;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, .6);
  }

  .upload-list:hover .upload-list-cover {
    display: block;
  }

  .upload-list-cover i {
    color: #fff;
    font-size: 20px;
    cursor: pointer;
    margin: 0 2px;
  }

  .thumb-wrap {
    z-index: 1001;
  }

  .gallery {
    height: 450px;
    overflow: scroll;
  }

</style>
