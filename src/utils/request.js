/* *
*axios请求封装处理
*/
import axios from 'axios'
const request = axios.create({
    baseURL: 'http://ttapi.research.itcast.cn/'
})
export default request