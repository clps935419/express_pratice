const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const DB = process.env.DB.replace("<password>", process.env.DB_PASSWORD);
// 連接資料庫
mongoose
  .connect(DB)
  .then(() => {
    console.log("資料庫連線成功");
  })
  .catch((error) => {
    console.log("資料庫連線失敗");
    console.log(error);
  });
