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

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});