<template>
  <Tabs value="name1" slot="header">
    <Tab-pane label="媒体库" name="name1">
      <div style="text-align:center;height:300px;">
        <p>此处瀑布流显示图片信息</p>
      </div>
    </Tab-pane>
    <Tab-pane label="上传图像" name="name2">
      <Upload multiple :action="uploadUrl">
        <Button type="ghost" icon="ios-cloud-upload-outline">上传文件</Button>
      </Upload>
    </Tab-pane>
  </Tabs>
</template>
<script>
  import util from '../../libs/util.js';
  export default {
    data(){
      return{
        uploadUrl:util.uploadUrl
      }
    }
  }

</script>
<style lang="less">


</style>
