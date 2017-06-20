<template>
    <div class="widget widget_views">
        <Tabs value="name1">
        <Tab-pane label="通知" name="name1">
          <ul>
            <li v-for="i in 5"><a href="#/detail/1">下一个万亿风口？阿里，京东，苏宁开始竞逐这个市场！</a></li>
        </ul>
        </Tab-pane>
        <Tab-pane label="公示" name="name2">
          <ul>
            <li v-for="i in 5"><a href="#/detail/2">下一个万亿风口？阿里，京东，苏宁开始竞逐这个市场！</a></li>
        </ul>
        </Tab-pane>
        <Tab-pane label="司务公开" name="name3">
          <ul>
            <li v-for="i in 5"><a href="#/detail/3">下一个万亿风口？阿里，京东，苏宁开始竞逐这个市场！</a></li>
        </ul>
        </Tab-pane>
      </Tabs>

        
    </div>
</template>

<script>
    export default {};
</script>

<style scoped lang="less">

</style>