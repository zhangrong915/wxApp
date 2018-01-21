import {GET, POST} from '../utils/request.js';
import {getAPIDomain} from '../utils/util';
import qs from "qs"
/**
 * 获取cookie
 * @param params
 * @returns {Promise.<void>}
 */

/**获取数据的接口 */
export async function getData(params) {
    return GET(`${getAPIDomain()}/tdniscookie/niscookie?${qs.stringify(params)}`);
}