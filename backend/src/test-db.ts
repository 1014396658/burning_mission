import connectDB from "./config/db";

// 测试数据库连接
const testConnection = async () => {
  try {
    await connectDB();
    console.log("数据库连接测试成功！");
    process.exit(0);
  } catch (error) {
    console.error("数据库连接测试失败:", error);
    process.exit(1);
  }
};

testConnection();
