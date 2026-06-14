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
| `docker-compose.yml` | Docker 生产环境编排 |
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

### 生产环境

```bash
docker compose up -d --build
```

- 服务名：`app`
- 容器名：`portfolio`
- 端口：3000（映射到容器内 3000）
- 使用多阶段构建和非 root 用户运行
- 内置 HTTP 健康检查

## CI/CD 自动部署

**文件**：`.github/workflows/deploy.yml`

推送 `release/master-xxxxxx` 分支（如 `release/master-260614`）时，GitHub Actions 进入受保护的 `production` Environment，并通过 SSH 连接服务器执行部署。

### 流程

1. GitHub Actions 触发
2. 通过 `production` Environment 的部署规则
3. 校验 SSH 主机指纹并连接目标服务器
4. 拉取并重置到本次触发事件对应的固定 commit SHA
5. 在现有服务运行期间构建新镜像
6. 替换容器并等待健康检查通过
7. 健康检查失败时输出容器状态和最近日志，并将部署标记为失败
8. 清理悬空镜像

同一时间只允许一个生产部署任务运行；后续任务会等待当前部署结束，避免并发修改同一服务器，同时避免部署过程被中途取消。

### 需要配置的 GitHub Secrets

| Secret | 说明 |
|--------|------|
| `DEPLOY_HOST` | 服务器 IP 或域名 |
| `DEPLOY_USER` | SSH 登录用户名 |
| `DEPLOY_SSH_KEY` | SSH 私钥（完整内容） |
| `DEPLOY_PORT` | SSH 端口（默认 22） |
| `DEPLOY_PATH` | 服务器上项目目录的绝对路径 |
| `DEPLOY_HOST_FINGERPRINT` | SSH 主机公钥的 SHA256 指纹 |

### GitHub Environment

仓库中必须创建名为 `production` 的 Environment，并建议配置：

- Required reviewers：生产部署审批人
- Deployment branches：仅允许 `release/master-*`
- Secrets：将上述部署凭据存放在 `production` Environment 中

服务器需安装支持 `docker compose up --wait` 的 Docker Compose，并确保部署用户只能访问部署所需目录和 Docker 权限。

## npm 脚本

| 命令 | 用途 |
|------|------|
| `pnpm dev` | 启动开发服务器 |
| `pnpm build` | 构建生产版本 |
| `pnpm start` | 启动生产服务器 |
| `pnpm lint` | ESLint 检查 |
