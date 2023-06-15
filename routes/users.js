const express = require('express');
const router = express.Router();
const UsersController = require("../controller/usersController")
/*  */
router.post("/signUp", UsersController.signUp);

module.exports = router;
