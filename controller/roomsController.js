const RoomsModel = require("../model/roomsModel");
const UsersModel = require("../model/usersModel");

const roomsController = {
  async getAll(req, res, next) {
    const timeSort = req.query.timeSort == "asc" ? "createdAt" : "-createdAt";
    const q =
      req.query.q !== undefined ? { name: new RegExp(req.query.q) } : {};
    const rooms = await RoomsModel.find(q)
      .populate({
        path: "user", //這邊是去連結rooms的user欄位
        select: "name photo", //要顯示的use資料表裡面的欄位
      })
      .sort(timeSort);
    res.status(200).json({ data: rooms });
  },
  async getOne(req, res, next) {
    try {
      const roomId = req.params.id;
      const rooms = await RoomsModel.findById(roomId);
      res.status(200).json({ data: rooms });
    } catch (error) {
      console.log("🚀 ~ file: rooms.js:18 ~ error:", error);
      res.status(400).json({ msg: "查詢失敗" });
    }
  },
  async postData(req, res, next) {
    const data = req.body;
    const newRooms = await RoomsModel.create({
      name: data.name,
      price: data.price,
      rating: data.rating,
    });
    console.log("🚀 ~ file: rooms.js:9 ~ rooms:", newRooms);
    res.status(200).json({ data: newRooms });
  },
  async delAll(req, res, next) {
    const rooms = await RoomsModel.deleteMany({});
    res.status(200).json({ data: rooms });
  },
  async delOne(req, res, next) {
    const roomId = req.params.id;
    const rooms = await RoomsModel.findByIdAndDelete(roomId);
    res.status(200).json({ data: rooms });
  },
  async patchData(req, res, next) {
    const data = req.body;
    const roomId = req.params.id;
    const rooms = await RoomsModel.findByIdAndUpdate(roomId, {
      ...data,
    });
    res.status(200).json({ data: rooms });
  },
};

module.exports = roomsController;
