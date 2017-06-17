const routers = [{
    path: '/',
    meta: {
        title: '内网大爷'
    },
    component: (resolve) => require(['../views/index.vue'], resolve)
}];
export default routers;