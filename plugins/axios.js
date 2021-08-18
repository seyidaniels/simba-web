export default function ({ $axios, redirect, store }) {
  $axios.setToken('11234', 'Bearer')

  $axios.onRequest((config) => {
    store.dispatch('request/SET_REQUEST_STATUS', true)
  })

  $axios.onResponse((response) => {
    store.dispatch('request/SET_REQUEST_STATUS', false)
    return Promise.resolve(response.data)
  })

  $axios.onError((error) => {
    store.dispatch('request/SET_REQUEST_STATUS', false)
    return Promise.reject(error.response.data)
  })
}
