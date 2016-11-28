module.exports = {
  getUsers: function(next) {
    user.find().exec(function(err, users) {
      if(err) throw err;
      next(users);
    })
  }

}
