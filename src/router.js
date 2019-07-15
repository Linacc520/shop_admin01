import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from './components/Login.vue'
import Index from './components/Index.vue'

// 只要是模块化的环境,vue 要使用插件,就必须要使用vue.use方法
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', redirct: '/index' },
    { path: '/index', component: Index, name: 'index' },
    { path: '/login', component: Login, name: 'login' }
  ]
})
router.beforeEach((to, form, next) => {
  const token = localStorage.getItem('token')
  if (to.path === '/login' || token) {
    next()
  } else {
    next('/login')
  }
})
export default router
