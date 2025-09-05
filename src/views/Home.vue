<template>
  <div class="home">
    <div class="card">
      <h1 class="page-title">欢迎使用Vue3项目模板</h1>
      <p class="description">
        这是一个现代化的Vue3项目模板，集成了最新的开发工具和最佳实践。
      </p>
      
      <div class="features">
        <h2>主要特性</h2>
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12" :md="8" v-for="feature in features" :key="feature.title">
            <el-card class="feature-card" shadow="hover">
              <template #header>
                <div class="feature-header">
                  <el-icon :size="24" class="feature-icon">
                    <component :is="feature.icon" />
                  </el-icon>
                  <span class="feature-title">{{ feature.title }}</span>
                </div>
              </template>
              <p>{{ feature.description }}</p>
            </el-card>
          </el-col>
        </el-row>
      </div>
      
      <div class="actions">
        <el-button type="primary" size="large" @click="$router.push('/bigscreen')">
          大屏适配演示
        </el-button>
        <el-button type="success" size="large" @click="$router.push('/less')">
          Less演示
        </el-button>
        <el-button type="info" size="large" @click="$router.push('/counter')">
          计数器示例
        </el-button>
        <el-button size="large" @click="$router.push('/about')">
          了解更多
        </el-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { 
  Lightning, 
  Setting, 
  Monitor, 
  Document, 
  DataLine, 
  Connection 
} from '@element-plus/icons-vue'

interface Feature {
  title: string
  description: string
  icon: any
}

const features: Feature[] = [
  {
    title: 'Vue 3',
    description: '最新的Vue3框架，支持Composition API和更好的TypeScript集成',
    icon: Lightning
  },
  {
    title: 'TypeScript',
    description: '强类型支持，提供更好的开发体验和代码质量',
    icon: Document
  },
  {
    title: 'Less预处理器',
    description: '强大的CSS预处理器，支持变量、混合器、嵌套和函数',
    icon: Setting
  },
  {
    title: 'Vite',
    description: '极速的构建工具，提供快速的热更新和优化的构建',
    icon: Lightning
  },
  {
    title: '大屏适配',
    description: '基于PostCSS的响应式大屏适配方案，支持多种缩放模式',
    icon: Monitor
  },
  {
    title: 'Pinia状态管理',
    description: '新一代的Vue状态管理库，简单易用',
    icon: DataLine
  },
  {
    title: 'Vue Router',
    description: '官方路由管理器，支持动态路由和路由守卫',
    icon: Connection
  }
]
</script>

<style scoped>
.home {
  max-width: 1200px;
  margin: 0 auto;
}

.description {
  font-size: 16px;
  color: #606266;
  margin-bottom: 40px;
  line-height: 1.6;
}

.features {
  margin-bottom: 40px;
}

.features h2 {
  margin-bottom: 20px;
  color: #303133;
  font-size: 20px;
}

.feature-card {
  margin-bottom: 20px;
  height: 180px;
}

.feature-header {
  display: flex;
  align-items: center;
  gap: 12px;
}

.feature-icon {
  color: #409eff;
}

.feature-title {
  font-weight: 600;
  font-size: 16px;
}

.actions {
  text-align: center;
}

.actions .el-button {
  margin: 0 10px;
}

@media (max-width: 768px) {
  .actions .el-button {
    display: block;
    margin: 10px auto;
    width: 200px;
  }
}
</style>
