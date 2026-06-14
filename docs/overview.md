# 项目概览

## 这是什么

一个**开发者个人作品集网站**（Portfolio），展示个人信息、技能、项目。纯静态展示，无后端交互。

## 技术栈

| 层面 | 技术 | 版本 |
|------|------|------|
| 框架 | Next.js (App Router) | 16.2.7 |
| UI 库 | React | 19.2.7 |
| 语言 | JavaScript（非 TypeScript） | - |
| 样式 | Tailwind CSS + SCSS | - |
| 包管理 | pnpm | - |
| 图片优化 | sharp | - |
| 滚动效果 | react-fast-marquee | - |
| 部署 | Docker (Node 20) | - |

## 目录结构

```
.
├── app/                          # Next.js App Router 主目录
│   ├── api/                      # 后端 API 路由
│   ├── assets/svg/skills/        # 技能 SVG 图标（20 个）
│   ├── components/               # 所有组件
│   │   ├── navbar.jsx            #   顶部导航栏
│   │   ├── footer.jsx            #   页脚
│   │   ├── helper/               #   通用工具（回到顶部）
│   │   └── homepage/             #   首页区块（Hero、About、Skills、Projects）
│   ├── css/globals.scss          # 全局样式
│   ├── layout.js                 # 根布局
│   ├── page.js                   # 首页
│   └── not-found.jsx             # 404 页面
├── utils/                        # 工具函数和数据
│   ├── data/                     #   业务数据（personal-data、skills、projects-data）
│   ├── skill-image.js            #   技能名 → SVG 映射
│   ├── check-email.js            #   邮箱校验
│   └── time-converter.js         #   时间转换（中文）
├── docs/                         # 项目文档
├── package.json
├── jsconfig.json                 # 路径别名 @/* → ./*
├── next.config.js                # SASS、远程图片配置
├── tailwind.config.js
├── docker-compose.yml
└── .env.example
```

## 关键约定

- **无 `src/` 目录**：源码直接在 `app/` 下
- **无 TypeScript**：全部使用 `.js` / `.jsx`
- **路径别名**：`@/` 映射到项目根目录
- **数据文件集中管理**：所有业务数据在 `utils/data/` 下，修改内容不需要改组件
- **中文界面**：所有 UI 文本已中文化

## 环境变量

参见 [.env.example](../.env.example)：

| 变量 | 用途 | 必需 |
|------|------|------|
| `NEXT_PUBLIC_GTM` | Google Tag Manager ID | 否 |
