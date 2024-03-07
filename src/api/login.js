import request from '@/utils/request.js'

export function login (data) {
  return request({
    url:'/login',
    method: 'post',
    data
  }) 
}
export function getInfo (data) {
  return request({
    url:'/getinfo',
    method: 'post',
    data
  }) 
}

