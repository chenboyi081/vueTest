<template>
  <div id="app">
  <router-link v-bind:to="'/'">Home</router-link>
  <router-link v-bind:to="'/about'">About</router-link>
  <router-link v-bind:to="'/JsonExcel2'">JsonExcel2</router-link>
  <!-- <router-link v-bind:to="'/BaseLearnLink'">BaseLearnLink</router-link> -->
  
<br>
  <h3>第2章 数据绑定和第一个Vue应用</h3>
  <ul>
    <li><router-link v-bind:to="'/test1_hello'">test1_hello</router-link></li>  
  </ul>
   
  <!--路由管道标签，任何符合某一路由(route)信息的组件都会在这个标签内展示出来 -->
  <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>
<!-- css格式 -->
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>
