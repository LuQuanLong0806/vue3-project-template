<template>
  <div class="ui-comparison">
    <div class="comparison-header">
      <h1>UI 组件库对比</h1>
      <p>本项目集成了两个主流的 Vue 3 UI 组件库：Element Plus 和 View UI Plus</p>
    </div>

    <div class="comparison-grid">
      <!-- Element Plus 介绍 -->
      <div class="ui-card element-card">
        <div class="card-header">
          <div class="logo-section">
            <div class="element-logo">E+</div>
            <h2>Element Plus</h2>
          </div>
          <div class="version-badge element-badge">v2.6.3</div>
        </div>
        
        <div class="card-content">
          <h3>特点</h3>
          <ul>
            <li>🎨 现代化设计风格</li>
            <li>🔧 完善的 TypeScript 支持</li>
            <li>📱 响应式设计</li>
            <li>🌍 国际化支持</li>
            <li>⚡ 按需加载</li>
            <li>🎪 丰富的主题定制</li>
          </ul>

          <h3>适用场景</h3>
          <ul>
            <li>中后台管理系统</li>
            <li>企业级应用</li>
            <li>数据密集型应用</li>
            <li>需要高度定制的项目</li>
          </ul>

          <h3>核心组件</h3>
          <div class="component-tags">
            <span class="tag element-tag">Table</span>
            <span class="tag element-tag">Form</span>
            <span class="tag element-tag">Dialog</span>
            <span class="tag element-tag">DatePicker</span>
            <span class="tag element-tag">Upload</span>
            <span class="tag element-tag">Tree</span>
          </div>

          <div class="action-buttons">
            <button class="btn element-btn" @click="goToElement">
              查看 Element Plus 示例
            </button>
            <button class="btn secondary-btn" @click="openElementDocs">
              官方文档
            </button>
          </div>
        </div>
      </div>

      <!-- View UI Plus 介绍 -->
      <div class="ui-card viewui-card">
        <div class="card-header">
          <div class="logo-section">
            <div class="viewui-logo">V+</div>
            <h2>View UI Plus</h2>
          </div>
          <div class="version-badge viewui-badge">v1.3.18</div>
        </div>
        
        <div class="card-content">
          <h3>特点</h3>
          <ul>
            <li>🎯 简洁优雅的设计</li>
            <li>🚀 轻量级高性能</li>
            <li>🔌 易于集成</li>
            <li>💎 精致的组件细节</li>
            <li>📚 完整的文档</li>
            <li>🛠️ 友好的 API 设计</li>
          </ul>

          <h3>适用场景</h3>
          <ul>
            <li>内容管理系统</li>
            <li>电商后台</li>
            <li>数据展示平台</li>
            <li>快速原型开发</li>
          </ul>

          <h3>核心组件</h3>
          <div class="component-tags">
            <span class="tag viewui-tag">Table</span>
            <span class="tag viewui-tag">Form</span>
            <span class="tag viewui-tag">Modal</span>
            <span class="tag viewui-tag">Select</span>
            <span class="tag viewui-tag">Menu</span>
            <span class="tag viewui-tag">Steps</span>
          </div>

          <div class="action-buttons">
            <button class="btn viewui-btn" @click="goToViewUI">
              查看 View UI Plus 示例
            </button>
            <button class="btn secondary-btn" @click="openViewUIDocs">
              官方文档
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- 详细对比表格 -->
    <div class="detailed-comparison">
      <h2>详细对比</h2>
      <div class="comparison-table">
        <table>
          <thead>
            <tr>
              <th>对比项</th>
              <th class="element-col">Element Plus</th>
              <th class="viewui-col">View UI Plus</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>设计风格</strong></td>
              <td>现代化、扁平化</td>
              <td>简洁、优雅</td>
            </tr>
            <tr>
              <td><strong>组件数量</strong></td>
              <td>60+ 组件</td>
              <td>50+ 组件</td>
            </tr>
            <tr>
              <td><strong>包大小</strong></td>
              <td>较大（功能丰富）</td>
              <td>较小（轻量级）</td>
            </tr>
            <tr>
              <td><strong>TypeScript</strong></td>
              <td>完全支持</td>
              <td>完全支持</td>
            </tr>
            <tr>
              <td><strong>主题定制</strong></td>
              <td>CSS 变量 + SCSS</td>
              <td>Less 变量</td>
            </tr>
            <tr>
              <td><strong>国际化</strong></td>
              <td>内置支持</td>
              <td>内置支持</td>
            </tr>
            <tr>
              <td><strong>移动端适配</strong></td>
              <td>响应式支持</td>
              <td>响应式支持</td>
            </tr>
            <tr>
              <td><strong>社区活跃度</strong></td>
              <td>非常活跃</td>
              <td>活跃</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- 使用建议 -->
    <div class="usage-recommendations">
      <h2>使用建议</h2>
      <div class="recommendations-grid">
        <div class="recommendation-card">
          <h3>选择 Element Plus 当你需要：</h3>
          <ul>
            <li>🏢 构建复杂的企业级应用</li>
            <li>📊 处理大量数据展示</li>
            <li>🎨 需要深度主题定制</li>
            <li>🌐 多语言国际化支持</li>
            <li>📈 复杂的表格和表单交互</li>
          </ul>
        </div>
        <div class="recommendation-card">
          <h3>选择 View UI Plus 当你需要：</h3>
          <ul>
            <li>🚀 快速开发原型</li>
            <li>💡 简洁清爽的界面</li>
            <li>⚡ 更小的打包体积</li>
            <li>🔧 简单易用的 API</li>
            <li>📱 中小型管理系统</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- 代码示例对比 -->
    <div class="code-comparison">
      <h2>代码示例对比</h2>
      <div class="code-grid">
        <div class="code-example">
          <h3>Element Plus - 按钮</h3>
          <pre><code>&lt;el-button type="primary"&gt;
  Element 按钮
