# 配置与环境

## 配置文件一览

| 文件 | 用途 |
|------|------|
| `package.json` | 项目依赖、脚本命令 |
| `jsconfig.json` | 路径别名 `@/*` → `./*` |
| `next.config.js` | Next.js 配置（SASS 路径、远程图片白名单） |
| `tailwind.config.js` | Tailwind CSS 自定义配置 |
| `postcss.config.js` | PostCSS 插件（Tailwind + Autoprefixer） |
| `eslint.config.mjs` | ESLint 规则 |
| `docker-compose.yml` | Docker 编排（dev + prod） |
| `.env.example` | 环境变量模板 |

## Next.js 配置

**文件**：`next.config.js`

- `devIndicators: false` — 隐藏开发模式指示器
- `sassOptions` — SASS 文件搜索路径
- `images.remotePatterns` — 允许的远程图片域名

## 环境变量

**模板文件**：`.env.example`

| 变量 | 用途 | 必需 |
|------|------|------|
| `NEXT_PUBLIC_GTM` | Google Tag Manager ID | 否 |

## Docker 部署

### 开发环境

```bash
docker-compose up dev
```

- 端口：3000
- 热重载：通过 volume 挂载

### 生产环境

```bash
docker-compose up prod
```

- 端口：3005（映射到容器内 3000）
- 多阶段构建

## CI/CD 自动部署

**文件**：`.github/workflows/deploy.yml`

推送 `release/master-xxxxxx` 分支（如 `release/master-260614`）时，GitHub Actions 自动通过 SSH 连接服务器执行部署。

### 流程

1. GitHub Actions 触发
2. SSH 连接到目标服务器
3. 拉取最新代码（`git fetch + reset`）
4. `docker compose down → up -d --build` 重建容器
5. 清理悬空镜像

### 需要配置的 GitHub Secrets

| Secret | 说明 |
|--------|------|
| `DEPLOY_HOST` | 服务器 IP 或域名 |
| `DEPLOY_USER` | SSH 登录用户名 |
| `DEPLOY_SSH_KEY` | SSH 私钥（完整内容） |
| `DEPLOY_PORT` | SSH 端口（默认 22） |
| `DEPLOY_PATH` | 服务器上项目目录的绝对路径 |

## npm 脚本

| 命令 | 用途 |
|------|------|
| `pnpm dev` | 启动开发服务器 |
| `pnpm build` | 构建生产版本 |
| `pnpm start` | 启动生产服务器 |
| `pnpm lint` | ESLint 检查 |
