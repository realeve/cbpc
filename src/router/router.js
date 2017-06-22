const routers = [{
    path: '/',
    meta: {
        title: '信息网首页'
    },
    component: (resolve) => require(['../views/index.vue'], resolve)
}, {
    path: '/list/:type',
    meta: {
        title: '文苑飞歌'
    },
    component: (resolve) => require(['../views/list.vue'], resolve)
}, {
    path: '/special/',
    meta: {
        title: 'XX专题'
    },
    component: (resolve) => require(['../views/special.vue'], resolve)
}, {
    path: '/detail/:id',
    meta: {
        title: '文章详情'
    },
    component: (resolve) => require(['../views/detail.vue'], resolve)
}, {
    path: '/login',
    meta: {
        title: '登录'
    },
    component: (resolve) => require(['../views/login.vue'], resolve)
}, {
    path: '/register',
    meta: {
        title: '注册'
    },
    component: (resolve) => require(['../views/register.vue'], resolve)
}, {
    path: '/reset',
    meta: {
        title: '重设密码'
    },
    component: (resolve) => require(['../views/reset.vue'], resolve)
}, {
    path: '/search',
    meta: {
        title: '搜索'
    },
    component: (resolve) => require(['../views/search.vue'], resolve)
}, {
    path: '/search/:key',
    meta: {
        title: '搜索'
    },
    component: (resolve) => require(['../views/search.vue'], resolve)
}, {
    path: '/about',
    meta: {
        title: '关于我们'
    },
    component: (resolve) => require(['../views/about.vue'], resolve)
}, {
    path: '/author/:name',
    meta: {
        title: '文章作者'
    },
    component: (resolve) => require(['../views/author.vue'], resolve)
}, {
    path: '/publish',
    meta: {
        title: '新闻发布'
    },
    component: (resolve) => require(['../views/publish.vue'], resolve)
}];
export default routers;