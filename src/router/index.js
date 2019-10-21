import Vue from 'vue';
import VueRouter from 'vue-router';
import Signup from '../views/Signup.vue';
import Login from '../views/Login.vue';
import Logout from '../views/Logout.vue';
import UserShow from '../views/Users/Show.vue';
import Test from '../views/Users/Test.vue';
import PostsNew from '../views/Posts/New.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Signup
  }, 
  {
    path: '/login', 
    name: 'login', 
    component: Login
  }, 
  {
    path: '/logout', 
    name: 'logout',
    component: Logout
  }, 
  {
    path: '/users/:id', 
    name: 'users-show',
    component: UserShow
  }, 
  {
    path:'/test', 
    name: 'users-test', 
    component: Test
  }, 
  {
    path: '/posts/new',
    name: 'posts-new',
    component: PostsNew
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
