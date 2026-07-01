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
| `docker-compose.yml` | 本机直连端口的单服务 Docker 编排 |
| `docker-compose.prod.yml` | 腾讯云生产编排（应用 + Nginx + HTTPS） |
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

### 本机容器

```bash
docker compose up -d --build
```

- 宿主机 80 端口映射到容器内 `app:3000`
- 本机访问地址：`http://localhost`

### 生产环境

```bash
docker compose -f docker-compose.prod.yml up -d --build --wait
```

- 服务：`app`、`nginx`
- 容器名：`portfolio`、`nginx-proxy`
- `app` 仅在 Docker 网络内暴露 3000，不直接映射公网端口
- Nginx 对外提供 80/443，并反向代理到 `app:3000`
- 使用多阶段构建和非 root 用户运行
- 应用和 Nginx 均配置健康检查

生产服务器必须预先提供：

| 路径 | 用途 |
|------|------|
| `/home/nginx/default.conf` | Nginx 站点与反向代理配置 |
| `/home/nginx/ssl/dev.qingfu.site_nginx` | HTTPS 证书目录 |
| `<DEPLOY_PATH>/.env.local` | 应用运行环境变量，不提交到 Git |

## CI/CD 自动部署

**文件**：`.github/workflows/deploy.yml`

推送 `release/master-xxxxxx` 分支（如 `release/master-260614`）时，GitHub Actions 进入受保护的 `production` Environment，并通过 SSH 连接服务器执行部署。

### 流程

1. GitHub Actions 触发
2. 通过 `production` Environment 的部署规则
3. 从 GitHub Runner 扫描服务器公开主机密钥，并校验 `DEPLOY_HOST_FINGERPRINT`
4. SSH Action 再次校验主机指纹并连接目标服务器
5. 拉取并重置到本次触发事件对应的固定 commit SHA
6. 校验服务器 Nginx 配置和证书挂载路径
7. 使用 `docker-compose.prod.yml` 在现有服务运行期间构建新镜像
8. 替换应用与 Nginx 容器并等待健康检查通过
9. 健康检查失败时输出两个容器的状态和最近日志，并将部署标记为失败
10. 清理悬空镜像

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

`DEPLOY_HOST_FINGERPRINT` 必须创建为 Environment secret。不要再创建同名 Environment variable；workflow 不读取 `vars.DEPLOY_HOST_FINGERPRINT`。当前 `drone-ssh` 客户端会优先协商服务器的 ECDSA 主机密钥，因此必须填写预检输出中 `(ECDSA)` 行的 `SHA256:...`，不能填写 ED25519 或 RSA 行。Secret 值只能包含单行完整指纹，不能包含位数、算法名、主机名、引号、空格或换行。

服务器需安装支持 `docker compose up --wait` 的 Docker Compose，并确保部署用户能访问部署目录、`/home/nginx` 配置和 Docker。生产 Compose 已纳入 Git 管理，服务器不应再维护未跟踪的同名文件。

## npm 脚本

| 命令 | 用途 |
|------|------|
| `pnpm dev` | 启动开发服务器 |
| `pnpm build` | 构建生产版本 |
| `pnpm start` | 启动生产服务器 |
| `pnpm lint` | ESLint 检查 |
