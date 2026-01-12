#!/bin/bash

# Magic UI Landing Page 预览脚本

echo "🎨 教授家 - Magic UI Landing Page"
echo "=================================="
echo ""

# 检查配置文件
CONFIG_FILE="src/themes/jiaoshoujia/config/landing-config.ts"

if [ -f "$CONFIG_FILE" ]; then
    echo "✅ 配置文件存在"
    echo ""
    echo "当前配置："
    grep "USE_MAGIC_LANDING" "$CONFIG_FILE" | head -1
    echo ""
else
    echo "❌ 配置文件不存在: $CONFIG_FILE"
    exit 1
fi

# 检查 Magic Landing Page 文件
LANDING_FILE="src/themes/jiaoshoujia/pages/magic-landing.tsx"

if [ -f "$LANDING_FILE" ]; then
    echo "✅ Magic Landing Page 文件存在"
else
    echo "❌ Magic Landing Page 文件不存在: $LANDING_FILE"
    exit 1
fi

# 检查依赖
echo ""
echo "检查依赖..."
if grep -q '"framer-motion"' package.json; then
    echo "✅ framer-motion 已安装"
else
    echo "❌ framer-motion 未安装"
    echo "运行: npm install framer-motion"
fi

echo ""
echo "=================================="
echo "🚀 启动开发服务器..."
echo ""
echo "访问地址："
echo "  - 本地: http://localhost:3000"
echo "  - 生产: https://www.univideo.store"
echo ""
echo "切换配置："
echo "  编辑 $CONFIG_FILE"
echo "  设置 USE_MAGIC_LANDING = true/false"
echo ""
echo "=================================="

# 启动开发服务器
npm run dev
