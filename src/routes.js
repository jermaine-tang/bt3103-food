
import PageContent from './components/PageContent.vue'
import Orders from './components/Orders.vue'
import Modify from './components/Modify.vue'
import Dashboard from './components/Dashboard.vue'
// import QuantityCounter from './components/QuantityCounter.vue'
// import Basket from './components/Basket.vue'
// import AddItem from './components/AddItem.vue'

export default [
  { path: '/', component: PageContent },
  { path: '/orders', component: Orders},
  { path: '/modify', component: Modify, props: true},
  { path: '/dashboard', component: Dashboard}

//  { path: '/qc', component: QuantityCounter },
//  { path: '/basket', component: Basket }
//  { path: '/add', component: AddItem}
]
