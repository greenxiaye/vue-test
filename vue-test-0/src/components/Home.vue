<template>
  <div>
    我是首页
    <!-- 我是 home 如果直接这样to="home_news" 得到的就是8080/home_news
    而不是8080/home/home_news -->
    <router-link to="/home/home_news">新闻</router-link>
    <router-link to="/home/home_message">消息</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Home'
};
</script>

<style></style>
