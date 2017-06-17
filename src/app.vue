<template>
    <div>
        <v-header></v-header>
        <router-view :style="{'min-height':minHeight}"></router-view>
        <v-footer></v-footer>
    </div>
</template>
<script>
    import 'bootstrap/dist/css/bootstrap.css';

    import VHeader from './components/VHeader';
    import VFooter from './components/VFooter';

    export default {
        components: {
            VHeader,
            VFooter
        },
        computed: {
            minHeight() {
                let topHeight = 62;
                let bottomHeight = 124;
                return (window.outerHeight - topHeight - bottomHeight - 4) + 'px';
            }
        },
        data() {
            return {

            };
        },
        mounted() {

        },
        beforeDestroy() {

        },
        methods: {

        }
    };
</script>