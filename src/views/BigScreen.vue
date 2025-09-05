<template>
  <div class="big-screen" ref="screenRef">
    <!-- 全屏背景 -->
    <div class="fullscreen-bg"></div>
    
    <!-- 大屏容器 -->
    <div class="screen-container" :class="{ 'screen-adapter': useAdapter }">
      <!-- 顶部标题栏 -->
      <header class="screen-header">
        <h1 class="screen-title responsive-title">大屏数据可视化演示</h1>
        <div class="screen-info">
          <el-tag type="info">{{ screenType }}</el-tag>
          <el-tag type="primary">{{ currentResolution }}</el-tag>
          <el-tag :type="useAdapter ? 'success' : 'warning'">
            {{ useAdapter ? '适配模式' : '原生模式' }}
          </el-tag>
        </div>
      </header>
      
      <!-- 控制面板 -->
      <div class="control-panel">
        <el-space>
          <el-switch
            v-model="useAdapter"
            active-text="启用适配"
            inactive-text="禁用适配"
            @change="toggleAdapter"
          />
          <el-select v-model="scaleMode" @change="changeScaleMode" style="width: 120px;">
            <el-option label="等比缩放" value="scale" />
            <el-option label="横向缩放" value="scaleX" />
            <el-option label="纵向缩放" value="scaleY" />
            <el-option label="无缩放" value="none" />
          </el-select>
          <el-button @click="resetScale" size="small">重置缩放</el-button>
        </el-space>
      </div>
      
      <!-- 数据展示区域 -->
      <div class="data-grid responsive-grid">
        <!-- 数据卡片 -->
        <div class="data-card" v-for="item in dataCards" :key="item.id">
          <div class="card-header">
            <h3 class="responsive-subtitle">{{ item.title }}</h3>
            <el-icon :color="item.color" size="24px">
              <component :is="item.icon" />
            </el-icon>
          </div>
          <div class="card-content">
            <div class="data-value" :style="{ color: item.color }">
              {{ item.value }}
            </div>
            <div class="data-unit">{{ item.unit }}</div>
            <div class="data-trend" :class="item.trend">
              <el-icon>
                <component :is="item.trend === 'up' ? 'ArrowUp' : 'ArrowDown'" />
              </el-icon>
              {{ item.change }}
            </div>
          </div>
        </div>
      </div>
      
      <!-- 图表区域 -->
      <div class="chart-section">
        <div class="chart-container">
          <h3 class="responsive-subtitle">数据趋势图</h3>
          <div class="mock-chart">
            <div class="chart-bars">
              <div 
                class="chart-bar" 
                v-for="(height, index) in chartData" 
                :key="index"
                :style="{ height: height + '%' }"
              ></div>
            </div>
          </div>
        </div>
        
        <div class="chart-container">
          <h3 class="responsive-subtitle">实时监控</h3>
          <div class="monitor-panel">
            <div class="monitor-item" v-for="item in monitorData" :key="item.name">
              <div class="monitor-label">{{ item.name }}</div>
              <el-progress 
                :percentage="item.value" 
                :color="getProgressColor(item.value)"
                :show-text="false"
              />
              <div class="monitor-value">{{ item.value }}%</div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- 底部信息 -->
      <footer class="screen-footer">
        <div class="footer-info">
          <span>当前分辨率: {{ currentResolution }}</span>
          <span>缩放比例: {{ scaleInfo }}</span>
          <span>屏幕类型: {{ screenType }}</span>
          <span>更新时间: {{ updateTime }}</span>
        </div>
      </footer>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, onUnmounted, computed } from 'vue'
import { 
  ScreenAdapter, 
  getScale, 
  getScreenType,
  getResponsiveFontSize 
} from '@/utils/screen'
import {
  DataLine,
  Monitor,
  Cpu,
  HardDrive,
  ArrowUp,
  ArrowDown
} from '@element-plus/icons-vue'

// 响应式数据
const screenRef = ref<HTMLElement>()
const useAdapter = ref(true)
const scaleMode = ref<'scale' | 'scaleX' | 'scaleY' | 'none'>('scale')
const updateTime = ref(new Date().toLocaleTimeString())

// 屏幕适配器实例
let adapter: ScreenAdapter | null = null

// 计算属性
const currentResolution = computed(() => {
  return `${window.innerWidth} × ${window.innerHeight}`
})

const screenType = computed(() => {
  return getScreenType()
})

const scaleInfo = computed(() => {
  const { scale, scaleX, scaleY } = getScale()
  switch (scaleMode.value) {
    case 'scale':
      return `${(scale * 100).toFixed(1)}%`
    case 'scaleX':
      return `X: ${(scaleX * 100).toFixed(1)}%`
    case 'scaleY':
      return `Y: ${(scaleY * 100).toFixed(1)}%`
    default:
      return '100%'
  }
})

