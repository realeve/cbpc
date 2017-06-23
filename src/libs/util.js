import axios from 'axios';
import env from '../config/env';

let util = {

};
util.title = function(title) {
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

util.uploadUrl =  'http://localhost:70/upload/upload.php';

export default util;