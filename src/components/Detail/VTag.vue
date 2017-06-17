<template>
    <div class="entry-footer">
        <div class="entry-tag">
            <a v-for="item in tags" :key="item.title" :href="item.url" rel="tag">{{item.title}}</a>
        </div>
        <div class="entry-action">
            <div class="btn-zan" :class="{liked}" @click="praise">
                <icon name="thumbs-up"></icon> 赞 <span class="entry-action-num">({{zan}})</span>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props:['tags','zan'],
        data(){
            return{
                liked:false
            };
        },
        methods:{
            praise(){
                if(this.liked){
                    this.zan--;
                }else{
                    this.zan++;
                }
                this.liked = !this.liked;                
            }
        }
    };
</script>

<style scoped lang="less">

</style>