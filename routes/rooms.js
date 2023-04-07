var express = require("express");
const RoomsModel = require("../model/roomsModel");
const RoomsController = require("../controller/roomsController");
var router = express.Router();

//查詢所有資料
router.get("/", RoomsController.getAll);
//查詢單筆資料
router.get("/:id", RoomsController.getOne);
//新增資料
router.post("/", RoomsController.postData);
//刪除所有資料
router.delete("/", RoomsController.delAll);
//刪除單筆資料
router.delete("/:id", RoomsController.delOne);
//更新單筆
router.patch("/:id", RoomsController.patchData);

module.exports = router;
