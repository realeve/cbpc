import Vue from 'vue';
import VueRouter from 'vue-router';
import Util from '../libs/util';
import iView from 'iview';

import routes from './router';

Vue.use(VueRouter);

// 路由配置
const RouterConfig = {
    mode: 'hash',
    // mode: 'history',
    routes,
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