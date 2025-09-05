<template>
  <div class="element-demo">
    <!-- 页面标题 -->
    <el-divider>Element Plus 组件库示例</el-divider>
    
    <!-- 基础组件 -->
    <el-card shadow="hover" class="demo-card">
      <template #header>
        <div class="card-header">
          <el-icon><Grid /></el-icon>
          <span>基础组件</span>
        </div>
      </template>
      
      <el-row :gutter="20">
        <!-- 按钮组 -->
        <el-col :span="12">
          <h4>按钮组件</h4>
          <el-space wrap>
            <el-button type="primary">Primary</el-button>
            <el-button type="success">Success</el-button>
            <el-button type="info">Info</el-button>
            <el-button type="warning">Warning</el-button>
            <el-button type="danger">Danger</el-button>
            <el-button>Default</el-button>
            <el-button text>Text</el-button>
          </el-space>
        </el-col>
        
        <!-- 输入框 -->
        <el-col :span="12">
          <h4>输入框</h4>
          <el-space direction="vertical" style="width: 100%;">
            <el-input v-model="inputValue" placeholder="基础输入框" />
            <el-input v-model="passwordValue" type="password" placeholder="密码输入框" show-password />
            <el-input v-model="searchValue" placeholder="搜索输入框">
              <template #suffix>
                <el-icon class="el-input__icon"><Search /></el-icon>
              </template>
            </el-input>
          </el-space>
        </el-col>
      </el-row>
    </el-card>

    <!-- 表单组件 -->
    <el-card shadow="hover" class="demo-card">
      <template #header>
        <div class="card-header">
          <el-icon><Document /></el-icon>
          <span>表单组件</span>
        </div>
      </template>
      
      <el-form ref="formRef" :model="formData" :rules="formRules" label-width="120px">
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="姓名" prop="name">
              <el-input v-model="formData.name" placeholder="请输入姓名" />
            </el-form-item>
            
            <el-form-item label="性别" prop="gender">
              <el-radio-group v-model="formData.gender">
                <el-radio label="male">男</el-radio>
                <el-radio label="female">女</el-radio>
              </el-radio-group>
            </el-form-item>
            
            <el-form-item label="城市" prop="city">
              <el-select v-model="formData.city" placeholder="请选择城市" style="width: 100%;">
                <el-option label="北京" value="beijing" />
                <el-option label="上海" value="shanghai" />
                <el-option label="广州" value="guangzhou" />
                <el-option label="深圳" value="shenzhen" />
              </el-select>
            </el-form-item>
          </el-col>
          
          <el-col :span="12">
            <el-form-item label="兴趣爱好" prop="hobbies">
              <el-checkbox-group v-model="formData.hobbies">
                <el-checkbox label="reading">阅读</el-checkbox>
                <el-checkbox label="music">音乐</el-checkbox>
                <el-checkbox label="sports">运动</el-checkbox>
                <el-checkbox label="travel">旅游</el-checkbox>
              </el-checkbox-group>
            </el-form-item>
            
            <el-form-item label="生日" prop="birthday">
              <el-date-picker v-model="formData.birthday" type="date" placeholder="请选择生日" style="width: 100%;" />
            </el-form-item>
            
            <el-form-item label="个人简介" prop="description">
              <el-input v-model="formData.description" type="textarea" :rows="3" placeholder="请输入个人简介" />
            </el-form-item>
          </el-col>
        </el-row>
        
        <el-form-item>
          <el-space>
            <el-button type="primary" @click="handleSubmit">
              <el-icon><Check /></el-icon>
              提交
            </el-button>
            <el-button @click="handleReset">
              <el-icon><RefreshRight /></el-icon>
              重置
            </el-button>
          </el-space>
        </el-form-item>
      </el-form>
    </el-card>

    <!-- 数据展示 -->
    <el-card shadow="hover" class="demo-card">
      <template #header>
        <div class="card-header">
          <el-icon><TrendCharts /></el-icon>
          <span>数据展示</span>
        </div>
      </template>
      
      <el-row :gutter="20">
        <el-col :span="12">
          <h4>统计数据</h4>
          <el-row :gutter="16">
            <el-col :span="6">
              <el-card class="stat-card" shadow="hover">
                <el-statistic title="总用户数" :value="1234">
                  <template #prefix>
                    <el-icon><User /></el-icon>
                  </template>
                </el-statistic>
              </el-card>
            </el-col>
            <el-col :span="6">
              <el-card class="stat-card" shadow="hover">
                <el-statistic title="活跃用户" :value="567">
                  <template #prefix>
                    <el-icon><UserFilled /></el-icon>
                  </template>
                </el-statistic>
              </el-card>
            </el-col>
            <el-col :span="6">
              <el-card class="stat-card" shadow="hover">
                <el-statistic title="今日订单" :value="89">
                  <template #prefix>
                    <el-icon><ShoppingBag /></el-icon>
                  </template>
                </el-statistic>
              </el-card>
            </el-col>
            <el-col :span="6">
              <el-card class="stat-card" shadow="hover">
                <el-statistic title="待处理" :value="12">
                  <template #prefix>
                    <el-icon><Clock /></el-icon>
                  </template>
                </el-statistic>
              </el-card>
            </el-col>
          </el-row>
        </el-col>
        
        <el-col :span="12">
          <h4>进度展示</h4>
          <el-space direction="vertical" style="width: 100%;">
            <div>
              <p>项目完成度</p>
              <el-progress :percentage="75" status="success" :stroke-width="10" />
            </div>
            <div>
              <p>任务进度</p>
              <el-progress :percentage="60" :stroke-width="10" />
            </div>
            <div>
              <p>系统性能</p>
              <el-progress :percentage="90" status="warning" :stroke-width="10" />
            </div>
          </el-space>
        </el-col>
      </el-row>
    </el-card>

    <!-- 表格展示 -->
    <el-card shadow="hover" class="demo-card">
      <template #header>
        <div class="card-header">
          <el-icon><Grid /></el-icon>
          <span>数据表格</span>
        </div>
      </template>
      
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column prop="name" label="姓名" width="120">
          <template #default="{ row }">
            <el-tag type="success">{{ row.name }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="age" label="年龄" width="80" />
        <el-table-column prop="job" label="职业" width="150" />
        <el-table-column prop="city" label="城市" width="100" />
        <el-table-column fixed="right" label="操作" width="160">
          <template #default="{ row }">
            <el-space>
              <el-button link type="primary" size="small" @click="handleEdit(row)">
                <el-icon><Edit /></el-icon>
                编辑
              </el-button>
              <el-button link type="danger" size="small" @click="handleDelete(row)">
                <el-icon><Delete /></el-icon>
                删除
              </el-button>
            </el-space>
          </template>
        </el-table-column>
      </el-table>
    </el-card>

    <!-- 反馈组件 -->
    <el-card shadow="hover" class="demo-card">
      <template #header>
        <div class="card-header">
          <el-icon><ChatDotSquare /></el-icon>
          <span>反馈组件</span>
        </div>
      </template>
      
      <el-row :gutter="20">
        <el-col :span="8">
          <h4>消息提示</h4>
          <el-space direction="vertical" style="width: 100%;">
            <el-button @click="showSuccess">
              <el-icon><SuccessFilled /></el-icon>
              成功消息
            </el-button>
            <el-button @click="showInfo">
              <el-icon><InfoFilled /></el-icon>
              信息消息
            </el-button>
            <el-button @click="showWarning">
              <el-icon><WarningFilled /></el-icon>
              警告消息
            </el-button>
            <el-button @click="showError">
              <el-icon><CircleCloseFilled /></el-icon>
              错误消息
            </el-button>
          </el-space>
        </el-col>
        
        <el-col :span="8">
          <h4>通知</h4>
          <el-space direction="vertical" style="width: 100%;">
            <el-button type="success" @click="showNoticeSuccess">成功通知</el-button>
            <el-button type="info" @click="showNoticeInfo">信息通知</el-button>
            <el-button type="warning" @click="showNoticeWarning">警告通知</el-button>
            <el-button type="danger" @click="showNoticeError">错误通知</el-button>
          </el-space>
        </el-col>
        
        <el-col :span="8">
          <h4>对话框</h4>
          <el-space direction="vertical" style="width: 100%;">
            <el-button @click="showDialog">普通对话框</el-button>
            <el-button @click="showConfirm">确认对话框</el-button>
            <el-button @click="showAlert">警告对话框</el-button>
          </el-space>
        </el-col>
      </el-row>
    </el-card>

    <!-- 对话框 -->
    <el-dialog
      v-model="dialogVisible"
      title="Element Plus 对话框"
      width="500px"
      @close="handleDialogClose"
    >
      <p>这是一个 Element Plus 的对话框示例。</p>
      <p>您可以在这里放置任何内容。</p>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="handleDialogConfirm">确认</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { ElMessage, ElNotification, ElMessageBox } from 'element-plus'
import {
  Grid,
  Document,
  TrendCharts,
  ChatDotSquare,
  User,
  UserFilled,
  ShoppingBag,
  Clock,
  Edit,
  Delete,
  Search,
  Check,
  RefreshRight,
  SuccessFilled,
  InfoFilled,
  WarningFilled,
  CircleCloseFilled
} from '@element-plus/icons-vue'

// 响应式数据
const inputValue = ref('')
const passwordValue = ref('')
const searchValue = ref('')
const dialogVisible = ref(false)

// 表单数据
const formData = reactive({
  name: '',
  gender: '',
  city: '',
  hobbies: [],
  birthday: '',
  description: ''
})

// 表单验证规则
const formRules = {
  name: [
    { required: true, message: '请输入姓名', trigger: 'blur' }
  ],
  gender: [
    { required: true, message: '请选择性别', trigger: 'change' }
  ],
  city: [
    { required: true, message: '请选择城市', trigger: 'change' }
  ]
}

// 表格数据
const tableData = [
  {
    id: 1,
    name: '张三',
    age: 28,
    job: '前端开发',
    city: '北京'
  },
  {
    id: 2,
    name: '李四',
    age: 32,
    job: '后端开发',
    city: '上海'
  },
  {
    id: 3,
    name: '王五',
    age: 26,
    job: 'UI设计师',
    city: '深圳'
  }
]

// 表单提交
const handleSubmit = () => {
  console.log('表单数据:', formData)
  ElMessage.success('表单提交成功！')
}

// 表单重置
const handleReset = () => {
  Object.keys(formData).forEach(key => {
    if (Array.isArray(formData[key])) {
      formData[key] = []
    } else {
      formData[key] = ''
    }
  })
  ElMessage.info('表单已重置')
}

// 表格操作
const handleEdit = (row: any) => {
  console.log('编辑:', row)
  ElMessage.info(`编辑用户: ${row.name}`)
}

const handleDelete = (row: any) => {
  console.log('删除:', row)
  ElMessageBox.confirm(
    `确定要删除用户 ${row.name} 吗？`,
    '确认删除',
    {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning',
    }
  ).then(() => {
    ElMessage.success('删除成功')
  }).catch(() => {
    ElMessage.info('取消删除')
  })
}

// 消息提示
const showSuccess = () => ElMessage.success('这是一条成功消息')
const showInfo = () => ElMessage.info('这是一条信息消息')
const showWarning = () => ElMessage.warning('这是一条警告消息')
const showError = () => ElMessage.error('这是一条错误消息')

// 通知
const showNoticeSuccess = () => ElNotification({
  title: '成功通知',
  message: '这是一条成功的通知信息',
  type: 'success'
})
const showNoticeInfo = () => ElNotification({
  title: '信息通知',
  message: '这是一条普通的通知信息',
  type: 'info'
})
const showNoticeWarning = () => ElNotification({
  title: '警告通知',
  message: '这是一条警告的通知信息',
  type: 'warning'
})
const showNoticeError = () => ElNotification({
  title: '错误通知',
  message: '这是一条错误的通知信息',
  type: 'error'
})

// 对话框
const showDialog = () => {
  dialogVisible.value = true
}

const showConfirm = () => {
  ElMessageBox.confirm(
    '您确定要执行此操作吗？',
    '确认操作',
    {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'info',
    }
  ).then(() => {
    ElMessage.success('操作已确认')
  }).catch(() => {
    ElMessage.info('操作已取消')
  })
}

const showAlert = () => {
  ElMessageBox.alert('这是一个警告对话框', '警告', {
    confirmButtonText: '知道了',
    type: 'warning'
  })
}

const handleDialogConfirm = () => {
  dialogVisible.value = false
  ElMessage.success('对话框确认')
}

const handleDialogClose = () => {
  ElMessage.info('对话框关闭')
}
</script>

<style scoped>
.element-demo {
  padding: 20px;
}

.demo-card {
  margin-bottom: 20px;
}

.card-header {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
  color: #409eff;
}

.stat-card {
  text-align: center;
  background: linear-gradient(135deg, #f6f9fc 0%, #ffffff 100%);
  border: 1px solid #e4e7ed;
}

.stat-card :deep(.el-statistic__content) {
  color: #409eff;
}

h4 {
  margin-bottom: 16px;
  color: #333;
  border-left: 4px solid #409eff;
  padding-left: 12px;
  font-weight: 600;
}

.dialog-footer {
  display: flex;
  gap: 12px;
  justify-content: flex-end;
}
</style>
