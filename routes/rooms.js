var express = require("express");
const RoomsModel = require("../model/roomsModel");

var router = express.Router();

//查詢所有資料
router.get("/", async function (req, res, next) {
  const rooms = await RoomsModel.find();
  res.status(200).json({data:rooms});
});
//查詢單筆資料
router.get("/:id", async function (req, res, next) {
  try {
    const roomId = req.params.id;
    const rooms = await RoomsModel.findById(roomId);
    res.status(200).json({ data: rooms });
  } catch (error) {
    console.log("🚀 ~ file: rooms.js:18 ~ error:", error)
    res.status(400).json({ msg: "查詢失敗" });
  }
});
//新增資料
router.post("/", async function (req, res, next) {
  const data = req.body;
  const newRooms = await RoomsModel.create({
    name: data.name,
    price: data.price,
    rating: data.rating,
  });
  console.log("🚀 ~ file: rooms.js:9 ~ rooms:", newRooms);
  res.status(200).json({ data: newRooms });
});
//刪除所有資料
router.delete("/", async function (req, res, next) {
  const rooms = await RoomsModel.deleteMany({});
  res.status(200).json({ data: rooms });
});
//刪除單筆資料
router.delete("/:id", async function (req, res, next) {
  const roomId = req.params.id;
  const rooms = await RoomsModel.findByIdAndDelete(roomId);
  res.status(200).json({ data: rooms });
});
//更新單筆
router.patch("/:id", async function (req, res, next) {
  const data = req.body;
  const roomId = req.params.id;
  const rooms = await RoomsModel.findByIdAndUpdate(roomId, {
    ...data,
  });
  res.status(200).json({ data: rooms });
});

module.exports = router;
