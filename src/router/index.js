import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Signup from '../views/Signup.vue';
import Login from '../views/Login.vue';
import Logout from '../views/Logout.vue';
import UsersShow from '../views/Users/Show.vue';
import UsersEdit from '../views/Users/Edit.vue';
import Test from '../views/Users/Test.vue';
import PostsNew from '../views/Posts/New.vue';
import PostsShow from '../views/Posts/Show.vue';
import CoursesIndex from '../views/Courses/Index.vue';
import CoursesShow from '../views/Courses/Show.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/signup',
    name: 'signup',
    component: Signup
  }, 
  {
    path: '/',
    name: 'home',
    component: Home
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
    component: UsersShow
  }, 
  {
    path: '/users/:id/edit',
    name: 'users-edit',
    component: UsersEdit
  },
  {
    path:'/test', 
    name: 'users-test', 
    component: Test
  }, 
  {
    path: '/courses/:id/posts/new',
    name: 'posts-new',
    component: PostsNew
  }, 
  {
    path: '/posts/:id',
    name: 'posts-show', 
    component: PostsShow
  }, 
  {
    path: '/courses',
    name: 'courses-index', 
    component: CoursesIndex
  },
  {
    path: '/courses/:id',
    name: 'courses-show',
    component: CoursesShow
  }

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
