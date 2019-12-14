import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/login.vue'
import Cookie from 'js-cookie'

Vue.use(VueRouter);

//通用路由
const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/home',
    name: 'home',
    meta:{auth:true},
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    meta:{auth:true},
    component: function () {
      //告诉webpack最后会被编译成一个about的名字
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to,from,next)=>{
  if(to.meta.auth){
    if(Cookie.get('token')){
      next()
     }else {
      alert('请先登录');
      router.push('/')
    }
  }else {
    next()
  }
});
export default router
