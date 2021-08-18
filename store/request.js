export const state = () => ({
  isLoading: false,
})
export const getters = {
  isLoading: (state) => {
    return state.isLoading
  },
}
export const mutations = {
  SET_LOADER: (state, payload) => {
    state.isLoading = payload
  },
}
export const actions = {
  SET_REQUEST_STATUS(context, payload) {
    context.commit('SET_LOADER', payload)
  },
}
