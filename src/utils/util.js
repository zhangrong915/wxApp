import { domain as cfgDomain } from './config.js';

// 获取API域名，统一配置
export const getAPIDomain = function () {
    return cfgDomain;
}

export const getQuery = (queryString, name) => {

    let str = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    let regex = new RegExp("[\\?&]" + str + "=([^&#]*)"),
        results = regex.exec(queryString);
    return results == null ? "" : decodeURIComponent(results[1]);
};



