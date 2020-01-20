import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '@/views/Home.vue'
import login from '@/views/login.vue'
import register from '@/views/register.vue'
import about from '@/views/about.vue'
import firebase from 'firebase'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: home,
    meta:{
      requiresAuth:true
    }
  },
  {
    path: '/about',
    name: 'about',
    component: about,
    meta:{
      requiresAuth:true
    }
  },
  {
    path: '/Login',
    name: 'login',
    component: login,
    meta:{
      requiresGuest:true
    }
  },
  {
    path: '/Register',
    name: 'register',
    component: register,
    meta:{
      requiresGuest:true
    }
  }
]

const router = new VueRouter({
  routes
})

// Nav Guards
router.beforeEach((to,from,next)=>{
  //Check for requires auth guard
  if(to.matched.some(recored=>recored.meta.requiresAuth)){
    //check if not logged in
    if(!firebase.auth().currentUser){
      //go to login
      next({
        path:'/login',
        query:{
          redirect:to.fullPath
        }
      });
    }else{
      //Proceed to route
      next();
    }
  }else if(to.matched.some(recored=>recored.meta.requiresGuest)){
    if(firebase.auth().currentUser){
      next({
        path:'/',
        query:{
          redirect:to.fullPath
        }
      });
    }else{
      next();
    }
  }else{
    next();
  }
})
export default router

