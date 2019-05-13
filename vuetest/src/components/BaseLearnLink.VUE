<template>
  <div id="app">
  <h3>第2章 数据绑定和第一个Vue应用</h3>
  <ul>
    <li><router-link v-bind:to="'/hello'">hello</router-link></li>  
  </ul>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
<style>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>
