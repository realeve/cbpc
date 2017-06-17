import Vue from 'vue';
import VueRouter from 'vue-router';
import Util from '../libs/util';
import iView from 'iview';

import Home from '../views/index.vue';

Vue.use(VueRouter);

// 路由配置
const RouterConfig = {
    routes: [{
        path: '/',
        name: 'Home',
        component: Home
    }]
};

const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
    iView.LoadingBar.start();
    Util.title(to.meta.title);
    next();
});

router.afterEach(() => {
    iView.LoadingBar.finish();
    window.scrollTo(0, 0);
});

export default router;