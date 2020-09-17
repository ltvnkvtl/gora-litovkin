import Vue from 'vue'
import VueRouter from 'vue-router'
// import firebase from 'firebase/app'
import store from '@/store/index.js'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    meta: { auth: true },
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/signin',
    name: 'signin',
    component: () => import('@/views/Signin.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to, from, next) => {
//   const currentUser = firebase.auth().currentUser;
//   const requireAuth = to.matched.some(record => record.meta.auth);

//   if (requireAuth && !currentUser) {
//     next()
//   } else {
//     next('/signin');
//   }

// })

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.auth)) {
    if (store.getters.isUserAuthenticated) {
      next()
      return
    }
    next('/signin') 
  } else {
    next() 
  }
})

export default router
