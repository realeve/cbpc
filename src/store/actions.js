// 异步事件

import util from '../libs/util.js'

let actions = {
  getSlider(store) {
    util.ajax.get('/home_slide.json').then(res => {
      store.state.home.sliderData = res.data
    })
  },
  getSpecial(store) {
    util.ajax.get('/home_special.json').then(res => {
      store.state.home.specialData = res.data
    })
  },
  getTopic(store) {
    util.ajax.get('/home_topic.json').then(res => {
      store.state.home.topicData = res.data
    })
  },
  getArticle(store) {
    util.ajax.get('/home_article.json').then(res => {
      store.state.home.articleData = res.data
    })
  },
  getArticleText(store) {
    util.ajax.get('/home_article_text.json').then(res => {
      store.state.home.articleTextData = res.data
    })
    util.ajax.get('/home_article_text2.json').then(res => {
      store.state.home.articleTextData2 = res.data
    })
  },
  getParterner(store){
    util.ajax.get('/home_parterner.json').then(res => {
      store.state.home.parternerData = res.data
    })
  },
  getLink(store){
    util.ajax.get('/home_sys_link.json').then(res => {
      store.state.home.linkData = res.data
    })
  },
  getNotice(store){
    util.ajax.get('/home_notice.json').then(res => {
      store.state.home.noticeData = res.data
    })
  },
  getPopular(store){
    util.ajax.get('/home_popular.json').then(res => {
      store.state.home.popularData = res.data
    })
  },
  getQuick(store){
    util.ajax.get('/home_quick.json').then(res => {
      store.state.home.quickData = res.data
    })
  }
}

export default actions
