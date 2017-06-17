<template>
    <div class="wrap">
        <div class="main container">
            <div class="content">
                <v-slider></v-slider>
                <v-topic></v-topic>
                <v-article></v-article>
            </div>
            <aside class="sidebar">
                <w-image></w-image>
                <w-text></w-text>
                <w-thumb></w-thumb>  
            </aside>
        </div>
        <v-other></v-other>
    </div>
</template>
<script>
    import '../assets/css/main.css';
    import VSlider from '../components/Home/VSlider.vue';
    import VTopic from '../components/Home/VTopic.vue';
    import VArticle from '../components/Home/VArticle.vue';
    import VOther from '../components/Home/VOther.vue';

    import WImage from '../components/Widget/WImage.vue';
    import WText from '../components/Widget/WText.vue';
    import WThumb from '../components/Widget/WThumb.vue';

    export default {
        components: {
            VSlider,
            VTopic,
            VArticle,
            VOther,
            
            WImage,
            WText,
            WThumb
        }
    };
</script>