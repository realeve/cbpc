<template>
    <div class="wrap">
        <div class="main container">
            <div class="content">
                <v-search></v-search>
            </div>
            <aside class="sidebar">
                <w-image></w-image>
                <w-text></w-text>
                <w-thumb></w-thumb>
            </aside>
        </div>
    </div>
</template>
<script>
    import '../assets/css/main.css';
    import VSearch from '../components/Home/VSearch.vue';
    import WImage from '../components/Widget/WImage.vue';
    import WText from '../components/Widget/WText.vue';
    import WThumb from '../components/Widget/WThumb.vue';

    // import qs from 'querystring';
    // console.log(qs.parse(window.location.href.split('?')[1]));

    export default {
        components: {
            VSearch,
            WImage,
            WText,
            WThumb
        }
    };
</script>