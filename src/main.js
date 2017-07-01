// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './app.vue';

import iView from 'iview';
import 'iview/dist/styles/iview.css';
Vue.use(iView);

import router from './router/';
import store from './store/';

import 'vue-awesome/icons';
import Icon from 'vue-awesome/components/Icon';
Vue.component('icon', Icon);

import VResource from 'vue-resource';
Vue.use(VResource);

import infiniteScroll from 'vue-infinite-scroll'
Vue.use(infiniteScroll)
Vue.config.productionTip = false
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
    // render: h => h(App)
});