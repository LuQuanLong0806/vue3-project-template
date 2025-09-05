<template>
  <div class="viewui-demo">
    <!-- 页面标题 -->
    <Divider>View UI Plus 组件库示例</Divider>
    
    <!-- 基础组件 -->
    <Card :bordered="false" style="margin-bottom: 16px;">
      <template #title>
        <Icon type="ios-apps" /> 基础组件
      </template>
      
      <Row :gutter="16">
        <!-- 按钮组 -->
        <Col span="12">
          <h4>按钮组件</h4>
          <Space>
            <Button type="primary">Primary</Button>
            <Button type="ghost">Ghost</Button>
            <Button type="dashed">Dashed</Button>
            <Button type="text">Text</Button>
            <Button type="info">Info</Button>
            <Button type="success">Success</Button>
            <Button type="warning">Warning</Button>
            <Button type="error">Error</Button>
          </Space>
        </Col>
        
        <!-- 输入框 -->
        <Col span="12">
          <h4>输入框</h4>
          <Space direction="vertical" style="width: 100%;">
            <Input v-model="inputValue" placeholder="基础输入框" />
            <Input v-model="passwordValue" type="password" placeholder="密码输入框" />
            <Input v-model="searchValue" search placeholder="搜索输入框" />
          </Space>
        </Col>
      </Row>
    </Card>

    <!-- 表单组件 -->
    <Card :bordered="false" style="margin-bottom: 16px;">
      <template #title>
        <Icon type="ios-list" /> 表单组件
      </template>
      
      <Form ref="formRef" :model="formData" :rules="formRules" :label-width="120">
        <Row :gutter="16">
          <Col span="12">
            <FormItem label="姓名" prop="name">
              <Input v-model="formData.name" placeholder="请输入姓名" />
            </FormItem>
            
            <FormItem label="性别" prop="gender">
              <RadioGroup v-model="formData.gender">
                <Radio label="male">男</Radio>
                <Radio label="female">女</Radio>
              </RadioGroup>
            </FormItem>
            
            <FormItem label="城市" prop="city">
              <Select v-model="formData.city" placeholder="请选择城市">
                <Option value="beijing">北京</Option>
                <Option value="shanghai">上海</Option>
                <Option value="guangzhou">广州</Option>
                <Option value="shenzhen">深圳</Option>
              </Select>
            </FormItem>
          </Col>
          
          <Col span="12">
            <FormItem label="兴趣爱好" prop="hobbies">
              <CheckboxGroup v-model="formData.hobbies">
                <Checkbox label="reading">阅读</Checkbox>
                <Checkbox label="music">音乐</Checkbox>
                <Checkbox label="sports">运动</Checkbox>
                <Checkbox label="travel">旅游</Checkbox>
              </CheckboxGroup>
            </FormItem>
            
            <FormItem label="生日" prop="birthday">
              <DatePicker v-model="formData.birthday" placeholder="请选择生日" style="width: 100%;" />
            </FormItem>
            
            <FormItem label="个人简介" prop="description">
              <Input v-model="formData.description" type="textarea" :rows="3" placeholder="请输入个人简介" />
            </FormItem>
          </Col>
        </Row>
        
        <FormItem>
          <Space>
            <Button type="primary" @click="handleSubmit">提交</Button>
            <Button @click="handleReset">重置</Button>
          </Space>
        </FormItem>
      </Form>
    </Card>

    <!-- 数据展示 -->
    <Card :bordered="false" style="margin-bottom: 16px;">
      <template #title>
        <Icon type="ios-grid" /> 数据展示
      </template>
      
      <Row :gutter="16">
        <Col span="12">
          <h4>统计数据</h4>
          <Row :gutter="16">
            <Col span="6">
              <Card :bordered="false" class="stat-card">
                <div class="stat-number">1,234</div>
                <div class="stat-label">总用户数</div>
              </Card>
            </Col>
            <Col span="6">
              <Card :bordered="false" class="stat-card">
                <div class="stat-number">567</div>
                <div class="stat-label">活跃用户</div>
              </Card>
            </Col>
            <Col span="6">
              <Card :bordered="false" class="stat-card">
                <div class="stat-number">89</div>
                <div class="stat-label">今日订单</div>
              </Card>
            </Col>
            <Col span="6">
              <Card :bordered="false" class="stat-card">
                <div class="stat-number">12</div>
                <div class="stat-label">待处理</div>
              </Card>
            </Col>
          </Row>
        </Col>
        
        <Col span="12">
          <h4>进度展示</h4>
          <Space direction="vertical" style="width: 100%;">
            <div>
              <p>项目完成度</p>
              <Progress :percent="75" status="active" />
            </div>
            <div>
              <p>任务进度</p>
              <Progress :percent="60" />
            </div>
            <div>
              <p>系统性能</p>
              <Progress :percent="90" status="success" />
            </div>
          </Space>
        </Col>
      </Row>
    </Card>

    <!-- 表格展示 -->
    <Card :bordered="false" style="margin-bottom: 16px;">
      <template #title>
        <Icon type="ios-list-box" /> 数据表格
      </template>
      
      <Table :columns="tableColumns" :data="tableData" stripe>
        <template #name="{ row }">
          <strong>{{ row.name }}</strong>
        </template>
        <template #action="{ row }">
          <Space>
            <Button type="primary" size="small" @click="handleEdit(row)">编辑</Button>
            <Button type="error" size="small" @click="handleDelete(row)">删除</Button>
          </Space>
        </template>
      </Table>
    </Card>

    <!-- 反馈组件 -->
    <Card :bordered="false">
      <template #title>
        <Icon type="ios-chatbubbles" /> 反馈组件
      </template>
      
      <Row :gutter="16">
        <Col span="8">
          <h4>消息提示</h4>
          <Space direction="vertical" style="width: 100%;">
            <Button @click="showSuccess">成功消息</Button>
            <Button @click="showInfo">信息消息</Button>
            <Button @click="showWarning">警告消息</Button>
            <Button @click="showError">错误消息</Button>
          </Space>
        </Col>
        
        <Col span="8">
          <h4>通知</h4>
          <Space direction="vertical" style="width: 100%;">
            <Button @click="showNoticeSuccess">成功通知</Button>
            <Button @click="showNoticeInfo">信息通知</Button>
            <Button @click="showNoticeWarning">警告通知</Button>
            <Button @click="showNoticeError">错误通知</Button>
          </Space>
        </Col>
        
        <Col span="8">
          <h4>对话框</h4>
          <Space direction="vertical" style="width: 100%;">
            <Button @click="showModal">普通对话框</Button>
            <Button @click="showConfirm">确认对话框</Button>
            <Button @click="showAlert">警告对话框</Button>
          </Space>
        </Col>
      </Row>
    </Card>

    <!-- 对话框 -->
    <Modal
      v-model="modalVisible"
      title="View UI Plus 对话框"
      @on-ok="handleModalOk"
      @on-cancel="handleModalCancel"
    >
      <p>这是一个 View UI Plus 的对话框示例。</p>
      <p>您可以在这里放置任何内容。</p>
    </Modal>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { Message, Notice, Modal } from 'view-ui-plus'

