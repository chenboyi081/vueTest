<template>
<div id="app">
<input type="text" v-model="name1" placeholder="你的名字">
<h1>你好，{{ name1 }}</h1>
</div>
</template>

<script>
export default {
     name: 'app',
    data() {
    return {
        name1:''
    }
  }
}
</script>