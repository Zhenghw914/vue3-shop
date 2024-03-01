import axios from 'axios'
import { useCookies } from '@vueuse/integrations/useCookies'

const request = axios.create({
  baseURL: '/api/admin',
})
import { ElNotification } from 'element-plus'

// 添加请求拦截器
request.interceptors.request.use(
  function (config) {
    const cookies = useCookies(['locale'])
    const token = cookies.get('admin-token')
    if (token) {
      config.headers["token"] = token
    }
    // 在发送请求之前做些什么
    console.log(config)
    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
request.interceptors.response.use(
  function (response) {
    // 对响应数据做点什么
    // 请求回复的数据信息
    return response.data
  },
  // 相应拦截器配置请求错误响应
  function (error) {
    ElNotification({
      message: error.response.data.msg || '请求失败',
      type: 'error',
      duration: 2000,
    })
    // 对响应错误做点什么
    return Promise.reject(error)
  }
)

export default request
