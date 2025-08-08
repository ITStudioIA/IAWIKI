import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "智能应用部",
  description: "一个致力于人工智能应用的部门",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
    ],

    sidebar: [
      {
        // text: '部门介绍',
        items: [
          { text: '部门概述', link: '/about/入部须知' },
          { text: '团队成员', link: '/about/team' }
        ]
      },
      {
        text: '知识准备',
        items: [
          { text: '人工智能基础', link: '/knowledge/ai-basics' },
          { text: '机器学习', link: '/knowledge/machine-learning' },
          { text: '深度学习', link: '/knowledge/deep-learning' },
          { text: '自然语言处理', link: '/knowledge/nlp' },
          { text: '计算机视觉', link: '/knowledge/computer-vision' }
        ]
      },
      {
        text: '项目展示',
        items: [
          { text: '项目一', link: '/projects/project1' },
          { text: '项目二', link: '/projects/project2' }
        ]
      },
      {
        text: '资源下载',
        items: [
          { text: '文档资料', link: '/resources/docs' },
          { text: '工具软件', link: '/resources/tools' }
        ]
      }

    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
