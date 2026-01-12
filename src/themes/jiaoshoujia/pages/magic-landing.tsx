'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  Sparkles,
  BookOpen,
  Palette,
  Wand2,
  Zap,
  ChevronRight,
  Star,
  Users,
  Video,
  Music2,
  Brain,
  Scissors,
  Monitor,
  Grid3x3,
  CheckCircle2,
  ChevronDown,
  Mail,
  ArrowRight,
} from 'lucide-react';

// ============================================
// 动画组件库
// ============================================

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
}

function ScrollReveal({
  children,
  delay = 0,
  direction = 'up',
  className = '',
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const directionOffset = {
    up: [50, 0],
    down: [-50, 0],
    left: [50, 0],
    right: [-50, 0],
  }[direction];

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0, 1, 1, 1]);
  const y = useTransform(scrollYProgress, [0, 0.3], directionOffset);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, y }}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ============================================
// 背景特效组件
// ============================================

function GradientBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* 渐变网格背景 */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_-200px,rgba(120,119,198,0.15),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_600px_at_80%_400px,rgba(139,92,246,0.1),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_-100px_800px,rgba(236,72,153,0.1),transparent)]" />

      {/* 网格线 */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f08_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f08_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"
      />

      {/* 流动的光晕 */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -left-[20%] top-[10%] h-[500px] w-[500px] rounded-full bg-purple-500/20 blur-[120px]"
      />
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
        className="absolute -right-[10%] bottom-[20%] h-[400px] w-[400px] rounded-full bg-pink-500/20 blur-[100px]"
      />
    </div>
  );
}

// ============================================
// Hero 区域
// ============================================

