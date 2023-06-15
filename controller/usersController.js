const User = require("../models/usersModel");
const { generateSendJWT } = require("../service/auth");

const usersController = {
  async signUp(req, res, next) {
    console.log("測試", req);
    let { email, password, confirmPassword, name } = req.body;
    //防呆


    // 加密密碼
    password = await bcrypt.hash(req.body.password, 12);
    const newUser = await User.create({
      email,
      password,
      name,
    });
    generateSendJWT(newUser, 201, res);
  },
};

module.exports = usersController;
