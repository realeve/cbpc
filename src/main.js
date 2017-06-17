import Vue from 'vue';
import App from './app.vue';

import iView from 'iview';
import 'iview/dist/styles/iview.css';
Vue.use(iView);

import router from './router/';
import store from './store/';

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});