// 响应式数据
const inputValue = ref('')
const passwordValue = ref('')
const searchValue = ref('')
const modalVisible = ref(false)

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

// 表格列配置
const tableColumns = [
  {
    title: '姓名',
    key: 'name',
    slot: 'name'
  },
  {
    title: '年龄',
    key: 'age'
  },
  {
    title: '职业',
    key: 'job'
  },
  {
    title: '城市',
    key: 'city'
  },
  {
    title: '操作',
    key: 'action',
    slot: 'action'
  }
]

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
  Message.success('表单提交成功！')
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
  Message.info('表单已重置')
}

// 表格操作
const handleEdit = (row: any) => {
  console.log('编辑:', row)
  Message.info(`编辑用户: ${row.name}`)
}

const handleDelete = (row: any) => {
  console.log('删除:', row)
  Modal.confirm({
    title: '确认删除',
    content: `确定要删除用户 ${row.name} 吗？`,
    onOk: () => {
      Message.success('删除成功')
    }
  })
}

// 消息提示
const showSuccess = () => Message.success('这是一条成功消息')
const showInfo = () => Message.info('这是一条信息消息')
const showWarning = () => Message.warning('这是一条警告消息')
const showError = () => Message.error('这是一条错误消息')

// 通知
const showNoticeSuccess = () => Notice.success({
  title: '成功通知',
  desc: '这是一条成功的通知信息'
})
const showNoticeInfo = () => Notice.info({
  title: '信息通知',
  desc: '这是一条普通的通知信息'
})
const showNoticeWarning = () => Notice.warning({
  title: '警告通知',
  desc: '这是一条警告的通知信息'
})
const showNoticeError = () => Notice.error({
  title: '错误通知',
  desc: '这是一条错误的通知信息'
})

// 对话框
const showModal = () => {
  modalVisible.value = true
}

const showConfirm = () => {
  Modal.confirm({
    title: '确认操作',
    content: '您确定要执行此操作吗？',
    onOk: () => {
      Message.success('操作已确认')
    },
    onCancel: () => {
      Message.info('操作已取消')
    }
  })
}

const showAlert = () => {
  Modal.warning({
    title: '警告',
    content: '这是一个警告对话框'
  })
}

const handleModalOk = () => {
  modalVisible.value = false
  Message.success('对话框确认')
}

const handleModalCancel = () => {
  modalVisible.value = false
  Message.info('对话框取消')
}
</script>

<style scoped>
.viewui-demo {
  padding: 20px;
}

.stat-card {
  text-align: center;
  padding: 20px 0;
}

.stat-number {
  font-size: 28px;
  font-weight: bold;
  color: #2d8cf0;
  margin-bottom: 8px;
}

.stat-label {
  color: #999;
  font-size: 14px;
}

h4 {
  margin-bottom: 16px;
  color: #333;
  border-left: 4px solid #2d8cf0;
  padding-left: 12px;
}
</style>
