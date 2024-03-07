import router from '@/router/index.js'
import { getToken } from '@/composables/auth.js'
import { ElNotification } from 'element-plus'
import store from './store/index'
router.beforeEach(async (to, from, next) => {
  const token = getToken()
  // 未登录
  if (!token && to.path != '/login') {
    ElNotification({
      message: '请先登录',
      type: 'error',
      duration: 2000,
    })
    return next({ path: '/login' })
  }
  // 防止重复登录
  if (token && to.path == '/login') {
    ElNotification({
      message: '请勿重复登录',
      type: 'error',
      duration: 2000,
    })
    return next({ path: from.path ? from.path : '/' })
  }

  // 如果用户登录自动获取用户信息 防止刷新用户信息丢失 keepalive
  if (token) {
    await store.dispatch('getInfo')
  }

  next()
})
