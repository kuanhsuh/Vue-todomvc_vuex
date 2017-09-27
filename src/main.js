import Vue from 'vue'
import App from './App.vue'
import store from './store'

const app = new Vue({
  store,
  el: '#app',
  render: h => h(App)
})

window.vue = app
window.store = store