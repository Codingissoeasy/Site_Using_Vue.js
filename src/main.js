import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import Lang from './components/Lang.vue'


Vue.use(VueRouter);

const Routs = [
  { path : '/' , compoment: Home},
  { path : '/Lang' , compoment: Lang}
]

const Routers = new VueRouter({
  Routs
})


Vue.config.productionTip = false

new Vue({
  Routers : Routers ,
  render: h => h(App),
}).$mount('#app')