&lt;/el-button&gt;</code></pre>
        </div>
        <div class="code-example">
          <h3>View UI Plus - 按钮</h3>
          <pre><code>&lt;Button type="primary"&gt;
  View UI 按钮
&lt;/Button&gt;</code></pre>
        </div>
        <div class="code-example">
          <h3>Element Plus - 表单</h3>
          <pre><code>&lt;el-form :model="form" :rules="rules"&gt;
  &lt;el-form-item label="用户名" prop="username"&gt;
    &lt;el-input v-model="form.username" /&gt;
  &lt;/el-form-item&gt;
&lt;/el-form&gt;</code></pre>
        </div>
        <div class="code-example">
          <h3>View UI Plus - 表单</h3>
          <pre><code>&lt;Form :model="form" :rules="rules"&gt;
  &lt;FormItem label="用户名" prop="username"&gt;
    &lt;Input v-model="form.username" /&gt;
  &lt;/FormItem&gt;
&lt;/Form&gt;</code></pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const goToElement = () => {
  router.push('/element')
}

const goToViewUI = () => {
  router.push('/viewui')
}

const openElementDocs = () => {
  window.open('https://element-plus.org/zh-CN/', '_blank')
}

const openViewUIDocs = () => {
  window.open('https://www.iviewui.com/view-ui-plus', '_blank')
}
</script>

<style scoped>
.ui-comparison {
  padding: 24px;
  max-width: 1400px;
  margin: 0 auto;
  background: #f8f9fa;
  min-height: 100vh;
}

.comparison-header {
  text-align: center;
  margin-bottom: 40px;
  padding: 40px 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 16px;
  color: white;
}

.comparison-header h1 {
  margin: 0 0 16px 0;
  font-size: 2.5rem;
  font-weight: 700;
}

.comparison-header p {
  font-size: 1.2rem;
  opacity: 0.9;
  max-width: 600px;
  margin: 0 auto;
}

.comparison-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  margin-bottom: 48px;
}

