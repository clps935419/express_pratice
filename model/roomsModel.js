const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema(
  {
    name: String,
    price: {
      type: Number,
      required: true,
    },
    rating: Number,
  },
  {
    versionKey: false,
    timestamps: true,
    // collection:"room"//自訂collection 名稱，此方法不會管大小寫以及字尾加入S
  }
);

const Rooms = mongoose.model("rooms", roomSchema);
module.exports = Rooms;
