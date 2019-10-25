import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const state = {
  token: '',
  isLogin: false,
  username: '',
  layers: []
}

const getters = {
  token_getters (state) {
    if (!state.isLogin) {
      if (sessionStorage.getItem('isLogin')) {
        state.isLogin = sessionStorage.getItem('isLogin')
        state.token = sessionStorage.getItem('token')
        state.username = sessionStorage.getItem('username')
        return state.token
      } else {
        return state.token
      }
    } else {
      return state.token
    }
  },
  username_getters (state) {
    return state.username
  },
  layers_getters (state) {
    return state.layers
  }
}

const mutations = {
  token_mutations (state, token) {
    if (token === '') {
      sessionStorage.setItem('isLogin', false)
      state.isLogin = false
    } else {
      sessionStorage.setItem('isLogin', true)
      state.isLogin = true
    }
    sessionStorage.setItem('token', token)
    state.token = token
  },
  username_mutations (state, username) {
    sessionStorage.setItem('username', username)
    state.username = username
  },
  layers_mutations (state, layers) {
    state.layers.push(layers)
  }
}

const actions = {
  token_actions (context, token) {
    context.commit('token_mutations', token)
  },
  username_actions (context, username) {
    context.commit('username_mutations', username)
  },
  layers_actions (context, layers) {
    context.commit('layers_mutations', layers)
  }
}

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})

export default store
