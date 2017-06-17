<template>
    <div>
        <v-header></v-header>
        <router-view></router-view>
        <v-footer></v-footer>
    </div>
</template>
<script>
    import 'bootstrap/dist/css/bootstrap.css';

    import VHeader from './components/VHeader';
    import VFooter from './components/VFooter';

    export default {
        components:{
            VHeader,
            VFooter
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