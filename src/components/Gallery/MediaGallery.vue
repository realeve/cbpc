<template>
  <div v-infinite-scroll="loadMore" infinite-scroll-disabled="status.value" infinite-scroll-distance="100">
    <waterfall class="waterfall" :line="'h'" :line-gap="200" :min-line-gap="150" :max-line-gap="250" :single-max-width="250"
      :watch="mediaItem" ref="waterfall" @reflowed="reflowed">
      <waterfall-slot v-for="(item,idx) in mediaItem" :width="item.width" :height="item.height" :order="idx" :key="item" move-class="item-move">
        <div class="item animated fadeIn">
          <img :class="{'wf-active':item.active}" :src="mediaDir + item.file_url.replace('image/','image/thumb_').replace('webp/','webp/thumb_')" />
          <div class="content-wrap">
            <div class="entry-title">
              <div class="mask">
                <span @click="add2Attach(item)">
                    <Icon type="android-attach" size="25"></Icon>
                  </span>
                <span @click="previewImg(item.file_url)">
                      <Icon type="ios-camera-outline" size="25"></Icon>
                  </span>
                <span v-if="isActive" @click="editName(item)">
                    <Icon type="edit" size="25"></Icon>
                  </span>
                <span v-if="isActive" @click="deleteMedia(item)">
                    <Icon type="ios-trash-outline" size="25"></Icon>
                  </span>
                <p class="pic-name">{{item.file_name}}</p>
              </div>
            </div>
          </div>
        </div>
      </waterfall-slot>
    </waterfall>
    <!--p class="loading-status" v-html="status.text"></p-->
    <Modal title="查看图片" v-model="visible" class="thumb-wrap" :width="700">
      <img :src="mediaDir+imgName" v-if="visible" style="width: 100%">
    </Modal>
  </div>
</template>
<script>
  import settings from '../../libs/settings.js';
  import Waterfall from 'vue-waterfall/lib/waterfall';
  import WaterfallSlot from 'vue-waterfall/lib/waterfall-slot';

  import {
    mapMutations
  } from 'vuex';

  export default {
    name: 'media-gallery',
    props: {
      fileList: Array,
    },
    components: {
      Waterfall,
      WaterfallSlot
    },
    data() {
      return {
        imgName: '',
        visible: false,
        mediaContent: settings.upload.url,
        mediaDir: settings.upload.dir,
        status: {
          value: false,
          text: '初始化...'
        }
      }
    },
    computed: {
      isActive() {
        //加入  keep-alive，防止在其它页面滚动时加载图片
        return (this.$route.name == 'publish');
      },
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
      },
      // 数据载入状态标志位。true:已完成
      loadStatus: {
        get() {
          return this.$store.state.gallery.loadComplete;
        },
        set(val) {
          this.setGalleryLoadStatus(val);
        }
      }
    },
    methods: {
      ...mapMutations(['setGalleryMediaItem', 'setGalleryMaxId', 'setGalleryLoadStatus']),
      add2Attach(attach) {
        let isAttached = this.fileList.filter(item => item.id == attach.id);
        if (isAttached.length) {
          return;
        }
        attach.response = {
          url: attach.file_url
        };
        this.fileList.push(attach);
        this.$emit('update:fileList', this.fileList);

        // 加入后即从列表中删除
        this.removeMedia(attach);
        // this.mediaItem[this.mediaItem.indexOf(attach)].active =true;
      },
      fetchData(api, maxid = 0) {

        if (this.status.value) {
          console.info('data is loading...');
          return;
        }

        this.status.value = true;
        // this.status.text = '<i class="el-icon-loading"></i> 正在加载...';

        this.$http.jsonp(api, {
            params: {
              uid: 0,
              type: 'image',
              maxid
            }
          })
          .then(res => {

            let obj = res.data;
            if (obj.rows < 20) {
              // 数据载入完毕
              this.loadStatus = true;
              this.status.value = true;
              this.status.text = '';
              if (obj.rows == 0) {
                return;
              }
            }

            obj.data = obj.data.map(item => this.getSizeByItem(item));
            if (this.maxId == 0) {
              //页面加载时重置数据 
              this.mediaItem = obj.data;
            } else {
              this.mediaItem = [...this.mediaItem, ...obj.data];
            }
            this.maxId = obj.data[obj.rows - 1].id;
            console.info('当前资源id:', '=', this.maxId);

            this.status.value = false;
          })
          .catch(e => {
            this.status.value = false;
            this.status.text = '数据载入出错';
            console.log(e);
          })
      },
      reflowed: function () {
        if (this.isActive && this.status.value) {
          this.status.value = false;
        }
      },
      loadMore() {
        if (!this.loadStatus) {
          if (this.maxId == 0) {
            this.fetchData(settings.api.gallery.loading, this.maxId);
          } else {
            this.fetchData(settings.api.gallery.loadMore, this.maxId);
          }
        }
      },
      getSizeByItem(item) {
        if (item.width) {
          let ratio = (item.height / item.width);
          item.width = 400;
          item.height = parseInt((400 * ratio).toFixed(1));
        } else {
          item.width = 120;
          item.height = 120;
        }
        return item;
      },
      previewImg(name) {
        this.imgName = name;
        this.visible = true;
      },
      removeMedia(item) {
        this.mediaItem.splice(this.mediaItem.indexOf(item), 1);
      },
      deleteMedia(item) {
        this.$Notice.warning({
          title: '提示',
          desc: '删除'
        });
        this.removeMedia(item);
        // this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        //   confirmButtonText: '确定',
        //   cancelButtonText: '取消',
        //   type: 'warning'
        // }).then(() => {
        //   this.removeFile(item);
        // }).catch((e) => {
        //   this.$message({
        //     type: 'info',
        //     message: '已取消删除'
        //   });
        //   console.log(e);
        // });
      },
      editName(item) {
        this.$Notice.warning({
          title: '提示',
          desc: '编辑'
        });
        // this.$prompt('请输入文件描述', '提示', {
        //   confirmButtonText: '确定',
        //   cancelButtonText: '取消',
        //   inputValue: item.name
        // }).then(({
        //   value
        // }) => {
        //   this.updateFileName({
        //     id: item.id,
        //     name: value
        //   })
        // }).catch(() => {
        //   this.$message({
        //     type: 'info',
        //     message: '取消输入'
        //   });
        // });
      },
      removeFile(file) {
        this.$Notice.warning({
          title: '提示',
          desc: '删除'
        });
        // let params = {
        //   tblname: 'tbl_attach',
        //   id: file.id
        // };

        // let url = settings.api.delete;
        // this.$http.post(url, params, {
        //     emulateJSON: true
        //   }).then(res => {

        //     this.mediaItem.forEach((item, i) => {
        //       if (item.id == file.id) {
        //         this.mediaItem.splice(i, 1);
        //       }
        //     });

        //     this.$message({
        //       type: 'success',
        //       message: '删除成功!'
        //     });
        //   })
        //   .catch(e => {
        //     console.log(e);
        //   })

        // this.$http.jsonp(settings.api.fileDelete, {
        //     params: {
        //       name: file.url
        //     }
        //   }).then(res => {
        //     console.info(file.name + '删除成功');
        //   })
        //   .catch(e => {
        //     console.log(e);
        //   })
      },
      updateFileName(item) {
        var params = {
          tblname: 'tbl_attach',
          id: item.id,
          name: item.name,
          utf2gbk: ['name']
        }

        this.$http.jsonp(settings.api.update, {
            params
          }).then(res => {

            this.mediaItem.forEach((media, i) => {
              if (item.id == media.id) {
                this.mediaItem[i].name = item.name;
              }
            });

            this.$message({
              type: 'success',
              message: '文件描述已修改为: ' + item.name
            });
          })
          .catch(e => {
            console.log(e);
          })
      }
    },
    mounted() {
      this.loadMore();
    }
  }

