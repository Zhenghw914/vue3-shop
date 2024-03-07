import { createStore } from 'vuex'
import { login, getInfo } from '@/api/login.js'
import { setToken } from '@/composables/auth.js'
const store = createStore({
  state() {
    return {
      user: '',
    }
  },
  mutations: {
    SET_USERINFO(state, user) {
      state.user = user
      console.log(state.user)
    },
  },
  actions: {
    login({ commit }, { username, password }) {
      return new Promise((resolve, reject) => {
        login({ username, password }).then((res) => {
          setToken(res.data.token)
          resolve(res)
        }).catch(err=>reject(err))
      })
    },

    getInfo({ commit }) {
      return new Promise((resolve, reject) => {
        getInfo()
          .then((res) => {
            commit('SET_USERINFO', res.data)
            resolve(res.data)
          })
          .catch((err) => reject(err))
      })
    },
  },
})

export default store
