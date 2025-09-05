<template>
  <div class="counter">
    <div class="card">
      <h1 class="page-title">计数器示例</h1>
      <p class="description">
        这是一个使用Pinia状态管理的计数器示例，展示了如何在Vue3中管理全局状态。
      </p>
      
      <div class="counter-display">
        <div class="count-value">{{ count }}</div>
        <div class="count-info">
          <el-tag :type="isEven ? 'success' : 'warning'">
            {{ isEven ? '偶数' : '奇数' }}
          </el-tag>
          <el-tag type="info">双倍值: {{ doubleCount }}</el-tag>
        </div>
      </div>
      
      <div class="counter-controls">
        <el-button-group>
          <el-button 
            type="danger" 
            @click="decrement"
            :disabled="count <= 0"
            size="large"
          >
            <el-icon><Minus /></el-icon>
            减少
          </el-button>
          <el-button 
            type="primary" 
            @click="increment"
            size="large"
          >
            <el-icon><Plus /></el-icon>
            增加
          </el-button>
        </el-button-group>
      </div>
      
      <div class="counter-actions">
        <el-button @click="reset" size="large">
          <el-icon><Refresh /></el-icon>
          重置
        </el-button>
        <el-button @click="showSetDialog = true" size="large">
          <el-icon><Edit /></el-icon>
          设置值
        </el-button>
      </div>
      
      <!-- 设置数值对话框 -->
      <el-dialog
        v-model="showSetDialog"
        title="设置计数器值"
        width="400px"
      >
        <el-form @submit.prevent="handleSetCount">
          <el-form-item label="新值:">
            <el-input-number
              v-model="newValue"
              :min="0"
              :max="1000"
              controls-position="right"
              style="width: 100%"
            />
          </el-form-item>
        </el-form>
        <template #footer>
          <el-button @click="showSetDialog = false">取消</el-button>
          <el-button type="primary" @click="handleSetCount">确认</el-button>
        </template>
      </el-dialog>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useCounterStore } from '@/stores'
import { Plus, Minus, Refresh, Edit } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'

const counterStore = useCounterStore()
// 使用 storeToRefs 保持响应性
const { count, doubleCount, isEven } = storeToRefs(counterStore)
// 方法可以直接解构
const { increment, decrement, reset, setCount } = counterStore

const showSetDialog = ref(false)
const newValue = ref(0)

function handleSetCount() {
  setCount(newValue.value)
  showSetDialog.value = false
  ElMessage.success(`计数器已设置为 ${newValue.value}`)
}
</script>

<style scoped>
.counter {
  max-width: 600px;
  margin: 0 auto;
}

.description {
  font-size: 16px;
  color: #606266;
  margin-bottom: 40px;
  line-height: 1.6;
}

.counter-display {
  text-align: center;
  margin: 40px 0;
}

.count-value {
  font-size: 72px;
  font-weight: bold;
  color: #409eff;
  margin-bottom: 20px;
  font-family: 'SF Mono', Monaco, Inconsolata, 'Roboto Mono', Consolas, 'Courier New', monospace;
}

.count-info {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-bottom: 40px;
}

.counter-controls {
  text-align: center;
  margin: 30px 0;
}

.counter-actions {
  text-align: center;
  margin-top: 30px;
}

.counter-actions .el-button {
  margin: 0 8px;
}

@media (max-width: 768px) {
  .count-value {
    font-size: 48px;
  }
  
  .count-info {
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }
  
  .counter-actions .el-button {
    display: block;
    margin: 8px auto;
    width: 140px;
  }
}
</style>
