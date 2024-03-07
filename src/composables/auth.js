import { useCookies } from '@vueuse/integrations/useCookies'
const cookies = useCookies(['locale'])
const tokenKey = 'admin-token'
export function setToken(token) {
  return cookies.set(tokenKey, token)
}

export function getToken() {
  return cookies.get(tokenKey)
}

export function removeToken() {
  return cookies.remove(tokenKey)
}
