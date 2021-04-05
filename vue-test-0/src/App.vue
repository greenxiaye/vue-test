<template>
  <div>
    <div>hhhh</div>
    <router-link to="/home">首页</router-link>
    <router-link to="/about/aboutSome">关于</router-link>
    <!-- 注意这边是动态的拼接 而不是拼接字符串 所以:to -->
    <!-- <router-link :to="'/user/' + userId">用户</router-link> -->
    <!-- 必须加入v-bind: 才能解析to后面的为一个对象 -->
    <!-- <router-link
      :to="{ path: '/profile', query: { name: 'why', age: 18, height: 1.65 } }"
      >我的</router-link
    > -->
    <!-- <button @click="homeClick">首页</button>
    <button @click="aboutClick">关于</button> -->
    <button @click="userClick">用户</button>
    <button @click="profileClick">档案</button>
    <!-- 相当于一个占位 -->
    <router-view></router-view>
  </div>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  data() {
    return {
      userId: 'Betty'
    };
  },
  methods: {
    homeClick() {
      // router对象
      // this.$router.push('/home');
      this.$router.replace('/home');
    },
    aboutClick() {
      this.$router.replace('/about');
    },
    userClick() {
      this.$router.push('/' + this.userId);
    },
    profileClick() {
      this.$router.push({
        path: '/profile',
        query: { name: 'why', age: 18, height: 1.65 }
      });
    }
  }
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
