// 导入vue实例
import Vue from 'vue'
//导入 App 组件
import App from './App'
//导入 vue router
import VueRouter from 'vue-router'

//导入hello组件
import HelloWorld from './components/HelloWorld'
//导入Aboiut组件
import About from './components/About'
import JsonExcel1 from './components/JsonExcel1'
import JsonExcel2 from './components/JsonExcel2'
// import BaseLearnLink from './components/BaseLearnLink'

import test1_hello from './components/base/第2章 数据绑定和第一个Vue应用/test1_hello'
import test2_changeBindingData from './components/base/第2章 数据绑定和第一个Vue应用/test2_changeBindingData'
import test3钩子周期 from './components/base/第2章 数据绑定和第一个Vue应用/test3钩子周期'
import test4插值与表达式 from './components/base/第2章 数据绑定和第一个Vue应用/test4插值与表达式'
import test5插值与表达式之vhtml from './components/base/第2章 数据绑定和第一个Vue应用/test5插值与表达式之vhtml'


import JsonExcel from 'vue-json-excel'
Vue.component('downloadExcel', JsonExcel)

//告诉vue使用vue-router路由组件
Vue.use(VueRouter)
//定义路由表
const routes = [
  //将根URL加入到路由表并声明对应Hello组件.
{ path: '/', component: HelloWorld },
//对应About组件的路由地址
{ path: '/about', component: About },
{ path: '/JsonExcel1', component: JsonExcel1 },
{ path: '/JsonExcel2', component: JsonExcel2 },


{ path: '/test1_hello', component: test1_hello },
{ path: '/test2_changeBindingData', component: test2_changeBindingData },
{ path: '/test3钩子周期', component: test3钩子周期 },
{ path: '/test4插值与表达式', component: test4插值与表达式 },
{ path: '/test5插值与表达式之vhtml', component: test5插值与表达式之vhtml },
{ path: '/test1_hello', component: test1_hello },
{ path: '/test1_hello', component: test1_hello },
{ path: '/test1_hello', component: test1_hello },
{ path: '/test1_hello', component: test1_hello },
{ path: '/test1_hello', component: test1_hello },

// { path: '/BaseLearnLink', component: BaseLearnLink },

]

// 创建路由器实例，并且传入`routes`变量作为路由。
// 你还可以传入别的参数，不过在这里尽量简单化就可以了
const router = new VueRouter({
  routes, 
  mode: 'history'
})
//实例化Vue实例
new Vue({
  //定义Vue绑定的跟元素
  el: '#app',
  //用<App/>代替根元素
  template: '<App/>',
  //声明App组件，这样上面的<App/>元素就可以生效
  components: { App },
  //将上面声明的路由器传递到根Vue实例
  router
}).$mount('#app')//将这个实例挂载到id=app的根元素上