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
    'https://realeve.github.io/cbpc/static/data/' :
    'https://realeve.github.io/cbpc/static/data/';

util.ajax = axios.create({
    baseURL: ajaxUrl,
    timeout: 30000
});

export default util;