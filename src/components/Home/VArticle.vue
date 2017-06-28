<template>
  <div class="sec-panel main-list">
    <div class="sec-panel-head">
      <Tabs :value="curTab">
        <Tab-pane v-for="(item,i) of data" :key="item.category" :label="item.category" :name="'name'+i">
          <v-article-list :loadMore="item.url" :article="item.data"></v-article-list>
        </Tab-pane>
      </Tabs>
    </div>
  </div>
</template>
<script>
  import VArticleList from './VArticleList.vue';
  export default {
    props: ['data'],
    components: {
      VArticleList
    },
    // data() {
    //   return {
    //     label: (h) => {
    //       return h('div', [
    //         h('span', this.data[0].category),
    //         h('Badge', {
    //           props: {
    //             count: this.data[0].data.length
    //           }
    //         })
    //       ])
    //     }
    //   };
    // },
    data() {
      return {
        curTab: 'name0'
      }
    },
    mounted() {
      let i = 0;
      setInterval(() => {
        i++;
        if (i == this.data.length) {
          i = 0;
        }
        this.curTab = 'name' + i;
      }, 10 * 1000);
    }
  };

</script>

<style lang="less">


</style>
