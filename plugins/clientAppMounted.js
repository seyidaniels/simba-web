export default function ({ store, $storage }) {
  const user = $storage.getCookie('user')
  const token = $storage.getCookie('token')
  if (user && token) {
    store.dispatch('auth/SET_TOKEN', token)
    store.dispatch('auth/SET_USER', user)
  }
}
