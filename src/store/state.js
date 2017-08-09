import home from './modules/home'
import detail from './modules/detail'
import topic from './modules/topic'
import gallery from './modules/gallery';
import app from './modules/index';

const state = {
    home,
    detail,
    topic,
    gallery,
    app,
    user: {
        isLogin: true,
        name: '品质成钞',
        img: '/static/img/avatar.jpg',
        url: '#author/品质成钞'
    }
}

export default state