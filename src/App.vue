<template>
  <div id="app">
    <!-- 顶部导航栏 -->
    <header class="app-header">
      <h1 class="app-title">Vue3 项目模板</h1>
      <div class="ui-lib-tabs">
        <div 
          class="tab-item"
          :class="{ active: currentLib === 'element' }"
          @click="switchLib('element')"
        >
          Element Plus
        </div>
        <div 
          class="tab-item"
          :class="{ active: currentLib === 'viewui' }"
          @click="switchLib('viewui')"
        >
          View UI Plus
        </div>
      </div>
    </header>

    <!-- Element Plus 导航栏 -->
    <el-menu
      v-if="currentLib === 'element'"
      mode="horizontal"
      :default-active="activeIndex"
      class="el-menu-demo element-menu"
      router
    >
      <el-menu-item index="/">
        <el-icon><House /></el-icon>
        首页
      </el-menu-item>
      <el-menu-item index="/about">
        <el-icon><InfoFilled /></el-icon>
        关于
      </el-menu-item>
      <el-menu-item index="/element">
        <el-icon><Grid /></el-icon>
        Element 演示
      </el-menu-item>
      <el-menu-item index="/counter">
        <el-icon><DataAnalysis /></el-icon>
        计数器
      </el-menu-item>
      <el-menu-item index="/bigscreen">
        <el-icon><Monitor /></el-icon>
        大屏适配
      </el-menu-item>
      <el-menu-item index="/less">
        <el-icon><Edit /></el-icon>
        Less演示
      </el-menu-item>
      <el-menu-item index="/comparison">
        <el-icon><Operation /></el-icon>
        UI库对比
      </el-menu-item>
    </el-menu>

    <!-- View UI Plus 导航栏 -->
    <div v-if="currentLib === 'viewui'" class="viewui-menu-container">
      <Menu 
        mode="horizontal" 
        :active-name="activeIndex"
        class="viewui-menu"
        @on-select="handleViewUiSelect"
      >
        <MenuItem name="/">
          <Icon type="ios-home" />
          首页
        </MenuItem>
        <MenuItem name="/about">
          <Icon type="ios-information-circle" />
          关于
        </MenuItem>
        <MenuItem name="/viewui">
          <Icon type="ios-apps" />
          View UI 演示
        </MenuItem>
        <MenuItem name="/counter">
          <Icon type="ios-calculator" />
          计数器
        </MenuItem>
        <MenuItem name="/bigscreen">
          <Icon type="ios-tv" />
          大屏适配
        </MenuItem>
        <MenuItem name="/less">
          <Icon type="ios-brush" />
          Less演示
        </MenuItem>
        <MenuItem name="/comparison">
          <Icon type="ios-swap" />
          UI库对比
        </MenuItem>
      </Menu>
    </div>

    <!-- 路由视图 -->
    <div class="main-content">
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import {
  House,
  InfoFilled,
  DataAnalysis,
  Monitor,
  Edit,
  Grid,
  Operation
} from '@element-plus/icons-vue'

const route = useRoute()
const router = useRouter()
const activeIndex = computed(() => route.path)

// 当前使用的UI库
const currentLib = ref<'element' | 'viewui'>('element')

// 根据当前路由判断应该显示哪个UI库的导航
watch(() => route.path, (newPath) => {
  if (newPath === '/viewui') {
    currentLib.value = 'viewui'
  } else if (newPath === '/element') {
    currentLib.value = 'element'
  }
}, { immediate: true })

// 切换UI库
const switchLib = (lib: 'element' | 'viewui') => {
  currentLib.value = lib
  if (lib === 'viewui' && route.path !== '/viewui') {
    router.push('/viewui')
  } else if (lib === 'element' && !['/', '/about', '/counter', '/bigscreen', '/less', '/element', '/comparison'].includes(route.path)) {
    router.push('/element')
  }
}

// View UI Plus 菜单选择处理
const handleViewUiSelect = (name: string) => {
  router.push(name)
}
</script>

<style scoped>
#app {
  min-height: 100vh;
  background-color: #f8f9fa;
}

/* 顶部导航栏 */
.app-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 16px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.app-title {
  margin: 0;
  font-size: 24px;
  font-weight: 600;
}

.ui-lib-tabs {
  display: flex;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 4px;
}

.tab-item {
  padding: 8px 16px;
  cursor: pointer;
  border-radius: 6px;
  transition: all 0.3s ease;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
  min-width: 120px;
  text-align: center;
}

.tab-item:hover {
  background: rgba(255, 255, 255, 0.1);
  color: white;
}

.tab-item.active {
  background: white;
  color: #667eea;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Element Plus 菜单样式 */
.element-menu {
  border-bottom: 2px solid #409eff;
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.element-menu .el-menu-item {
  color: #606266;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 8px;
}

.element-menu .el-menu-item:hover {
  background-color: #ecf5ff;
  color: #409eff;
}

.element-menu .el-menu-item.is-active {
  background-color: #409eff;
  color: white;
}

/* View UI Plus 菜单样式 */
.viewui-menu-container {
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-bottom: 2px solid #2d8cf0;
}

.viewui-menu {
  background: white !important;
}

.viewui-menu :deep(.ivu-menu-horizontal) {
  border-bottom: none;
}

.viewui-menu :deep(.ivu-menu-item) {
  color: #606266 !important;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 8px;
}

.viewui-menu :deep(.ivu-menu-item:hover) {
  background-color: #f0f7ff !important;
  color: #2d8cf0 !important;
}

.viewui-menu :deep(.ivu-menu-item-active) {
  background-color: #2d8cf0 !important;
  color: white !important;
  border-bottom-color: #2d8cf0;
}

.viewui-menu :deep(.ivu-icon) {
  margin-right: 6px;
}

/* 主要内容区域 */
.main-content {
  padding: 24px;
  max-width: 1400px;
  margin: 0 auto;
  background: #f8f9fa;
  min-height: calc(100vh - 120px);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .app-header {
    flex-direction: column;
    gap: 16px;
    padding: 16px;
  }
  
  .ui-lib-tabs {
    width: 100%;
  }
  
  .main-content {
    padding: 16px;
  }
}
</style>
