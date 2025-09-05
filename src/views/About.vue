<template>
  <div class="about">
    <div class="card">
      <h1 class="page-title">关于项目</h1>
      
      <el-descriptions :column="2" border>
        <el-descriptions-item label="项目名称">Vue3项目模板</el-descriptions-item>
        <el-descriptions-item label="版本">1.0.0</el-descriptions-item>
        <el-descriptions-item label="框架">Vue 3.4+</el-descriptions-item>
        <el-descriptions-item label="构建工具">Vite 5+</el-descriptions-item>
        <el-descriptions-item label="语言">TypeScript</el-descriptions-item>
        <el-descriptions-item label="UI框架">Element Plus</el-descriptions-item>
        <el-descriptions-item label="状态管理">Pinia</el-descriptions-item>
        <el-descriptions-item label="路由">Vue Router 4</el-descriptions-item>
      </el-descriptions>
      
      <div class="tech-stack">
        <h2>技术栈</h2>
        <div class="tech-grid">
          <el-tag
            v-for="tech in techStack"
            :key="tech.name"
            :type="tech.type"
            size="large"
            class="tech-tag"
          >
            {{ tech.name }}
          </el-tag>
        </div>
      </div>
      
      <div class="project-info">
        <h2>项目结构</h2>
        <el-tree
          :data="projectStructure"
          :props="{ children: 'children', label: 'name' }"
          default-expand-all
          node-key="id"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface TechItem {
  name: string
  type: 'primary' | 'success' | 'info' | 'warning' | 'danger'
}

interface TreeNode {
  id: string
  name: string
  children?: TreeNode[]
}

const techStack: TechItem[] = [
  { name: 'Vue 3', type: 'primary' },
  { name: 'TypeScript', type: 'primary' },
  { name: 'Vite', type: 'success' },
  { name: 'Element Plus', type: 'info' },
  { name: 'Pinia', type: 'warning' },
  { name: 'Vue Router', type: 'success' },
  { name: 'ESLint', type: 'info' },
  { name: 'Auto Import', type: 'warning' }
]

const projectStructure: TreeNode[] = [
  {
    id: '1',
    name: 'src/',
    children: [
      {
        id: '2',
        name: 'components/',
        children: [
          { id: '3', name: 'HelloWorld.vue' }
        ]
      },
      {
        id: '4',
        name: 'views/',
        children: [
          { id: '5', name: 'Home.vue' },
          { id: '6', name: 'About.vue' },
          { id: '7', name: 'Counter.vue' },
          { id: '8', name: 'NotFound.vue' }
        ]
      },
      {
        id: '9',
        name: 'stores/',
        children: [
          { id: '10', name: 'counter.ts' },
          { id: '11', name: 'user.ts' },
          { id: '12', name: 'index.ts' }
        ]
      },
      {
        id: '13',
        name: 'router/',
        children: [
          { id: '14', name: 'index.ts' }
        ]
      },
      { id: '15', name: 'App.vue' },
      { id: '16', name: 'main.ts' },
      { id: '17', name: 'style.css' }
    ]
  }
]
</script>

<style scoped>
.about {
  max-width: 1000px;
  margin: 0 auto;
}

.tech-stack {
  margin: 40px 0;
}

.tech-stack h2 {
  margin-bottom: 20px;
  color: #303133;
  font-size: 18px;
}

.tech-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.tech-tag {
  cursor: default;
}

.project-info {
  margin-top: 40px;
}

.project-info h2 {
  margin-bottom: 20px;
  color: #303133;
  font-size: 18px;
}
</style>