function HeroSection() {
  return (
    <section className="relative min-h-screen items-center justify-center overflow-hidden px-4 py-20 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center text-center">
          {/* 公告徽章 */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 backdrop-blur-sm"
          >
            <Sparkles className="h-4 w-4 text-purple-400" />
            <span className="text-sm text-purple-300">
              🎉 全新升级，体验 AI 绘本魔法
            </span>
            <ChevronRight className="h-4 w-4 text-purple-400" />
          </motion.div>

          {/* 主标题 */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6 max-w-5xl text-4xl font-bold leading-tight md:text-6xl lg:text-7xl"
          >
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              用 AI 在几分钟内
            </span>
            <br />
            <span className="relative">
              <span className="bg-gradient-to-r from-purple-300 via-pink-300 to-purple-300 bg-clip-text text-transparent">
                创造精彩儿童绘本
              </span>
              <motion.span
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute -right-8 -top-4 text-5xl"
              >
                ✨
              </motion.span>
            </span>
          </motion.h1>

          {/* 副标题 */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-10 max-w-2xl text-lg text-neutral-400 md:text-xl"
          >
            教授家是一个先进的{' '}
            <span className="text-purple-400">AI 儿童绘本生成平台</span>
            。
            <br />
            体验最新的 AI 绘本创作功能 - 看图片、读故事、做理解与推理。
          </motion.p>

          {/* CTA 按钮组 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col gap-4 sm:flex-row"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative overflow-hidden rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 font-semibold text-white shadow-lg shadow-purple-500/30 transition-all hover:shadow-purple-500/50"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Zap className="h-5 w-5" />
                开始创作
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500"
                initial={{ x: '100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-8 py-4 font-semibold text-purple-300 backdrop-blur-sm transition-all hover:bg-purple-500/20"
            >
              <Video className="h-5 w-5" />
              查看案例
            </motion.button>
          </motion.div>

          {/* 用户头像提示 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-12 flex items-center gap-3 text-sm text-neutral-500"
          >
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-purple-400 to-pink-400 text-xs font-bold text-white ring-2 ring-neutral-900"
                >
                  {i === 1 ? '👨' : i === 2 ? '👩' : i === 3 ? '👧' : '👦'}
                </div>
              ))}
            </div>
            <span>10,000+ 创作者正在使用教授家</span>
          </motion.div>
        </div>
      </div>

      {/* 滚动提示 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-neutral-500"
        >
          <ChevronDown className="h-6 w-6" />
          <span className="text-xs">向下滚动</span>
        </motion.div>
      </motion.div>
    </section>
  );
}

// ============================================
// Logo 展示区域
// ============================================

function LogosSection() {
  const technologies = [
    { name: 'Next.js', icon: '⚡️' },
    { name: 'React', icon: '⚛️' },
    { name: 'TailwindCSS', icon: '🎨' },
    { name: 'Shadcn/UI', icon: '🧩' },
    { name: 'Vercel', icon: '▲' },
  ];

  return (
    <section className="border-y border-white/5 bg-white/[0.02] py-16 backdrop-blur-sm">
      <ScrollReveal>
        <div className="mx-auto max-w-7xl px-4">
          <p className="mb-8 text-center text-sm text-neutral-500">
            教授家使用以下技术栈构建
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="flex cursor-pointer items-center gap-2 text-neutral-400 transition-colors hover:text-purple-400"
              >
                <span className="text-2xl">{tech.icon}</span>
                <span className="font-semibold">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}

// ============================================
// 功能介绍区域
// ============================================

function IntroduceSection() {
  const features = [
    {
      icon: BookOpen,
      title: 'AI 绘本生成',
      description: '使用先进的 AI 模型从文本提示创建精美绘本。在几分钟内生成专业内容。',
      gradient: 'from-purple-400 to-pink-400',
    },
    {
      icon: Brain,
      title: '多模态理解',
      description: '我们的 AI 像人类一样看图片、读故事，并执行复杂的推理任务。',
      gradient: 'from-blue-400 to-purple-400',
    },
    {
      icon: Music2,
      title: '故事与旁白',
      description: '生成生动的儿童故事和旁白。支持多种语言和故事风格。',
      gradient: 'from-pink-400 to-orange-400',
    },
    {
      icon: Wand2,
      title: '智能编辑工具',
      description: 'AI 驱动的编辑功能，包括自动上色、场景检测和智能排版建议。',
      gradient: 'from-green-400 to-blue-400',
    },
  ];

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <ScrollReveal>
          <div className="mb-16 text-center">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block rounded-full bg-purple-500/10 px-4 py-2 text-sm text-purple-400"
            >
              产品简介
            </motion.span>
            <h2 className="mt-6 text-3xl font-bold md:text-4xl">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                教授家是什么？
              </span>
            </h2>
            <p className="mt-4 text-lg text-neutral-400">
              教授家是一个先进的 AI 儿童绘本生产平台，利用尖端的多模态 AI 技术革新绘本创作。
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <ScrollReveal key={feature.title} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-sm transition-all hover:border-purple-500/30"
              >
                <div className={`mb-4 inline-block rounded-lg bg-gradient-to-br ${feature.gradient} p-3`}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="text-sm text-neutral-400">{feature.description}</p>

                {/* 悬停光晕效果 */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 transition-opacity group-hover:opacity-100"
                />
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================
// 产品优势区域（手风琴）
// ============================================

function BenefitsSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const benefits = [
    {
      icon: Zap,
      title: '全栈解决方案',
      description: '基于 Next.js，集成认证、支付、AI，一站式开箱即用。',
    },
    {
      icon: Palette,
      title: '丰富模板库',
      description: '多样的 AI SaaS 模板，点击即用，涵盖聊天、图像生成等多场景。',
    },
    {
      icon: Star,
      title: '专属技术指导',
      description: '享受专属技术支持与开发者社区，为你的成功保驾护航。',
    },
  ];

  return (
    <section className="border-y border-white/5 bg-white/[0.02] py-24 backdrop-blur-sm">
      <div className="mx-auto max-w-4xl px-4">
        <ScrollReveal>
          <div className="mb-16 text-center">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block rounded-full bg-pink-500/10 px-4 py-2 text-sm text-pink-400"
            >
              产品优势
            </motion.span>
            <h2 className="mt-6 text-3xl font-bold md:text-4xl">
              <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                为何选择教授家
              </span>
            </h2>
            <p className="mt-4 text-lg text-neutral-400">
              你获得一切 AI 创业所需——从开箱即用的模板到专业技术支持。
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-4">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm"
            >
              <button
                onClick={() => setOpenIndex(index)}
                className="flex w-full items-center gap-4 p-6 text-left transition-colors hover:bg-white/[0.02]"
              >
                <div className="rounded-lg bg-gradient-to-br from-pink-400/20 to-purple-400/20 p-3">
                  <benefit.icon className="h-6 w-6 text-pink-400" />
                </div>
                <span className="flex-1 text-lg font-semibold text-white">
                  {benefit.title}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="h-5 w-5 text-neutral-500" />
                </motion.div>
              </button>

              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6 pl-[4.5rem] text-neutral-400">
                  {benefit.description}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================
// 使用步骤区域
// ============================================

function UsageSection() {
  const steps = [
    {
      number: '01',
      title: '描述你的创意',
      description: '用文字描述你的绘本想法。我们的 AI 理解自然语言和创意方向。',
      icon: '💡',
    },
    {
      number: '02',
      title: 'AI 生成绘本',
      description: '我们的多模态 AI 在几分钟内创建包含插图、故事的完整绘本。',
      icon: '✨',
    },
    {
      number: '03',
      title: '自定义调整',
      description: '使用智能编辑工具微调你的绘本。调整风格、添加元素或更改色彩。',
      icon: '🎨',
    },
    {
      number: '04',
      title: '导出分享',
      description: '以多种格式下载绘本或直接分享到社交媒体平台。',
      icon: '📚',
    },
  ];

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4">
        <ScrollReveal>
          <div className="mb-16 text-center">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block rounded-full bg-blue-500/10 px-4 py-2 text-sm text-blue-400"
            >
              使用指南
            </motion.span>
            <h2 className="mt-6 text-3xl font-bold md:text-4xl">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                使用教授家创建绘本
              </span>
            </h2>
            <p className="mt-4 text-lg text-neutral-400">四步将你的创意转化为精彩绘本：</p>
          </div>
        </ScrollReveal>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <ScrollReveal key={step.number} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -5 }}
                className="relative"
              >
                <div className="mb-4 text-6xl">{step.icon}</div>
                <div className="mb-2 text-sm font-mono text-purple-400">
                  {step.number}
                </div>
                <h3 className="mb-2 text-xl font-semibold text-white">
                  {step.title}
                </h3>
                <p className="text-sm text-neutral-400">{step.description}</p>

                {/* 连接线 */}
                {index < steps.length - 1 && (
                  <div className="absolute right-0 top-1/2 hidden h-0.5 w-8 -translate-y-1/2 bg-gradient-to-r from-purple-500/50 to-transparent lg:block" />
                )}
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================
// 功能网格区域
// ============================================

function FeaturesSection() {
  const features = [
    { icon: BookOpen, title: '文本生成绘本', description: '将文字描述转化为引人入胜的绘本，AI 驱动的插图生成和故事创作。' },
    { icon: Brain, title: '多模态 AI 引擎', description: '先进的 AI 同时处理图片和文本，实现智能内容创作。' },
    { icon: Music2, title: '故事与旁白', description: '生成生动的儿童故事和旁白，支持多种语言和风格。' },
    { icon: Scissors, title: '智能绘本编辑', description: 'AI 辅助编辑，包括自动上色、场景检测和智能排版。' },
    { icon: Monitor, title: '高清质量导出', description: '以惊人的高清分辨率导出绘本，提供专业输出选项。' },
    { icon: Grid3x3, title: '模板库', description: '从数百个可定制的模板中选择，适用于任何绘本风格或用途。' },
  ];

  return (
    <section className="border-y border-white/5 bg-white/[0.02] py-24 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4">
        <ScrollReveal>
          <div className="mb-16 text-center">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block rounded-full bg-purple-500/10 px-4 py-2 text-sm text-purple-400"
            >
              核心功能
            </motion.span>
            <h2 className="mt-6 text-3xl font-bold md:text-4xl">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                强大的绘本创作功能
              </span>
            </h2>
            <p className="mt-4 text-lg text-neutral-400">
              使用 AI 技术创建专业绘本所需的一切工具。
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <ScrollReveal key={feature.title} delay={index * 0.05}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm transition-all hover:border-purple-500/30"
              >
                <div className="mb-4 inline-flex rounded-lg bg-gradient-to-br from-purple-400/20 to-pink-400/20 p-3">
                  <feature.icon className="h-6 w-6 text-purple-400" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="text-sm text-neutral-400">{feature.description}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================
// 数据统计区域
// ============================================

function StatsSection() {
  const stats = [
    { number: '10,000+', label: '活跃用户' },
    { number: '100万+', label: '已创建绘本' },
    { number: '500+', label: '绘本模板' },
  ];

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4">
        <ScrollReveal>
          <div className="mb-16 text-center">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block rounded-full bg-green-500/10 px-4 py-2 text-sm text-green-400"
            >
              数据统计
            </motion.span>
            <h2 className="mt-6 text-3xl font-bold md:text-4xl">
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                受到全球创作者信赖
              </span>
            </h2>
            <p className="mt-4 text-lg text-neutral-400">
              加入数千名正在使用教授家的创作者
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-8 md:grid-cols-3">
          {stats.map((stat, index) => (
            <ScrollReveal key={stat.label} delay={index * 0.1}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.02] to-white/[0.05] p-8 text-center backdrop-blur-sm"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', delay: index * 0.1 }}
                  className="mb-4 text-5xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent"
                >
                  {stat.number}
                </motion.div>
                <div className="text-neutral-400">{stat.label}</div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================
// 用户评价区域
// ============================================

function TestimonialsSection() {
  const testimonials = [
    {
      name: 'David Chen',
      role: 'AIWallpaper.shop 创始人',
      quote: '教授家为我们节省了数月开发时间。2 天上线 AI 壁纸业务，一周内就收到了第一笔付费订单！',
    },
    {
      name: 'Rachel Kim',
      role: 'HeyBeauty.ai CTO',
      quote: '内置 AI 基础设施颠覆了开发体验，无需担心架构，只需专注核心功能，极快落地。',
    },
    {
      name: 'Marcus Thompson',
      role: '独立开发者',
      quote: '作为独立开发者，教授家满足了全部需求——认证、支付、AI 集成、美观界面，一个周末上线 SaaS！',
    },
  ];

  return (
    <section className="border-y border-white/5 bg-white/[0.02] py-24 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4">
        <ScrollReveal>
          <div className="mb-16 text-center">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block rounded-full bg-yellow-500/10 px-4 py-2 text-sm text-yellow-400"
            >
              用户评价
            </motion.span>
            <h2 className="mt-6 text-3xl font-bold md:text-4xl">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                用户对教授家的评价
              </span>
            </h2>
            <p className="mt-4 text-lg text-neutral-400">
              听听开发者与创始人用教授家快速上线 AI 创业项目的故事。
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={testimonial.name} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -5 }}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-sm transition-all hover:border-yellow-500/30"
              >
                <div className="mb-4 flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="mb-6 text-neutral-300">&quot;{testimonial.quote}&quot;</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-neutral-500">{testimonial.role}</div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================
// FAQ 区域
// ============================================

function FAQSection() {
  const faqs = [
    {
      question: '教授家是什么？怎么帮到我？',
      answer: '教授家是专为 AI SaaS 创业设计的 NextJS 全套脚手架，内含开箱即用的模板、基础设施搭建和部署工具，让你数小时内上线 AI 产品。',
    },
    {
      question: '使用教授家需要很高的技术水平吗？',
      answer: '有基础编程知识即可上手。教授家面向开发者友好，详细文档和模板让初学者也能轻松起步，不需深厚 AI 或云计算背景。',
    },
    {
      question: '教授家支持哪些类型的 AI SaaS 项目？',
      answer: '教授家支持内容生成、数据分析、AI 聊天机器人、图片/内容生成器等多种主流 AI 应用场景。',
    },
    {
      question: '用教授家一般多久能上线？',
      answer: '借助教授家，可在数小时内拿到产品原型并上线生产环境，预配置的一键部署大幅缩短开发周期。',
    },
  ];

  return (
    <section className="py-24">
      <div className="mx-auto max-w-4xl px-4">
        <ScrollReveal>
          <div className="mb-16 text-center">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block rounded-full bg-purple-500/10 px-4 py-2 text-sm text-purple-400"
            >
              常见问题
            </motion.span>
            <h2 className="mt-6 text-3xl font-bold md:text-4xl">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                关于教授家的常见问题
              </span>
            </h2>
            <p className="mt-4 text-lg text-neutral-400">
              还有其他问题？欢迎加入 Discord 或发邮件联系我们。
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <ScrollReveal key={faq.question} delay={index * 0.05}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm"
              >
                <h3 className="mb-3 text-lg font-semibold text-purple-300">
                  {faq.question}
                </h3>
                <p className="text-neutral-400">{faq.answer}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================
// CTA 区域
// ============================================

function CTASection() {
  return (
    <section className="border-y border-white/5 bg-white/[0.02] py-24 backdrop-blur-sm">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <ScrollReveal>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl border border-purple-500/30 bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-12 backdrop-blur-sm"
          >
            {/* 背景装饰 */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_-200px,rgba(120,119,198,0.15),transparent)]" />

            <div className="relative">
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="mb-6 text-6xl"
              >
                🎨
              </motion.div>

              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  立即开始创作精彩绘本
                </span>
              </h2>

              <p className="mb-8 text-lg text-neutral-400">
                加入数千名使用教授家实现创意的创作者
              </p>

              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative overflow-hidden rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 font-semibold text-white shadow-lg shadow-purple-500/30 transition-all hover:shadow-purple-500/50"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <Zap className="h-5 w-5" />
                    免费开始创作
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-8 py-4 font-semibold text-purple-300 backdrop-blur-sm transition-all hover:bg-purple-500/20"
                >
                  查看定价
                </motion.button>
              </div>
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}

// ============================================
// Footer 区域
// ============================================

function FooterSection() {
  return (
    <footer className="border-t border-white/5 py-12">
      <div className="mx-auto max-w-7xl px-4 text-center">
        <div className="mb-4 flex items-center justify-center gap-2">
          <span className="text-2xl">📚</span>
          <span className="text-xl font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            教授家
          </span>
        </div>
        <p className="mb-4 text-sm text-neutral-500">
          © 2024 教授家. All rights reserved.
        </p>
        <div className="flex items-center justify-center gap-6 text-sm text-neutral-500">
          <a href="/privacy-policy" className="hover:text-purple-400 transition-colors">
            隐私政策
          </a>
          <a href="/terms-of-service" className="hover:text-purple-400 transition-colors">
            服务条款
          </a>
          <a
            href="mailto:zyrliuwei@gmail.com"
            className="flex items-center gap-1 hover:text-purple-400 transition-colors"
          >
            <Mail className="h-4 w-4" />
            联系我们
          </a>
        </div>
      </div>
    </footer>
  );
}

// ============================================
// 主页面组件
// ============================================

export default function MagicLandingPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <GradientBackground />
      <HeroSection />
      <LogosSection />
      <IntroduceSection />
      <BenefitsSection />
      <UsageSection />
      <FeaturesSection />
      <StatsSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <FooterSection />
    </div>
  );
}
