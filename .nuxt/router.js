import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _755eaa55 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _599ee254 = () => interopDefault(import('../pages/test.vue' /* webpackChunkName: "pages/test" */))
const _da2a446a = () => interopDefault(import('../pages/test1.vue' /* webpackChunkName: "pages/test1" */))
const _a891f184 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/login",
    component: _755eaa55,
    name: "login"
  }, {
    path: "/test",
    component: _599ee254,
    name: "test"
  }, {
    path: "/test1",
    component: _da2a446a,
    name: "test1"
  }, {
    path: "/",
    component: _a891f184,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
