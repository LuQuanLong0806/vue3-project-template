<template>
  <div class="not-found">
    <div class="card">
      <div class="error-content">
        <div class="error-code">404</div>
        <h1 class="error-title">页面未找到</h1>
        <p class="error-description">
          抱歉，您访问的页面不存在或已被移动。
        </p>
        
        <div class="error-actions">
          <el-button type="primary" size="large" @click="goHome">
            <el-icon><House /></el-icon>
            返回首页
          </el-button>
          <el-button size="large" @click="goBack">
            <el-icon><Back /></el-icon>
            返回上页
          </el-button>
        </div>
      </div>
      
      <div class="error-illustration">
        <el-result
          icon="error"
          title="404"
          sub-title="页面走丢了"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { House, Back } from '@element-plus/icons-vue'

const router = useRouter()

function goHome() {
  router.push('/')
}

function goBack() {
  router.go(-1)
}
</script>

<style scoped>
.not-found {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.error-content {
  padding: 40px 0;
}

.error-code {
  font-size: 120px;
  font-weight: bold;
  color: #e6a23c;
  margin-bottom: 20px;
  font-family: 'SF Mono', Monaco, Inconsolata, 'Roboto Mono', Consolas, 'Courier New', monospace;
}

.error-title {
  font-size: 24px;
  color: #303133;
  margin-bottom: 16px;
}

.error-description {
  font-size: 16px;
  color: #606266;
  margin-bottom: 40px;
  line-height: 1.6;
}

.error-actions .el-button {
  margin: 0 8px;
}

.error-illustration {
  margin-top: 20px;
}

@media (max-width: 768px) {
  .error-code {
    font-size: 80px;
  }
  
  .error-actions .el-button {
    display: block;
    margin: 8px auto;
    width: 140px;
  }
}
</style>
