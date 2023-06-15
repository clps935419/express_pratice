const usersController = {
  async signUp(req, res, next) {
    console.log("測試", req);
    return {
      a:11
    }
  },
};

module.exports = usersController;