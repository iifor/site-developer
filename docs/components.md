# 组件清单

## 导航与布局

### Navbar
- **文件**：`app/components/navbar.jsx`
- **职责**：顶部固定导航栏，包含 Logo、导航链接（关于/技能/项目）
- **数据**：硬编码导航项

### Footer
- **文件**：`app/components/footer.jsx`
- **职责**：页脚，显示版权信息

### ScrollToTop
- **文件**：`app/components/helper/scroll-to-top.jsx`
- **类型**：客户端组件
- **职责**：页面滚动超过 50px 后显示浮动回到顶部按钮

---

## 首页区块组件

### HeroSection
- **文件**：`app/components/homepage/hero-section/index.jsx`
- **职责**：首屏展示，包含姓名、职位、GitHub 链接，右侧以代码块风格展示个人简介
- **依赖**：`@/utils/data/personal-data`、`react-icons`

### AboutSection
- **文件**：`app/components/homepage/about/index.jsx`
- **职责**：个人简介区块，展示头像和描述文字
- **依赖**：`@/utils/data/personal-data`、`next/image`

### Skills
- **文件**：`app/components/homepage/skills/index.jsx`
- **职责**：技能展示区块，使用 react-fast-marquee 无限滚动展示技能图标
- **依赖**：`@/utils/data/skills`、`@/utils/skill-image`、`react-fast-marquee`

### Projects
- **文件**：`app/components/homepage/projects/index.jsx`
- **职责**：项目展示区块，使用 Sticky 滚动效果展示前 4 个项目
- **依赖**：`@/utils/data/projects-data`、`ProjectCard`

### ProjectCard
- **文件**：`app/components/homepage/projects/project-card.jsx`
- **职责**：单个项目卡片，以代码块风格展示项目信息
- **接收 props**：`project`（项目数据对象）
