import VueRouter from 'vue-router'
import Vue from 'vue'
Vue.use(VueRouter)
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css'// Progress 进度条样式
import LoadingComponent from '@/components/LoadingComponent'
import ErrorComponent from '@/components/ErrorComponent'
import SubErrorComponent from '@/components/SubErrorComponent'
console.log(LoadingComponent, 'LoadingComponent')
const routes = [
  {
    path: '/',
    redirect: 'home',
  },
  {
    path: '/home',
    name: 'home',
    // component: () => import('@/components/Home.vue')
    component: () => ({
      component: import('@/components/Home.vue'),
      // 异步组件加载时使用的组件
      loading: LoadingComponent,
      // 加载失败时使用的组件
      error: ErrorComponent,
      // 展示加载时组件的延时时间。默认值是 200 (毫秒)
      delay: 100,
      // 如果提供了超时时间且组件加载也超时了，
      // 则使用加载失败时使用的组件。默认值是：`Infinity`
      timeout: 1000
    })
  },
  {
    path: '/subhome',
    name: 'subhome',
    component: () => ({
      component: import('@/components/SubHome.vue'),
      // 异步组件加载时使用的组件
      loading: LoadingComponent,
      // 加载失败时使用的组件
      error: SubErrorComponent,
      // 展示加载时组件的延时时间。默认值是 200 (毫秒)
      delay: 200,
      // 如果提供了超时时间且组件加载也超时了，
      // 则使用加载失败时使用的组件。默认值是：`Infinity`
      timeout: 1000
    })
  }
]

// const normalizeRouteList = routes => {

// }

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  NProgress.start()
  console.log(to, from, next)
  next()
})

router.afterEach(() => {
  NProgress.done()
})



export default router