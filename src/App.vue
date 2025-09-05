<template>
  <div id="app">
    <!-- 导航栏 -->
    <el-menu
      mode="horizontal"
      :default-active="activeIndex"
      class="el-menu-demo"
      router
    >
      <el-menu-item index="/">首页</el-menu-item>
      <el-menu-item index="/about">关于</el-menu-item>
      <el-menu-item index="/counter">计数器</el-menu-item>
      <el-menu-item index="/bigscreen">大屏适配</el-menu-item>
      <el-menu-item index="/less">Less演示</el-menu-item>
    </el-menu>

    <!-- 路由视图 -->
    <div class="main-content">
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const activeIndex = computed(() => route.path)
</script>

<style scoped>
#app {
  min-height: 100vh;
}

.main-content {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.el-menu-demo {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
