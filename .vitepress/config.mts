import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "智能应用部",
  description: "一个致力于人工智能应用的部门",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '示例', link: '/markdown-examples' }
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
        text: '示例',
        items: [
          { text: 'Markdown 示例', link: '/markdown-examples' },
          { text: '运行时 API 示例', link: '/api-examples' },
          { text: '入部须知', link: '/入部须知' }
        ]
      },

    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
