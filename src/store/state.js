import home from './modules/home'
import detail from './modules/detail'
import topic from './modules/topic'
import gallery from './modules/gallery';

const state = {
  home,
  detail,
  topic,
  gallery,
  user: {
    isLogin: true,
    name: '王狗蛋',
    img: '/static/img/avatar.jpg',
    url: '#author/王狗蛋'
  }
}

export default state
