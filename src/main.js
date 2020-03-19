import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// This is where the Vue app is created. Every component we make is included in the root component - App
new Vue({
  render: h => h(App),
}).$mount('#app')