.ui-card {
  background: white;
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.ui-card:hover {
  transform: translateY(-4px);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  padding-bottom: 16px;
  border-bottom: 1px solid #eee;
}

.logo-section {
  display: flex;
  align-items: center;
  gap: 16px;
}

.element-logo,
.viewui-logo {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: white;
  font-size: 1.2rem;
}

.element-logo {
  background: linear-gradient(135deg, #409eff 0%, #66b3ff 100%);
}

.viewui-logo {
  background: linear-gradient(135deg, #2d8cf0 0%, #5cadff 100%);
}

.version-badge {
  padding: 4px 12px;
  border-radius: 16px;
  font-size: 0.8rem;
  font-weight: 600;
  color: white;
}

.element-badge {
  background: #409eff;
}

.viewui-badge {
  background: #2d8cf0;
}

.card-content h2 {
  margin: 0;
  color: #333;
  font-size: 1.8rem;
}

.card-content h3 {
  color: #555;
  margin: 24px 0 12px 0;
  font-size: 1.2rem;
  font-weight: 600;
}

.card-content ul {
  list-style: none;
  padding: 0;
  margin: 0 0 20px 0;
}

.card-content li {
  padding: 6px 0;
  color: #666;
  line-height: 1.6;
}

.component-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
}

.tag {
  padding: 4px 12px;
  border-radius: 16px;
  font-size: 0.8rem;
  font-weight: 500;
  color: white;
}

.element-tag {
  background: #409eff;
}

.viewui-tag {
  background: #2d8cf0;
}

.action-buttons {
  display: flex;
  gap: 12px;
  margin-top: 24px;
}

.btn {
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
  font-size: 0.9rem;
}

.element-btn {
  background: #409eff;
  color: white;
}

.element-btn:hover {
  background: #66b3ff;
}

.viewui-btn {
  background: #2d8cf0;
  color: white;
}

.viewui-btn:hover {
  background: #5cadff;
}

.secondary-btn {
  background: #f5f7fa;
  color: #606266;
  border: 1px solid #ddd;
}

.secondary-btn:hover {
  background: #e6e8eb;
}

.detailed-comparison {
  margin-bottom: 48px;
}

.detailed-comparison h2 {
  text-align: center;
  margin-bottom: 32px;
  color: #333;
  font-size: 2rem;
}

.comparison-table {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  padding: 16px 24px;
  text-align: left;
  border-bottom: 1px solid #f0f2f5;
}

th {
  background: #fafbfc;
  font-weight: 600;
  color: #333;
}

.element-col {
  background: linear-gradient(135deg, #409eff20 0%, #409eff10 100%);
}

.viewui-col {
  background: linear-gradient(135deg, #2d8cf020 0%, #2d8cf010 100%);
}

td {
  color: #666;
}

.usage-recommendations {
  margin-bottom: 48px;
}

.usage-recommendations h2 {
  text-align: center;
  margin-bottom: 32px;
  color: #333;
  font-size: 2rem;
}

.recommendations-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
}

.recommendation-card {
  background: white;
  padding: 32px;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.recommendation-card h3 {
  color: #333;
  margin-bottom: 20px;
  font-size: 1.3rem;
}

.recommendation-card ul {
  list-style: none;
  padding: 0;
}

.recommendation-card li {
  padding: 8px 0;
  color: #666;
  line-height: 1.6;
}

.code-comparison {
  margin-bottom: 48px;
}

.code-comparison h2 {
  text-align: center;
  margin-bottom: 32px;
  color: #333;
  font-size: 2rem;
}

.code-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.code-example {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
}

.code-example h3 {
  background: #f8f9fa;
  padding: 16px 20px;
  margin: 0;
  color: #333;
  font-size: 1rem;
  border-bottom: 1px solid #eee;
}

pre {
  margin: 0;
  padding: 20px;
  background: #282c34;
  color: #abb2bf;
  overflow-x: auto;
}

code {
  font-family: 'Monaco', 'Menlo', monospace;
  font-size: 0.9rem;
  line-height: 1.5;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .comparison-grid,
  .recommendations-grid,
  .code-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .comparison-header h1 {
    font-size: 2rem;
  }
  
  .ui-card {
    padding: 24px;
  }
  
  .action-buttons {
    flex-direction: column;
  }
}
</style>
