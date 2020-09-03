import Vue from 'vue'
import VueRouter from 'vue-router'
import { routers } from './router'
Vue.use(VueRouter)
// 路由配置
/* eslint-disable no-unused-vars */
const RouterConfig = {
  mode: process.env.NODE_ENV === 'production' ? 'hash': 'history',
  base: process.env.BASE_URL,
  routes: routers,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
}
export const router = new VueRouter(RouterConfig)
