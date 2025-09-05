# Vue3 项目模板

这是一个现代化的 Vue3 项目模板，集成了最新的开发工具和最佳实践，包含**双UI库集成**、**PostCSS大屏适配方案**和**Less预处理器**。

## 🚀 主要特性

- ⚡ **Vue 3** - 最新的 Vue.js 框架
- 🔥 **Vite** - 极速的构建工具
- 💪 **TypeScript** - 强类型支持
- 🎨 **双UI库集成** - Element Plus + View UI Plus 双UI组件库支持
- 🔄 **UI库对比** - 详细的组件库对比和使用指南
- 🛣️ **Vue Router 4** - 官方路由管理器
- 📦 **Pinia** - 新一代状态管理
- 🎯 **Auto Import** - 自动导入组件和 API
- 📱 **响应式设计** - 适配各种设备
- 🖥️ **大屏适配** - PostCSS px-to-viewport 大屏适配方案
- 🎨 **Less预处理器** - 强大的CSS预处理器支持

## 📦 技术栈

- [Vue 3](https://vuejs.org/) - 渐进式 JavaScript 框架
- [TypeScript](https://www.typescriptlang.org/) - JavaScript 的超集
- [Vite](https://vitejs.dev/) - 下一代前端构建工具
- [Element Plus](https://element-plus.org/) - Vue 3 企业级组件库
- [View UI Plus](https://www.iviewui.com/view-ui-plus) - Vue 3 轻量级组件库
- [Vue Router](https://router.vuejs.org/) - Vue.js 官方路由
- [Pinia](https://pinia.vuejs.org/) - Vue 状态管理
- [VueUse](https://vueuse.org/) - Vue 组合式函数集合
- [PostCSS](https://postcss.org/) - CSS 处理工具
- [Less](https://lesscss.org/) - CSS 预处理器
- [postcss-px-to-viewport](https://github.com/evrone/postcss-px-to-viewport) - px 转 vw 单位

## 🛠️ 开发

### 环境要求

- Node.js >= 16.0.0
- npm >= 7.0.0 (推荐使用 pnpm)

### 安装依赖

\`\`\`bash
npm install
# 或
pnpm install
\`\`\`

### 启动开发服务器

\`\`\`bash
npm run dev
# 或
pnpm dev
\`\`\`

开发服务器将在 http://localhost:3000 启动

### 构建生产版本

\`\`\`bash
npm run build
# 或
pnpm build
\`\`\`

### 预览生产构建

\`\`\`bash
npm run preview
# 或
pnpm preview
\`\`\`

### 类型检查

\`\`\`bash
npm run type-check
# 或
pnpm type-check
\`\`\`

## 📁 项目结构

\`\`\`
src/
├── components/          # 可复用组件
├── views/              # 页面组件
├── stores/             # Pinia 状态管理
├── router/             # 路由配置
├── utils/              # 工具函数
│   └── screen.ts       # 大屏适配工具
├── styles/             # 样式文件
│   ├── variables.less  # Less 变量
│   ├── mixins.less     # Less 混合器
│   └── index.less      # 样式主入口
├── App.vue             # 根组件
├── main.ts             # 应用入口
└── style.css           # 全局样式(已迁移到Less)
\`\`\`

## ✨ 功能特性

### 自动导入

项目配置了自动导入功能，无需手动导入常用的 Vue API 和组件：

\`\`\`typescript
// 无需导入，直接使用
const count = ref(0)
const doubled = computed(() => count.value * 2)
\`\`\`

### 状态管理

使用 Pinia 进行状态管理，支持 TypeScript：

\`\`\`typescript
// stores/counter.ts
export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const increment = () => count.value++
  return { count, increment }
})
\`\`\`

### 路由配置

基于文件的路由系统，支持路由守卫和动态导入：

\`\`\`typescript
const routes = [
  {
    path: '/',
    component: () => import('@/views/Home.vue')
  }
]
\`\`\`

## 🎨 Less 预处理器

项目集成了 Less 预处理器，提供强大的 CSS 编写体验：

### Less 配置

Vite 配置自动支持 Less 文件处理：

\`\`\`typescript
// vite.config.ts
css: {
  preprocessorOptions: {
    less: {
      additionalData: '@import "@/styles/variables.less";',
      javascriptEnabled: true
    }
  }
}
\`\`\`

### 变量系统

\`\`\`less
// src/styles/variables.less
@primary-color: #409eff;
@success-color: #67c23a;
@font-size-base: 14px;
@spacing-md: 16px;
\`\`\`

### 混合器(Mixins)

\`\`\`less
// src/styles/mixins.less
.flex(@direction: row, @justify: flex-start, @align: stretch) {
  display: flex;
  flex-direction: @direction;
  justify-content: @justify;
  align-items: @align;
}

.text(@size: @font-size-base, @color: @text-color-primary) {
  font-size: @size;
  color: @color;
}
\`\`\`

### 在组件中使用

\`\`\`vue
<style lang="less" scoped>
@import '@/styles/variables.less';
@import '@/styles/mixins.less';

.my-component {
  .flex(column, center, center);
  .text(@font-size-large, @primary-color);
  
  .nested-element {
    background: @primary-color;
    
    &:hover {
      background: darken(@primary-color, 10%);
    }
  }
}
</style>
\`\`\`

### Less 特性

- **变量**: 使用 \`@\` 符号定义可复用的值
- **嵌套**: 支持 CSS 规则嵌套，提高代码可读性
- **混合器**: 创建可重用的样式组合
- **函数**: 内置颜色、数学、字符串处理函数
- **运算**: 支持数学运算和颜色运算
- **导入**: 模块化管理样式文件

## 🖥️ 大屏适配方案

项目集成了基于 PostCSS 的大屏适配解决方案：

### PostCSS 配置

通过 \`postcss-px-to-viewport\` 插件，自动将 px 单位转换为 vw 单位：

\`\`\`javascript
// postcss.config.js
module.exports = {
  plugins: {
    'postcss-px-to-viewport': {
      viewportWidth: 1920,    // 设计稿宽度
      viewportHeight: 1080,   // 设计稿高度
      unitPrecision: 5,       // 转换后保留的小数位数
      propList: ['*'],        // 指定转换的CSS属性
      selectorBlackList: ['.ignore-vw', '.el-'], // 忽略转换的类名
      minPixelValue: 1,       // 小于等于1px不转换
      mediaQuery: true        // 是否在媒体查询中转换
    }
  }
}
\`\`\`

### 适配工具类

提供了完整的大屏适配工具类：

\`\`\`typescript
import { ScreenAdapter } from '@/utils/screen'

// 创建适配器实例
const adapter = new ScreenAdapter()

// 初始化适配
adapter.init('#app', {
  width: 1920,
  height: 1080,
  mode: 'scale',
  autoResize: true
})
\`\`\`

### 适配模式

支持多种适配模式：

- **scale**: 等比缩放（推荐）
- **scaleX**: 横向缩放
- **scaleY**: 纵向缩放  
- **none**: 无缩放

## 🎨 双UI库集成

项目同时集成了两个主流的 Vue 3 UI 组件库，提供丰富的选择：

### Element Plus
- 🏢 企业级UI组件库
- 🎨 现代化设计风格
- 📊 丰富的数据展示组件
- 🌍 国际化支持
- 🔧 完善的TypeScript支持

### View UI Plus
- 💎 简洁优雅的设计
- 🚀 轻量级高性能
- 🔌 易于集成
- 📚 完整的文档
- 🛠️ 友好的API设计

### 特性支持
- ✅ 自动按需导入组件
- ✅ 完整的 TypeScript 支持
- ✅ 主题定制支持
- ✅ 响应式设计
- ✅ 可视化UI库切换
- ✅ 详细的对比和使用指南

## 📱 响应式设计

项目采用响应式设计，适配各种设备：

- 移动端友好（< 768px）
- 平板适配（768px - 1024px）
- 桌面端优化（1024px - 1920px）
- 大屏幕支持（> 1920px）

## 🎯 示例页面

项目包含多个功能演示页面：

### 基础功能页面
- **首页** (\`/\`) - 项目介绍和功能特性展示
- **关于页** (\`/about\`) - 技术栈和项目信息
- **计数器** (\`/counter\`) - Pinia 状态管理示例
- **大屏适配** (\`/bigscreen\`) - 大屏适配效果演示
- **Less演示** (\`/less\`) - Less 预处理器功能展示

### UI组件库演示
- **Element Plus演示** (\`/element\`) - Element Plus 组件库完整演示
  - 基础组件（按钮、输入框等）
  - 表单组件（表单验证、选择器等）
  - 数据展示（表格、统计、进度条）
  - 反馈组件（消息提示、通知、对话框）

- **View UI Plus演示** (\`/viewui\`) - View UI Plus 组件库完整演示
  - 基础组件（按钮、输入框等）
  - 表单组件（表单验证、选择器等）
  - 数据展示（表格、统计、进度条）
  - 反馈组件（消息提示、通知、对话框）

- **UI库对比** (\`/comparison\`) - 详细的组件库对比分析
  - 功能特性对比
  - 使用场景建议
  - 代码示例对比
  - 选择指南

### 导航特性
- 🔄 **智能UI库切换** - 顶部标签页可切换不同UI库风格
- 📱 **响应式导航** - 根据屏幕大小自动适配
- 🎨 **主题一致性** - 每个UI库保持独立的设计风格

## 🚀 部署

项目构建后的文件在 \`dist\` 目录中，可以部署到任何静态文件服务器。

推荐部署平台：
- [Vercel](https://vercel.com/)
- [Netlify](https://netlify.com/)
- [GitHub Pages](https://pages.github.com/)

## 🔧 自定义配置

### Vite 配置

在 \`vite.config.ts\` 中可以自定义构建配置：

\`\`\`typescript
export default defineConfig({
  // 插件配置
  plugins: [...],
  // CSS 预处理器配置
  css: {
    preprocessorOptions: {
      less: {
        additionalData: '@import "@/styles/variables.less";'
      }
    }
  },
  // 构建配置
  build: {
    outDir: 'dist',
    sourcemap: false
  }
})
\`\`\`

### PostCSS 配置

在 \`postcss.config.js\` 中可以调整大屏适配参数：

\`\`\`javascript
module.exports = {
  plugins: {
    'postcss-px-to-viewport': {
      viewportWidth: 1920,  // 根据设计稿调整
      // ... 其他配置
    }
  }
}
\`\`\`

### Less 配置

可以根据项目需求调整 Less 变量和混合器：

\`\`\`less
// src/styles/variables.less
@primary-color: #your-color;  // 自定义主题色
@font-size-base: 16px;        // 自定义基础字体大小
\`\`\`

## 🔄 双UI库使用指南

项目集成了 Element Plus 和 View UI Plus 两个UI组件库，提供灵活的选择：

### 自动导入配置

Vite 已配置自动导入两个UI库的组件：

\`\`\`typescript
// vite.config.ts
import { ElementPlusResolver, ViewUiResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  plugins: [
    AutoImport({
      resolvers: [
        ElementPlusResolver(),
        ViewUiResolver()
      ]
    }),
    Components({
      resolvers: [
        ElementPlusResolver(),
        ViewUiResolver()
      ]
    })
  ]
})
\`\`\`

### Element Plus 使用示例

\`\`\`vue
<template>
  <!-- 使用 el- 前缀 -->
  <el-button type="primary">Element Plus 按钮</el-button>
  <el-input v-model="value" placeholder="请输入内容" />
  <el-table :data="tableData">
    <el-table-column prop="name" label="姓名" />
  </el-table>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ElMessage } from 'element-plus'

const value = ref('')
const handleClick = () => {
  ElMessage.success('操作成功')
}
</script>
\`\`\`

### View UI Plus 使用示例

\`\`\`vue
<template>
  <!-- 直接使用组件名 -->
  <Button type="primary">View UI Plus 按钮</Button>
  <Input v-model="value" placeholder="请输入内容" />
  <Table :columns="columns" :data="tableData" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Message } from 'view-ui-plus'

const value = ref('')
const handleClick = () => {
  Message.success('操作成功')
}
</script>
\`\`\`

### UI库切换

项目提供了智能的UI库切换功能：

1. **顶部标签切换**: 点击顶部的 "Element Plus" 或 "View UI Plus" 标签
2. **自动路由切换**: 访问对应的演示页面会自动切换UI库风格
3. **独立导航样式**: 每个UI库使用独立的导航样式和主题色

### 选择建议

#### 选择 Element Plus 适合：
- 🏢 大型企业应用
- 📊 数据密集型系统
- 🎨 需要深度定制的项目
- 🌍 多语言国际化需求

#### 选择 View UI Plus 适合：
- 🚀 快速原型开发
- 💼 中小型管理系统
- ⚡ 注重性能和体积
- 📱 简洁的界面需求

### 混合使用注意事项

虽然项目支持两个UI库，但建议：

1. **避免在同一组件中混用** - 保持样式一致性
2. **按模块选择** - 不同模块可以使用不同的UI库
3. **统一命名规范** - Element Plus 使用 \`el-\` 前缀，View UI Plus 直接使用组件名

## 📄 许可证

MIT License