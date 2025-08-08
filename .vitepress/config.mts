import { defineConfig } from 'vitepress'
import {
  GitChangelog,
  GitChangelogMarkdownSection,
} from '@nolebase/vitepress-plugin-git-changelog/vite'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  vite: {
    plugins: [
      GitChangelog({
        // 填写在此处填写您的仓库链接
        repoURL: () => 'https://github.com/ITStudioIA/IAWIKI',
      }),
      GitChangelogMarkdownSection(),
    ],
  },
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
          { text: 'MCP架构', link: '/knowledge/mcp' },
          { text: 'QQ机器人', link: '/knowledge/qqbot' },

        ]
      },
      {
        text: '项目介绍',
        items: [
          { text: 'MCP Server收集', link: '/projects/mcp_server' },
        ]
      },
      {
        text: '资源下载',
        items: [
          // { text: '文档资料', link: '/resources/docs' },
          // { text: '工具软件', link: '/resources/tools' }
        ]
      },
      { text: '代办事项', link: '/todo' }


    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ITStudioIA' }
    ]
  }
})
