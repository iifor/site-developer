# 任务索引

> **用法**：找到你的任务 → 看对应的文件 → 定向阅读源码，不要全局扫。

---

## 🎨 修改页面内容

### 修改个人信息（姓名、邮箱、社交链接、简历链接）
- **先看**：`utils/data/personal-data.js`
- **影响范围**：Hero、About 组件

### 修改技能列表
- **先看**：`utils/data/skills.js`
- **关联**：`utils/skill-image.js`（技能名 → SVG 映射）
- **图标文件**：`app/assets/svg/skills/` 目录

### 修改项目展示
- **先看**：`utils/data/projects-data.js`
- **展示逻辑**：`app/components/homepage/projects/index.jsx`
- **卡片样式**：`app/components/homepage/projects/project-card.jsx`

### 修改首页区块顺序
- **先看**：`app/page.js`

---

## 🧩 修改组件样式或行为

### 修改导航栏
- **先看**：`app/components/navbar.jsx`

### 修改页脚
- **先看**：`app/components/footer.jsx`

### 修改技能滚动效果
- **先看**：`app/components/homepage/skills/index.jsx`
- **依赖库**：`react-fast-marquee`

### 修改全局样式
- **先看**：`app/css/globals.scss`
- **Tailwind 配置**：`tailwind.config.js`

---

## 🚀 部署与配置

### 本地开发
```bash
cp .env.example .env   # 填写环境变量
pnpm install
pnpm dev               # http://localhost:3000
```

### Docker 部署
- **本机容器**：`docker compose up -d --build`（端口 3000）
- **腾讯云生产**：`docker compose -f docker-compose.prod.yml up -d --build --wait`（Nginx 提供 80/443）
- **自动部署**：`.github/workflows/deploy.yml`

### 添加新的远程图片域名
- **先看**：`next.config.js` 的 `images.remotePatterns`

### 添加新的 SVG 技能图标
1. 将 SVG 文件放入 `app/assets/svg/skills/`
2. 在 `utils/skill-image.js` 中添加映射

---

## 🐛 常见调试场景

| 问题 | 检查位置 |
|------|----------|
| 图片不显示 | `next.config.js` 的 `remotePatterns` |
| 技能图标缺失 | `utils/skill-image.js` 是否有映射、SVG 文件是否存在 |
| 样式不生效 | Tailwind 类名、`tailwind.config.js` 配置 |