</script>
<style lang="less" scoped>
  .margin-top-10 {
    margin-top: 10px;
  }

  .waterfall {
    .item {
      position: absolute;
      top: 5px;
      left: 5px;
      right: 5px;
      bottom: 5px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .item:after {
      content: attr(index);
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      -webkit-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
    }
    .content-wrap {
      padding: 0;
      position: absolute;
      text-align: center;
      width: 100%;
      top: 0;
      bottom: 0;
      display: table-cell;
      vertical-align: middle;
      overflow: hidden;
    }
    .entry-title {
      display: table;
      height: 100%;
      width: 100%;
      margin: 0;
      text-align: center;
      font-size: 12pt;
      color: #fff;
      font-size: 20px;
      word-spacing: .7em;
    }
    .mask {
      display: table-cell;
      position: relative;
      transition: opacity .25s ease-in-out, background .25s ease-in-out;
      -moz-transition: opacity .25s ease-in-out, background .25s ease-in-out;
      -webkit-transition: opacity .25s ease-in-out, background .25s ease-in-out;
      vertical-align: middle;
      z-index: 1;
      color: #fff;
      text-decoration: none;
      opacity: 0;
      padding: 10%;
      span:hover {
        color: #20A0FF;
      }
      .pic-name {
        font-size: 10px;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        text-align: center;
        margin-bottom: 8px;
      }
    }
    .mask:hover {
      cursor: pointer;
      opacity: 0.9;
      color: #fff;
      background: rgba(0, 0, 0, 0.8);
    }
    .wf-active {
      opacity: 0.9;
      background: rgba(0, 0, 0, 0.7);
      padding:5px;
    }
    .wf-enter-active,
    wp-leave {
      transition: opacity 1.3s ease;
      -webkit-transition: opacity 1.3s ease;
    }
    .wf-enter,
    .wp-leave-active {
      opacity: 0;
    }
  }

  .loading-status {
    text-align: center;
    margin-bottom: 0;
  }

  .thumb-wrap {
    z-index: 1001;
  }

</style>
