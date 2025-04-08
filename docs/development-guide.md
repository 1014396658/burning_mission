# 开发环境配置文档

## 1. 本地开发环境设置

### 1.1 必要软件
- Node.js (v18.20.8)
- MongoDB (v6.0.21)
- Git 客户端（推荐：GitHub Desktop 或 SourceTree）
- VS Code（推荐的代码编辑器）

### 1.2 项目设置
1. 克隆项目
   - 使用 GitHub Desktop 克隆项目
   - 或使用 SourceTree 克隆项目
   - 项目地址：https://github.com/1014396658/burning_mission.git

2. 后端设置
   - 打开终端（在 VS Code 中）
   - 进入 backend 目录
   - 运行 `npm install`
   - 复制 `.env.example` 为 `.env`

### 1.3 本地环境变量配置
```env
PORT=3000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/dev_data_management
MONGODB_DB_NAME=dev_data_management
CORS_ORIGIN=http://localhost:5173
JWT_SECRET=dev_jwt_secret_key
JWT_EXPIRE=24h
API_PREFIX=/api
```

## 2. 开发流程

### 2.1 代码更新流程
1. 本地开发
   - 使用 VS Code 进行代码编辑
   - 使用 VS Code 的集成终端运行命令

2. 提交代码
   - 使用 GitHub Desktop 或 SourceTree 提交代码
   - 或使用 VS Code 的 Git 集成功能

3. 服务器部署
   - 代码推送到 GitHub 后
   - 在服务器上拉取更新并重启服务

### 2.2 分支管理
- main: 主分支，用于生产环境
- develop: 开发分支，用于开发环境
- feature/*: 功能分支，用于新功能开发

## 3. 开发规范

### 3.1 代码规范
- 使用 TypeScript
- 遵循 ESLint 规则
- 使用 Prettier 格式化代码

### 3.2 提交规范
- feat: 新功能
- fix: 修复bug
- docs: 文档更新
- style: 代码格式
- refactor: 重构
- test: 测试
- chore: 构建过程或辅助工具的变动

## 4. 测试
- 本地测试
- 单元测试
- 集成测试

## 5. 部署检查清单
1. 代码审查
2. 测试通过
3. 环境变量配置
4. 数据库迁移
5. 服务重启