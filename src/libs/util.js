import axios from 'axios';
import env from '../config/env';

let util = {

};
util.title = function (title) {
  title = title ? title + ' - Home' : 'iView project';
  window.document.title = title;
};

const ajaxUrl = env === 'development' ?
  './static/data' :
  env === 'production' ?
  './static/data/' :
  './static/data/';
// 此处 env应配置为布置网址接口地址

util.ajax = axios.create({
  baseURL: ajaxUrl,
  timeout: 30000
});

function jsRight(sr, rightn) {
  return sr.substring(sr.length - rightn, sr.length)
}

util.getNow = (type = 1) => {
  let date = new Date()
  let a = date.getFullYear()
  let b = jsRight(('0' + (date.getMonth() + 1)), 2)
  let c = jsRight(('0' + date.getDate()), 2)
  let d = jsRight(('0' + date.getHours()), 2)
  let e = jsRight(('0' + date.getMinutes()), 2)
  let f = jsRight(('0' + date.getSeconds()), 2)
  let output
  switch (type) {
    case 0:
      output = a + '年' + b + '月' + c + '日'
      break
    case 1:
      output = a + '-' + b + '-' + c + ' ' + d + ':' + e + ':' + f
      break
    case 2:
      output = a + '年' + b + '月' + c + '日' + d + '时' + e + '分' + f + '秒'
      break
    case 3:
      output = a + '-' + b + '-' + c + ' ' + d + ':' + e
      break
    case 4:
      output = a + '年' + b + '月' + c + '日  ' + d + '时' + e + '分'
      break
    case 5:
      output = b + '/' + c + '/' + a
      break
    case 6:
      output = a + '-' + b + '-' + c
      break
    case 7:
      output = a + '-' + b

      break
    case 8:
      output = a + b + c
      break
  }
  return output
};
export default util;
