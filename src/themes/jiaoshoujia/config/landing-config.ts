/**
 * Landing Page 配置文件
 *
 * 用于切换不同版本的 Landing Page
 *
 * 使用方法：
 * - 设置 USE_MAGIC_LANDING = true 使用新的 Magic UI 风格页面
 * - 设置 USE_MAGIC_LANDING = false 使用原始的动态配置页面
 */

export const landingConfig = {
  // 是否使用 Magic UI 风格的 Landing Page
  USE_MAGIC_LANDING: true,

  // 页面元数据
  metadata: {
    title: '教授家 - AI 儿童绘本生成平台',
    description: '使用 AI 在几分钟内创建精彩儿童绘本。体验最新的 AI 绘本生成功能。',
    keywords: ['AI', '儿童绘本', '绘本生成', '人工智能', '创作工具'],
  },

  // 主题配置
  theme: {
    primary: 'purple',
    secondary: 'pink',
    accent: 'blue',
    mode: 'dark',
  },

  // 动画配置
  animations: {
    scrollReveal: true,
    hoverEffects: true,
    backgroundEffects: true,
  },
};
