export default {
  plugins: {
    'postcss-preset-env': {
      stage: 3,
      features: {
        'nesting-rules': true
      }
    },
    'autoprefixer': {
      overrideBrowserslist: [
        'Chrome >= 35',
        'Firefox >= 38',
        'Edge >= 12',
        'Explorer >= 10',
        'iOS >= 8',
        'Safari >= 8',
        'Android 2.3',
        'Android >= 4',
        'Opera >= 12'
      ]
    },
    'postcss-px-to-viewport': {
      // 设计稿宽度，通常为1920px（大屏）或375px（移动端）
      viewportWidth: 1920,
      // 设计稿高度，通常为1080px（大屏）或667px（移动端）
      viewportHeight: 1080,
      // 转换的单位，可以是vw, vh, vmin, vmax
      unitPrecision: 5,
      // 指定需要转换的CSS属性的单位，* 代表全部css属性的单位都进行转换
      propList: ['*'],
      // 指定不转换为视口单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名
      selectorBlackList: ['.ignore-vw', '.el-'],
      // 小于或等于1px不转换为视口单位，你也可以设置为你想要的值
      minPixelValue: 1,
      // 是否在媒体查询的css代码中也进行转换，默认false
      mediaQuery: true,
      // 是否转换后直接更换属性值，而不添加备用属性
      replace: true,
      // 忽略某些文件夹下的文件或特定文件，例如 'node_modules' 下的文件
      exclude: [/node_modules/],
      // 配置某些文件夹下的文件或特定文件，只有这些文件才进行转换
      include: undefined,
      // 是否处理横屏情况
      landscape: false
    }
  }
}
