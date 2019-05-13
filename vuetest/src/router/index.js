import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// import BaseLearnLink from '@/components/BaseLearnLink'
// import test1_hello from './components/base/第2章 数据绑定和第一个Vue应用/test1_hello'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    // {
    //   path: '/base',
    //   name: 'BaseLearnLink',
    //   component: BaseLearnLink,
    //   children:[
    //     {
    //       path: 'test1_hello',
    //       name: 'test1_hello',
    //       component: test1_hello,
    //     }
    //   ]     
    // }
  ]
})
