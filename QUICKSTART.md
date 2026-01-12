# 🚀 快速启动指南

## 一键启动新的 Landing Page

### ✅ 已完成的工作

1. ✅ 创建了全新的 Magic UI 风格 Landing Page
2. ✅ 安装了所需依赖（framer-motion）
3. ✅ 配置了切换开关
4. ✅ 修改了主页面支持切换

### 📝 立即体验

新的 Magic UI Landing Page **已经默认启用**！

只需要：

```bash
# 1. 重启开发服务器
npm run dev

# 2. 打开浏览器访问
# 本地: http://localhost:3000
# 生产: https://www.univideo.store
```

## 🎨 新页面特色

### 视觉效果
- 🌈 **深色梦幻主题** - 霓虹渐变 + 流动光晕
- ✨ **丰富动画** - Scroll Reveal、Hover Effects、Floating Elements
- 📱 **完全响应式** - 支持手机、平板、桌面
- 🎭 **独特风格** - 脱离传统 AI 产品的紫色渐变套路

### 页面区块
1. **Hero** - 大标题 + 渐变文字 + CTA 按钮
2. **Logos** - 技术栈展示
3. **Introduce** - 4个功能卡片
4. **Benefits** - 手风琴式优势展示
5. **Usage** - 4步使用流程
6. **Features** - 6个核心功能
7. **Stats** - 3个关键数据
8. **Testimonials** - 3个用户评价
9. **FAQ** - 4个常见问题
10. **CTA** - 行动号召
11. **Footer** - 页脚

## 🔧 如何切换回旧页面

如果你想切换回原始的动态配置页面：

### 方法 1: 修改配置文件

编辑 `src/themes/jiaoshoujia/config/landing-config.ts`：

```typescript
export const landingConfig = {
  USE_MAGIC_LANDING: false,  // 改为 false
  // ...
};
```

### 方法 2: 注释掉导入

编辑 `src/app/[locale]/(landing)/page.tsx`：

```typescript
import { landingConfig } from '@/themes/jiaoshoujia/config/landing-config';

export default async function LandingPage({ params }) {
  // ...

  // 注释掉这部分
  // if (landingConfig.USE_MAGIC_LANDING) {
  //   const MagicLanding = await getThemePage('magic-landing');
  //   return <MagicLanding />;
  // }

  // 原始代码...
}
```

## 🎯 自定义内容

### 修改标题和文案

直接编辑 `src/themes/jiaoshoujia/pages/magic-landing.tsx`：

```typescript
// Hero 区域
<h1>
  用 AI 在几分钟内创建精彩儿童绘本  {/* 改这里 */}
</h1>

<p>
  教授家是一个先进的 AI 儿童绘本生成平台。  {/* 改这里 */}
</p>
```

### 修改颜色

搜索并替换颜色类名：

```css
/* 紫粉渐变 → 蓝绿渐变 */
from-purple-400 to-pink-400  →  from-blue-400 to-green-400

/* 紫色 → 橙色 */
text-purple-400  →  text-orange-400

/* 紫色边框 → 青色边框 */
border-purple-500/30  →  border-cyan-500/30
```

### 修改动画强度

```typescript
// 减少动画效果
transition={{ duration: 0.3 }}  // 从 0.6 改为 0.3

// 关闭悬停效果
whileHover={{ scale: 1.05 }}  // 删除这行

// 简化浮动动画
animate={{ y: [0, -5, 0] }}  // 从 [0, -10, 0] 改为 [0, -5, 0]
```

## 📚 文件说明

### 主要文件

```
src/themes/jiaoshoujia/
├── pages/
│   └── magic-landing.tsx       # 新的 Magic UI Landing Page
├── config/
│   └── landing-config.ts       # 配置文件（切换开关）
└── pages/
    └── landing.tsx             # 原始布局（未改动）

src/app/[locale]/(landing)/
└── page.tsx                    # 主页面（已修改，支持切换）
```

### 文档文件

```
MAGIC_LANDING_README.md         # 完整使用指南
MAGIC_LANDING_COMPARISON.md     # 设计说明和对比
preview-magic-landing.sh        # 预览脚本（可选）
QUICKSTART.md                   # 本文件
```

## 🐛 常见问题

### Q: 页面不显示或报错？

**A:** 检查以下几点：

1. 确认 framer-motion 已安装：
   ```bash
   npm list framer-motion
   ```

2. 检查控制台错误信息（F12 → Console）

3. 确认配置文件路径正确

### Q: 动画太卡怎么办？

**A:** 降低动画复杂度：

1. 在配置中关闭部分动画：
   ```typescript
   animations: {
     scrollReveal: true,
     hoverEffects: false,      // 关闭悬停效果
     backgroundEffects: false, // 关闭背景特效
   }
   ```

2. 减少动画数量：
   ```typescript
   transition={{ duration: 0.3 }}  // 减少持续时间
   ```

### Q: 如何恢复到原来的样子？

**A:** 设置配置为 false：
```typescript
USE_MAGIC_LANDING = false
```

## 🎨 设计灵感

如果你想进一步定制，可以参考：

- **Magic UI**: https://magicui.design/ - 组件和动画
- **Aceternity UI**: https://ui.aceternity.com/ - 背景特效
- **Tailwind UI**: https://tailwindui.com/ - 布局灵感

## 📞 需要帮助？

- 查看详细文档：`MAGIC_LANDING_README.md`
- 查看设计说明：`MAGIC_LANDING_COMPARISON.md`
- 联系邮箱：zyrliuwei@gmail.com

## ✨ 下一步

1. **预览效果** - 重启服务器，访问页面
2. **定制内容** - 根据你的需求修改文案和颜色
3. **测试响应式** - 在不同设备上测试
4. **部署上线** - 提交代码并部署

---

**祝你使用愉快！** 🎉
