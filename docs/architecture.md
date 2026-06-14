# 架构与数据流

## 页面渲染流程

```
用户访问 /
    │
    ▼
app/layout.js（根布局）
    ├── 加载 Inter 字体
    ├── 渲染 Navbar（导航栏）
    ├── 渲染 <main> 包裹的 children
    ├── 渲染 ScrollToTop（回到顶部按钮）
    └── 渲染 Footer（页脚）
    │
    ▼
app/page.js（首页，服务端组件）
    │
    └── 按顺序渲染 4 个区块组件：
        HeroSection → About → Skills → Projects
```

## 组件层级关系

```
app/layout.js
├── Navbar                          [客户端] 导航锚点跳转
├── ScrollToTop                     [客户端] 滚动检测 + 平滑回顶
├── Footer                          [服务端] 版权信息
│
└── app/page.js
    ├── HeroSection                 [服务端] 代码块风格个人介绍
    │
    ├── AboutSection                [服务端] 个人简介 + 头像
    │
    ├── Skills                      [服务端] 技能图标滚动展示
    │   └── react-fast-marquee      [客户端] 无限滚动
    │
    └── Projects                    [服务端] 项目展示（前 4 个）
        └── ProjectCard × N         [服务端] 代码块风格卡片
```

## 数据来源

### 静态数据（`utils/data/` 目录）

| 文件 | 内容 | 使用组件 |
|------|------|----------|
| `personal-data.js` | 姓名、邮箱、社交链接、简历 URL | Hero、About |
| `skills.js` | 技能名称数组（20 个） | Skills |
| `projects-data.js` | 项目信息数组（4 个） | Projects |

## 样式体系

```
Tailwind CSS（主）
    ├── tailwind.config.js    自定义断点、渐变、容器内边距
    └── globals.scss          @import "tailwindcss" + 全局样式
```

## 客户端/服务端边界

当前项目中标记为 `"use client"` 的组件：
- `app/components/helper/scroll-to-top.jsx` — 滚动事件监听
- `app/components/navbar.jsx` — 移动端菜单状态

其余组件均为服务端组件。
