const state = {
  user: {},
  token: null,
}

const getters = {
  isAuthenticated: () => {
    return state.token
  },
  getUser() {
    return state.user
  },
  getToken() {
    return state.token
  },
  getUserRegister(state) {
    return state.user
  },
}

const mutations = {
  SET_TOKEN(state, token) {
    state.token = token
  },

  SET_USER(state, user) {
    state.user = user
  },
  SET_SESSION_TIMEOUT(state, data) {
    state.showSessionTimeout = data
  },
}

const actions = {
  SET_TOKEN(context, token) {
    context.commit('SET_TOKEN', token)
  },
  SET_USER(context, user) {
    context.commit('SET_USER', user)
  },
  SET_SESSION_TIMEOUT(context, status) {
    if (status) {
      setTimeout(() => {
        context.commit('SET_SESSION_TIMEOUT', true)
      }, 1680000)
    } else {
      context.commit('SET_SESSION_TIMEOUT', false)
    }
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