// 数据卡片
const dataCards = reactive([
  {
    id: 1,
    title: '在线用户',
    value: '2,847',
    unit: '人',
    change: '+12.5%',
    trend: 'up',
    color: '#409eff',
    icon: 'Monitor'
  },
  {
    id: 2,
    title: 'CPU使用率',
    value: '68.5',
    unit: '%',
    change: '+2.1%',
    trend: 'up',
    color: '#67c23a',
    icon: 'Cpu'
  },
  {
    id: 3,
    title: '内存使用',
    value: '4.2',
    unit: 'GB',
    change: '-0.8%',
    trend: 'down',
    color: '#e6a23c',
    icon: 'HardDrive'
  },
  {
    id: 4,
    title: '网络流量',
    value: '156.8',
    unit: 'MB/s',
    change: '+5.2%',
    trend: 'up',
    color: '#f56c6c',
    icon: 'DataLine'
  }
])

// 图表数据
const chartData = ref([45, 68, 32, 89, 76, 54, 91, 38, 67, 85])

// 监控数据
const monitorData = reactive([
  { name: 'CPU', value: 68 },
  { name: '内存', value: 45 },
  { name: '磁盘', value: 78 },
  { name: '网络', value: 92 }
])

// 方法
function toggleAdapter() {
  if (useAdapter.value) {
    initAdapter()
  } else {
    destroyAdapter()
  }
}

function changeScaleMode() {
  if (adapter && useAdapter.value) {
    adapter.resize({
      width: 1920,
      height: 1080,
      mode: scaleMode.value
    })
  }
}

function resetScale() {
  if (adapter) {
    adapter.resize({
      width: 1920,
      height: 1080,
      mode: 'scale'
    })
    scaleMode.value = 'scale'
  }
}

function initAdapter() {
  if (screenRef.value) {
    adapter = new ScreenAdapter()
    adapter.init(screenRef.value.querySelector('.screen-container')!, {
      width: 1920,
      height: 1080,
      mode: scaleMode.value,
      autoResize: true
    })
  }
}

function destroyAdapter() {
  if (adapter) {
    adapter.destroy()
    adapter = null
  }
}

function getProgressColor(value: number) {
  if (value < 50) return '#67c23a'
  if (value < 80) return '#e6a23c'
  return '#f56c6c'
}

function updateData() {
  // 模拟数据更新
  updateTime.value = new Date().toLocaleTimeString()
  
  // 更新图表数据
  chartData.value = chartData.value.map(() => Math.floor(Math.random() * 100))
  
  // 更新监控数据
  monitorData.forEach(item => {
    item.value = Math.floor(Math.random() * 100)
  })
}

// 定时更新数据
let timer: NodeJS.Timeout | null = null

onMounted(() => {
  if (useAdapter.value) {
    initAdapter()
  }
  
  // 启动数据更新定时器
  timer = setInterval(updateData, 3000)
})

onUnmounted(() => {
  destroyAdapter()
  if (timer) {
    clearInterval(timer)
  }
})
</script>

<style scoped>
.big-screen {
  position: relative;
  min-height: 100vh;
  overflow: hidden;
}

.screen-container {
  position: relative;
  width: 100%;
  height: 100vh;
  padding: 20px;
  color: white;
  z-index: 1;
}

.screen-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  backdrop-filter: blur(10px);
}

.screen-title {
  margin: 0;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.screen-info {
  display: flex;
  gap: 12px;
}

.control-panel {
  margin-bottom: 20px;
  padding: 16px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  backdrop-filter: blur(10px);
}

.data-grid {
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  margin-bottom: 20px;
}

.data-card {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 24px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: transform 0.3s ease;
}

.data-card:hover {
  transform: translateY(-4px);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.card-header h3 {
  margin: 0;
  color: white;
}

.card-content {
  text-align: center;
}

.data-value {
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 8px;
}

.data-unit {
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 12px;
}

.data-trend {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  font-size: 14px;
}

.data-trend.up {
  color: #67c23a;
}

.data-trend.down {
  color: #f56c6c;
}

.chart-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 20px;
}

.chart-container {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 24px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.chart-container h3 {
  margin: 0 0 20px 0;
  color: white;
}

.mock-chart {
  height: 200px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}

.chart-bars {
  display: flex;
  align-items: flex-end;
  gap: 8px;
  height: 100%;
}

.chart-bar {
  width: 20px;
  background: linear-gradient(to top, #409eff, #67c23a);
  border-radius: 4px 4px 0 0;
  transition: height 0.5s ease;
}

.monitor-panel {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.monitor-item {
  display: flex;
  align-items: center;
  gap: 12px;
}

.monitor-label {
  width: 60px;
  color: white;
  font-size: 14px;
}

.monitor-value {
  width: 40px;
  text-align: right;
  color: white;
  font-size: 14px;
}

.screen-footer {
  position: absolute;
  bottom: 20px;
  left: 20px;
  right: 20px;
  padding: 16px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  backdrop-filter: blur(10px);
}

.footer-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: rgba(255, 255, 255, 0.8);
  font-size: 12px;
}

/* 移动端适配 */
@media (max-width: 768px) {
  .data-grid {
    grid-template-columns: 1fr;
  }
  
  .chart-section {
    grid-template-columns: 1fr;
  }
  
  .screen-header {
    flex-direction: column;
    gap: 16px;
  }
  
  .footer-info {
    flex-direction: column;
    gap: 8px;
    text-align: center;
  }
}
</style>
