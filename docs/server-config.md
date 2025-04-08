# 服务器配置文档

## 1. 服务器信息
- 服务器IP: 47.93.46.49
- 操作系统: Ubuntu
- Node.js版本: 18.20.8
- MongoDB版本: 6.0.21

## 2. 服务部署
### 2.1 后端服务
- 端口: 3000
- 进程管理: PM2
- 服务名称: data-management-api

### 2.2 数据库配置
#### 开发环境数据库
- 数据库名: dev_data_management
- 用户名: dev_user
- 密码: dev_z123456789
- 连接URI: mongodb://dev_user:dev_z123456789@localhost:27017/dev_data_management?authSource=admin

#### 生产环境数据库
- 数据库名: prod_data_management
- 用户名: prod_user
- 密码: prod_z123456789
- 连接URI: mongodb://prod_user:prod_z123456789@localhost:27017/prod_data_management?authSource=admin

## 3. 部署流程
### 3.1 代码更新
1. 使用 Git 客户端（如 SourceTree、GitHub Desktop）拉取最新代码
2. 在服务器上执行更新：
   - 进入项目目录: /var/www/data-management
   - 拉取代码: git pull
   - 安装依赖: cd backend && npm install
   - 重启服务: pm2 restart data-management-api

### 3.2 服务管理
- 查看服务状态: pm2 status
- 查看日志: pm2 logs data-management-api
- 重启服务: pm2 restart data-management-api

## 4. 环境变量
### 4.1 开发环境 (.env.development)
```env
PORT=3000
NODE_ENV=development
MONGODB_URI=mongodb://dev_user:dev_z123456789@localhost:27017/dev_data_management?authSource=admin
MONGODB_DB_NAME=dev_data_management
CORS_ORIGIN=http://47.93.46.49
JWT_SECRET=dev_jwt_secret_key
JWT_EXPIRE=24h
API_PREFIX=/api
```

### 4.2 生产环境 (.env.production)
```env
PORT=3000
NODE_ENV=production
MONGODB_URI=mongodb://prod_user:prod_z123456789@localhost:27017/prod_data_management?authSource=admin
MONGODB_DB_NAME=prod_data_management
CORS_ORIGIN=http://47.93.46.49
JWT_SECRET=prod_jwt_secret_key
JWT_EXPIRE=24h
API_PREFIX=/api
```

## 5. 注意事项
1.