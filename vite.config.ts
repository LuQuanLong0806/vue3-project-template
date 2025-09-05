import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
      imports: [
        'vue',
        'vue-router',
        'pinia',
        '@vueuse/core'
      ],
      dts: true
    }),
    Components({
      resolvers: [
        ElementPlusResolver(),
        // View UI Plus 自定义解析器
        (componentName) => {
          // View UI Plus 组件映射
          const viewUiComponents = [
            'Button', 'Input', 'Select', 'Option', 'Radio', 'RadioGroup',
            'Checkbox', 'CheckboxGroup', 'Switch', 'DatePicker', 'TimePicker',
            'Form', 'FormItem', 'Table', 'Tabs', 'TabPane', 'Card', 'Modal',
            'Message', 'Notice', 'Progress', 'Tag', 'Badge', 'Alert', 'Loading',
            'Spin', 'Icon', 'Avatar', 'Breadcrumb', 'BreadcrumbItem', 'Steps',
            'Step', 'Menu', 'MenuItem', 'Submenu', 'MenuGroup', 'Dropdown',
            'DropdownMenu', 'DropdownItem', 'Tooltip', 'Popover', 'Tree',
            'Upload', 'Rate', 'Circle', 'Row', 'Col', 'Layout', 'Header',
            'Sider', 'Content', 'Footer', 'Affix', 'BackTop', 'Anchor',
            'AnchorLink', 'Divider', 'Split', 'Cell', 'CellGroup', 'List',
            'ListItem', 'ListItemMeta', 'Carousel', 'CarouselItem', 'Collapse',
            'Panel', 'Timeline', 'TimelineItem', 'Space', 'Drawer', 'Page',
            'Transfer', 'ColorPicker', 'Cascader', 'AutoComplete', 'InputNumber',
            'Slider', 'Poptip', 'Time', 'Skeleton'
          ]
          
          if (viewUiComponents.includes(componentName)) {
            return {
              name: componentName,
              from: 'view-ui-plus'
            }
          }
        }
      ],
      dts: true
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  css: {
    postcss: './postcss.config.js',
    preprocessorOptions: {
      less: {
        additionalData: '@import "@/styles/variables.less";',
        javascriptEnabled: true
      }
    }
  },
  server: {
    port: 3000,
    open: true,
    host: true
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'terser',
    cssCodeSplit: true
  }
})
