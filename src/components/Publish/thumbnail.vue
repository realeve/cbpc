<template>
  <Modal v-model="showThumb" :styles="{top: '20px',width:'90%'}" class="center">
    <v-gallery v-if="showThumb" :fileList.sync="fileList" :multiple="false"></v-gallery>
    <div slot="footer">
      <Button type="error" size="large" @click="cancel">取消</Button>
      <Button type="primary" size="large" @click="insertImage">确定</Button>
    </div>
  </Modal>
</template>
<script>
  import VGallery from '../Gallery/gallery.vue';
  import settings from '../../libs/settings.js';

  export default {
    props: ['thumbnail','showThumb'],
    components: {
      VGallery
    },
    data() {
      return {
        fileList: []
      }
    },
    watch:{
      fileList(val){
        if(Reflect.has(val[val.length - 1],'response')){
          val[val.length - 1].file_url = val[val.length - 1].response.url;
        }
        this.insertImage();
      }
    },
    methods: {
      insertImage() {
        let thumbnail = settings.upload.dir + this.fileList[this.fileList.length - 1].file_url;
        this.$emit('update:thumbnail', thumbnail);
        this.cancel();
      },
      cancel() {
        this.$emit('update:showThumb', false);
      },
    }
  }

</script>
<style lang="less" scoped>
  .title {}

</style>
