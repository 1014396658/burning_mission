# 数据管理系统

一个面向小范围用户的数据管理系统，支持数据录入、解析、状态修改等功能。

## 功能特点

- 用户认证与授权
- 数据录入与批量导入
- 数据解析工具
- 数据状态管理
- 跨设备数据同步
- 数据唯一性保证

## 技术栈

### 前端
- React.js
- TypeScript
- Ant Design
- Axios

### 后端
- Node.js
- Express.js
- TypeScript
- MongoDB
- JWT认证

### 部署
- 阿里云 ECS
- 阿里云 MongoDB
- Nginx
- Docker

## 项目结构

```
.
├── frontend/          # 前端项目目录
│   ├── src/          # 源代码
│   ├── public/       # 静态资源
│   └── package.json  # 前端依赖配置
│
├── backend/          # 后端项目目录
│   ├── src/         # 源代码
│   ├── config/      # 配置文件
│   └── package.json # 后端依赖配置
│
└── docker/          # Docker 配置文件
```

## 开发环境搭建

### 前端开发环境

1. 安装 Node.js (v16+)
2. 进入前端目录：
   ```bash
   cd frontend
   npm install
   npm start
   ```

### 后端开发环境

1. 安装 Node.js (v16+)
2. 安装 MongoDB
3. 进入后端目录：
   ```bash
   cd backend
   npm install
   npm run dev
   ```

## 部署指南

1. 准备阿里云 ECS 实例
2. 配置 MongoDB 服务
3. 使用 Docker 部署应用
4. 配置 Nginx 反向代理
5. 设置 HTTPS 证书

## 开发规范

- 使用 TypeScript 进行开发
- 遵循 ESLint 规范
- 使用 Prettier 进行代码格式化
- 遵循 Git Flow 工作流

## 安全说明

- 所有API请求使用HTTPS
- 实现JWT token认证
- 实现请求频率限制
- 数据加密存储
- 定期安全审计

## 维护说明

- 定期数据库备份
- 监控系统运行状态
- 日志收集与分析
- 性能优化
