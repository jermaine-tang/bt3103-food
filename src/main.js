import Vue from 'vue'
import App from './App.vue'
import QuantityCounter from './components/QuantityCounter.vue'
import PageContent from './components/PageContent.vue'
import VueRouter from 'vue-router'
import Routes from './routes.js'
import Orders from './components/Orders.vue'
import Modify from './components/Modify.vue'
import Dashboard from './components/Dashboard.vue'
//import CallAPI from './components/CallAPI.vue'


Vue.config.productionTip = false
Vue.component('qc', QuantityCounter)
Vue.component('pc', PageContent)
Vue.component('o', Orders)
Vue.component('m', Modify)
Vue.component('d', Dashboard)
//Vue.component('ca', CallAPI)
Vue.use(VueRouter)


const myRouter = new VueRouter({
  routes: Routes,
  mode: 'history'
});

new Vue({
  render: h => h(App),
  router: myRouter
}).$mount('#app')
