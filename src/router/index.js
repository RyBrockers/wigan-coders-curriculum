import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Layout/Home'
import Signup from '@/components/Auth/Signup'
import Login from '@/components/Auth/Login'
import Curriculum from '@/components/Curriculum/Curriculum'
import GettingStarted from '@/components/Curriculum/GettingStarted'
import Setup from '@/components/Curriculum/Setup'

import firebase from 'firebase'

Vue.use(Router)

const router = new Router({

  mode: 'history',
  routes: [

    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta: {
        requiresAuth: true
      }
    },

    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },

    {
      path: '/login',
      name: 'Login',
      component: Login
    },

    {
      path: '/curriculum',
      name: 'Curriculum',
      component: Curriculum,
      meta: {
        requiresAuth: true
      }
    },

    {
      path: '/getting-started',
      name: 'GettingStarted',
      component: GettingStarted
    },

    {
      path: '/setup',
      name: 'Setup',
      component: Setup
    },
  ]
})

router.beforeEach((to, from, next) => {
  // check to see if the route requires auth
  if (to.matched.some(rec => rec.meta.requiresAuth)) {
    // check if the user has auth
    let user = firebase.auth().currentUser
    if (user) {
      // user has auth, procced to route
      next()
    } else {
      // redirect user without auth to login
      next({ name: 'Login' })

    }
  } else {
    next()
  }
})


export default router
