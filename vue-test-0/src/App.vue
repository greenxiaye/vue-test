<template>
  <div>
    <div>hhhh</div>
    <router-link to="/">主页</router-link>
    <router-link to="/home" tag="li" replace active-class="active"
      >首页</router-link
    >
    <router-link to="/about" tag="li" replace>关于</router-link>
    <!-- 相当于一个占位 -->
    <router-view></router-view>
  </div>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App'
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
.router-link-active {
  color: red;
}
.active {
  color: pink;
}
</style>
