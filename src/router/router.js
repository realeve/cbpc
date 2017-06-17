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
}];
export default routers;