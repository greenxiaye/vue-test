<template>
  <div>
    我是用户
    <div>{{ userId }}</div>
    <!-- 不需要有this 有也没事 -->
    <div>{{ $route.params.abc }}</div>
  </div>
</template>

<script>
export default {
  computed: {
    userId() {
      //当前活跃的路由 this.$route
      // 活跃状态，是指当前使用的组件
      return this.$route.params.abc;
    }
  }
};
</script>

<style></style>
